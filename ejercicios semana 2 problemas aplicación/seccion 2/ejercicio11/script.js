/*Cree un programa que muestre el promedio de n números, dejándose de solicitar números
cuando se introduzca el cero.*/

let i = false;
let sumaNumeros = 0
let iteracciones = 0
while(!i){
    let numero = parseFloat(prompt("Ingrese el número"))
    if(numero === 0){
        i = true
    } else {
        sumaNumeros += numero
        iteracciones++
    }
}

let promedio = sumaNumeros / iteracciones
console.log("El promedio es " + promedio)