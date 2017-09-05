package giis

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.js.Math

fun initLab1() {
    console.log("Init lab 1")

    val buttonDDA = document.getElementById("dda") as HTMLButtonElement
    buttonDDA.onclick = {
        drawLine("canvas", ::drawDDA)
    }
    console.log("Init buttonDDA")

    val buttonBresenham = document.getElementById("bresenham") as HTMLButtonElement
    buttonBresenham.onclick = {
        drawLine("canvas", ::drawBresenham)
    }
    console.log("Init buttonBresenham")

    val buttonWu = document.getElementById("wu") as HTMLButtonElement
    buttonWu.onclick = {
        drawLine("canvas", ::drawWu)
    }
    console.log("Init buttonWu")

}

fun drawLine(elementId: String, drawAlgorithm: (p1: Coordinate, p2: Coordinate, canvas: HTMLCanvasElement) -> Unit) {
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    val points = arrayListOf<Coordinate>()

    canvas.onclick = {
        val pos = getMousePosOnCanvas(canvas, it)
        points.add(pos)
        if (points.size == 2) {
            drawAlgorithm(points[0], points[1], canvas)
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
    console.log("\nDraw Bresenham: ($x1;$y1) and ($x2;$y2)")

    var x = x1
    var y = y1
    val dx = Math.abs(x2 - x1)
    val dy = Math.abs(y2 - y1)
    var e = 2 * dy - dx
    console.log("dx: $dx; dy: $dy; e: $e")

    val changeX = if (x1 < x2) 1 else -1
    val changeY = if (y1 < y2) 1 else -1

    context.drawPixel(x.toInt(), y.toInt())
    console.log("Step 0: x:$x; y:$y, e':$e Plot(${x.toInt()},${y.toInt()})")
    var i = 1
    if (dx >= dy) {
        while (i <= dx) {
            val eOld = e
            if (e >= 0) {
                y += changeY
                e -= 2 * dx
            }
            x += changeX
            e += 2 * dy
            context.drawPixel(x.toInt(), y.toInt())
            console.log("Step $i: e:$eOld, x:$x; y:$y, e':$e Plot(${x.toInt()},${y.toInt()})")
            i++
        }
    } else {
        while (i <= dy) {
            val eOld = e
            if (e >= 0) {
                x += changeX
                e -= 2 * dy
            }
            y += changeY
            e += 2 * dx
            context.drawPixel(x.toInt(), y.toInt())
            console.log("Step $i: e:$eOld, x:$x; y:$y, e':$e Plot(${x.toInt()},${y.toInt()})")
            i++
        }
    }
}

fun drawWu(source: Coordinate, target: Coordinate, canvas: HTMLCanvasElement) {
    val (x1, y1) = source
    val (x2, y2) = target
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    console.log("\nDraw Wu: ($x1;$y1) and ($x2;$y2)")

    var x = x1
    var y = y1
    val dx = Math.abs(x2 - x1)
    val dy = Math.abs(y2 - y1)
    var e = dy / dx - 0.5
    console.log("dx: $dx; dy: $dy; e: $e")

    val changeX = if (x1 < x2) 1 else -1
    val changeY = if (y1 < y2) 1 else -1

    context.drawPixel(x.toInt(), y.toInt())
    console.log("Step 0: e:$e, x:$x; y:$y, Plot(${x.toInt()},${y.toInt()})")
    var i = 1
    if (dx >= dy) {
        while (i <= dx) {
            if (e >= 0) {
                y += changeY
                e -= 1
            }
            x += changeX
            e += dy / dx
            context.drawPixel(x.toInt(), y.toInt())
            val a = Math.abs(e)
            if (e < 0) {
                context.drawAlfaPixel(x.toInt(), y.toInt() - 1, a)
            } else {
                context.drawAlfaPixel(x.toInt(), y.toInt() + 1, a)
            }
            console.log("Step $i: e:$e, x:$x; y:$y, a:$a Plot(${x.toInt()},${y.toInt()})")
            i++
        }
    } else {
        while (i <= dy) {
            if (e >= 0) {
                x += changeX
                e -= 1
            }
            y += changeY
            e += dx / dy
            context.drawPixel(x.toInt(), y.toInt())
            val a = Math.abs(e)
            if (e < 0) {
                context.drawAlfaPixel(x.toInt()-1, y.toInt(), a)
            } else {
                context.drawAlfaPixel(x.toInt()+1, y.toInt(), a)
            }
            console.log("Step $i: e:$e, x:$x; y:$y, a:$a Plot(${x.toInt()},${y.toInt()})")
            i++
        }
    }
}