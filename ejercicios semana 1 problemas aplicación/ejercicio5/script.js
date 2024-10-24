/*Cree un programa que tome el radio de un círculo e imprima su área y perímetro*/

let radio = parseFloat(prompt("Ingrese el radio de un círculo: "))

let area = Math.PI*radio**2
console.log("El área del circulo es: " + area)

let perimetro = radio*2 * Math.PI
console.log("El perimetro del circulo es: " + perimetro)