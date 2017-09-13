package giis

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.browser.window

object Scene {
    val size = 150
    val scale = 4.0
    val array = Array4D<Color>(size, size, 1, 1)
}


fun main(args: Array<String>) {
    window.onload = {
        init()
        initLab1()
    }
}

fun init() {
    val canvas = document.getElementById("canvas") as HTMLCanvasElement
    canvas.width = (Scene.size * Scene.scale).toInt()
    canvas.height = (Scene.size * Scene.scale).toInt()
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    context.scale(Scene.scale, Scene.scale)
}







