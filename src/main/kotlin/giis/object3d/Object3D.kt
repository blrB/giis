package giis.object3d

import giis.Coordinate
import giis.ObjectForDraw
import giis.Scene
import giis.drawBresenham
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.js.Math

open class Object3D(open val points: ArrayList<Coordinate4D>,
                    open val edges: ArrayList<Edge>): ObjectForDraw(){

    var perspective = 10

    override fun draw(canvas: HTMLCanvasElement) {
        console.log("Draw object3D")

        edges.forEach { (source, target) ->

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