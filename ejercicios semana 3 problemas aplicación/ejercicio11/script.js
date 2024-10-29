/*Escriba una función que al llamarla retorne un número entero aleatorio entre 1 y 20.*/

function numeroAleatorio(){
    let numeroAleatorio = parseInt(Math.random() * 21)
    return numeroAleatorio
}

let numeroGenerado = numeroAleatorio()
console.log(numeroGenerado)