/*
Escribe un programa que pida 
3 números y escriba en la pantalla el mayor delos tres.
 */

var numero1 = prompt("Escriba el número 1: ");
var numero2 = prompt("Escriba el número 2: ");
var numero3 = prompt("Escriba el número 3: ");

var fnumero1 = parseInt(numero1);
var fnumero2 = parseInt(numero2);
var fnumero3 = parseInt(numero3);

if (fnumero1 > fnumero2 && fnumero1 > fnumero3) {
    document.write(`El ${fnumero1} es el mayor`);
} else if (fnumero2 > fnumero1 && fnumero2 > fnumero3) {
    document.write(`El ${fnumero2} es el mayor`);
} else if (fnumero3 > fnumero1 && fnumero3 > fnumero2) {
    document.write(`El ${fnumero3} es el mayor`);
} else {
    document.write(`Los numeros son iguales`);
}