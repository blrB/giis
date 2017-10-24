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

fun clippingLines(canvas: HTMLCanvasElement) {
    Scene.objects.filter {
        it is LineForDraw
    }.map {
        it as LineForDraw
    }.forEach {
        clippingLine(it, canvas)
    }
}

fun clippingLine(line: LineForDraw, canvas: HTMLCanvasElement) {
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

                    if (left.y in (Window.bottom..Window.top) && left.y in (yMin..yMax))
                        points.push(left)
                    if (right.y in (Window.bottom..Window.top) && right.y in (yMin..yMax))
                        points.push(right)
                    if (bottom.x in (Window.left..Window.right) && bottom.x in (xMin..xMax))
                        points.push(bottom)
                    if (top.x in (Window.left..Window.right) && top.x in (xMin..xMax))
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

            drawBresenham(points[0], points[1], canvas)
        }
    }
}
