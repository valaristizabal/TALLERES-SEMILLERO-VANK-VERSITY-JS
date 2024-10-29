/*Escriba una función que se llame facturacion() La función tiene que recibir como
parámetro el monto de un producto , y el medio de pago : C (tarjeta de crédito), E
(efectivo) y D (tarjeta de débito). Si el monto del producto es menor a $200 no se
aplicará ningún descuento. Si el monto a pagar es entre $200 y $400 se aplicará un
descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y
10% con tarjeta de crédito. Para montos mayores a $400, el descuento es del 40%
sin importar el medio de pago La función deberá retornar el monto final a pagar.*/

function facturacion(monto, medioPago){
    let pagoTotal = 0
    if(monto<200){
        pagoTotal = monto
    } else if (monto>=200 && monto<= 400 && medioPago === 'E'){
        pagoTotal = monto - (monto*0.30)
    } else if(monto>=200 && monto<= 400 && medioPago === 'D'){
        pagoTotal = monto - (monto*0.20)
    } else if(monto>=200 && monto<= 400 && medioPago === 'C'){
        pagoTotal = monto - (monto*0.10)
    } else if(monto>=400){
        pagoTotal = monto - (monto*0.40)
    }

    return pagoTotal
}