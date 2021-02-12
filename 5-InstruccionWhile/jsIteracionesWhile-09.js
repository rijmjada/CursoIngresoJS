/*
Diego Ormeño / Ejercicio 9

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let banderaUno;
	let numeroMinimo;
	let numeroMaximo;
	let deseaContinuar;
	let numeroIngresado;

	banderaUno = 1;
	numeroMinimo = 0;
	numeroMaximo = 0;
	numeroIngresado = 0;
	deseaContinuar = "si";
	numeroIngresado = 0;

	while(deseaContinuar == "si"){

		numeroIngresado = prompt("Ingrese un numero :");
		numeroIngresado = parseInt(numeroIngresado);
		if(banderaUno == 1){
			
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;
			banderaUno = 0;
		}
		else{
			if(numeroIngresado < numeroMinimo){
				numeroMinimo = numeroIngresado;
			}
			else{
				if(numeroIngresado > numeroMaximo){
					numeroMaximo = numeroIngresado;
				}
				else{

				}
			}
		}
	
		deseaContinuar = prompt("si para continuar");
	}

	document.getElementById("txtIdMinimo").value = numeroMinimo;
	document.getElementById("txtIdMaximo").value = numeroMaximo;
}//FIN DE LA FUNCIÓN