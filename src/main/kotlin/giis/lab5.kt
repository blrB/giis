package giis

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.js.Math

fun initLab5() {

    console.log("Init lab 5")

    val buttonGraham = document.getElementById("graham") as HTMLButtonElement
    buttonGraham.onclick = {
        drawConvexHull("canvas", "graham")
    }
    console.log("Init buttonGraham")

    val buttonJarvis = document.getElementById("jarvis") as HTMLButtonElement
    buttonJarvis.onclick = {
        drawConvexHull("canvas", "jarvis")
    }
    console.log("Init buttonJarvis")
}

fun drawConvexHull(elementId: String, algorithm: String){
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val points = arrayListOf<Coordinate>()

    canvas.onclick = {
        val pos = getMousePosOnCanvas(canvas, it)
        context.drawPixel(pos.x, pos.y)
        points.add(pos)
    }

    val buttonStop = document.getElementById("сonvex-hull-stop") as HTMLButtonElement
    buttonStop.disabled = false
    buttonStop.onclick = {
        console.log("click")
        if (points.size > 2) {
            var convexHullPoints = points
            when (algorithm) {
                "graham" -> {
                    convexHullPoints = drawGraham(points)
                }
                "jarvis" -> {
                    convexHullPoints = drawJarvis(points)
                }
                else -> {
                    console.log("Not found algorithm $algorithm")
                }
            }
            val convexHull = ConvexHull(ArrayList(convexHullPoints))
            Scene.objects.add(convexHull)
            convexHull.draw(canvas)
        }
        canvas.onclick = null
        buttonStop.disabled = true
        points.clear()
    }
}

fun polarAngle(p1: Coordinate, p2: Coordinate) = Math.atan2((p1.y - p2.y).toDouble(), (p1.x - p2.x).toDouble())

fun polarAngleR(p1: Coordinate, p2: Coordinate) = Math.atan2((p1.y - p2.y).toDouble(), (p2.x - p1.x).toDouble())

fun rotate(a: Coordinate, b: Coordinate, c: Coordinate) = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)

fun drawGraham(points: ArrayList<Coordinate>): ArrayList<Coordinate> {
    points.sortBy { it.y }
    val p = points[0]

    points.sortWith(Comparator { lhs, rhs ->
        val i1 = polarAngle(lhs, p)
        val i2 = polarAngle(rhs, p)
        when {
            i1 > i2 -> 1
            i1 < i2 -> -1
            else -> 0
        }
    })

    val vertex = arrayListOf(points[1], points[0])
    for (i in 2..(points.size - 1)){
        while (vertex.size > 1 && rotate(vertex[1],vertex[0],points[i]) < 0){
            vertex.removeAt(0)
        }
        vertex.add(0, points[i])
    }

    return vertex
}

fun drawJarvis(points: ArrayList<Coordinate>): ArrayList<Coordinate> {
    points.sortBy { it.y }
    val p0 = points.first()
    val pk = points.last()

    val vertex = arrayListOf(p0)
    var pushPoint: Coordinate
    do {
        val tempPoints = ArrayList(points)
        tempPoints.removeAll(vertex)
        pushPoint = tempPoints.maxBy { polarAngle(it, vertex.last()) }!!
        console.log(pushPoint)
        vertex.add(pushPoint)
    } while (pushPoint != pk)
    do {
        val tempPoints = ArrayList(points)
        tempPoints.removeAll(vertex)
        tempPoints.add(p0)
        pushPoint = tempPoints.minBy { polarAngleR(it, vertex.last()) }!!
        console.log(pushPoint)
        vertex.add(pushPoint)
    } while (pushPoint != p0)

    return vertex
}

fun drawConvexHullByVertex(points: ArrayList<Coordinate>, canvas: HTMLCanvasElement){
    points.add(points[0])
    points.forEachIndexed { index, _ ->
        drawBresenham(points[index], points[((index + 1) % points.size)], canvas)
    }
}
