/*Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre
esa cantidad*/

let cantidad = parseFloat(prompt("Ingrese la cantidad"))
let porcentaje = parseInt(prompt("Ingrese el porcentaje que le calculará a dicha cantidad"))

let cantidadConPorcentaje = (porcentaje/100) * cantidad

console.log("El resultado es: " + cantidadConPorcentaje)