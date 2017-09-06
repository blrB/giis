package giis

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.browser.window

object Config {
    val scale = 4.0
}


fun main(args: Array<String>) {
    window.onload = {
        init()
        initLab1()
    }
}

fun init() {
    val canvas = document.getElementById("canvas") as HTMLCanvasElement
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    context.scale(Config.scale, Config.scale)
}







