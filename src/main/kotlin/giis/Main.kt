package giis

import giis.object3d.Object3D
import org.w3c.dom.*
import kotlin.browser.document
import kotlin.browser.window

object Scene {
    var scale = 8.0
    var size = 75
    var objects = ArrayList<ObjectForDraw>()
    var object3D : Object3D? = null
    var convexHull : ConvexHull? = null
}


fun main(args: Array<String>) {
    window.onload = {
        init()
        initLab1()
        initLab2()
        initLab3()
        initLab4()
        initLab5()
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
        context.clearRect(0.0, 0.0, Scene.size.toDouble(), Scene.size.toDouble())
        Scene.objects.clear()
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







