/* Cree un programa que calcule horas y minutos a partir de segundos.*/

let segundos = parseInt(prompt("Ingrese los segundos"))
let minutos = parseInt(segundos/60)
let horas = parseInt(minutos/60)

console.log(segundos + " segundos son " + minutos + " minuto/s y " + horas +" hora/s")