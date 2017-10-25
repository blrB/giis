package giis.object3d

import com.ichipsea.kotlin.matrix.createMatrix
import com.ichipsea.kotlin.matrix.matrixOf
import com.ichipsea.kotlin.matrix.x
import giis.Coordinate
import giis.clippingLines
import giis.drawBresenham
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.js.Math

class Object3DPlane(override val points: ArrayList<Coordinate4D>,
                    override val edges: ArrayList<Edge>,
                    val planes: ArrayList<Plane>): Object3D(points, edges){

    override fun draw(canvas: HTMLCanvasElement) {
        console.log("Draw object3D")

        var v = createMatrix(planes.size, 4) { x, y ->
            when(y){
                0 -> planes[x].getA()
                1 -> planes[x].getB()
                2 -> planes[x].getC()
                3 -> planes[x].getD()
                else -> {
                    console.log("Error get planes[$x,$y]")
                    0.0
                }
            }
        }

        //console.log(v)

        val centre = this.getCentre()

        val s = matrixOf(4, 1,
                centre.x, centre.y, centre.z, 1.0
        )

        console.log("s")
        console.log(s)

        val sv = s x v

        console.log("sv")
        console.log(sv)

        val p = matrixOf(4, 1,
                0, 0, 1, 0
        )

        val pv = p x v

        console.log("pv")
        console.log(pv)

        //planes.forEachIndexed { index, plane ->
        //
        //    plane.edges.forEach { (source, target) ->
        //
        //        val source2D = Coordinate(Math.round(source.x / source.w), Math.round(source.y / source.w))
        //        val target2D = Coordinate(Math.round(target.x / target.w), Math.round(target.y / target.w))
        //
        //        drawBresenham(source2D, target2D, canvas)
        //    }
        //
        //}

        planes.forEachIndexed { index, plane ->

            if (pv[index,0] * sv[index,0] < 0) {

                plane.edges.forEach { (source, target) ->

                    val source2D = Coordinate(Math.round(source.x / source.w), Math.round(source.y / source.w))
                    val target2D = Coordinate(Math.round(target.x / target.w), Math.round(target.y / target.w))

                    (canvas.getContext("2d") as CanvasRenderingContext2D).fillStyle = "rgba(0, 255, 0, 1)"
                    drawBresenham(source2D, target2D, canvas)
                    (canvas.getContext("2d") as CanvasRenderingContext2D).fillStyle = "rgba(0, 0, 0, 1)"
                }
            }
        }
    }

}