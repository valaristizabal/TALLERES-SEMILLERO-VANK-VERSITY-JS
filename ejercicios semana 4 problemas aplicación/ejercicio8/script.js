/*Cree una función que reciba como argumento el siguiente arreglo [2, 5, 7, 9] y lo
recorra, imprimiendo cada uno de sus elementos.*/ 

let arreglo = [2, 5, 7, 9]

function recorrerArreglo(arreglo){
    for (let index = 0; index < arreglo.length; index++) {
        console.log(arreglo[index])
        
    }
}

recorrerArreglo(arreglo)