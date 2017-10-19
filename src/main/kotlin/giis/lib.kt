package giis

import org.khronos.webgl.get
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.MouseEvent
import kotlin.js.Math

data class Coordinate(val x: Int,
                       val y: Int)

data class Coordinates(val x1: Int,
                       val y1: Int,
                       val x2: Int,
                       val y2: Int)

data class Color(val r: Int,
                 val g: Int,
                 val b: Int,
                 val a: Double){

    override fun toString(): String {
        return "rgba($r, $g, $b, $a)"
    }
}

fun CanvasRenderingContext2D.render() {
    this.clearRect(0.0, 0.0, Scene.size.toDouble(), Scene.size.toDouble())
    Scene.objects.forEach { it.draw(canvas) }
    Scene.object3D?.draw(canvas)
    Scene.polygon?.draw(canvas)
}

fun CanvasRenderingContext2D.drawPixel(x: Int, y: Int, z: Int = 0, a: Int = 0) {
    this.fillStyle = "rgba(0, 0, 0, 1)"
    this.fillRect(x.toDouble(), y.toDouble(), 1.0, 1.0)
}

fun CanvasRenderingContext2D.drawColorPixel(x: Int, y: Int, r: Int, g: Int, b: Int, w: Double = 1.0, h: Double = 1.0) {
    this.fillStyle = "rgba($r, $g, $b, 1)"
    this.fillRect(x.toDouble(), y.toDouble(), w, h)
    this.fillStyle = "rgba(0, 0, 0, 1)"
}

fun CanvasRenderingContext2D.isWhitePixel(x: Int, y: Int): Boolean {
    val scaleX = x * Scene.scale
    val scaleY = y * Scene.scale
    val p = getImageData(scaleX, scaleY, 1.0, 1.0).data
    return (p[3].toInt() == 0 && p[2].toInt() == 0 && p[1].toInt() == 0 && p[0].toInt() == 0)
}

fun CanvasRenderingContext2D.drawAlfaPixel(alfa: Double, x: Int, y: Int, z: Int = 0, a: Int = 0) {
    this.fillStyle = "rgba(0, 0, 0, $alfa)"
    this.fillRect(x.toDouble(), y.toDouble(), 1.0, 1.0)
    this.fillStyle = "rgba(0, 0, 0, 1)"
}

fun Math.sign(value: Number): Int = when {
        value.toDouble() < 0 -> -1
        value.toDouble() > 0 -> 1
        else -> 0
    }

fun Math.abs(value: Int): Double = Math.abs(value.toDouble())

fun ArrayList<Coordinate>.push(element: Coordinate){
    add(0, element)
}

fun ArrayList<Coordinate>.pop(): Coordinate{
    return removeAt(0)
}

fun getMousePosOnCanvas(canvas: HTMLCanvasElement, event: Event): Coordinate {
    val rect = canvas.getBoundingClientRect()
    val evt = event as MouseEvent
    val x = evt.clientX - rect.left
    val y = evt.clientY - rect.top
    return Coordinate((x / Scene.scale).toInt(), (y / Scene.scale).toInt())
}

abstract class ObjectForDraw {
    open fun draw(canvas: HTMLCanvasElement) {}
}

class DDA(val source: Coordinate, val target: Coordinate): ObjectForDraw() {
    override fun draw(canvas: HTMLCanvasElement) {
        drawDDA(source, target, canvas)
    }
}

class Bresenham(val source: Coordinate, val target: Coordinate): ObjectForDraw() {
    override fun draw(canvas: HTMLCanvasElement) {
        drawBresenham(source, target, canvas)
    }
}

class Wu(val source: Coordinate, val target: Coordinate): ObjectForDraw() {
    override fun draw(canvas: HTMLCanvasElement) {
        drawWu(source, target, canvas)
    }
}

class Circle(val center: Coordinate, val radius: Int): ObjectForDraw() {
    override fun draw(canvas: HTMLCanvasElement) {
        drawCircleAlgorithm(center, radius, canvas)
    }
}

class Ellipse(val center: Coordinate, val a: Int, val b: Int): ObjectForDraw() {
    override fun draw(canvas: HTMLCanvasElement) {
        drawEllipseAlgorithm(center, a, b, canvas)
    }
}

class Hyperbola(val center: Coordinate, val a: Int, val b: Int): ObjectForDraw() {
    override fun draw(canvas: HTMLCanvasElement) {
        drawHyperbolaAlgorithm(center, a, b, canvas)
    }
}

class Parabola(val center: Coordinate, val a: Int): ObjectForDraw() {
    override fun draw(canvas: HTMLCanvasElement) {
        drawParabolaAlgorithm(center, a, canvas)
    }
}

class Hermite(val points: ArrayList<Coordinate>): ObjectForDraw() {
    override fun draw(canvas: HTMLCanvasElement) {
        drawHermite(points, canvas.getContext("2d") as CanvasRenderingContext2D)
    }
}

class Bezier(val points: ArrayList<Coordinate>): ObjectForDraw() {
    override fun draw(canvas: HTMLCanvasElement) {
        drawBezier(points, canvas.getContext("2d") as CanvasRenderingContext2D)
    }
}

class BSpline(val points: ArrayList<Coordinate>): ObjectForDraw() {
    override fun draw(canvas: HTMLCanvasElement) {
        drawBSpline(points, canvas.getContext("2d") as CanvasRenderingContext2D)
    }
}

class Polygon(val points: ArrayList<Coordinate>): ObjectForDraw() {
    override fun draw(canvas: HTMLCanvasElement) {
        drawPolygonByVertex(points, canvas)
        if (isConvex(this)) {
            findInternalNormals(this)
        }
    }
}

