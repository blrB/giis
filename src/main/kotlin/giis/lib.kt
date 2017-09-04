package giis

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document

data class Coordinates(val x1: Double,
                       val y1: Double,
                       val x2: Double,
                       val y2: Double)

fun CanvasRenderingContext2D.drawPixel(x: Double, y: Double){
    this.fillRect(x, y, 10.0, 10.0)
}

fun getCanvasContext(elementId: String): CanvasRenderingContext2D{
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    return canvas.getContext("2d") as CanvasRenderingContext2D
}