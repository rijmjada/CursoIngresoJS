
/*9 bis
Diego Ormeño*/

function mostrarAumento()
{
	let sueldo;
	let usuario;
	let resultado;
	

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	usuario = prompt("Ingrese porcentaje: ");
	usuario = parseInt (usuario);



	aumento = sueldo * usuario /100;
	resultado = sueldo + aumento;

	document.getElementById("txtIdResultado").value = resultado;

}