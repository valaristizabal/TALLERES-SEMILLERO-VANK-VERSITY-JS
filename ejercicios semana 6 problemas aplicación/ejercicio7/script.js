/*Escribe una función que reciba un string y use forEach para imprimir cada letra en
una nueva línea*/

function imprimirCadena(cadena){
    let arregloCadena = cadena.split('')
    arregloCadena.forEach(element => {
        console.log(element)
    });
}

imprimirCadena("hola como estas")