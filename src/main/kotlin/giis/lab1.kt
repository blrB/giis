package giis

import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document
import kotlin.js.Math

fun initLab1() {
    console.log("Init lab 1")
    val button = document.getElementById("draw-lab-1") as HTMLButtonElement
    button.onclick = {
        console.log("Click draw button for labs 1")
        drawDDA("DDA")
        drawBresenham("Bresenham")
        drawWu("Wu")
    }
}

fun getCoordinates(): Coordinates {
    val inputX1 = document.getElementById("x1") as HTMLInputElement
    val x1 = inputX1.value.toDouble()
    val inputY1 = document.getElementById("y1") as HTMLInputElement
    val y1 = inputY1.value.toDouble()
    val inputX2 = document.getElementById("x2") as HTMLInputElement
    val x2 = inputX2.value.toDouble()
    val inputY2 = document.getElementById("y2") as HTMLInputElement
    val y2 = inputY2.value.toDouble()
    return Coordinates(x1, y1, x2, y2)
}


fun drawDDA(elementId: String) {
    val context = getCanvasContext(elementId)
    context.clearRect(0.0, 0.0, 150.0, 150.0)
    val coordinates = getCoordinates()
    val (x1, y1, x2, y2) = coordinates
    console.log("Draw DDA: ($x1;$y1) and ($x2;$y2)")

    val length = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1))
    val dx = (x2 - x1) / length
    val dy = (y2 - y1) / length
    console.log("Length: $length; dx: $dx; dy: $dy")
    var x = x1 + 0.5 * Math.sign(dx)
    var y = y1 + 0.5 * Math.sign(dy)

    context.drawPixel(x.toInt(),y.toInt())
    console.log("Step 0: x:$x; y:$y, Plot(${x.toInt()},${y.toInt()})")
    var i = 1
    while (i <= length){
        x += dx
        y += dy
        context.drawPixel(x.toInt(),y.toInt())
        console.log("Step $i: x:$x; y:$y, Plot(${x.toInt()},${y.toInt()})")
        i++
    }

}

fun drawBresenham(elementId: String) {
    var context = getCanvasContext(elementId)
    context.clearRect(0.0, 0.0, 150.0, 150.0)
    var coordinates = getCoordinates()
    val (x1, y1, x2, y2) = coordinates
    console.log("Draw Bresenham: ($x1;$y1) and ($x2;$y2)")
}

fun drawWu(elementId: String) {
    var context = getCanvasContext(elementId)
    context.clearRect(0.0, 0.0, 150.0, 150.0)
    var coordinates = getCoordinates()
    val (x1, y1, x2, y2) = coordinates
    console.log("Draw Wu: ($x1;$y1) and ($x2;$y2)")
}