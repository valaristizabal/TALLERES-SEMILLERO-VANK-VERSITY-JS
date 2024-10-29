/*Escriba una función la cual reciba 5 notas de un estudiante y genere un mensaje
informando si el estudiante aprobó o no la materia, para que la materia se de como
aprobada el promedio del estudiante debe ser mayor o igual a 3,0.*/

function notasEstudiantes(nota1, nota2, nota3, nota4, nota5){
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5)/5
    if(promedio >=3.0){
        console.log("El estudiante aprobó con un promedio de: " + promedio)
    } else {
        console.log("El estudiante reprobó con un promedio de: " + promedio)
    }
}

let nota1 = parseFloat(prompt("Ingrese la primera nota del estudiante"))
let nota2 = parseFloat(prompt("Ingrese la segunda nota del estudiante"))
let nota3 = parseFloat(prompt("Ingrese la tercera nota del estudiante"))
let nota4 = parseFloat(prompt("Ingrese la cuarta nota del estudiante"))
let nota5 = parseFloat(prompt("Ingrese la quinta nota del estudiante"))

let promedioEstudiante = notasEstudiantes(nota1, nota2, nota3, nota4, nota5)
console.log(promedioEstudiante)