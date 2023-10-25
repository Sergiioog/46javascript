    //13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o7 
    //    (sólo hay que comprobar si lo es por uno de los cuatro)

var numeroUsuario = prompt("Introduza su número: ");

if ( numeroUsuario % 2 === 0 ) {
    document.write(`El número ${numeroUsuario} es divisible entre dos`);
} else if( numeroUsuario % 3 === 0) {
    document.write(`El número ${numeroUsuario} es divisble entre tres`);
} else if (numeroUsuario % 5 === 0) {
    document.write(`El número ${numeroUsuario} es divisble entre cinco`)
} else if (numeroUsuario % 7 === 0) {
    document.write(`El número ${numeroUsuario} es divisble entre siete`)
} else {
    document.write(`El número ${numeroUsuario} no es divisible ni por dos ni por tres ni por cinco ni por siete`)

}

