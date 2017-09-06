package giis

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.MouseEvent
import kotlin.js.Math

data class Coordinate(val x: Double,
                       val y: Double)

data class Coordinates(val x1: Double,
                       val y1: Double,
                       val x2: Double,
                       val y2: Double)

fun CanvasRenderingContext2D.drawPixel(x: Int, y: Int) {
    this.fillRect(x.toDouble(), y.toDouble(), 1.0, 1.0)
}

fun CanvasRenderingContext2D.drawAlfaPixel(x: Int, y: Int, a: Double) {
    this.fillStyle = "rgba(0, 0, 0, $a)"
    this.fillRect(x.toDouble(), y.toDouble(), 1.0, 1.0)
    this.fillStyle = "rgba(0, 0, 0, 1)"
}

fun Math.sign(value: Number): Int = when {
        value.toDouble() < 0 -> -1
        value.toDouble() > 0 -> 1
        else -> 0
    }

fun getMousePosOnCanvas(canvas: HTMLCanvasElement, event: Event): Coordinate {
    val rect = canvas.getBoundingClientRect()
    val evt = event as MouseEvent
    val x = evt.clientX - rect.left
    val y = evt.clientY - rect.top
    return Coordinate(x / Config.scale, y / Config.scale)
}