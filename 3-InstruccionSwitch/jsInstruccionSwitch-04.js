/*

Diego Ormeño
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días
*/

function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes){

		case "Febrero":
			alert ("28 dias");
			break;
			
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Octubre":
			alert ("30 dias");
			break;
		
		default:
			alert ("31 dias");
			break;


	}


}