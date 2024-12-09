/*Crear un sistema que emita alertas cuando el stock de productos esté bajo.
Crear un arreglo de productos donde cada elemento tenga nombre, stock y umbral.
Crear una función verificarStock que recorra el arreglo y emita una alerta para cada
producto cuyo stock esté por debajo de su umbral.
Crear una función actualizarStock que reciba un nombre de producto y una cantidad
a restar o sumar, y actualice el stock.*/

// Arreglo de productos con su nombre, stock y umbral
let productos = [
    { nombre: "Arroz", stock: 50, umbral: 20 },
    { nombre: "Azúcar", stock: 15, umbral: 10 },
    { nombre: "Aceite", stock: 5, umbral: 10 },
    { nombre: "Sal", stock: 30, umbral: 15 },
    { nombre: "Harina", stock: 8, umbral: 5 }
];

// Función para verificar el stock y emitir alertas
function verificarStock() {
    productos.forEach(producto => {
        if (producto.stock < producto.umbral) {
            console.log(`¡Alerta! El producto ${producto.nombre} tiene un stock bajo. Stock actual: ${producto.stock}`);
        }
    });
}

// Función para actualizar el stock de un producto
function actualizarStock(nombreProducto, cantidad) {
    const producto = productos.find(p => p.nombre.toLowerCase() === nombreProducto.toLowerCase());
    if (producto) {
        producto.stock += cantidad;
        console.log(`El stock del producto ${producto.nombre} ha sido actualizado. Nuevo stock: ${producto.stock}`);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Llamadas de prueba

// Verificar el stock
verificarStock();

// Actualizar stock de un producto
actualizarStock("Aceite", 10); // Aumentamos el stock de Aceite en 10 unidades

// Verificar el stock nuevamente
verificarStock();
