/* Cree una función que reciba un arreglo de nombres de personas y muestre si la letra
“c” se encuentra entre tales nombres, en caso de que la letra “c” se encuentre,
mostrar las veces que se encuentra(considerando las apariciones entre todos los
nombres) . Se le debe pedir al usuario que introduzca el arreglo.*/

function encontrarLetraC(arreglo){
   let contadorC = 0
   let arregloCadena = arreglo.join()
   for (let index = 0; index < arregloCadena.length; index++) {
      console.log(arregloCadena[index])
      if(arregloCadena[index] === "c"){
         contadorC++
      }
   }

   return contadorC
}


let arregloNombres = []
let nombres = prompt("Ingrese los nombres separados por comas")
arregloNombres = nombres.split(",")
let contador = encontrarLetraC(arregloNombres)
console.log('en total la c aparece ' + contador + " veces")