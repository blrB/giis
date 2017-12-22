package giis

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.browser.window

fun initLab6() {
    console.log("Init lab 6")

    val buttonSeed = document.getElementById("seed") as HTMLButtonElement
    buttonSeed.onclick = {
        coloring("canvas", "seed")
    }

    val buttonStringSeed = document.getElementById("string-seed") as HTMLButtonElement
    buttonStringSeed.onclick = {
        coloring("canvas", "string-seed")
    }


}

fun coloring(elementId: String, algorithm: String) {
    val canvas = document.getElementById(elementId) as HTMLCanvasElement

    canvas.onclick = {
        val pos = getMousePosOnCanvas(canvas, it)
        canvas.onclick = null
        when (algorithm) {
            "seed" -> {
                seed(pos, canvas)
            }
            "string-seed" -> {
                stringSeed(pos, canvas)
            }
            else -> {
                console.log("Not found algorithm $algorithm")
            }
        }
    }
}

fun seed(pos: Coordinate, canvas: HTMLCanvasElement) {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D

    val stack = arrayListOf<Coordinate>()
    stack.push(pos)

    fun checkAndAdd(x: Int, y: Int) {
        val availablePixel = (x in (0 until Scene.size)) && (y in (0 until Scene.size))
        if (availablePixel && context.isWhitePixel(x, y)) {
            stack.push(Coordinate(x, y))
        }
    }

    //while(stack.isNotEmpty()){
    //    val pixel = stack.pop()
    //    context.drawColorPixel(pixel.x, pixel.y, 255, 255, 0)
    //    checkAndAdd(pixel.x + 1, pixel.y)
    //    checkAndAdd(pixel.x , pixel.y - 1)
    //    checkAndAdd(pixel.x - 1, pixel.y)
    //    checkAndAdd(pixel.x, pixel.y + 1)
    //}

    fun waitLoop () {
        window.setTimeout({
            val pixel = stack.pop()
            context.drawColorPixel(pixel.x, pixel.y, 255, 255, 0)
            checkAndAdd(pixel.x + 1, pixel.y)
            checkAndAdd(pixel.x , pixel.y - 1)
            checkAndAdd(pixel.x - 1, pixel.y)
            checkAndAdd(pixel.x, pixel.y + 1)
            if (stack.isNotEmpty()) {
                waitLoop()
            }
        }, 20)
    }
    waitLoop()
}

fun stringSeed(pos: Coordinate, canvas: HTMLCanvasElement) {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D

    val stack = arrayListOf<Coordinate>()
    stack.push(pos)

    fun check(x: Int, y: Int): Boolean {
        val availablePixel = (x in (0 until Scene.size)) && (y in (0 until Scene.size))
        return (availablePixel && context.isWhitePixel(x, y))
    }

    fun pushPixelString(xL: Int, xR: Int, y:Int) {

        var xLeft = xL + 1
        if(check(xLeft, y)){
            while (check(xLeft, y))
                xLeft--
        } else {
            while (check(xLeft, y))
                xLeft++
        }

        var xRight = xR - 1
        if(check(xRight, y)){
            while (check(xRight, y))
                xRight++
        } else {
            while (check(xRight, y))
                xRight--
        }

        var x = xLeft + 1
        while (x <= xRight){
            if (check(x, y)) {
                stack.push(Coordinate(x, y))
                do {
                    x++
                } while (x <= xRight && check(x, y))
            } else {
                x++
            }
        }
    }

    //while(stack.isNotEmpty()){
    //    val pixel = stack.pop()
    //
    //    var xLeft = pixel.x - 1
    //    while (check(xLeft, pixel.y))
    //        xLeft--
    //
    //    var xRight = pixel.x + 1
    //    while (check(xRight, pixel.y))
    //        xRight++
    //
    //    context.drawColorPixel(xLeft + 1, pixel.y, 255, 255, 0, (xRight - xLeft - 1).toDouble())
    //
    //    pushPixelString(xLeft, xRight, pixel.y - 1)
    //    pushPixelString(xLeft, xRight, pixel.y + 1)
    //}

    fun waitLoop () {
        window.setTimeout({
            val pixel = stack.pop()
            var xLeft = pixel.x - 1
            while (check(xLeft, pixel.y))
                xLeft--
            var xRight = pixel.x + 1
            while (check(xRight, pixel.y))
                xRight++
            context.drawColorPixel(xLeft + 1, pixel.y, 255, 255, 0, (xRight - xLeft - 1).toDouble())
            pushPixelString(xLeft, xRight, pixel.y - 1)
            pushPixelString(xLeft, xRight, pixel.y + 1)
            if (stack.isNotEmpty()) {
                waitLoop()
            }
        }, 20)
    }
    waitLoop()
}
