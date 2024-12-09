/* Cree un programa el cual ayude a gestionar el registro de vehículos en un parqueadero.
Cree un arreglo el cual contenga objetos de tipo vehiculo en su interior, estos vehículos
tendrán como propiedad, marca, placa y hora de entrada, El programa debe brinda la
posibilidad de ingresar nuevos vehiculos al arreglo, y eliminarlos, adicionalmente dede
realizar una función la cual determine el tiempo que paso el vehiculo estacionado y el valor
que debe pagar en el parqueadero, el valor de la hora tiene un costo de 2.500 pesos.
*/

class Parqueadero {
    constructor() {
        // Arreglo donde se almacenarán los vehículos
        this.vehiculos = [];
    }

    // Función para agregar un nuevo vehículo
    agregarVehiculo(marca, placa, horaEntrada) {
        // Crear un nuevo objeto de vehículo
        const vehiculo = { marca, placa, horaEntrada };
        // Agregar el vehículo al arreglo
        this.vehiculos.push(vehiculo);
        console.log("Vehículo agregado exitosamente.");
    }

    // Función para eliminar un vehículo por su placa
    eliminarVehiculo(placa) {
        const indice = this.vehiculos.findIndex(vehiculo => vehiculo.placa === placa);
        if (indice !== -1) {
            this.vehiculos.splice(indice, 1);
            console.log(`Vehículo con placa ${placa} eliminado exitosamente.`);
        } else {
            console.log("Vehículo no encontrado.");
        }
    }

    // Función para calcular el tiempo y el valor a pagar por el vehículo
    calcularValor(placa, horaSalida) {
        const vehiculo = this.vehiculos.find(vehiculo => vehiculo.placa === placa);
        if (vehiculo) {
            // Calcular la diferencia entre la hora de entrada y la hora de salida
            const tiempoEstacionado = this.calcularTiempo(vehiculo.horaEntrada, horaSalida);
            const valor = tiempoEstacionado * 2500;  // Costo por hora es 2.500 pesos
            console.log(`Vehículo con placa ${placa}:`);
            console.log(`Tiempo estacionado: ${tiempoEstacionado} horas`);
            console.log(`Valor a pagar: $${valor}`);
        } else {
            console.log("Vehículo no encontrado.");
        }
    }

    // Función para calcular el tiempo estacionado en horas
    calcularTiempo(horaEntrada, horaSalida) {
        const [horaEntradaH, minutoEntrada] = horaEntrada.split(":").map(Number);
        const [horaSalidaH, minutoSalida] = horaSalida.split(":").map(Number);

        const entradaTotalMinutos = horaEntradaH * 60 + minutoEntrada;
        const salidaTotalMinutos = horaSalidaH * 60 + minutoSalida;

        const diferenciaMinutos = salidaTotalMinutos - entradaTotalMinutos;
        const tiempoEstacionado = Math.ceil(diferenciaMinutos / 60);  // Redondear hacia arriba si no es exacto
        return tiempoEstacionado;
    }

    // Función para mostrar todos los vehículos en el parqueadero
    mostrarVehiculos() {
        if (this.vehiculos.length === 0) {
            console.log("No hay vehículos en el parqueadero.");
        } else {
            console.log("Vehículos en el parqueadero:");
            this.vehiculos.forEach(vehiculo => {
                console.log(`Marca: ${vehiculo.marca}, Placa: ${vehiculo.placa}, Hora de Entrada: ${vehiculo.horaEntrada}`);
            });
        }
    }
}

// Crear una instancia del parqueadero
const parqueadero = new Parqueadero();

// Agregar vehículos al parqueadero
parqueadero.agregarVehiculo("Toyota", "ABC123", "08:00");
parqueadero.agregarVehiculo("Nissan", "XYZ456", "09:30");
parqueadero.agregarVehiculo("Chevrolet", "DEF789", "10:15");

// Mostrar los vehículos en el parqueadero
parqueadero.mostrarVehiculos();

// Calcular el valor a pagar por un vehículo
parqueadero.calcularValor("ABC123", "10:30");  // Vehículo con placa ABC123, hora de salida a las 10:30
parqueadero.calcularValor("XYZ456", "12:00");  // Vehículo con placa XYZ456, hora de salida a las 12:00

// Eliminar un vehículo del parqueadero
parqueadero.eliminarVehiculo("DEF789");

// Mostrar los vehículos después de eliminar uno
parqueadero.mostrarVehiculos();
