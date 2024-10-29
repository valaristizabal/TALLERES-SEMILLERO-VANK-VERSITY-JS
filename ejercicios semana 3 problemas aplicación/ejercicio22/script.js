/*Escriba un programa que calcule si un estudiante aprueba o reprueba con base en
tres notas. Usa tres funciones:
● calcularPromedio(notas): calcula el promedio de las tres notas.
● esAprobado(promedio): determina si el estudiante aprueba o no (promedio >= 6).
● mostrarResultado(aprobado): imprime si el estudiante aprueba o reprueba.*/

function calcularPromedio(nota1, nota2, nota3){
    let promedio = (nota1+nota2+nota3)/3
    return promedio
}

function esAprobado(promedio){
    let aprobado
    if(promedio>=6){
        aprobado = true
    } else {
        aprobado = false
    }
    return aprobado
}

function mostrarResultado(aprobado){
    if(aprobado == true){
        console.log("El estudiante aprobó")
    } else {
        console.log("El estudiante no aprobó")
    }
}

let promedioEstudiante = calcularPromedio(3, 3.5, 3);
let resultado = esAprobado(promedioEstudiante)
mostrarResultado(resultado)