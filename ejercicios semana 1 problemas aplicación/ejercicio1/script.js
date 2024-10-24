/*Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.*/

let edad = parseInt(prompt("Ingrese la edad: "))
let rangoAnios = parseInt(prompt("Ingrese dentro de cuantos años desea saber que edad tendrá"))

let resultado = edad + rangoAnios
console.log("Dentro de " + rangoAnios + " años usted tendrá " + resultado + " años")