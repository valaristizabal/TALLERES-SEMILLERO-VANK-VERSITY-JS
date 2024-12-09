/*Cree un programa que pida al usuario el nombre de un producto existente en una tienda,
luego, que le muestre el precio del producto. El usuario debe poder elegir de entre por lo
menos cinco productos.
*/


let productos = {
    "papa": 3000,
    "arroz": 2000,
    "aceite": 4000,
    "lentejas": 5000,
    "azúcar": 1500
};


let productoElegido = prompt("¿Qué producto deseas comprar? (Elige entre: Papa, Arroz, Aceite, Lentejas, Azúcar)");

// Convertir el nombre del producto ingresado a minúsculas
productoElegido = productoElegido.toLowerCase();


if (productos[productoElegido]) {

    alert(`El precio de ${productoElegido.charAt(0).toUpperCase() + productoElegido.slice(1)} es $${productos[productoElegido]}`);
} else {
    
    alert("El producto ingresado no está disponible en nuestra tienda.");
}
