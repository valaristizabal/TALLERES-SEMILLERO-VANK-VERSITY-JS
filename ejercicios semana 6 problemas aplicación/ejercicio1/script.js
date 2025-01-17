/*Escribe una función sumar que reciba dos números y un callback. El callback debe
ser ejecutado con el resultado de la suma.*/

const sumaAb = (a, b) => a + b; 

function suma(a, b, callback){
    //hará la operación que se le mande de la función que usaremos como callback
    let resultado = callback(a, b);
    return resultado;
}
//como callback le mandamos la función suma
let resultadoSuma = suma(2, 3, sumaAb);
console.log(resultadoSuma);