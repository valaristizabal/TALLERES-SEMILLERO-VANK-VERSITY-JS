/* Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los
resultados*/

let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;

let sumaResultados = dado1+dado2
console.log("El dado 1 es: " + dado1 + ", el dado 2 es: " + dado2 + " y la suma de los dados es: " + sumaResultados)