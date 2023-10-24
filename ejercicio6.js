/*
Escribe un programa que 
pida dos números y escriba en la pantalla cual es el mayor.
*/

var numero1 = prompt("Escriba su número1: ");
var numero2 = prompt("Escriba su número2: ");

if(parseInt(numero1) > parseInt(numero2)) {
    document.write(`El número ${numero1} es mayor al ${numero2}`);
}else {
    document.write(`El número ${numero2} es mayor al ${numero1}`);
}

