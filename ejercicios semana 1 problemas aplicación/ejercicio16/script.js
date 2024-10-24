/* Cree un programa que dados a, b y c, use la fórmula general para resolver la ecuación
cuadrática correspondiente.
Somos el futuro*/

let a = parseInt(prompt("Ingrese a"))
let b = parseInt(prompt("Ingrese b"))
let c = parseInt(prompt("Ingrese c"))

let formulaGeneral = (-b - Math.sqrt((b**2) - (4*a*c)))/(2*a)

console.log("El resultado de la formula general es: " + formulaGeneral)