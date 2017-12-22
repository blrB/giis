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

    val buttonJarvis = document.getElementById("jarvis") as HTMLButtonElement
    buttonJarvis.onclick = {
        drawConvexHull("canvas", "jarvis")
    }

    val buttonPolygonPoint = document.getElementById("polygonPoint") as HTMLButtonElement
    buttonPolygonPoint.onclick = {
        Scene.polygon?.let {
            checkPointInPolygon("canvas")
        }
    }

    val buttonPolygonLine = document.getElementById("polygonLine") as HTMLButtonElement
    buttonPolygonLine.onclick = {
        Scene.polygon?.let {
            findPointWithPolygon("canvas")
        }
    }
}

fun checkPointInPolygon(elementId: String) {
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    val context = canvas.getContext("2d") as CanvasRenderingContext2D

    canvas.onclick = {
        val pos = getMousePosOnCanvas(canvas, it)
        if (pointInPolygon(Scene.polygon!!, pos)){
            context.drawColorPixel(pos.x, pos.y, 0, 255, 0)
        } else {
            context.drawColorPixel(pos.x, pos.y, 255, 0, 0)
        }
    }
}

fun findPointWithPolygon(elementId: String) {
    val canvas = document.getElementById(elementId) as HTMLCanvasElement
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val points = arrayListOf<Coordinate>()

    canvas.onclick = {
        val pos = getMousePosOnCanvas(canvas, it)
        points.add(pos)
        if (points.size == 2) {
            drawBresenham(points[0], points[1], canvas)
            val intersection = findPointsIntersectionsWithPolygon(Scene.polygon!!, points[0], points[1])
            intersection.forEach { (x, y) ->
                context.drawColorPixel(x, y, 255, 0, 0)
            }
            points.clear()
            canvas.onclick = null
        }
    }
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
            val convexHull = Polygon(ArrayList(convexHullPoints))
            Scene.polygon = convexHull
            context.render()
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
        vertex.add(pushPoint)
    } while (pushPoint != pk)
    do {
        val tempPoints = ArrayList(points)
        tempPoints.removeAll(vertex)
        tempPoints.add(p0)
        pushPoint = tempPoints.minBy { polarAngleR(it, vertex.last()) }!!
        vertex.add(pushPoint)
    } while (pushPoint != p0)
    vertex.removeAt(vertex.lastIndex)

    return vertex
}

fun drawPolygonByVertex(points: ArrayList<Coordinate>, canvas: HTMLCanvasElement){
    console.log("Draw Polygon")
    points.forEachIndexed { index, _ ->
        drawBresenham(points[index], points[((index + 1) % points.size)], canvas)
    }
}

fun isConvex(polygon: Polygon): Boolean {
    val vertex = polygon.points
    val edges = arrayListOf<Pair<Coordinate, Coordinate>>()
    vertex.forEachIndexed { index, _ ->
        val v1 = vertex[index]
        val v2 = vertex[((index + 1) % vertex.size)]
        edges.add(Pair(v1, v2))
    }
    val vectors = arrayListOf<Pair<Int,Int>>()
    edges.forEach { (first, second) ->
        vectors.add(Pair(first.x - second.x, first.y - second.y))
    }
    val k = arrayListOf<Int>()
    vectors.forEachIndexed { index, _ ->
        val v1 = vectors[index]
        val v2 = vectors[((index + 1) % vectors.size)]
        k.add(v1.first * v2.second - v1.second * v2.first)
    }
    val kB0 = k.filter { it >= 0 }
    val kE0 = k.filter { it == 0 }
    val kL0 = k.filter { it <= 0 }
    return when (k.size) {
        kB0.size -> {
            console.log("Polygon is convex and the internal normals oriented to the left of its contour")
            true
        }
        kL0.size -> {
            console.log("Polygon is convex and the internal normals oriented to the right of its contour")
            true
        }
        kE0.size -> {
            console.log("Polygon is line segment")
            false
        }
        else -> {
            console.log("Polygon is not convex")
            false
        }
    }
}

fun findInternalNormals(polygon: Polygon): ArrayList<Pair<Int,Int>> {
    val vertex = polygon.points
    val edges = arrayListOf<Pair<Coordinate, Coordinate>>()
    vertex.forEachIndexed { index, _ ->
        val v1 = vertex[index]
        val v2 = vertex[((index + 1) % vertex.size)]
        edges.add(Pair(v1, v2))
    }
    val vectorsPerpendicular = arrayListOf<Pair<Int,Int>>()
    edges.forEach { (first, second) ->
        vectorsPerpendicular.add(Pair(-(first.y - second.y), (first.x - second.x)))
    }
    val internalNormals = arrayListOf<Pair<Int,Int>>()
    vertex.forEachIndexed { index, _ ->
        val v0 = vertex[index]
        val v1 = vertex[((index + 1) % vertex.size)]
        val v2 = vertex[((index + 2) % vertex.size)]
        if (Math.sign(-(v1.y - v0.y) * (v2.x - v0.x) + (v1.x - v0.x) * (v2.y - v0.y)) == -1){
            internalNormals.add(vectorsPerpendicular[index])
        } else {
            internalNormals.add(Pair((-1) * vectorsPerpendicular[index].first, (-1) * vectorsPerpendicular[index].second))
        }
    }
    console.log("Internal Normals")
    internalNormals.forEachIndexed { index, (first, second) ->
        val indexNext = (index + 1) % vertex.size
        console.log("V$index(${vertex[index].x};${vertex[index].y}) V$indexNext(${vertex[indexNext].x};${vertex[indexNext].y}) - ($first;$second)")
    }
    return internalNormals
}

fun pointInPolygon(polygon: Polygon, pos: Coordinate): Boolean {
    val vertex = polygon.points
    var answer = 0
    var index = 0
    var prevIndex = vertex.size - 1
    while (index < vertex.size) {
        val betweenY = (vertex[index].y <= pos.y && pos.y < vertex[prevIndex].y || vertex[prevIndex].y <= pos.y && pos.y < vertex[index].y)
        val equationLine = (pos.x > (vertex[prevIndex].x - vertex[index].x) * (pos.y - vertex[index].y) / (vertex[prevIndex].y - vertex[index].y) + vertex[index].x)
        if (betweenY && equationLine) {
            answer++
        }
        prevIndex = index++
    }
    return (answer % 2 != 0)
}

fun findPointsIntersectionsWithPolygon(polygon: Polygon, source: Coordinate, target: Coordinate): ArrayList<Coordinate> {
    val vertex = polygon.points

    val x1 = source.x
    val y1 = source.y
    val x2 = if (target.x != x1) target.x.toDouble() else x1 + 0.5
    val y2 = if (target.y != y1) target.y.toDouble() else y1 + 0.5

    var index = 0
    var prevIndex = vertex.size - 1

    val answer = arrayListOf<Coordinate>()

    while (index < vertex.size) {
        val x3 = vertex[index].x
        val y3 = vertex[index].y
        val x4 = if (vertex[prevIndex].x != x3) vertex[prevIndex].x.toDouble() else x3 + 0.5
        val y4 = if (vertex[prevIndex].y != y3) vertex[prevIndex].y.toDouble() else y3 + 0.5

        val x = ((x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4)) / ((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4))
        val y = ((x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4)) / ((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4))

        val betweenX = (x3 <= x && x < x4 || x4 <= x && x < x3)
        val betweenY = (y3 <= y && y < y4 || y4 <= y && y < y3)

        if (betweenX && betweenY)
            answer.add(Coordinate(x.toInt(), y.toInt()))

        prevIndex = index++
    }

    return answer
}
