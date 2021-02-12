/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	 let numeroIngresado;
	 
	 let positivos;
	 let negativos;
	 let contadorPositivos;
	 let ceros;
	 let pares;
	 let promedioPositivos;
	 let promedioNegativos;
	 let diferencia;
	 let banderaIngreso;
	 let consulta;

	 numeroIngresado = 0;
	 positivos = 0;
	 negativos = 0;
	 contadorPositivos = 0;
	 ceros = 0;
	 pares = 0;
	 banderaIngreso = 0;
	 consulta = "si";

	 while(isNaN(numeroIngresado) || consulta == "si")
	 {

			numeroIngresado = prompt("Ingrese un numero : ");
			numeroIngresado = parseInt(numeroIngresado);
			banderaIngreso = 1;

			if(numeroIngresado > 0)
			{
				positivos = positivos + numeroIngresado;
				contadorPositivos = contadorPositivos + 1;
			}
			else
			{
				if(numeroIngresado < 0)
				{
					negativos = negativos + numeroIngresado;
				}
				else
				{

				}
			}

			consulta = prompt("Ingrese si para continuar : ");
	 }

	alert("La suma de negativos es :  " + negativos);
	alert("La suma de positivos es :  " + positivos);
	alert ("La cantidad de positivos ingresados es : " + contadorPositivos);

}//FIN DE LA FUNCIÓN