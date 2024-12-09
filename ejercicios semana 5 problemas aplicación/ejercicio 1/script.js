/*Cree un objeto donde se almacenen los productos de un supermercado con su respectivo
precio. Los productos son:
Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en el
objeto anterior con su respectivo producto*/

class Tienda{
    constructor(){
        this.Papa= 400
        this.Arroz= 1000
        this.Aceite=6000
        this.Lentejas=2000

    }
    // Método para imprimir los productos con sus precios
imprimirProductos() {
    console.log(`Papa: $${this.Papa}`);
    console.log(`Arroz: $${this.Arroz}`);
    console.log(`Aceite: $${this.Aceite}`);
    console.log(`Lentejas: $${this.Lentejas}`);
}
}

//Creamos una instancia
const miTienda  = new Tienda();

//imprimimos
miTienda.imprimirProductos();