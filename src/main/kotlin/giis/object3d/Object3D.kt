package giis.object3d

import org.w3c.dom.HTMLCanvasElement

open class Object3D(val points: ArrayList<Coordinate4D>){
    open fun draw(canvas: HTMLCanvasElement) {}
}