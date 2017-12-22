package giis

import giis.object3d.*
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLInputElement
import org.w3c.files.FileReader
import org.w3c.files.get
import kotlin.browser.document

fun initLab8() {

    console.log("Init lab 8")

    val canvas = document.getElementById("canvas") as HTMLCanvasElement
    val fileInput = document.getElementById("file-with-plane") as HTMLInputElement
    fileInput.addEventListener("change", {
        loadFilePlane(fileInput, canvas)
    })
}


fun loadFilePlane(input: HTMLInputElement, canvas: HTMLCanvasElement) {
    val file = input.files?.get(0)
    file?.let {
        console.log("Load ${file.name}")
        val reader = FileReader()
        reader.onload = { event ->
            console.log("Onload ${file.name}")
            val object3dJson = JSON.parse<Object3dPlaneJSON>(reader.result as String)
            val listOfPoinus = arrayListOf<Coordinate4D>()
            object3dJson.points.forEach { point ->
                listOfPoinus.add(Coordinate4D(point[0], point[1], point[2], point[3]))
            }
            val listOfEdges = arrayListOf<Edge>()
            object3dJson.edges.forEach { edge ->
                listOfEdges.add(Edge(listOfPoinus[edge[0]], listOfPoinus[edge[1]]))
            }
            val listOfEPlanes = arrayListOf<Plane>()
            object3dJson.planes.forEach { edges ->
                val edgeForPlane = arrayListOf<Edge>()
                edges.forEach { index ->
                    edgeForPlane.add(listOfEdges[index])
                }
                listOfEPlanes.add(Plane(edgeForPlane))
            }
            Scene.object3D = Object3DPlane(listOfPoinus, listOfEdges, listOfEPlanes)
            (canvas.getContext("2d") as CanvasRenderingContext2D).render()
        }
        reader.readAsText(file)
    }
}