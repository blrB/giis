package giis

import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document

fun initLab1(){
    console.log("Init lab 1")
    val button = document.getElementById("draw-lab-1") as HTMLButtonElement
    button.onclick = {
        console.log("Click draw button for labs 1")
        drawDDA("DDA")
        drawBresenham("Bresenham")
        drawWu("Wu")
    }
}

fun getCoordinates(): Coordinates{
    val inputX1 = document.getElementById("x1") as HTMLInputElement
    val x1 = inputX1.value.toDouble()
    val inputY1 = document.getElementById("y1") as HTMLInputElement
    val y1 = inputY1.value.toDouble()
    val inputX2 = document.getElementById("x2") as HTMLInputElement
    val x2 = inputX2.value.toDouble()
    val inputY2 = document.getElementById("y2") as HTMLInputElement
    val y2 = inputY2.value.toDouble()
    console.log("Coordinates: (${x1};${y1}) and (${x2};${y2}")
    return Coordinates(x1, y1, x2, y2)
}


fun drawDDA(elementId: String) {
    var context = getCanvasContext(elementId)
    var coordinates = getCoordinates()
    console.log("Draw DDA: (${coordinates.x1};${coordinates.y1}) and (${coordinates.x2};${coordinates.y2})")

}

fun drawBresenham(elementId: String) {
    var context = getCanvasContext(elementId)
    var coordinates = getCoordinates()
    console.log("Draw Bresenham: (${coordinates.x1};${coordinates.y1}) and (${coordinates.x2};${coordinates.y2})")

}

fun drawWu(elementId: String) {
    var context = getCanvasContext(elementId)
    var coordinates = getCoordinates()
    console.log("Draw Wu: (${coordinates.x1};${coordinates.y1}) and (${coordinates.x2};${coordinates.y2})")

}