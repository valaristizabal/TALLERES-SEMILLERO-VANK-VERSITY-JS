/*Usa every para verificar si todos los números en un array son impares o pares.*/

let pares = [2, 4, 6, 8]
let impares = [3, 5, 7, 9]

function validarImpares(array){
    arregloImpares = array.every(numero => 
        numero % 2 !== 0 
    )
    console.log(arregloImpares)
}

validarImpares(impares)