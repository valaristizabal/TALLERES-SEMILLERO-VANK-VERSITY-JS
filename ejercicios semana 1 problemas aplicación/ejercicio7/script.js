/*Cree un programa que tome el precio de un producto e imprima su precio final al consumidor
con un IVA de 19%*/

const IVA  = 0.19

let precio = parseFloat(prompt("Ingrese el precio del producto: "))
let precioConIva = precio + (precio*IVA)

console.log("El precio del producto con IVA del 19% incluido es: " + precioConIva)