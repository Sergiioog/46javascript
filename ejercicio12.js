//12. Escribe un programa que pida una frase y escriba cuántas veces aparecen cadauna de las vocale

var respuestaUsuario = prompt("Introduzca su frase: ");
var arrayUsuario = [];
var contA = 0;
var contE = 0;
var contI = 0;
var contO = 0;
var contU = 0;

for (let i = 0; i < respuestaUsuario.length; i++) {
   arrayUsuario.push(respuestaUsuario[i]);

   if(arrayUsuario[i] === 'a' || arrayUsuario[i] ==='A') {
       contA++;
   } else if(arrayUsuario[i] === 'e' || arrayUsuario[i] ==='E') {
        contE++;
   } else if(arrayUsuario[i] === 'i' || arrayUsuario[i] ==='I') {
        contI++;
   }else if(arrayUsuario[i] === 'o' || arrayUsuario[i] === 'O') {
        contO++;
   }else if(arrayUsuario[i] === 'u' || arrayUsuario[i] ==='U') {
        contU++;
   }else {
        console.log(arrayUsuario[i]);
   }
}
console.log(`En la frase hay ${contA} 'a', ${contE} 'e', ${contI} 'i', ${contO} 'o', ${contU} 'u'`); 