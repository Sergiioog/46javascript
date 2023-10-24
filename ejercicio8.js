//Escribe un programa que pida un número y diga si es divisible por 2

var numeroUsuario = prompt("Introduzca su número: ");

if (numeroUsuario % 2 != 0 ) {
    document.write(`El numero ${numeroUsuario} no es divisible entre dos`);
}else {
    document.write(`El numero ${numeroUsuario} es divisible entre dos`);
}
