/*Cree un programa que calcule el promedio de 10 números.*/

let sumaNumeros = 0
for (let index = 1; index < 11; index++) {
    let numero = parseFloat(prompt("Ingrese el número " + index))
    sumaNumeros+=numero
}

let promedio = sumaNumeros/10
console.log("El promedio es de " + promedio)