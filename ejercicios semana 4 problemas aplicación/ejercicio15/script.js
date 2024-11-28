/*Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado
alfabéticamente*/

/*Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne
ordenado de menor a mayor según el valor de tales elementos.*/

function ordenarArreglo(arreglo){
   arreglo.sort()
   console.log(arreglo)
}

let arregloLetras = ['a', 'h', 'c', 'i', 'x', 'm']
ordenarArreglo(arregloLetras)