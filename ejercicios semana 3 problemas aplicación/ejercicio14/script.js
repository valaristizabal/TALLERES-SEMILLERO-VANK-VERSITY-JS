/*Escriba una función la cual permita o no la entrada a un parque de atracciones,
dicha función recibe la edad, estatura y permiso parental como parámetros. Para
permitir el acceso el usuario deberá de ser mayor de edad y medir más de 150 cm,
en caso de ser menor de edad debe contar con un permiso parental para que sea
concedido el acceso.*/

function entradaParque(edad, estatura, permisoParental){
    if(edad >= 18 ){
        if(estatura>=1.50){
            console.log("Usted puede entrar")
        } else {
            console.log("Usted no cumple con la altura")
        }
    } else if(edad<= 18 && permisoParental == true){
        if(estatura>=1.50){
            console.log("Usted puede entrar")
        } else {
            console.log("Usted no cumple con la altura")
        }
    } else if(edad<= 18 && permisoParental == false){
        console.log("Usted no puede entrar")
    }
}
