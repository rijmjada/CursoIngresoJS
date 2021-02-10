/*Diego Ormeño

Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/

function mostrar()
{
	let estacion;
	let destino;
	let mensaje;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){

		case "Invierno":{

		}//invierno
		 break;


		case "Verano":{

		}// Verano
		break;


		case "Otoño":{
		}// Otoño}
		break;


		case "Primavera":{

	
		}// Primavera
		break;


	}//estacion

}