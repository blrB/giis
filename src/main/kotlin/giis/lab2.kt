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
        drawEllipse("canvas")
    }
    console.log("Init buttonEllipse")

    val buttonHyperbola = document.getElementById("hyperbola") as HTMLButtonElement
    buttonHyperbola.onclick = {
        drawHyperbola("canvas")
    }
    console.log("Init buttonHyperbola")

    val buttonParabola = document.getElementById("parabola") as HTMLButtonElement
    buttonParabola.onclick = {
        drawParabola("canvas")
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

fun drawEllipse(elementId: String) {
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    val points = arrayListOf<Coordinate>()

    canvas.onclick = {
        val pos = getMousePosOnCanvas(canvas, it)
        points.add(pos)
        if (points.size == 3) {
            val a = Math.abs(points[0].x - points[1].x).toInt()
            val b = Math.abs(points[0].y - points[2].y).toInt()
            drawEllipseAlgorithm(points[0], a, b, canvas)
            points.clear()
            canvas.onclick = null
        }
    }
}

fun drawHyperbola(elementId: String) {
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    val points = arrayListOf<Coordinate>()

    canvas.onclick = {
        val pos = getMousePosOnCanvas(canvas, it)
        points.add(pos)
        if (points.size == 3) {
            val a = Math.abs(points[0].x - points[1].x).toInt()
            val b = Math.abs(points[0].y - points[2].y).toInt()
            drawHyperbolaAlgorithm(points[0], a, b, canvas)
            points.clear()
            canvas.onclick = null
        }
    }
}

fun drawParabola(elementId: String) {
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    val points = arrayListOf<Coordinate>()

    canvas.onclick = {
        val pos = getMousePosOnCanvas(canvas, it)
        points.add(pos)
        if (points.size == 2) {
            val a = Math.abs(points[0].y - points[1].y).toInt()
            drawParabolaAlgorithm(points[0], a, canvas)
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

fun waitDrawCircle(context: CanvasRenderingContext2D, center: Coordinate, i: Int, deltaOld: Int, d: Int, dz: Int, pixel: Char, x: Int, y: Int, delta: Int){
    context.drawPixel(x + center.x, y + center.y)
    context.drawPixel(-x + center.x, -y + center.y)
    context.drawPixel(x + center.x, -y + center.y)
    context.drawPixel(-x + center.x, y + center.y)
    console.log("Step $i: delta(i): $deltaOld; d:$d; d*:$dz; pixel:$pixel; x:${x + center.x}; y:${y + center.y}; delta(i+1):$delta Plot(${x + center.x},${y + center.y})")
}

fun waitDrawEllipse(context: CanvasRenderingContext2D, center: Coordinate, i: Int, deltaOld: Int, d: Int, dz: Int, pixel: Char, x: Int, y: Int, delta: Int){
    waitDrawCircle(context, center, i, deltaOld, d, dz, pixel, x, y, delta)
}

fun waitDrawHyperbola(context: CanvasRenderingContext2D, center: Coordinate, i: Int, deltaOld: Int, d: Int, dz: Int, pixel: Char, x: Int, y: Int, delta: Int){
    waitDrawCircle(context, center, i, deltaOld, d, dz, pixel, x, y, delta)
}

fun waitDrawParabola(context: CanvasRenderingContext2D, center: Coordinate, i: Int, deltaOld: Int, d: Int, dz: Int, pixel: Char, x: Int, y: Int, delta: Int){
    context.drawPixel(x + center.x, y + center.y)
    context.drawPixel(-x + center.x, y + center.y)
    console.log("Step $i: delta(i): $deltaOld; d:$d; d*:$dz; pixel:$pixel; x:${x + center.x}; y:${y + center.y}; delta(i+1):$delta Plot(${x + center.x},${y + center.y})")
}

fun drawCircleAlgorithm(center: Coordinate, radius: Int, canvas: HTMLCanvasElement) {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    var x = 0
    var y = radius
    console.log("Draw Circle: center - (${center.x};${center.y}), radius - $radius")
    val limit = y - radius
    var delta = 2 - 2 * radius
    window.setTimeout(::waitDrawCircle, 50, context, center, 0, 0, 0, 0, '0', x, y, delta)
    var i = 0
    while (y > limit) {
        i++
        val deltaOld = delta
        var pixel : Char
        val dz = 2 * delta - 2 * x - 1
        if (delta > 0 && dz > 0) {
            y -= 1
            delta += 1 - 2 * y
            pixel = 'V'
            window.setTimeout(::waitDrawCircle, 100 * i, context, center, i, deltaOld, 0, dz, pixel, x, y, delta)
            continue
        }
        val d = 2 * delta + 2 * y - 1
        if (delta < 0 && d <= 0) {
            x += 1
            delta += 1 + 2 * x
            pixel = 'H'
            window.setTimeout(::waitDrawCircle, 100 * i, context, center, i, deltaOld, d, 0, pixel, x, y, delta)
            continue
        }
        x += 1
        y -= 1
        delta += 2 * x - 2 * y + 2
        pixel = 'D'
        window.setTimeout(::waitDrawCircle, 100 * i, context, center, i, deltaOld, d, dz, pixel, x, y, delta)
    }
}

fun drawEllipseAlgorithm(center: Coordinate, a: Int, b: Int, canvas: HTMLCanvasElement) {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val aPow2 = Math.pow(a.toDouble(), 2.0).toInt()
    val bPow2 = Math.pow(b.toDouble(), 2.0).toInt()
    var x = 0
    var y = b
    console.log("Draw Ellipse: center - (${center.x};${center.y}), a - $a, b - $b")
    val limit = y - b
    var delta = aPow2 + bPow2 - 2 * aPow2 * b
    window.setTimeout(::waitDrawEllipse, 50, context, center, 0, 0, 0, 0, '0', x, y, delta)
    var i = 0
    while (y > limit) {
        i++
        val deltaOld = delta
        var pixel : Char
        val dz = 2 * delta - 2 * x * bPow2 - 1
        if (delta > 0 && dz > 0) {
            y -= 1
            delta += aPow2 - 2 * y * aPow2
            pixel = 'V'
            window.setTimeout(::waitDrawCircle, 100 * i, context, center, i, deltaOld, 0, dz, pixel, x, y, delta)
            continue
        }
        val d = 2 * delta + 2 * y * aPow2 - 1
        if (delta < 0 && d <= 0) {
            x += 1
            delta += bPow2 + 2 * x * bPow2
            pixel = 'H'
            window.setTimeout(::waitDrawCircle, 100 * i, context, center, i, deltaOld, d, 0, pixel, x, y, delta)
            continue
        }
        x += 1
        y -= 1
        delta += bPow2 * (2 * x + 1) + aPow2 * (1 - 2 * y)
        pixel = 'D'
        window.setTimeout(::waitDrawCircle, 100 * i, context, center, i, deltaOld, d, dz, pixel, x, y, delta)
    }
}


fun drawHyperbolaAlgorithm(center: Coordinate, a: Int, b: Int, canvas: HTMLCanvasElement) {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val aPow2 = Math.pow(a.toDouble(), 2.0).toInt()
    val bPow2 = Math.pow(b.toDouble(), 2.0).toInt()
    var x = 0
    var y = b
    console.log("Draw Hyperbola: center - (${center.x};${center.y}), a - $a, b - $b")
    var delta = aPow2 + 2 * aPow2 * b - bPow2
    window.setTimeout(::waitDrawEllipse, 50, context, center, 0, 0, 0, 0, '0', x, y, delta)
    var i = 0
    while (i < 50) {
        i++
        val deltaOld = delta
        var pixel : Char
        val dz = 2 * delta - aPow2 * (2 * y + 1)
        if (delta > 0 && dz > 0) {
            x += 1
            delta -=  bPow2 * 2 * x + bPow2
            pixel = 'H'
            window.setTimeout(::waitDrawHyperbola, 100 * i, context, center, i, deltaOld, 0, dz, pixel, x, y, delta)
            continue
        }
        val d = 2 * delta + bPow2 * (2 * x + 1)
        if (delta < 0 && d <= 0) {
            y += 1
            delta += aPow2 * 2 * y + aPow2
            pixel = 'V'
            window.setTimeout(::waitDrawHyperbola, 100 * i, context, center, i, deltaOld, d, 0, pixel, x, y, delta)
            continue
        }
        x += 1
        y += 1
        delta +=  aPow2 * (2 * y + 1) - bPow2 * (2 * x + 1)
        pixel = 'D'
        window.setTimeout(::waitDrawHyperbola, 100 * i, context, center, i, deltaOld, d, dz, pixel, x, y, delta)
    }
}

fun drawParabolaAlgorithm(center: Coordinate, a: Int, canvas: HTMLCanvasElement) {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D

    var x = 0
    var y = 0
    console.log("Draw Parabola: center - (${center.x};${center.y}), a - $a")
    var delta = 1 - 2 * a
    window.setTimeout(::waitDrawParabola, 50, context, center, 0, 0, 0, 0, '0', x, y, delta)
    var i = 0
    while (i < 50) {
        i++
        val deltaOld = delta
        var pixel : Char
        val dz = 2 * delta - 2 * x - 1
        if (delta > 0 && dz > 0) {
            y -= 1
            delta -= 2 * a
            pixel = 'V'
            window.setTimeout(::waitDrawParabola, 100 * i, context, center, i, deltaOld, 0, dz, pixel, x, y, delta)
            continue
        }
        val d = 2 * delta + 2 * a
        if (delta < 0 && d <= 0) {
            x += 1
            delta += 2 * x + 1
            pixel = 'H'
            window.setTimeout(::waitDrawParabola, 100 * i, context, center, i, deltaOld, d, 0, pixel, x, y, delta)
            continue
        }
        x += 1
        y -= 1
        delta += 2 * x + 1 - 2 * a
        pixel = 'D'
        window.setTimeout(::waitDrawParabola, 100 * i, context, center, i, deltaOld, d, dz, pixel, x, y, delta)
    }
}