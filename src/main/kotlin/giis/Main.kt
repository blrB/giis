package giis

import org.w3c.dom.*
import kotlin.browser.document
import kotlin.browser.window

object Scene {
    var scale = 8.0
    var size = 75
    var array = Array4D<Color>(size, size, 1, 1)
}


fun main(args: Array<String>) {
    window.onload = {
        init()
        initLab1()
    }
}

fun changeScale(link: HTMLElement, canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    Scene.scale = link.innerText.toDouble()
    canvas.width = (Scene.size * Scene.scale).toInt()
    canvas.height = (Scene.size * Scene.scale).toInt()
    context.scale(Scene.scale, Scene.scale)
    context.render()
}

fun init() {
    val canvas = document.getElementById("canvas") as HTMLCanvasElement
    canvas.width = (Scene.size * Scene.scale).toInt()
    canvas.height = (Scene.size * Scene.scale).toInt()
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    context.scale(Scene.scale, Scene.scale)

    val buttonClean = document.getElementById("clean") as HTMLButtonElement
    buttonClean.onclick = {
        Scene.array = Array4D(Scene.size, Scene.size, 1, 1)
        context.clearRect(0.0, 0.0, Scene.size.toDouble(), Scene.size.toDouble())
    }

    val buttonScale1 = document.getElementById("scale-1") as HTMLElement
    buttonScale1.onclick = {
        changeScale(buttonScale1, canvas, context)
    }

    val buttonScale2 = document.getElementById("scale-2") as HTMLElement
    buttonScale2.onclick = {
        changeScale(buttonScale2, canvas, context)
    }

    val buttonScale4 = document.getElementById("scale-4") as HTMLElement
    buttonScale4.onclick = {
        changeScale(buttonScale4, canvas, context)
    }

    val buttonScale8 = document.getElementById("scale-8") as HTMLElement
    buttonScale8.onclick = {
        changeScale(buttonScale8, canvas, context)
    }

}







