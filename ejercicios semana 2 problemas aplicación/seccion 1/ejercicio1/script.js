/*Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de
edad o no.*/

let edad = parseInt(prompt("Ingrese la edad"))
if(edad >= 18){
    console.log("El usuario es mayor de edad")
} else {
    console.log("El usuario es menor de edad")
}