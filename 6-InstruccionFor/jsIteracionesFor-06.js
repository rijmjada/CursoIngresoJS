/*
Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.*/

function mostrar()
{
	let numeroUsuario;
	let contadorPares;
	let contadorNumeros;

	numeroUsuario = 0;
	contadorNumeros = 1;
	contadorPares = 0;

	numeroUsuario = prompt("Ingrese un numero : ");
	numeroUsuario = parseInt(numeroUsuario);
		

	for(numeroUsuario == 0 ; contadorNumeros <= numeroUsuario ; contadorNumeros++){

		
		if(contadorNumeros % 2 == 0 ){

			alert(contadorNumeros);
			contadorPares++;
			

		}
		else{}
	}

	alert("La cantidad de pares es : "+ contadorPares);


	


}//FIN DE LA FUNCIÓN