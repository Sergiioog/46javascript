//10. Escribe un programa que pida una frase y escriba las vocales que aparecen

var respuestaUsuario = prompt("Introduzca su frase: ");
var arrayUsuario = [];
var cont = 0;

for (let i = 0; i < respuestaUsuario.length; i++) {
   arrayUsuario.push(respuestaUsuario[i]);
   if(arrayUsuario[i] === 'a') {
       cont++;
   } else if(arrayUsuario[i] === 'e') {
        cont++;
   } else if(arrayUsuario[i] === 'i') {
        cont++;
   }else if(arrayUsuario[i] === 'o') {
        cont++;
   }else if(arrayUsuario[i] === 'u') {
        cont++;
   }else {
        console.log(arrayUsuario[i]);
   }
}
console.log(`En la frase hay ${cont} vocales`); 