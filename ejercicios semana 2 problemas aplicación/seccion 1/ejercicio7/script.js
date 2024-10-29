/*Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
condicionales y otra con estructura switch-case.*/

let numero = parseInt(prompt("Ingrese un número del 1 al 15"))

/*CONDICIONALES*/
if(numero === 2 || numero === 3 || numero === 5 || numero === 7 || numero === 11 || numero === 13){
    console.log("El número es primo")
}else {
    console.log("El número no es primo")
}

/*SWITCH CASE*/
switch(numero){
    case 2:
    case 3:
    case 5:
    case 11:
    case 13: 
        console.log("El número es primo")
        break;
    default:
        console.log("El número no es primo")
        break;

}