package giis

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Math

fun initLab2() {
    console.log("Init lab 2")

    val buttonCircle = document.getElementById("circle") as HTMLButtonElement
    buttonCircle.onclick = {
        drawCircle("canvas")
    }
    console.log("Init buttonCircle")

    val buttonEllipse = document.getElementById("ellipse") as HTMLButtonElement
    buttonEllipse.onclick = {
        //drawLine("canvas", ::drawBresenham)
    }
    console.log("Init buttonEllipse")

    val buttonHyperbola = document.getElementById("hyperbola") as HTMLButtonElement
    buttonHyperbola.onclick = {
        //drawLine("canvas", ::drawWu)
    }
    console.log("Init buttonHyperbola")

    val buttonParabola = document.getElementById("parabola") as HTMLButtonElement
    buttonParabola.onclick = {
        //drawLine("canvas", ::drawWu)
    }
    console.log("Init buttonParabola")

}

fun drawCircle(elementId: String) {
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    val points = arrayListOf<Coordinate>()

    canvas.onclick = {
        val pos = getMousePosOnCanvas(canvas, it)
        points.add(pos)
        if (points.size == 2) {
            val radius = calcRadius(points[0], points[1])
            drawCircleAlgorithm(points[0], radius, canvas)
            points.clear()
            canvas.onclick = null
        }
    }
}

fun calcRadius(p1: Coordinate, p2: Coordinate): Int {
    val (x1, y1) = p1
    val (x2, y2) = p2
    val max = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1))
    val min = Math.min(Math.abs(x2 - x1), Math.abs(y2 - y1))
    return Math.sqrt(Math.pow(max,2.0) + Math.pow(min,2.0) ).toInt()
}

fun drawCircleAlgorithm(center: Coordinate, radius: Int, canvas: HTMLCanvasElement) {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D

    var (x, y) = center
    //x -= radius
    console.log("Draw Circle: center - ($x;$y), radius - $radius")
    var limit = y - radius
    var delta = 2 - 2 * radius
    context.drawPixel(x, y)
    console.log("Step 0: x:$x; y:$y; delta(i+1):$delta Plot($x,$y)")
    var i = 1
    while (y > limit) {
        window.alert("hi")
        var d = 0
        var dz = 0
        val deltaOld = delta
        var pixel : Char
        dz = 2 * delta - 2 * x - 1
        if (delta > 0 && dz > 0) {
            y -= 1
            delta += 1 - 2 * y
            pixel = 'V'
            context.drawPixel(x, y)
            console.log("Step $i: delta(i): $deltaOld; d:$d; d*:$dz; pixel:$pixel; x:$x; y:$y; delta(i+1):$delta Plot($x,$y)")
            continue
        }
        d = 2 * delta + 2 * y - 1
        if (delta < 0 && d <= 0) {
            x += 1
            delta += 1 + 2 * x
            pixel = 'H'
            context.drawPixel(x, y)
            console.log("Step $i: delta(i): $deltaOld; d:$d; d*:$dz; pixel:$pixel; x:$x; y:$y; delta(i+1):$delta Plot($x,$y)")
            continue
        }
        x += 1
        y -= 1
        delta += 2 * x - 2 * y + 2
        pixel = 'D'
        context.drawPixel(x, y)
        console.log("Step $i: delta(i): $deltaOld; d:$d; d*:$dz; pixel:$pixel; x:$x; y:$y; delta(i+1):$delta Plot($x,$y)")
    }
}

