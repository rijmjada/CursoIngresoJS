/*
Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/

function mostrar()
{

	let numeroUsuario;
	let cantidadDivisores;
	let incremento;

	numeroUsuario = prompt("Ingrese un numero : ");
	numeroUsuario = parseInt(numeroUsuario);
	while(isNaN(numeroUsuario)){
		numeroUsuario = prompt("Dato erroneo. Ingrese un numero : ");
		numeroUsuario = parseInt(numeroUsuario);
	}
	cantidadDivisores = 0;
	incremento = 1;
	

	for(incremento == 1; incremento <= numeroUsuario; incremento++ )
	{
		if(numeroUsuario % incremento == 0)
		{
			cantidadDivisores++
		}else{}
	}

	if(cantidadDivisores == 2)
	{
		alert ("El numero es primo.")

	}
	else
	{
		alert ("No es primo.")
	}


}//FIN DE LA FUNCIÓN