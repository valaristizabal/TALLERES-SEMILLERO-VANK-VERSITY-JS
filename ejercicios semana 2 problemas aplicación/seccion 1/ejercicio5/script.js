/*Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case.*/

let numero = parseInt(prompt("Ingrese un número"))
/*CONDICIONALES*/
if(numero % 2 === 0){
    console.log("El número es par")
} else {
    console.log("El número es impar")
}

/*SWITCH-CASE*/

let resultado = numero % 2
switch(resultado){
    case 0:
        console.log("El número es par")
        break;
    default:
        console.log("El número es impar")
        break;
}