/* 
Diego Ormeño

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numeroUsuarios;
	let bucles;
	let suma;
	let promedio;
	let consulta;

	numeroUsuarios = 0;
	bucles = 0;
	suma = 0;
	consulta = "1"

	while(consulta == "1")  {

		bucles= bucles + 1;
		numeroUsuarios = prompt("Ingrese numero: ");
		numeroUsuarios = parseFloat(numeroUsuarios);
		suma = suma + numeroUsuarios;
		consulta = prompt("Ingrese 1 si desea continuar");
	}


	promedio = suma / bucles;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio.toFixed(2);

}
