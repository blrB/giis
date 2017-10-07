package giis

import com.ichipsea.kotlin.matrix.*
import giis.object3d.Coordinate4D
import giis.object3d.Cube
import giis.object3d.Object3dJSON
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLInputElement
import org.w3c.files.FileReader
import org.w3c.files.get
import kotlin.browser.document
import kotlin.js.Math
import kotlin.js.Math.PI

fun initLab4() {
    console.log("Init lab 4")

    val canvas = document.getElementById("canvas") as HTMLCanvasElement
    val fileInput = document.getElementById("file") as HTMLInputElement
    fileInput.addEventListener("change", {
        loadFile(fileInput, canvas)
    })
    console.log("Init fileInput")

    val buttonMoving = document.getElementById("moving") as HTMLButtonElement
    buttonMoving.onclick = {
        transformationMove(canvas)
    }
    console.log("Init buttonMoving")

    val buttonRotating = document.getElementById("rotating") as HTMLButtonElement
    buttonRotating.onclick = {
        transformationRotating(canvas)
    }
    console.log("Init buttonRotating")

    val buttonScaling = document.getElementById("scaling") as HTMLButtonElement
    buttonScaling.onclick = {
        transformationScaling(canvas)
    }
    console.log("Init buttonScaling")

    val buttonReflection = document.getElementById("reflection") as HTMLButtonElement
    buttonReflection.onclick = {
        transformationReflection(canvas)
    }
    console.log("Init buttonReflection")

    val buttonPerspective = document.getElementById("perspective") as HTMLButtonElement
    buttonPerspective.onclick = {
        transformationPerspective(canvas)
    }
    console.log("Init buttonPerspective")


}

fun transformationMove(canvas: HTMLCanvasElement){
    Scene.object3D?.let {
        val dx = getAxisNumber("x")
        val dy = getAxisNumber("y")
        val dz = getAxisNumber("z")

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
        Scene.object3D?.draw(canvas)
    }
}

fun transformationRotating(canvas: HTMLCanvasElement){
    Scene.object3D?.let {
        val rx = getAxisNumber("x")
        val ry = getAxisNumber("y")
        val rz = getAxisNumber("z")

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
        Scene.object3D?.draw(canvas)
    }
}


fun transformationScaling(canvas: HTMLCanvasElement){
    Scene.object3D?.let {
        val sx = if (getAxisNumber("x") == 0) 1 else getAxisNumber("x")
        val sy = if (getAxisNumber("y") == 0) 1 else getAxisNumber("y")
        val sz = if (getAxisNumber("z") == 0) 1 else getAxisNumber("z")

        val s = matrixOf(4, 4,
                sx, 0, 0, 0,
                0, sy, 0, 0,
                0, 0, sz, 0,
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
        Scene.object3D?.draw(canvas)
    }
}

fun transformationReflection(canvas: HTMLCanvasElement){
    Scene.object3D?.let {
        val rx = if (getAxisNumber("x") == 0) 1 else -1
        val ry = if (getAxisNumber("y") == 0) 1 else -1
        val rz = if (getAxisNumber("z") == 0) 1 else -1

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
        Scene.object3D?.draw(canvas)
    }
}

fun transformationPerspective(canvas: HTMLCanvasElement){
    Scene.object3D?.let {
        val oneOndx = if (getAxisNumber("x") == 0) .0 else 1.0 / getAxisNumber("x")
        val oneOndy = if (getAxisNumber("y") == 0) .0 else 1.0 / getAxisNumber("y")
        val oneOndz = if (getAxisNumber("z") == 0) .0 else 1.0 / getAxisNumber("z")

        val r = matrixOf(4, 4,
            1.0, 0.0, 0.0, oneOndy,
            0.0, 1.0, 0.0, oneOndx,
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
        Scene.object3D?.draw(canvas)
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
            when(object3dJson.type){
                "cube" -> Scene.object3D = Cube(listOfPoinus)
                else -> {
                    console.log("Not correct type")
                }
            }
            Scene.object3D!!.draw(canvas)
        }
        reader.readAsText(file)
    }
}

