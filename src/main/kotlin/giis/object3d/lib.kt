package giis.object3d

data class Edge(val source: Int,
                val target: Int)

data class Coordinate4D(var x: Double,
                        var y: Double,
                        var z: Double,
                        var w: Double)

data class Object3dJSON(val type: String,
                        val points: Array<Array<Double>>,
                        val edges: Array<Array<Int>>)
