/*Escriba una función la cual reciba una cadena como parámetro y ésta retorne la
misma cadena pero sin sus vocale*/

function sinVocales(cadena) {
    let cadena2 = String(cadena);
    let cadenaResultante = "";
    for (let i=0; i<=cadena2.length; i++) {
        let letra = cadena2[i]; 
        if (letra !== "a" && letra !== "e" && letra !== "i" && 
            letra !== "o" && letra !== "u") {
            cadenaResultante += letra; 
        }
    } return String(cadenaResultante);
}
console.log(sinVocales("arepa con huevo"));