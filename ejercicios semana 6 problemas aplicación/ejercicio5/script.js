/*Usa map para duplicar los números de un array y luego filter para obtener solo los
mayores de 10*/

function duplicarNumeros(arreglo){
    nuevoArreglo = arreglo.map(num => num * 2)
    return nuevoArreglo
}

function obtenerMayores(arreglo){
    arregloDuplicado = duplicarNumeros(arreglo)
    console.log(arregloDuplicado)
    arregloFiltrado = arregloDuplicado.filter(num => num > 10)
    console.log(arregloFiltrado)
    return arregloFiltrado
}
numeros = [2, 5, 10, 15, 4, 23]
obtenerMayores(numeros)