package giis.object3d

import giis.Coordinate
import giis.render
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.js.Math

class Cube(points: ArrayList<Coordinate4D>) : Object3D(points){

    override fun draw(canvas: HTMLCanvasElement){

        val context = canvas.getContext("2d") as CanvasRenderingContext2D
        context.render()

        console.log("Draw cube")

        val edges = arrayListOf(
                Edge(0, 1),
                Edge(1, 2),
                Edge(2, 3),
                Edge(3, 0),

                Edge(4, 5),
                Edge(5, 6),
                Edge(6, 7),
                Edge(7, 4),

                Edge(0, 4),
                Edge(1, 5),
                Edge(2, 6),
                Edge(3, 7)
        )

        edges.forEach { edge ->
            val source = points[edge.source]
            val target = points[edge.target]

            val source2D = Coordinate(Math.round(source.x / source.w), Math.round(source.y / source.w))
            val target2D = Coordinate(Math.round(target.x / target.w), Math.round(target.y / target.w))

            drawLine(source2D, target2D, canvas)
        }

    }
}