package giis.object3d

import giis.Coordinate
import giis.abs
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.js.Math

data class Edge(val source: Int,
                val target: Int)

data class Coordinate4D(var x: Double,
                        var y: Double,
                        var z: Double,
                        var w: Double)

data class Object3dJSON(val type: String,
                        val points: Array<Array<Double>>)

fun drawLine(source: Coordinate, target: Coordinate, canvas: HTMLCanvasElement) {
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

    context.drawPixelOnCanvas(x, y)
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

            context.drawPixelOnCanvas(x, y)
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
            context.drawPixelOnCanvas(x, y)
            i++
        }
    }
}

fun CanvasRenderingContext2D.drawPixelOnCanvas(x: Int, y: Int) {
    this.fillStyle = "rgba(0, 0, 0, 1)"
    this.fillRect(x.toDouble(), y.toDouble(), 1.0, 1.0)
}