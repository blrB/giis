package giis

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

    Scene.array.forEachIndexed { x, y, z, a, color ->
        this.fillStyle = if (color != null) "rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})"
                    else "rgba(255, 255, 255, 0)"
        this.fillRect(x.toDouble(), y.toDouble(), 1.0, 1.0)
    }
}

fun CanvasRenderingContext2D.drawPixel(x: Int, y: Int, z: Int = 0, a: Int = 0) {
    this.fillStyle = "rgba(0, 0, 0, 1)"
    Scene.array.set(x, y, z, a, Color(0,0,0,1.0))
    this.fillRect(x.toDouble(), y.toDouble(), 1.0, 1.0)
}

fun CanvasRenderingContext2D.drawAlfaPixel(alfa: Double, x: Int, y: Int, z: Int = 0, a: Int = 0) {
    Scene.array.set(x, y, z, a, Color(0,0,0, alfa))
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

fun getMousePosOnCanvas(canvas: HTMLCanvasElement, event: Event): Coordinate {
    val rect = canvas.getBoundingClientRect()
    val evt = event as MouseEvent
    val x = evt.clientX - rect.left
    val y = evt.clientY - rect.top
    return Coordinate((x / Scene.scale).toInt(), (y / Scene.scale).toInt())
}