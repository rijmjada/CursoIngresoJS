/* Diego Ormeño
Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numeroUsuarios;
	let bucles;
	let suma;
	let promedio;

	numeroUsuarios = 0;
	bucles = 0;
	suma = 0;

	while( bucles <5 )  {

		bucles= bucles + 1;
		numeroUsuarios = prompt("Ingrese numero: ");
		numeroUsuarios = parseFloat(numeroUsuarios);
		suma = suma + numeroUsuarios;
	}


	promedio = suma / bucles;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

}

