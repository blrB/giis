package giis

class Array4D<T>(val x: Int, val y: Int, val z: Int, val a: Int, val array: Array<Array<Array<Array<T>>>>) {

    companion object {

        inline operator fun <reified T> invoke() = Array4D(0, 0, 0, 0,
                Array(0, { Array(0, { Array(0, { emptyArray<T>() }) }) }))

        inline operator fun <reified T> invoke(x: Int, y: Int, z: Int, a: Int) =
                Array4D(x, y, z, a, Array(x, { Array(y, { Array(z, { arrayOfNulls<T>(a) }) }) }))

    }

    operator fun get(x: Int, y: Int, z: Int, a: Int): T {
        return array[x][y][z][a]
    }

    operator fun set(x: Int, y: Int, z: Int, a: Int, t: T) {
        if (x >= 0 && y >= 0 && z >= 0 && a >= 0 && x < this.x && y < this.y && z < this.z && a < this.a){
            array[x][y][z][a] = t
        }
    }

    inline fun forEach(operation: (T) -> Unit) {
        array.forEach { it.forEach { it.forEach { it.forEach { operation.invoke(it) } } } }
    }

    inline fun forEachIndexed(operation: (x: Int, y: Int, z: Int, a: Int, T) -> Unit) {
        array.forEachIndexed { x, xi ->
            xi.forEachIndexed { y, yi ->
                yi.forEachIndexed { z, zi ->
                    zi.forEachIndexed { a, ai ->
                        operation.invoke(x, y, z, a, ai)
                    }
                }
            }
        }
    }
}