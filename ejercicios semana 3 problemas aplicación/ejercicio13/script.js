/*Escriba una función que reciba un número entero y dicha función pueda determinar
si el número enviado es positivo o negativo.*/

function identificarPositivoNegativo(numero){
    if(numero<0){
        console.log("El número " + numero +" es negativo")
    } else {
        console.log("El número " + numero +" es positivo")
    }
}

identificarPositivoNegativo(2)
identificarPositivoNegativo(0)
identificarPositivoNegativo(-5)