/*Escriba una función la cual reciba como parámetro 2 números enteros y 1 cadena,
La idea es que los números recibidos se puedan operar según la operación que
hallamos recibido en la cadena, ejemplo miFuncion(2, 5, ”suma”).*/

function operaciones(num1, num2, operacion){
    switch(operacion){
        case "suma":
            return num1 + num2
        case "resta":
            return num1 - num2
        case "multiplicacion":
            return num1 * num2
        case "division":
            return num1 / num2
        case "exponente":
            return num1**num2
    }
}