/*Escriba un programa que genere una contraseña segura a partir de una palabra
base y una serie de reglas. Usa dos funciones:
● generarContraseña(palabraBase): genera una contraseña agregando números y
caracteres especiales.
● imprimirContraseña(contraseña): muestra la contraseña generada.*/

function generarContrasena(palabraBase){
    contrasenaNueva = "%*" + palabraBase + "10"
    return contrasenaNueva
}

function imprimirContraseña(contrasena){
    console.log(contrasena)
}

contrasenaVieja = prompt("Escriba su contrasena")
contrasena = generarContrasena(contrasenaVieja)
imprimirContraseña(contrasena)