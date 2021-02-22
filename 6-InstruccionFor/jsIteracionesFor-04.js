/*
Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/

function mostrar()
{

	let contador;
	let consulta;

	contador = 0;

	for(contador == 0; contador < 999 ; contador++){

		alert(contador);
		
		consulta = prompt("Desea utilizar el ´break´? :");
		
		if(consulta == "si"){
			break;
		}
		else{

		}
	}
}