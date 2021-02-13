/*

Diego Ormeño

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
	 let promedioNegativos
	 let contadorCeros;
	 let contadorPares;
	 let diferencia;
	 let banderaIngreso;
	 let consulta;

	 numeroIngresado = 0;
	 positivos = 0;
	 negativos = 0;
	 contadorPositivos = 0;
	 contadorNegativos = 0;
	 contadorCeros = 0;
	 contadorPares = 0;
	 diferencia = 0;
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
				contadorPositivos++;
			}
			else
			{
				if(numeroIngresado < 0)
				{
					negativos = negativos + numeroIngresado;
					contadorNegativos++;
				}
				else
				{
				if(numeroIngresado = 0){
					contadorCeros++;
				}
				else{}
				}
			}

			if(numeroIngresado % 2 == 0){
				contadorPares++;
			}

			consulta = prompt("Ingrese si para continuar : ");
	 }

	 promedioPositivos = positivos / contadorPositivos;
	 promedioNegativos = negativos / contadorNegativos;
	 diferencia = positivos - negativos;


	document.write  (" La suma de negativos es :  " + negativos);
	document.write  ("<br> La suma de positivos es :  " + positivos);
	document.write  ("<br> La cantidad de positivos ingresados es : " + contadorPositivos);
	document.write  ("<br> La cantidad de negativos ingresados es : " + contadorNegativos);
	document.write  ("<br> El promedio de los positivos es : " + promedioPositivos);
	document.write  ("<br> El promedio de los negativos es : " + promedioNegativos);
	document.write  ("<br> La diferencia de positivos y negativos es : " + diferencia);
	document.write  ("<br> La cantidad de pares es : " + contadorPares);

	


}//FIN DE LA FUNCIÓN