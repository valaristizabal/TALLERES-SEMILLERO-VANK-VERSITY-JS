/*Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] 1
arreglo2 = [“Manzana”, “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal
manera que los elementos(frutas y verduras) queden en el arreglo que les
corresponde. Use ciclos.*/

let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"]

let arreglo2 = ["manzana", "banano", "lechuga", "perejíl"]

let arregloFrutas = []
let arregloVerduras = []

for (let index = 0; index < arreglo1.length; index++) {
   if(arreglo1[index] == "Pera" || arreglo1[index] == "Limón"){
    arregloFrutas.push(arreglo1[index])
   }else {
    arregloVerduras.push(arreglo1[index])
   }
}

for (let index = 0; index < arreglo2.length; index++) {
    if(arreglo2[index] == "manzana" || arreglo2[index] == "banano"){
     arregloFrutas.push(arreglo2[index])
    }else {
     arregloVerduras.push(arreglo2[index])
    }
 }

console.log(arregloFrutas)
console.log(arregloVerduras)