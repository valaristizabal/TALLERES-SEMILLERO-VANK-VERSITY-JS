/*Cree un programa que genere un número aleatorio dentro de un rango específico.*/

let rangoMin = parseInt(prompt("Ingrese el rango mínimo"))
let rangoMax = parseInt(prompt("Ingrese el rango máximo"))

let numAleatorio = Math.floor(Math.random() * (rangoMax - rangoMin + 1)) + rangoMin;

console.log("el número mínimo es: " + rangoMin +", el rango máximo es: " + rangoMax +" y el número aleatorio es: " + numAleatorio) 