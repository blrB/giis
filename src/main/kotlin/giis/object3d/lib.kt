package giis.object3d

data class Edge(val source: Coordinate4D,
                val target: Coordinate4D)

data class Coordinate4D(var x: Double,
                        var y: Double,
                        var z: Double,
                        var w: Double)

data class Object3dJSON(val type: String,
                        val points: Array<Array<Double>>,
                        val edges: Array<Array<Int>>)

data class Object3dPlaneJSON(val type: String,
                             val points: Array<Array<Double>>,
                             val edges: Array<Array<Int>>,
                             val planes: Array<Array<Int>>)

class Plane(val edges: ArrayList<Edge>) {

    fun getPoints(): List<Coordinate4D>{
        val points = arrayListOf<Coordinate4D>()
        edges.forEach { (source, target) ->
            points.add(source)
            points.add(target)
        }
        return points.distinct()
    }

    // http://algolist.manual.ru/maths/geom/equation/plane.php
    fun getA(): Double {
        val points = getPoints()

        val y1 = points[0].y
        val z1 = points[0].z

        val y2 = points[1].y
        val z2 = points[1].z

        val y3 = points[2].y
        val z3 = points[2].z

        return y1 * (z2 - z3) + y2 * (z3 - z1) + y3 * (z1 - z2)
    }

    fun getB(): Double {
        val points = getPoints()

        val x1 = points[0].x
        val z1 = points[0].z

        val x2 = points[1].x
        val z2 = points[1].z

        val x3 = points[2].x
        val z3 = points[2].z

        return z1 * (x2 - x3) + z2 * (x3 - x1) + z3 * (x1 - x2)
    }

    fun getC(): Double {
        val points = getPoints()

        val x1 = points[0].x
        val y1 = points[0].y

        val x2 = points[1].x
        val y2 = points[1].y

        val x3 = points[2].x
        val y3 = points[2].y

        return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)
    }

    fun getD(): Double {
        val points = getPoints()

        val x1 = points[0].x
        val y1 = points[0].y
        val z1 = points[0].z

        val x2 = points[1].x
        val y2 = points[1].y
        val z2 = points[1].z

        val x3 = points[2].x
        val y3 = points[2].y
        val z3 = points[2].z

        return -(x1 * (y2 * z3 - y3 * z2) + x2 * (y3 * z1 - y1 * z3) + x3 * (y1 * z2 - y2 * z1))
    }

}
