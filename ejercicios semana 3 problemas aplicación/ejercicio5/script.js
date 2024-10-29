/*Escriba una función que reciba un número n como parámetro y genere su factorial.*/

function calcularFactorial(n) {
    let resultadoFactorial = 1;
    for (let i = 1; i <= n; i++) {
        resultadoFactorial *= i;
    }
    return resultadoFactorial;
}