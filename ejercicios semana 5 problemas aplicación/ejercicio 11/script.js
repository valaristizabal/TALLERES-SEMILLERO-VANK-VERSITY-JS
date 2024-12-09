/*Cree un programa que solicite al usuario el nombre de uno de los cinco continentes,
luego, muestre cinco países del continente seleccionado por el usuario, estos paises deben
ser elementos de un arreglo*/
let continentes = {
    "Asia": ["China", "India", "Japón", "Corea del Sur", "Indonesia"],
    "Europa": ["Francia", "España", "Italia", "Alemania", "Reino Unido"],
    "América": ["Brasil", "Argentina", "Canadá", "México", "Colombia"],
    "África": ["Nigeria", "Egipto", "Sudáfrica", "Kenia", "Argelia"],
    "Oceanía": ["Australia", "Nueva Zelanda", "Papúa Nueva Guinea", "Fiyi", "Samoa"]
};

let continenteSeleccionado = prompt("Ingrese el nombre de un continente (Asia, Europa, América, África, Oceanía):");


continenteSeleccionado = continenteSeleccionado.charAt(0).toUpperCase() + continenteSeleccionado.slice(1).toLowerCase();

if (continentes[continenteSeleccionado]) {
    
    let mensaje = `Los cinco países de ${continenteSeleccionado} son:\n`;
    continentes[continenteSeleccionado].forEach(pais => {
        mensaje += `${pais}\n`; 
    });

    
    alert(mensaje);
} else {
   
    alert("El continente ingresado no es válido. Por favor, ingrese uno de los siguientes: Asia, Europa, América, África, Oceanía.");
}
