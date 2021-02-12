/* Diego Ormeño

Ejercicio 

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroUsuarios;
	let bucles;
	let suma;
	let consulta;
	let multiplicar;


	numeroUsuarios = 0;
	bucles = 0;
	suma = 0;
	multiplicar = 1;
	consulta = "Si"

	while(consulta == "Si"){

		bucles= bucles + 1;
		numeroUsuarios = prompt("Ingrese numero: ");
		numeroUsuarios = parseInt(numeroUsuarios);
		if(numeroUsuarios >0){
			suma = suma + numeroUsuarios;
		}
		else{
			multiplicar = multiplicar * numeroUsuarios;
		}

		consulta = prompt("Si, para continuar : ");

	}


	document.getElementById("txtIdSuma").value = suma;

	document.getElementById("txtIdProducto").value = multiplicar;
	
}