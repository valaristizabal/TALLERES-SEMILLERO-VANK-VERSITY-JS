/*Escriba una función con el nombre de esVocal() que tome un carácter , devuelva
True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso
contrario*/

function esVocal(caracter){
    switch(caracter){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            return true
        default:
            return false
    }
}