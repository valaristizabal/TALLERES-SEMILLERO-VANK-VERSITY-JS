/* Usa reduce para combinar las palabras de un array en una sola oración.*/
const palabras = ["reduce", "es", "muy", "útil"];

const oracion = palabras.reduce((acumulador, palabra) => {
    return acumulador + " " + palabra;
}, "");

console.log(oracion.trim()); 
