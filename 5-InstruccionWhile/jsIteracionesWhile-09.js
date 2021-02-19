/*
Diego Ormeño / Ejercicio 9 BIs

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let banderaUno;
	let numeroMinimo;
	let numeroMaximo;
	let deseaContinuar;
	let numeroIngresado;
	let nombreUsuario;
	let edadJoven;
	let edadViejo;
	let edadUsuario;
	let nombreJoven;
	let nombreViejo;
	let banderaIf = 0;
	
	banderaIf = 0;
	banderaUno = 1;
	numeroMinimo = 0;
	numeroMaximo = 0;
	numeroIngresado = 0;
	deseaContinuar = "si";
	numeroIngresado = 0;

	

	while(deseaContinuar == "si"){

		/*numeroIngresado = prompt("Ingrese un numero :");
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
		}*/

		nombreUsuario = prompt("Igrese nombre : ");
		edadUsuario = prompt("Ingrese edad : ");
		edadUsuario = parseInt(edadUsuario);

		

		if(banderaIf == 0 ||edadUsuario < edadJoven){
			nombreJoven = nombreUsuario;
			edadJoven = edadUsuario;
			
		}
		if(banderaIf == 0 ||edadUsuario > edadViejo)
		{
			nombreViejo = nombreUsuario;
			edadViejo = edadUsuario;

		}

		else{}
		
		
		banderaIf = 1;
	
		deseaContinuar = prompt("si para continuar");
	}

	alert("persona joven : "+ nombreJoven);
	alert ("persona mas grande: "+ nombreViejo);
	document.getElementById("txtIdMinimo").value = numeroMinimo;
	document.getElementById("txtIdMaximo").value = numeroMaximo;
}//FIN DE LA FUNCIÓN