/*ree un programa que calcule la suma de los cuadrados de los números entre 1 y n.*/

let numeroMaximo = parseInt(prompt("Ingrese el máximo número de la suma de cuadrdos"))

let i = 0
let suma = 0
while (i<=numeroMaximo){
    suma += i**2
    i++
}

console.log("La suma es " + suma)

