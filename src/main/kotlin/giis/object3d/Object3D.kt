package giis.object3d

import giis.Coordinate
import giis.Scene
import giis.drawBresenham
import giis.render
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.js.Math

class Object3D(val points: ArrayList<Coordinate4D>,
               val edges: ArrayList<Edge>){

    var perspective = 10

    fun draw(canvas: HTMLCanvasElement) {
        val context = canvas.getContext("2d") as CanvasRenderingContext2D
        context.render()

        console.log("Draw object3D")

        edges.forEach { (sourceIndex, targetIndex) ->
            val source = points[sourceIndex]
            val target = points[targetIndex]

            val source2D = Coordinate(Math.round(source.x / source.w), Math.round(source.y / source.w))
            val target2D = Coordinate(Math.round(target.x / target.w), Math.round(target.y / target.w))

            drawBresenham(source2D, target2D, canvas)
        }
    }

    fun getCentre(): Coordinate4D {
        val minX = (Scene.object3D?.points?.minBy { it.x })?.x
        val maxX = (Scene.object3D?.points?.maxBy { it.x })?.x
        val minY = (Scene.object3D?.points?.minBy { it.y })?.y
        val maxY = (Scene.object3D?.points?.maxBy { it.y })?.y
        val minZ = (Scene.object3D?.points?.minBy { it.z })?.z
        val maxZ = (Scene.object3D?.points?.maxBy { it.z })?.z

        return Coordinate4D(((maxX!! + minX!!) / 2),
                            ((maxY!! + minY!!) / 2),
                            ((maxZ!! + minZ!!) / 2),
                            .0)
    }
}