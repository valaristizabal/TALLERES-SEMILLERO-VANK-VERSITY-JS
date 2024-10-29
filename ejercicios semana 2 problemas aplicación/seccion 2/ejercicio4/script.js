/*Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use
funciones.*/


function calcularPromedio(cantidadEstudiantes){
    for (let index = 0; index < cantidadEstudiantes; index++) {
        let notaUno = parseFloat(prompt("Ingrese la primera nota del estudiante " + (index+1)))
        let notaDos = parseFloat(prompt("Ingrese la segunda nota del estudiante " + (index+1)))
        let notaTres = parseFloat(prompt("Ingrese la tercera nota del estudiante " + (index+1)))

        let promedio = (notaUno + notaDos + notaTres)/3
        console.log("el estudiante número " + (index+1) + " Tiene un promedio de " + promedio)
        
    }
}

let estudiantes = parseInt(prompt("Ingrese cuantos estudiantes hay"))
calcularPromedio(estudiantes)