package giis

import com.ichipsea.kotlin.matrix.*
import giis.object3d.*
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import org.w3c.files.FileReader
import org.w3c.files.get
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Math
import kotlin.js.Math.PI

fun initLab4() {
    console.log("Init lab 4")

    val canvas = document.getElementById("canvas") as HTMLCanvasElement
    val fileInput = document.getElementById("file") as HTMLInputElement
    fileInput.addEventListener("change", {
        loadFile(fileInput, canvas)
    })

    val buttonMoving = document.getElementById("moving") as HTMLButtonElement
    buttonMoving.onclick = {
        transformationMove(canvas)
    }

    val buttonRotating = document.getElementById("rotating") as HTMLButtonElement
    buttonRotating.onclick = {
        transformationRotating(canvas)
    }

    val buttonScaling = document.getElementById("scaling") as HTMLButtonElement
    buttonScaling.onclick = {
        transformationScaling(canvas)
    }

    val buttonReflection = document.getElementById("reflection") as HTMLButtonElement
    buttonReflection.onclick = {
        transformationReflection(canvas)
    }

    val buttonPerspective = document.getElementById("perspective") as HTMLButtonElement
    buttonPerspective.onclick = {
        transformationPerspective(canvas)
    }

    addKeyboardListener(canvas)

}

fun addKeyboardListener(canvas: HTMLCanvasElement) {
    window.onkeydown = { event: Event ->
        if (document.activeElement == document.body) {
            val keyBoardEvent = event as KeyboardEvent
            val context = canvas.getContext("2d") as CanvasRenderingContext2D
            when (keyBoardEvent.key) {
                "ArrowUp" -> {
                    transformationMove(canvas, 0, -1, 0)
                    context.render()
                }
                "ArrowRight" -> {
                    transformationMove(canvas, 1, 0, 0)
                    context.render()
                }
                "ArrowDown" -> {
                    transformationMove(canvas, 0, 1, 0)
                    context.render()
                }
                "ArrowLeft" -> {
                    transformationMove(canvas, -1, 0, 0)
                    context.render()
                }
                "+" -> {
                    transformationScaling(canvas, 2.0, 2.0, 2.0)
                    context.render()
                }
                "-" -> {
                    transformationScaling(canvas, 0.5, 0.5, 0.5)
                    context.render()
                }
                "[" -> {
                    Scene.object3D!!.perspective++
                    transformationPerspective(canvas, .0, .0, 1.0 / Scene.object3D!!.perspective)
                    context.render()
                }
                "]" -> {
                    Scene.object3D!!.perspective--
                    transformationPerspective(canvas, .0, .0, 1.0 / Scene.object3D!!.perspective)
                    context.render()
                }
                "2" -> {
                    transformationRotating(canvas, -3, 0, 0)
                    context.render()
                }
                "8" -> {
                    transformationRotating(canvas, 3, 0, 0)
                    context.render()
                }
                "4" -> {
                    transformationRotating(canvas, 0, -3, 0)
                    context.render()
                }
                "6" -> {
                    transformationRotating(canvas, 0, 3, 0)
                    context.render()
                }
                "1", "7" -> {
                    transformationRotating(canvas, 0, 0, -3)
                    context.render()
                }
                "3", "9" -> {
                    transformationRotating(canvas, 0, 0, 3)
                    context.render()
                }
                "x" -> {
                    transformationReflection(canvas, -1, 1, 1)
                    context.render()
                }
                "y" -> {
                    transformationReflection(canvas, 1, -1, 1)
                    context.render()
                }
                "z" -> {
                    transformationReflection(canvas, 1, 1, -1)
                    context.render()
                }
                else -> {
                }
            }
        }
    }
}

fun transformationMove(canvas: HTMLCanvasElement) {
    val dx: Int = getAxisNumber("x")
    val dy: Int = getAxisNumber("y")
    val dz: Int = getAxisNumber("z")

    transformationMove(canvas,dx,dy,dz)

    (canvas.getContext("2d") as CanvasRenderingContext2D).render()
}


fun transformationMove(canvas: HTMLCanvasElement, dx: Int, dy: Int, dz: Int){
    Scene.object3D?.let {
        val t = matrixOf(4, 4,
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                dx, dy, dz, 1
        )

        val points = Scene.object3D?.points
        val pointSize = Scene.object3D?.points?.size
        val p = createMatrix(4, pointSize!!) { x, y ->
            when(x){
                0 -> points!![y].x
                1 -> points!![y].y
                2 -> points!![y].z
                3 -> points!![y].w
                else -> {
                    console.log("Error get p[$x,$y]")
                    0.0
                }
            }
        }
        val result: Matrix<Number> = p x t
        result.forEachIndexed { x, y, value ->
            when(x){
                0 -> points?.get(y)?.x = value.toDouble()
                1 -> points?.get(y)?.y = value.toDouble()
                2 -> points?.get(y)?.z = value.toDouble()
                3 -> points?.get(y)?.w = value.toDouble()
                else -> {
                    console.log("Error set p[$x,$y]")
                }
            }
        }
    }
}

fun transformationRotating(canvas: HTMLCanvasElement){
    val rx = getAxisNumber("x")
    val ry = getAxisNumber("y")
    val rz = getAxisNumber("z")

    transformationRotating(canvas, rx, ry, rz)

    (canvas.getContext("2d") as CanvasRenderingContext2D).render()
}

fun transformationRotating(canvas: HTMLCanvasElement, rx: Int, ry: Int, rz: Int){
    Scene.object3D?.let {

        val centre = Scene.object3D!!.getCentre()
        transformationMove(canvas, (-centre.x).toInt(), (-centre.y).toInt(), (-centre.z).toInt())

        val cosZ: Double = Math.cos(rz * PI / 180)
        val sinZ: Double = Math.sin(rz * PI / 180)
        val cosX: Double = Math.cos(rx * PI / 180)
        val sinX: Double = Math.sin(rx * PI / 180)
        val cosY: Double = Math.cos(ry * PI / 180)
        val sinY: Double = Math.sin(ry * PI / 180)

        val rByZ = matrixOf(4, 4,
                cosZ, sinZ, 0.0, 0.0,
                -sinZ, cosZ, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0
        )

        val rByX = matrixOf(4, 4,
                1.0, 0.0, 0.0, 0.0,
                0.0, cosX, sinX, 0.0,
                0.0, -sinX, cosX, 0.0,
                0.0, 0.0, 0.0, 1.0
        )

        val rByY = matrixOf(4, 4,
                cosY, 0.0, -sinY, 0.0,
                0.0, 1.0, 0.0, 0.0,
                sinY, 0.0, cosY, 0.0,
                0.0, 0.0, 0.0, 1.0
        )

        val points = Scene.object3D?.points
        val pointSize = Scene.object3D?.points?.size
        val p = createMatrix(4, pointSize!!) { x, y ->
            when(x){
                0 -> points!![y].x
                1 -> points!![y].y
                2 -> points!![y].z
                3 -> points!![y].w
                else -> {
                    console.log("Error get p[$x,$y]")
                    0.0
                }
            }
        }
        val result: Matrix<Number> = p x rByX x rByY x rByZ
        result.forEachIndexed { x, y, value ->
            when(x){
                0 -> points?.get(y)?.x = value.toDouble()
                1 -> points?.get(y)?.y = value.toDouble()
                2 -> points?.get(y)?.z = value.toDouble()
                3 -> points?.get(y)?.w = value.toDouble()
                else -> {
                    console.log("Error set p[$x,$y]")
                }
            }
        }

        transformationMove(canvas, (centre.x).toInt(), (centre.y).toInt(), (centre.z).toInt())
    }
}

fun transformationScaling(canvas: HTMLCanvasElement){
    val sx = if (getAxisNumber("x") == 0) 1.0 else getAxisNumber("x").toDouble()
    val sy = if (getAxisNumber("y") == 0) 1.0 else getAxisNumber("y").toDouble()
    val sz = if (getAxisNumber("z") == 0) 1.0 else getAxisNumber("z").toDouble()

    transformationScaling(canvas, sx, sy, sz)

    (canvas.getContext("2d") as CanvasRenderingContext2D).render()
}

fun transformationScaling(canvas: HTMLCanvasElement, sx: Double, sy: Double, sz: Double){
    Scene.object3D?.let {

        val centre = Scene.object3D!!.getCentre()
        transformationMove(canvas, (-centre.x).toInt(), (-centre.y).toInt(), (-centre.z).toInt())

        val s = matrixOf(4, 4,
                sx, .0, .0, .0,
                .0, sy, .0, .0,
                .0, .0, sz, .0,
                .0, .0, .0, 1.0
        )

        val points = Scene.object3D?.points
        val pointSize = Scene.object3D?.points?.size
        val p = createMatrix(4, pointSize!!) { x, y ->
            when(x){
                0 -> points!![y].x
                1 -> points!![y].y
                2 -> points!![y].z
                3 -> points!![y].w
                else -> {
                    console.log("Error get p[$x,$y]")
                    0.0
                }
            }
        }
        val result: Matrix<Number> = p x s
        result.forEachIndexed { x, y, value ->
            when(x){
                0 -> points?.get(y)?.x = value.toDouble()
                1 -> points?.get(y)?.y = value.toDouble()
                2 -> points?.get(y)?.z = value.toDouble()
                3 -> points?.get(y)?.w = value.toDouble()
                else -> {
                    console.log("Error set p[$x,$y]")
                }
            }
        }

        transformationMove(canvas, (centre.x).toInt(), (centre.y).toInt(), (centre.z).toInt())
    }
}

fun transformationReflection(canvas: HTMLCanvasElement){
    val rx = if (getAxisNumber("x") == 0) 1 else -1
    val ry = if (getAxisNumber("y") == 0) 1 else -1
    val rz = if (getAxisNumber("z") == 0) 1 else -1

    transformationReflection(canvas, rx, ry, rz)

    (canvas.getContext("2d") as CanvasRenderingContext2D).render()
}

fun transformationReflection(canvas: HTMLCanvasElement, rx: Int, ry: Int, rz: Int){
    Scene.object3D?.let {

        val r = matrixOf(4, 4,
                rx, 0, 0, 0,
                0, ry, 0, 0,
                0, 0, rz, 0,
                0, 0, 0, 1
        )

        val points = Scene.object3D?.points
        val pointSize = Scene.object3D?.points?.size
        val p = createMatrix(4, pointSize!!) { x, y ->
            when(x){
                0 -> points!![y].x
                1 -> points!![y].y
                2 -> points!![y].z
                3 -> points!![y].w
                else -> {
                    console.log("Error get p[$x,$y]")
                    0.0
                }
            }
        }
        val result: Matrix<Number> = p x r
        result.forEachIndexed { x, y, value ->
            when(x){
                0 -> points?.get(y)?.x = value.toDouble()
                1 -> points?.get(y)?.y = value.toDouble()
                2 -> points?.get(y)?.z = value.toDouble()
                3 -> points?.get(y)?.w = value.toDouble()
                else -> {
                    console.log("Error set p[$x,$y]")
                }
            }
        }
    }
}

fun transformationPerspective(canvas: HTMLCanvasElement){
    val oneOndx = if (getAxisNumber("x") == 0) .0 else 1.0 / getAxisNumber("x")
    val oneOndy = if (getAxisNumber("y") == 0) .0 else 1.0 / getAxisNumber("y")
    val oneOndz = if (getAxisNumber("z") == 0) .0 else 1.0 / getAxisNumber("z")

    transformationPerspective(canvas, oneOndx, oneOndy, oneOndz)

    (canvas.getContext("2d") as CanvasRenderingContext2D).render()
}

fun transformationPerspective(canvas: HTMLCanvasElement, oneOndx: Double, oneOndy: Double, oneOndz: Double){
    Scene.object3D?.let {

        val r = matrixOf(4, 4,
            1.0, 0.0, 0.0, oneOndx,
            0.0, 1.0, 0.0, oneOndy,
            0.0, 0.0, 1.0, oneOndz,
            0.0, 0.0, 0.0, 0.0
        )

        val points = Scene.object3D?.points
        val pointSize = Scene.object3D?.points?.size
        val p = createMatrix(4, pointSize!!) { x, y ->
            when(x){
                0 -> points!![y].x
                1 -> points!![y].y
                2 -> points!![y].z
                3 -> points!![y].w
                else -> {
                    console.log("Error get p[$x,$y]")
                    0.0
                }
            }
        }
        val result: Matrix<Number> = p x r
        result.forEachIndexed { x, y, value ->
            when(x){
                0 -> points?.get(y)?.x = value.toDouble()
                1 -> points?.get(y)?.y = value.toDouble()
                2 -> points?.get(y)?.z = value.toDouble()
                3 -> points?.get(y)?.w = value.toDouble()
                else -> {
                    console.log("Error set p[$x,$y]")
                }
            }
        }
    }
}

fun getAxisNumber(axis: String) : Int {
    val axisInput = document.getElementById("number-${axis}") as HTMLInputElement
    return axisInput.value.toInt()
}

fun loadFile(input: HTMLInputElement, canvas: HTMLCanvasElement) {
    val file = input.files?.get(0)
    file?.let {
        console.log("Load ${file.name}")
        val reader = FileReader()
        reader.onload = { event ->
            console.log("Onload ${file.name}")
            val object3dJson = JSON.parse<Object3dJSON>(reader.result as String)
            val listOfPoinus = arrayListOf<Coordinate4D>()
            object3dJson.points.forEach { point ->
                listOfPoinus.add(Coordinate4D(point[0], point[1], point[2], point[3]))
            }
            val listOfEdges = arrayListOf<Edge>()
            object3dJson.edges.forEach { edge ->
                listOfEdges.add(Edge(edge[0], edge[1]))
            }
            Scene.object3D = Object3D(listOfPoinus, listOfEdges)
            (canvas.getContext("2d") as CanvasRenderingContext2D).render()
        }
        reader.readAsText(file)
    }
}

