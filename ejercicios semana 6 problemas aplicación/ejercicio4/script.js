/*Dado un array de nombres, conviértelos a mayúsculas y ordénalos alfabéticamente*/

//convertir a mayusculas
function convertirMayusculas(arreglo){
    arregloMayus = []
    for (let index = 0; index < arreglo.length; index++) {
        arregloMayus.push(arreglo[index].toUpperCase())
    }
    return arregloMayus
}

function ordenarAlfabeticamente(arreglo){
    arregloMayusculas = convertirMayusculas(arreglo)
    return arregloMayusculas.sort()

}
arregloNombres = ["val", "dan", "jake"]
arregloNuevo = ordenarAlfabeticamente(arregloNombres)
console.log(arregloNuevo)