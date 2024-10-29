/*Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.*/


let angulo1 = parseFloat(prompt("Ingrese el primer ángulo: "))
let angulo2 = parseFloat(prompt("Ingrese el segundo ángulo: "))
let angulo3 = parseFloat(prompt("Ingrese el tercer ángulo: "))

/*CONDICIONALES*/
if(angulo1 + angulo2 + angulo3 === 180){
    console.log("Los angulos corresponden a un triángulo")
} else {
    console.log("Los ángulos no corresponden a un triángulo")
}

/*SWTICH CASE*/

let suma = angulo1 + angulo2 + angulo3
switch(suma){
    case 180:
        console.log("Los angulos corresponden a un triángulo")
        break;
    default:
        console.log("Los ángulos no corresponden a un triángulo")
        break;
}