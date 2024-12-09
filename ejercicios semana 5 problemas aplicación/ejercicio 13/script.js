/*Cree un programa que cumpla con los siguientes requerimientos: En una clínica, se
requiere un programa donde el usuario pueda consultar el día de su cita mediante su
documento. La cita debe tener día y fecha. Si el usuario consulta, el programa debe
mostrarle sus nombres, seguidos del día y hora de su cita. Una vez hecha la consulta, el
programa le debe mostrar al usuario un mensaje preguntándole si desea cambiar el día ó
fecha de su cita, de ser así el programa debe realizar tal cambio y mostrarle al usuario que
el cambio solicitado ha sido exitoso.
*/

// Arreglo de pacientes con sus documentos, nombres y citas (día y hora)
let citas = [
    { documento: 1094889151, nombres: "Daniela", apellido: "Gomez", cita: { dia: "Lunes", fecha: "2024-12-10", hora: "10:00 AM" } },
    { documento: 987654321, nombres: "Esteban", apellido: "Martínez", cita: { dia: "Martes", fecha: "2024-12-11", hora: "11:00 AM" } },
    { documento: 112233445, nombres: "Valeria", apellido: "Hernandez", cita: { dia: "Miércoles", fecha: "2024-12-12", hora: "9:00 AM" } },
    { documento: 556677889, nombres: "Jefri", apellido: "Sánchez", cita: { dia: "Jueves", fecha: "2024-12-13", hora: "2:00 PM" } },
    { documento: 667788990, nombres: "Camila", apellido: "López", cita: { dia: "Viernes", fecha: "2024-12-14", hora: "3:00 PM" } }
];

// Función para consultar la cita de un paciente
function consultarCita(documento) {
    // Buscar al paciente por documento
    const paciente = citas.find(p => p.documento === documento);
    
    if (paciente) {
        // Mostrar los detalles de la cita
        console.log(`Nombre: ${paciente.nombres} ${paciente.apellido}`);
        console.log(`Cita: ${paciente.cita.dia}, ${paciente.cita.fecha}, ${paciente.cita.hora}`);
        
        // Preguntar al usuario si desea cambiar la cita
        let cambiar = prompt("¿Desea cambiar el día o fecha de su cita? (sí/no)").toLowerCase();
        
        if (cambiar === "si") {
            // Solicitar nuevo día y fecha
            let nuevoDia = prompt("Ingrese el nuevo día de su cita (ejemplo: Lunes):");
            let nuevaFecha = prompt("Ingrese la nueva fecha de su cita (formato: YYYY-MM-DD):");
            let nuevaHora = prompt("Ingrese la nueva hora de su cita (ejemplo: 10:00 AM):");
            
            // Actualizar la cita
            paciente.cita.dia = nuevoDia;
            paciente.cita.fecha = nuevaFecha;
            paciente.cita.hora = nuevaHora;
            
            console.log("El cambio de cita ha sido exitoso.");
            console.log(`Nueva cita: ${paciente.cita.dia}, ${paciente.cita.fecha}, ${paciente.cita.hora}`);
        } else {
            console.log("No se ha realizado ningún cambio.");
        }
    } else {
        console.log("Documento no encontrado.");
    }
}

// Solicitar al usuario el documento para realizar la consulta
let documentoUsuario = parseInt(prompt("Ingrese su documento de identidad:"));
consultarCita(documentoUsuario);
