package giis

import com.ichipsea.kotlin.matrix.*
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document
import kotlin.browser.window

fun initLab3() {
    console.log("Init lab 3")

    val buttonHermite = document.getElementById("hermite") as HTMLButtonElement
    buttonHermite.onclick = {
        drawCurves("canvas", ::drawHermite)
    }
    console.log("Init buttonHermite")

    val buttonBezier = document.getElementById("bezier") as HTMLButtonElement
    buttonBezier.onclick = {
        drawCurves("canvas", ::drawBezier)
    }
    console.log("Init buttonBezier")

    val buttonBSpline = document.getElementById("b-spline") as HTMLButtonElement
    buttonBSpline.onclick = {
        drawCurvesPointsN("canvas", ::drawBSpline)
    }
    console.log("Init buttonBSpline")

}

fun waitDrawCurves(context: CanvasRenderingContext2D, t: Int, x: Number, y: Number) {
    context.drawPixel(x.toInt(), y.toInt())
    console.log("t: $t; x(t): $x; y(t): $y")
}

fun waitDrawBSpline(context: CanvasRenderingContext2D, i: Int, t: Int, x: Number, y: Number) {
    context.drawPixel(x.toInt(), y.toInt())
    console.log("i: $i; t: $t; x(t): $x; y(t): $y")
}

fun drawCurves(elementId: String, drawAlgorithm: (points: ArrayList<Coordinate>, context: CanvasRenderingContext2D) -> Unit) {
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val points = arrayListOf<Coordinate>()

    canvas.onclick = {
        val pos = getMousePosOnCanvas(canvas, it)
        points.add(pos)
        if (points.size == 4) {
            drawAlgorithm(points, context)
            points.clear()
            canvas.onclick = null
        }
    }
}

fun drawCurvesPointsN(elementId: String, drawAlgorithm: (points: ArrayList<Coordinate>, context: CanvasRenderingContext2D) -> Unit) {
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val points = arrayListOf<Coordinate>()
    val sizeInput = document.getElementById("points-number") as HTMLInputElement
    val size = sizeInput.value.toInt()

    canvas.onclick = {
        val pos = getMousePosOnCanvas(canvas, it)
        points.add(pos)
        if (points.size == size) {
            drawAlgorithm(points, context)
            points.clear()
            canvas.onclick = null
        }
    }
}

fun drawHermite(points: ArrayList<Coordinate>, context: CanvasRenderingContext2D) {
    val p1 = points[0]
    val p2 = points[1]
    val p3 = points[2]
    val p4 = points[3]

    console.log("Draw Hermite")

    var i = 0
    var t = 0.0
    val step = 0.01

    val a = matrixOf(4, 4,
            2, -2, 1, 1,
            -3, 3, -2, -1,
            0, 0, 1, 0,
            1, 0, 0, 0
    )

    val b = matrixOf(2, 4,
            p1.x, p1.y,
            p4.x, p4.y,
            p3.x - p1.x, p3.y - p1.y,
            p4.x - p2.x, p4.y - p2.y
    )

    val c: Matrix<Number> = a x b

    while (t <= 1) {
        val tMatrix: Matrix<Number> = matrixOf(4, 1,
                t * t * t, t * t, t, 1
        )
        val r = tMatrix x c
        val x = r[0, 0]
        val y = r[1, 0]
        window.setTimeout(::waitDrawCurves, 10 * i, context, t, x.toInt(), y.toInt())
        t += step
        i++
    }
}

fun drawBezier(points: ArrayList<Coordinate>, context: CanvasRenderingContext2D) {
    val p1 = points[0]
    val p2 = points[1]
    val p3 = points[2]
    val p4 = points[3]

    console.log("Draw Bezier")

    var i = 0
    var t = 0.0
    val step = 0.005

    val a = matrixOf(4, 4,
            -1, 3, -3, 1,
            3, -6, 3, 0,
            -3, 3, 0, 0,
            1, 0, 0, 0
    )

    val b = matrixOf(2, 4,
            p1.x, p1.y,
            p2.x, p2.y,
            p3.x, p3.y,
            p4.x, p4.y
    )

    val c: Matrix<Number> = a x b

    while (t <= 1) {
        val tMatrix: Matrix<Number> = matrixOf(4, 1,
                t * t * t, t * t, t, 1
        )
        val r = tMatrix x c
        val x = r[0, 0]
        val y = r[1, 0]
        window.setTimeout(::waitDrawCurves, 10 * i, context, t, x.toInt(), y.toInt())
        t += step
        i++
    }
}

fun drawBSpline(points: ArrayList<Coordinate>, context: CanvasRenderingContext2D) {
    val n = points.size

    console.log("Draw B-spline")

    var k = 0
    val step = 0.01

    val a = matrixOf(4, 4,
            -1, 3, -3, 1,
            3, -6, 3, 0,
            -3, 0, 3, 0,
            1, 4, 1, 0
    )

    var i = 1
    while (i <= n-3) {
        val b = matrixOf(2, 4,
                points[i-1].x, points[i-1].y,
                points[i].x, points[i].y,
                points[i+1].x, points[i+1].y,
                points[i+2].x, points[i+2].y
        )
        val c: Matrix<Number> = a x b
        var t = 0.0
        while (t <= 1) {
            val tMatrix: Matrix<Number> = matrixOf(4, 1,
                    t * t * t, t * t, t, 1
            )
            val r = tMatrix x c
            val x = r[0, 0] / 6
            val y = r[1, 0] / 6
            window.setTimeout(::waitDrawBSpline, 10 * k, context, i, t, x.toInt(), y.toInt())
            t += step
            k++
        }
        i++
    }
}
