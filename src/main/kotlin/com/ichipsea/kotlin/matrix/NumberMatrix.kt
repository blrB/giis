package com.ichipsea.kotlin.matrix

operator fun <M: Number, N: Number> Matrix<M>.plus(other: Matrix<N>): Matrix<Double> {
    if (rows !== other.rows || cols !== other.cols)
        throw IllegalArgumentException("Matrices not match")

    return mapIndexed { x, y, value -> value.toDouble() + other[x, y].toDouble() }
}

operator fun <N: Number> Matrix<N>.unaryMinus(): Matrix<Double> {
    return map { -it.toDouble() }
}

operator fun <M: Number, N: Number> Matrix<M>.minus(other: Matrix<N>): Matrix<Double> {
    return this + (-other)
}

operator fun <M: Number, N: Number> Matrix<M>.times(other: Matrix<N>): Matrix<Double> {
    if (rows !== other.rows || cols !== other.cols)
        throw IllegalArgumentException("Matrices not match")

    return mapIndexed { x, y, value -> value.toDouble() * other[x, y].toDouble() }
}

operator fun <M: Number> Matrix<M>.times(other: Number): Matrix<Double> {
    return map { it.toDouble() * other.toDouble() }
}

operator fun <M: Number> Number.times(other: Matrix<M>): Matrix<Double> {
    return other * this
}
infix fun <M: Number, N: Number> Matrix<M>.x(other: Matrix<N>): Matrix<Double> {
    if (other.rows !== cols)
        throw IllegalArgumentException("Matrices not match")

    return createMatrix(other.cols, rows) { x, y ->
        var value = .0
        for (i in 0..(other.rows-1))
            value += other[x, i].toDouble() * this[i, y].toDouble()
        value
    }
}
