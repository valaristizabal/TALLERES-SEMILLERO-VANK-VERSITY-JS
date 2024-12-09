/*Crear un sistema para administrar empleados y sus horas trabajadas.Crear un arreglo
empleados donde cada empleado tenga nombre, id, y horasTrabajadas (un arreglo de
horas).Crear una función agregarHoras que permita agregar horas trabajadas a un
empleado.
Crear una función calcularPago que calcule el salario semanal basado en una tarifa
fija.
Crear una función empleadosConHorasExtras que devuelva los empleados que
trabajaron más de 40 horas en una semana.
*/

class SistemaEmpleados {
    constructor() {
        // Arreglo que contiene los empleados
        this.empleados = [];
    }

    // Función para agregar un empleado
    agregarEmpleado(nombre, id) {
        const empleado = { nombre, id, horasTrabajadas: [] };
        this.empleados.push(empleado);
        console.log(`Empleado ${nombre} agregado exitosamente.`);
    }

    // Función para agregar horas trabajadas a un empleado
    agregarHoras(idEmpleado, horas) {
        const empleado = this.empleados.find(empleado => empleado.id === idEmpleado);
        if (empleado) {
            empleado.horasTrabajadas.push(...horas);  // Agrega las horas al arreglo de horas trabajadas
            console.log(`Horas agregadas al empleado ${empleado.nombre}.`);
        } else {
            console.log("Empleado no encontrado.");
        }
    }

    // Función para calcular el pago semanal de un empleado
    calcularPago(idEmpleado, tarifa) {
        const empleado = this.empleados.find(empleado => empleado.id === idEmpleado);
        if (empleado) {
            // Calcular las horas totales trabajadas
            const totalHoras = empleado.horasTrabajadas.reduce((acum, horas) => acum + horas, 0);
            const pago = totalHoras * tarifa;  // Pago basado en la tarifa por hora
            console.log(`El pago semanal de ${empleado.nombre} (ID: ${empleado.id}) es: $${pago}`);
        } else {
            console.log("Empleado no encontrado.");
        }
    }

    // Función para obtener los empleados que trabajaron más de 40 horas en la semana
    empleadosConHorasExtras() {
        const empleadosExtras = this.empleados.filter(empleado => {
            const totalHoras = empleado.horasTrabajadas.reduce((acum, horas) => acum + horas, 0);
            return totalHoras > 40;
        });
        
        if (empleadosExtras.length > 0) {
            console.log("Empleados con horas extras (más de 40 horas):");
            empleadosExtras.forEach(empleado => {
                console.log(`${empleado.nombre} (ID: ${empleado.id})`);
            });
        } else {
            console.log("No hay empleados con horas extras.");
        }
    }
}

// Crear una instancia del sistema
const sistema = new SistemaEmpleados();

// Agregar empleados
sistema.agregarEmpleado("Daniela", 101);
sistema.agregarEmpleado("Carlos", 102);
sistema.agregarEmpleado("Maria", 103);

// Agregar horas trabajadas
sistema.agregarHoras(101, [8, 8, 8, 8, 8]);  // Daniela trabajó 8 horas cada día de la semana
sistema.agregarHoras(102, [9, 9, 9, 9, 9]);  // Carlos trabajó 9 horas cada día de la semana
sistema.agregarHoras(103, [7, 7, 7, 7, 7]);  // Maria trabajó 7 horas cada día de la semana

// Calcular el pago semanal de los empleados con una tarifa de 2000 por hora
sistema.calcularPago(101, 2000);  // Daniela
sistema.calcularPago(102, 2000);  // Carlos
sistema.calcularPago(103, 2000);  // Maria

// Obtener empleados con horas extras (más de 40 horas)
sistema.empleadosConHorasExtras();
