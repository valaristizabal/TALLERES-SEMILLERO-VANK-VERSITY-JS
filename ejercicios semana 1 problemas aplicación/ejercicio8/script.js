/*Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene
siempre un descuento del 10%.*/

const DESCUENTO = 0.10

let precio = parseFloat(prompt("Ingrese el precio del producto: "))
let precioConDescuento = precio - (precio*DESCUENTO)

console.log("El precio del producto con descuento del 10% incluido es: " + precioConDescuento)