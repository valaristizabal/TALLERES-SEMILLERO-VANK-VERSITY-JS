/*Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra
S el programa se detendrá, de lo contrario continuará ejecutándose.*/

let i = false;
while(!i){
    let respuesta = prompt("¿Desea salir? (S/N")
    if(respuesta === "S" || respuesta === "s"){
        i = true
    }
}
