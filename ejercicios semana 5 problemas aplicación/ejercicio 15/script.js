/*Cree un programa el cual facilite a un cliente manejar su inventario de ropa, cada objeto
representa un producto el cual tendrá las siguientes propiedades: nombre, categoría precio,
cantidad y código.
El usuario necesita poder agregar, editar, eliminar y visualizar cada uno de los
productos y también tener otra opción la cual le permite visualizar todos sus
productos.
Al momento de agregar un nuevo producto se debe validar que el código del
producto sea único y no se repita con algún otro, en dado caso que pase esto se le
debe notificar al usuario.*/

class Inventario {
    constructor() {
        // Arreglo donde se almacenarán los productos
        this.productos = [];
    }

    // Función para agregar un nuevo producto
    agregarProducto(nombre, categoria, precio, cantidad, codigo) {
        // Validar si el código del producto ya existe
        const productoExistente = this.productos.find(producto => producto.codigo === codigo);
        if (productoExistente) {
            console.log("El código del producto ya existe. Intenta con otro código.");
            return;
        }

        // Crear un nuevo producto y agregarlo al inventario
        const nuevoProducto = { nombre, categoria, precio, cantidad, codigo };
        this.productos.push(nuevoProducto);
        console.log("Producto agregado exitosamente.");
    }

    // Función para editar un producto
    editarProducto(codigo, nuevoNombre, nuevaCategoria, nuevoPrecio, nuevaCantidad) {
        const producto = this.productos.find(producto => producto.codigo === codigo);
        if (producto) {
            producto.nombre = nuevoNombre || producto.nombre;
            producto.categoria = nuevaCategoria || producto.categoria;
            producto.precio = nuevoPrecio || producto.precio;
            producto.cantidad = nuevaCantidad || producto.cantidad;
            console.log("Producto actualizado exitosamente.");
        } else {
            console.log("Producto no encontrado.");
        }
    }

    // Función para eliminar un producto
    eliminarProducto(codigo) {
        const indice = this.productos.findIndex(producto => producto.codigo === codigo);
        if (indice !== -1) {
            this.productos.splice(indice, 1);
            console.log("Producto eliminado exitosamente.");
        } else {
            console.log("Producto no encontrado.");
        }
    }

    // Función para visualizar los productos
    visualizarProducto(codigo) {
        const producto = this.productos.find(producto => producto.codigo === codigo);
        if (producto) {
            console.log(`Producto encontrado:`);
            console.log(`Nombre: ${producto.nombre}`);
            console.log(`Categoría: ${producto.categoria}`);
            console.log(`Precio: $${producto.precio}`);
            console.log(`Cantidad: ${producto.cantidad}`);
            console.log(`Código: ${producto.codigo}`);
        } else {
            console.log("Producto no encontrado.");
        }
    }

    // Función para mostrar todos los productos
    mostrarProductos() {
        if (this.productos.length === 0) {
            console.log("No hay productos en el inventario.");
        } else {
            console.log("Productos en inventario:");
            this.productos.forEach(producto => {
                console.log(`Nombre: ${producto.nombre}, Categoría: ${producto.categoria}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}, Código: ${producto.codigo}`);
            });
        }
    }
}

// Crear una instancia del inventario
const miInventario = new Inventario();

// Agregar productos
miInventario.agregarProducto("Camisa", "Ropa casual", 15.99, 50, "A001");
miInventario.agregarProducto("Pantalón", "Ropa casual", 25.99, 30, "A002");
miInventario.agregarProducto("Chaqueta", "Ropa de abrigo", 45.00, 20, "A003");

// Intentar agregar un producto con un código repetido
miInventario.agregarProducto("Zapatos", "Calzado", 50.00, 10, "A001");  // Código repetido

// Visualizar un producto
miInventario.visualizarProducto("A002");

// Editar un producto
miInventario.editarProducto("A003", "Chaqueta de invierno", "Ropa de abrigo", 50.00, 25);

// Eliminar un producto
miInventario.eliminarProducto("A002");

// Mostrar todos los productos
miInventario.mostrarProductos();
