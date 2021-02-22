/*
Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.*/

function mostrar()
{

	let numeroUsuario;
	let contadorDivisores;
	let contadorNumeros;

	
	numeroUsuario = prompt("Ingrese un numero : ");
	numeroUsuario = parseInt(numeroUsuario);
		
	contadorNumeros = 1;
	contadorDivisores = 0;


	for(numeroUsuario == 0 ; contadorNumeros <= numeroUsuario ; contadorNumeros++){

		
		if(numeroUsuario % contadorNumeros == 0){

			alert(contadorNumeros);
			contadorDivisores++;
		
		}
		else{}
	}

	alert("La cantidad de divisores es : "+ contadorDivisores);




}//FIN DE LA FUNCIÓN