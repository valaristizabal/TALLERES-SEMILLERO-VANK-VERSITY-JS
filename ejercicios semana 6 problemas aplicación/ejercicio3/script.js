/*Escribe una función que use setTimeout con un callback para imprimir un mensaje
después de 2 segundos*/

function tiempoEspera(mensaje){
    setTimeout(() => {
        console.log(mensaje);
      }, 2000);
}

function imprimirMensaje(mensaje, callback){
    callback(mensaje)
}

imprimirMensaje("hola probando probando", tiempoEspera)