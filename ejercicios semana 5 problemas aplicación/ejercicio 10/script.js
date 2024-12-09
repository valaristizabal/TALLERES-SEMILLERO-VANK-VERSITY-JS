/*Cree un programa que almacene los documentos y nombres de diez usuarios, donde a
cada documento corresponda su respectivo nombre. Imprima todos los nombres de los
usuarios usando ciclos*/




let usuarios = {
    12345678: "Daniela",
    23456789: "Valeria",
    34567890: "Esteban",
    45678901: "Jefri",
    56789012: "Camila",
    67890123: "Juan",
    78901234: "Sofía",
    89012345: "Carlos",
    90123456: "Lucía",
    11223344: "Pablo"
};


for (let documento in usuarios) {
    console.log(usuarios[documento]); 
}
