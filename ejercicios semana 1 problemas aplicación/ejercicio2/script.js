/*Cree un programa que lea dos números y muestre su producto, su módulo, su cociente, su
suma y su resta.*/

let num1 = parseInt(prompt("Ingrese el número 1: "))
let num2 = parseInt(prompt("Ingrese el número 2: "))

//producto
let producto = num1*num2
console.log("El producto es: " + producto)

//módulo
let modulo = num1%num2
console.log("El modulo es: " + modulo)

//cociente
let cociente = num1/num2
console.log("El cociente es: " + cociente)

//suma
let suma = num1+num2
console.log("El suma es: " + suma)

//resta
let resta = num1-num2
console.log("El resta es: " + resta)
