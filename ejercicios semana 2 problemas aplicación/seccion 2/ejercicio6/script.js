/*Cree un programa que calcula la suma de los primeros n números naturales.*/

let maximoNaturales = parseInt(prompt("Ingrese el máximo de números naturales que desea ver"))
let suma = 0
for (let index = 0; index <= maximoNaturales; index++) {
    suma +=index
}

console.log(suma)