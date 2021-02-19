/*
Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.*/

function mostrar()
{
	let numeroUsuario;

	numeroUsuario = 0;

	for (numeroUsuario == 0 ; ; ){

		numeroUsuario = prompt("Adivine el numero que lo sacara del bucle : ");
		numeroUsuario = parseInt(numeroUsuario);

		if(numeroUsuario == 9){
			alert( " Felicitaciones!. ");
			break;
		}
		else{}
	}


}//FIN DE LA FUNCIÓN