/*Usa map para convertir todas las cadenas en un array a mayúsculas.
console.log(convertirAMayusculas(["hola", "mundo"])); // ["HOLA", "MUNDO"]*/

function volverMayusculas(array){
    nuevoArreglo = array.map(palabra => palabra.toUpperCase())
    return nuevoArreglo
}

function convertirArray(array, callback){
    console.log(nuevoArreglo = callback(array))
}

convertirArray(["hola", "mundo"], volverMayusculas)