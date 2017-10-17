package giis

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Math

fun initLab1() {
    console.log("Init lab 1")

    val buttonDDA = document.getElementById("dda") as HTMLButtonElement
    buttonDDA.onclick = {
        drawLine("canvas", "dda")
    }

    val buttonBresenham = document.getElementById("bresenham") as HTMLButtonElement
    buttonBresenham.onclick = {
        drawLine("canvas", "bresenham")
    }

    val buttonWu = document.getElementById("wu") as HTMLButtonElement
    buttonWu.onclick = {
        drawLine("canvas", "wu")
    }

}

fun drawLine(elementId: String, algorithm: String) {
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    val points = arrayListOf<Coordinate>()

    canvas.onclick = {
        val pos = getMousePosOnCanvas(canvas, it)
        points.add(pos)
        if (points.size == 2) {
            when (algorithm) {
                "dda" -> {
                    drawDDA(points[0], points[1], canvas)
                    Scene.objects.add(DDA(points[0], points[1]))
                }
                "bresenham" -> {
                    drawBresenham(points[0], points[1], canvas)
                    Scene.objects.add(Bresenham(points[0], points[1]))
                }
                "wu" -> {
                    drawWu(points[0], points[1], canvas)
                    Scene.objects.add(Wu(points[0], points[1]))
                }
                else -> {
                    console.log("Not found algorithm $algorithm")
                }
            }
            points.clear()
            canvas.onclick = null
        }
    }
}

fun drawDDA(source: Coordinate, target: Coordinate, canvas: HTMLCanvasElement) {
    val (x1, y1) = source
    val (x2, y2) = target
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    console.log("\nDraw DDA: ($x1;$y1) and ($x2;$y2)")

    val length = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1))
    val dx = (x2 - x1) / length
    val dy = (y2 - y1) / length
    console.log("Length: $length; dx: $dx; dy: $dy")
    var x = x1 + 0.5 * Math.sign(dx)
    var y = y1 + 0.5 * Math.sign(dy)

    context.drawPixel(x.toInt(), y.toInt())
    console.log("Step 0: x:$x; y:$y, Plot(${x.toInt()},${y.toInt()})")
    var i = 1
    while (i <= length) {
        x += dx
        y += dy
        context.drawPixel(x.toInt(), y.toInt())
        console.log("Step $i: x:$x; y:$y, Plot(${x.toInt()},${y.toInt()})")
        i++
    }
}

fun drawBresenham(source: Coordinate, target: Coordinate, canvas: HTMLCanvasElement) {
    val (x1, y1) = source
    val (x2, y2) = target
    val context = canvas.getContext("2d") as CanvasRenderingContext2D

    var x = x1
    var y = y1
    val dx = Math.abs(x2 - x1)
    val dy = Math.abs(y2 - y1)
    var e: Double

    val changeX = if (x1 < x2) 1 else -1
    val changeY = if (y1 < y2) 1 else -1

    context.drawPixel(x, y)
    var i = 1
    if (dx >= dy) {
        e = 2 * dy - dx
        while (i <= dx) {
            if (e >= 0) {
                y += changeY
                e -= 2 * dx
            }
            x += changeX
            e += 2 * dy

            context.drawPixel(x, y)
            i++
        }
    } else {
        e = 2 * dx - dy
        while (i <= dy) {
            if (e >= 0) {
                x += changeX
                e -= 2 * dy
            }
            y += changeY
            e += 2 * dx
            context.drawPixel(x, y)
            i++
        }
    }
}

fun drawWu(source: Coordinate, target: Coordinate, canvas: HTMLCanvasElement) {

    fun drawWu(context: CanvasRenderingContext2D, i: Int, x: Int, y: Int, e: Double, changeX: Int, changeY: Int){
        context.drawPixel(x, y)
        val a = Math.abs(e)
        if (e < 0) {
            context.drawAlfaPixel(a, x - changeX, y - changeY)
        } else {
            context.drawAlfaPixel(a, x + changeX, y + changeY)
        }
        console.log("Step $i: e:$e, x:$x; y:$y, a:$a Plot($x,$y)")
    }

    val (x1, y1) = source
    val (x2, y2) = target

    if (x1 == x2 || y1 == y2) {
        drawBresenham(source, target, canvas)
        return
    }

    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    console.log("\nDraw Wu: ($x1;$y1) and ($x2;$y2)")

    var x = x1
    var y = y1
    val dx = Math.abs(x2 - x1)
    val dy = Math.abs(y2 - y1)
    var e: Double
    console.log("dx: $dx; dy: $dy")

    val changeX = if (x1 < x2) 1 else -1
    val changeY = if (y1 < y2) 1 else -1

    context.drawPixel(x, y)
    var i = 1
    if (dx >= dy) {
        e = dy / dx - 0.5
        console.log("Step 0: x:$x; y:$y, e':$e Plot($x,$y)")
        while (i <= dx) {
            if (e >= 0) {
                y += changeY
                e -= 1
            }
            x += changeX
            e += dy / dx
            drawWu(context, i, x, y, e, 0, changeY)
            i++
        }
    } else {
        e = dx / dy - 0.5
        console.log("Step 0: x:$x; y:$y, e':$e Plot($x,$y)")
        while (i <= dy) {
            if (e >= 0) {
                x += changeX
                e -= 1
            }
            y += changeY
            e += dx / dy
            drawWu(context, i, x, y, e, 0, changeY)
            i++
        }
    }
}