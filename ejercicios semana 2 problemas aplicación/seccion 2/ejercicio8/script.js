/*Cree un programa que muestre los números impares entre 1 y n.*/

let imparMaximo = parseInt(prompt("Ingrese el máximo de número impares que desea ver"))
for (let index = 0; index < imparMaximo; index++) {
    if(index%2 !== 0){
        console.log(index)
    }
}