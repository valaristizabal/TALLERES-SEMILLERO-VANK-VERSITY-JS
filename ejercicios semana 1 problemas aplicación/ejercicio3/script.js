/*En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente
compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el
crédito. Cree un programa para un almacén donde el administrador ingrese el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico.*/

let precioElectrodomestico = parseFloat(prompt("Ingrese el precio del electrodoméstico: "))
let plazoMeses = parseInt(prompt("Ingrese el plazo en meses para pagarlo a crédito: "))
let aumentoTotal = precioElectrodomestico * (0.05 * plazoMeses)
let precioTotalElectrodomestioco = precioElectrodomestico + aumentoTotal

let cuotasMensuales = precioTotalElectrodomestioco / plazoMeses
console.log("El valor fijo de las cuotas mensuales es: " + cuotasMensuales)