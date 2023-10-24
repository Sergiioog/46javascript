//Escribe un programa que pida una 
//frase y escriba cuantas veces aparece la letra a

var fraseUsuario = prompt("Escriba su frase: ");
var arrayFrase = [''];

for( let i = 0; i < fraseUsuario.length; i++ ) {
    arrayFrase.push(fraseUsuario.charAt(i));    
    console.log(arrayFrase);
}




 for ( let c = 0; c < arrayFrase.length; c++ ) {
    let cont = 0;
     console.log(`El valor de cont es: ${cont}`);
     if (arrayFrase[c] === 'a') {
         cont ++;
     }
     console.log(`La frase tiene ${cont} a`);
 }