/* Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán
formadas por las letras A o C o T o G referirse a taller de ADN pasado) y muestre la
cadena de ADN con mayor número de Timina (T). */

const cadenaConMasTimina = (arr) =>{
   return arr.reduce((maxCadena, cadena) => {
     const contarT = (str) => [...str].filter(letra => letra === 'T').length; 
     return contarT(cadena) > contarT(maxCadena) ? cadena : maxCadena;
   });
 }
 const adnCadenas = ["AACCGT", "TTTTGGTA", "GGGGG", "CCCGTAAA"];
 console.log(cadenaConMasTimina(adnCadenas));