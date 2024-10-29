/*En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no. Realice una versión con condicionales y otra con estructura
switch-case.*/

/*CONDICIONALES*/
let producto = prompt("Ingrese el nombre del producto: ")

if(producto ==="lentejas" || producto === "arroz"){
    console.log("el producto " + producto + " NO paga IVA");
}  else if(producto === "vino" || producto === "crema"){
    console.log("el producto " + producto + " SÍ paga iva");
} else {
    console.log("No encontrado")
}

/*SWITCH*/

switch(producto){
    case "lentejas": 
        console.log("Las lentejas NO pagan IVA")
        break;
    case "arroz": 
        console.log("El arroz NO pagan IVA")
        break;
    case "vino":  
        console.log("El vino SI pagan IVA")
        break;
    case "crema": 
        console.log("La crema SÍ pagan IVA")
        break;
}