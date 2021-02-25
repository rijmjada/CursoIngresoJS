/* Diego Ormeño
Enunciado:
al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.

function mostrar()
{
	let contador;

	contador = 1;

	for(contador == 1 ; contador < 11 ; contador++){
		alert (contador);
	}
}*/
function mostrar()
{
	var numeroIngresado;
	var i;
	var contadorDivisores;
	contadorDivisores=0;

	numeroIngresado=prompt("ingrese numero a verificar");



	//for(contador=numeroIngresado-1;contador>1;contador--)
	for(i=2;i<(numeroIngresado/2);i++)
	{
		if(numeroIngresado%i==0)
		{
			//contadorDivisores++;
			break;
		}

	}

	//if(contadorDivisores>0)
	//if(contador!=1)
	if(i!=((numeroIngresado/2)-1))
	{
		console.log("no es primo");
	}else
	{
		console.log("ES primo");
	}

}//FIN DE LA FUNCIÓN


