package giis

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.js.Math

data class Coordinates(val x1: Double,
                       val y1: Double,
                       val x2: Double,
                       val y2: Double)

fun CanvasRenderingContext2D.drawPixel(x: Int, y: Int) {
    this.fillRect(x.toDouble(), y.toDouble(), 1.0, 1.0)
}

fun Math.sign(value: Number): Int = when {
        value.toDouble() < 0 -> -1
        value.toDouble() > 0 -> 1
        else -> 0
    }

fun getCanvasContext(elementId: String): CanvasRenderingContext2D {
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    return canvas.getContext("2d") as CanvasRenderingContext2D
}