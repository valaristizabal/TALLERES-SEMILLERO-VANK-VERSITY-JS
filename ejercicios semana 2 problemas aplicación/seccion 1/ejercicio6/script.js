/*Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.*/

let numero = parseInt(prompt("Ingrese un número"))
if(numero % 5 === 0){
    console.log("El número es divisible entre cinco")
} else {
    console.log("El número no es divisible entre cinco")
}

/*SWITCH-CASE*/

let resultado = numero % 5
switch(resultado){
    case 0:
        console.log("El número es divisible entre cinco")
        break;
    default:
        console.log("El número no es divisible entre cinco")
        break;
}