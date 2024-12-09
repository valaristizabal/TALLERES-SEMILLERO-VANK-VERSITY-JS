/*Cree un programa el cual cumpla con los siguientes requerimientos, muestre la lista de
inscritos y permita actualizar sus calificaciones.
● Crear un arreglo estudiantes donde cada elemento sea un objeto con
nombre, edad, matrícula y calificaciones (un arreglo de números).
● Crear una función calcularPromedio que reciba una matrícula y devuelva el
promedio de calificaciones de ese estudiante.
● Crear una función actualizarCalificaciones que reciba la matrícula y un nuevo
arreglo de calificaciones, y actualice la información del estudiante
correspondiente.
*/


let estudiantes = [
    { nombre: "Daniela", edad: 20, matricula: 12345, calificaciones: [8, 7, 9, 6, 8] },
    { nombre: "Valeria", edad: 22, matricula: 12346, calificaciones: [9, 9, 8, 7, 10] },
    { nombre: "Esteban", edad: 21, matricula: 12347, calificaciones: [6, 6, 5, 7, 6] },
    { nombre: "Jefri", edad: 23, matricula: 12348, calificaciones: [7, 8, 6, 7, 6] },
    { nombre: "Camila", edad: 19, matricula: 12349, calificaciones: [9, 8, 9, 10, 9] }
];


function calcularPromedio(matricula) {
    
    const estudiante = estudiantes.find(est => est.matricula === matricula);
    
    if (estudiante) {
        
        const promedio = estudiante.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0) / estudiante.calificaciones.length;
        return promedio;
    } else {
        return "Estudiante no encontrado.";
    }
}


function actualizarCalificaciones(matricula, nuevasCalificaciones) {
    
    const estudiante = estudiantes.find(est => est.matricula === matricula);
    
    if (estudiante) {
        
        estudiante.calificaciones = nuevasCalificaciones;
        console.log("Calificaciones actualizadas exitosamente.");
    } else {
        console.log("Estudiante no encontrado.");
    }
}


function mostrarEstudiantes() {
    estudiantes.forEach(est => {
        console.log(`Nombre: ${est.nombre}, Matrícula: ${est.matricula}, Calificaciones: ${est.calificaciones}`);
    });
}


console.log("Lista de estudiantes y sus calificaciones:");
mostrarEstudiantes();


let matriculaEstudiante = 12345;  
console.log(`\nPromedio de calificaciones de ${matriculaEstudiante}: ${calcularPromedio(matriculaEstudiante)}`);

matriculaEstudiante = 12345;
let nuevasCalificaciones = [10, 10, 9, 8, 9];
actualizarCalificaciones(matriculaEstudiante, nuevasCalificaciones);


console.log("\nLista de estudiantes y sus calificaciones después de la actualización:");
mostrarEstudiantes();
