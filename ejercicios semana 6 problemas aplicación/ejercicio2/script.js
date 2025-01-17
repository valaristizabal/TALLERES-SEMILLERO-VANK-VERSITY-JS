/*Crea una función aplicarOperacion que reciba un número y un callback. La función
debe ejecutar el callback pasándole el número.*/

const recibirNumero = (num) => num;

function aplicarOperacion(num, callback){
    let numero = callback(num);
    console.log(numero)
}

aplicarOperacion(7, recibirNumero)