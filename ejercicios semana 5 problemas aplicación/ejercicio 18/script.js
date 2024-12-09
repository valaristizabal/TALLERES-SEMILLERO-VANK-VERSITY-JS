/*Cree un programa el cual ayude a gestionar las reservas de habitaciones de un hotel.
Crear un arreglo habitaciones donde cada habitación tenga numero, tipo(Suite,
Doble, Normal), disponible (booleano), y reservas (arreglo de objetos con cliente y
diasReservados).
Crear una función reservarHabitación que permita reservar una habitación si está
disponible.
Crear una función cancelarReserva para cancelar la reserva de un cliente específico.
Crear una función habitacionesDisponibles que devuelva un listado de habitaciones
disponibles por tipo.*/

class SistemaHotel {
    constructor() {
        // Arreglo de habitaciones
        this.habitaciones = [
            { numero: 101, tipo: "Suite", disponible: true, reservas: [] },
            { numero: 102, tipo: "Doble", disponible: true, reservas: [] },
            { numero: 103, tipo: "Normal", disponible: true, reservas: [] },
            { numero: 104, tipo: "Suite", disponible: true, reservas: [] },
            { numero: 105, tipo: "Doble", disponible: true, reservas: [] },
            { numero: 106, tipo: "Normal", disponible: true, reservas: [] }
        ];
    }

    // Función para reservar una habitación
    reservarHabitación(numeroHabitacion, cliente, diasReservados) {
        // Buscar la habitación por su número
        const habitacion = this.habitaciones.find(habitacion => habitacion.numero === numeroHabitacion);
        
        if (habitacion) {
            if (habitacion.disponible) {
                // Realizar la reserva
                habitacion.reservas.push({ cliente, diasReservados });
                habitacion.disponible = false;
                console.log(`Reserva exitosa para el cliente ${cliente} en la habitación ${numeroHabitacion}.`);
            } else {
                console.log(`La habitación ${numeroHabitacion} no está disponible.`);
            }
        } else {
            console.log("Habitación no encontrada.");
        }
    }

    // Función para cancelar una reserva
    cancelarReserva(numeroHabitacion, cliente) {
        const habitacion = this.habitaciones.find(habitacion => habitacion.numero === numeroHabitacion);

        if (habitacion) {
            const reservaIndex = habitacion.reservas.findIndex(reserva => reserva.cliente === cliente);

            if (reservaIndex !== -1) {
                // Eliminar la reserva
                habitacion.reservas.splice(reservaIndex, 1);
                habitacion.disponible = true;
                console.log(`Reserva cancelada para el cliente ${cliente} en la habitación ${numeroHabitacion}.`);
            } else {
                console.log(`No se encontró reserva para el cliente ${cliente} en la habitación ${numeroHabitacion}.`);
            }
        } else {
            console.log("Habitación no encontrada.");
        }
    }

    // Función para mostrar las habitaciones disponibles por tipo
    habitacionesDisponibles(tipo) {
        const habitacionesDisponibles = this.habitaciones.filter(habitacion => 
            habitacion.tipo === tipo && habitacion.disponible
        );

        if (habitacionesDisponibles.length > 0) {
            console.log(`Habitaciones ${tipo} disponibles:`);
            habitacionesDisponibles.forEach(habitacion => {
                console.log(`Número de habitación: ${habitacion.numero}`);
            });
        } else {
            console.log(`No hay habitaciones ${tipo} disponibles.`);
        }
    }
}

// Crear una instancia del sistema de hotel
const sistemaHotel = new SistemaHotel();

// Realizar reservas
sistemaHotel.reservarHabitación(101, "Juan Perez", 5);  // Reserva una suite
sistemaHotel.reservarHabitación(102, "Camila Ruiz", 3);  // Reserva una habitación doble
sistemaHotel.reservarHabitación(106, "Esteban Gómez", 7);  // Reserva una habitación normal

// Cancelar reserva
sistemaHotel.cancelarReserva(102, "Camila Ruiz");  // Cancelar reserva de Camila en la habitación doble

// Ver habitaciones disponibles por tipo
sistemaHotel.habitacionesDisponibles("Suite");
sistemaHotel.habitacionesDisponibles("Doble");
sistemaHotel.habitacionesDisponibles("Normal");
