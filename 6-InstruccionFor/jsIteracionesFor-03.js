/*Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"*/

function mostrar()
{
	let repeticionesUsuario;
	let contador;

	repeticionesUsuario = prompt("Ingrese la cantidad de repeticiones del mensaje ¨Hola UTN FRA¨: ");
	repeticionesUsuario = parseInt(repeticionesUsuario);

	contador = 0;
	
	for(contador == 0 ;contador < repeticionesUsuario ;contador++ ){
		alert (contador + "  Hola Utn Fra");
	}

}//FIN DE LA FUNCIÓN