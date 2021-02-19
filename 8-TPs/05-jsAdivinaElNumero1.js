/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	let numeroAzar;
  let numeroUsuario;
  let intentos;

  numeroAzar = Math.floor((Math.random() * 100) + 1);


  numeroUsuario = document.getElementById("txtIdNumero").value;
  numeroUsuario = parseInt(numeroUsuario);

  if(numeroAzar == numeroUsuario){
     alert ("Ustede es un ganador!! y en solo " + intentos + " intentos.");
     }

  else{
        if (numeroUsuario < numeroAzar){
            alert("Le falta para llegar al numero secreto...");
     }  
       else{
             alert("Se paso del numero secreto...");
      }

  }//ELSE



}

function verificar()
{
	let contadorIntentos;

   
  
}