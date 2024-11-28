/*Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne
ordenado de menor a mayor según el valor de tales elementos.*/

function ordenarArreglo(arreglo){
   arreglo.sort((a, b) => a - b)
   console.log(arreglo)
}

let arregloNumeros = [4, 56, 2, 545, 12, 9, 3]
ordenarArreglo(arregloNumeros)