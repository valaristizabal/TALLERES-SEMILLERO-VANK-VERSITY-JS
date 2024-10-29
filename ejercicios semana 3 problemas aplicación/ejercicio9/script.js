/*Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad
de vocales que contiene la cadena*/

function cantidadVocales(cadena){
    let contadorVocales = 0
    for (let index = 0; index < cadena.length; index++) {
        switch(cadena[index]){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                contadorVocales++
        }
    }
    return contadorVocales
}

console.log(cantidadVocales("valeria"))