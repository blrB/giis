package giis

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.js.Math

object Window {
    val left = 50
    val right = 100
    val top = 100
    val bottom = 50
}

class Mask(point: Coordinate? = null)  {

    var top: Boolean
    var bottom: Boolean
    var right: Boolean
    var left: Boolean

    init {
        if (point != null){
            top = (point.y > Window.top)
            bottom = (point.y < Window.bottom)
            right = (point.x > Window.right)
            left = (point.x < Window.left)
        } else {
            top = false
            bottom = false
            right = false
            left = false
        }
    }

    fun binaryAnd(second: Mask): Mask {
        val mask = Mask()
        mask.top = this.top and second.top
        mask.bottom = this.bottom and second.bottom
        mask.right = this.right and second.right
        mask.left = this.left and second.left
        return mask
    }

    fun nulls() = !(top || bottom || right || left)
}

fun initLab7() {

    console.log("Init lab 7")

    val buttonClipping = document.getElementById("clipping") as HTMLButtonElement
    buttonClipping.onclick = {
        drawWindow("canvas")
    }

    val buttonCyrusBeck = document.getElementById("cyrus—beck") as HTMLButtonElement
    buttonCyrusBeck.onclick = {
        drawConvexHullWindow("canvas")
    }
}

fun drawWindow(elementId: String) {
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    val context = canvas.getContext("2d") as CanvasRenderingContext2D

    val x = (Window.right - Window.left).toDouble()
    val y = (Window.top - Window.bottom).toDouble()

    context.clearRect(Window.left.toDouble(), Window.bottom.toDouble(), x, y)

    context.drawColorPixel(Window.left, Window.bottom, 0, 255, 0, x, 1.0)
    context.drawColorPixel(Window.left, Window.bottom, 0, 255, 0, 1.0, y)
    context.drawColorPixel(Window.left, Window.top, 0, 255, 0, x, 1.0)
    context.drawColorPixel(Window.right, Window.bottom , 0, 255, 0, 1.0, y + 1)

    context.fillStyle = "rgba(0, 255, 0, 1)"
    clippingLines(canvas)
    context.fillStyle = "rgba(0, 0, 0, 1)"
}

fun drawConvexHullWindow(elementId: String){
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val points = arrayListOf<Coordinate>()

    canvas.onclick = {
        val pos = getMousePosOnCanvas(canvas, it)
        context.drawPixel(pos.x, pos.y)
        points.add(pos)
    }

    val buttonStop = document.getElementById("сonvex-hull-window-stop") as HTMLButtonElement
    buttonStop.disabled = false
    buttonStop.onclick = {
        console.log("click")
        if (points.size > 2) {
            val convexHullPoints = drawGraham(points)
            val convexHull = Polygon(ArrayList(convexHullPoints))
            context.render()
            context.fillStyle = "rgba(0, 255, 0, 1)"
            convexHull.draw(canvas)
            clippingLinesInPolygon(canvas, convexHull)
            context.fillStyle = "rgba(0, 0, 0, 1)"
        }
        canvas.onclick = null
        buttonStop.disabled = true
        points.clear()
    }
}

fun clippingLines(canvas: HTMLCanvasElement) {
    Scene.objects.filter {
        it is LineForDraw
    }.map {
        it as LineForDraw
    }.forEach {
        clippingLineCohenSutherland(it, canvas)
    }
}

fun clippingLineCohenSutherland(line: LineForDraw, canvas: HTMLCanvasElement) {
    val source = line.source
    val target = line.target

    val sourceMask = Mask(source)
    val targetMask = Mask(target)

    val mask = sourceMask.binaryAnd(targetMask)

    if (mask.nulls()){
        if (sourceMask.nulls() && targetMask.nulls()){
            line.draw(canvas)
        } else {
            val m = (target.y - source.y).toDouble() / (target.x - source.x)

            val left = Coordinate(Window.left, (m * (Window.left - source.x) + source.y).toInt())
            val right = Coordinate(Window.right, (m * (Window.right - source.x) + source.y).toInt())
            val bottom = Coordinate((source.x + (Window.bottom - source.y) / m).toInt(), Window.bottom)
            val top = Coordinate((source.x + (Window.top - source.y) / m).toInt(), Window.top)

            val points = arrayListOf<Coordinate>()

            when {
                sourceMask.nulls() || targetMask.nulls() -> {
                    val xMin = Math.min(source.x, target.x)
                    val xMax = Math.max(source.x, target.x)

                    val yMin = Math.min(source.y, target.y)
                    val yMax = Math.max(source.y, target.y)

                    if (left.y in (Window.bottom..Window.top) && left.y in (yMin..yMax) &&
                            Window.left in (xMin..xMax))
                        points.push(left)
                    if (right.y in (Window.bottom..Window.top) && right.y in (yMin..yMax) &&
                            Window.right in (xMin..xMax))
                        points.push(right)
                    if (bottom.x in (Window.left..Window.right) && bottom.x in (xMin..xMax) &&
                            Window.bottom in (yMin..yMax))
                        points.push(bottom)
                    if (top.x in (Window.left..Window.right) && top.x in (xMin..xMax) &&
                            Window.top in (yMin..yMax))
                        points.push(top)

                    if (sourceMask.nulls())
                        points.push(source)
                    else
                        points.push(target)
                }
                else -> {
                    if (left.y in (Window.bottom..Window.top))
                        points.push(left)
                    if (right.y in (Window.bottom..Window.top))
                        points.push(right)
                    if (bottom.x in (Window.left..Window.right))
                        points.push(bottom)
                    if (top.x in (Window.left..Window.right))
                        points.push(top)
                }
            }

            if (points.size >= 2)
                drawBresenham(points[0], points[1], canvas)
        }
    }
}

fun clippingLinesInPolygon(canvas: HTMLCanvasElement, polygon: Polygon) {
    Scene.objects.filter {
        it is LineForDraw
    }.map {
        it as LineForDraw
    }.forEach {
        clippingLineCyrusBeck(it, canvas, polygon)
    }
}

fun clippingLineCyrusBeck(line: LineForDraw, canvas: HTMLCanvasElement, polygon: Polygon) {
    val source = line.source
    val target = line.target

    val d = Pair(target.x - source.x, target.y - source.y)

    val vertex = polygon.points

    val internalNormals = findInternalNormals(polygon)

    var tn = 0.0
    var tv = 1.0

    var visible = true

    val wnList = arrayListOf<Int>()
    val wnDnList = arrayListOf<Int>()

    vertex.forEachIndexed { index, _ ->
        val f = vertex[index]
        val normal = internalNormals[index]

        val w = Pair(source.x - f.x, source.y - f.y)

        val wn = w.first * normal.first + w.second * normal.second
        val dn = d.first * normal.first + d.second * normal.second

        if (dn== 0){
            if (wn < 0){
                visible = false
                return
            }
        } else {
            val t = -(wn.toDouble() / dn)
            if (t in (0.0..1.0)){
                if (dn < 0) {
                    if (t < tv)
                    {
                        tv = t
                    }
                    if (t < tn)
                    {
                        visible = false
                        return
                    }
                }
                if (dn > 0) {
                    if (t > tn)
                    {
                        tn = t
                    }
                    if (t > tv)
                    {
                        visible = false
                        return
                    }
                }
            } else {
                wnList.add(wn)
                wnDnList.add(wn + dn)
            }
        }
    }

    if (vertex.size == wnList.size){
        val gr0wn = wnList.filter { it > 0 }
        val gr0wnDn = wnDnList.filter { it > 0 }
        if (gr0wn.size == gr0wnDn.size && gr0wn.size == vertex.size){
            drawBresenham(source, target, canvas)
        }
    } else if (visible && tn < tv) {
        val sm0wn = wnList.filter { it < 0 }
        val sm0wnDn = wnDnList.filter { it < 0 }
        if (!(sm0wn.isNotEmpty() && sm0wnDn.isNotEmpty())) {
            val s = Coordinate((source.x + (target.x - source.x) * tn).toInt(), (source.y + (target.y - source.y) * tn).toInt())
            val t = Coordinate((source.x + (target.x - source.x) * tv).toInt(), (source.y + (target.y - source.y) * tv).toInt())
            drawBresenham(s, t, canvas)
        }
    }
}


