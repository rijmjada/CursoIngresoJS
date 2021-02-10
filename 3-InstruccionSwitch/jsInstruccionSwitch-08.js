/*
Diego Ormeño

Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){

		case "Ushuaia":
		case  "Bariloche":
			alert ("Frio.");
			break;
		
		case "Mar del Plata":
		case "Cataratas":
			alert ("Calor");
			break;

	}
}