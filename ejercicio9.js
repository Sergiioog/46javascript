//Escribe un programa que pida una 
//frase y escriba cuantas veces aparece la letra a


 var respuestaUsuario = prompt("Introduzca su frase: ");
 var arrayUsuario = [];
 var cont = 0;

 for (let i = 0; i < respuestaUsuario.length; i++) {
    arrayUsuario.push(respuestaUsuario[i]);
    if(arrayUsuario[i] === 'a') {
        cont++;
    }
 }
 console.log(`En la frase hay ${cont} 'a'`); 