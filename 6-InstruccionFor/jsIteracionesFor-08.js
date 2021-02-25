/*
Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.


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

For 9 bis( pedir 10 numeros , informar el mayor de los negativos y el menor de los pares).. solo si los hay

function mostrar(){

	let contadorIngresosUsuario;

	let acumuladorNegativos;
	let acumuladorPares;
	let mayorNegativos;
	let menorPares;
	let banderaESNegativos;
	let banderaESPares;

	
	contadorIngresosUsuario = 0;
	acumuladorNegativos = 0;
	acumuladorPares = 0;

	banderaESPares = 0;
	banderaESNegativos = 0;

	for(contadorIngresosUsuario == 0; contadorIngresosUsuario < 10; contadorIngresosUsuario++){

		usuarioNumeroIngresado = prompt("Ingrese un numero : ");
		usuarioNumeroIngresado = parseInt(usuarioNumeroIngresado);
		while(isNaN(usuarioNumeroIngresado)==true){
			usuarioNumeroIngresado = prompt("DATO INVALIDO. Ingrese un numero : ");
			usuarioNumeroIngresado = parseInt(usuarioNumeroIngresado);
		}

		if(usuarioNumeroIngresado < 0){
			acumuladorNegativos = usuarioNumeroIngresado;
			if(banderaESNegativos == 0 || acumuladorNegativos > mayorNegativos ){
				mayorNegativos = acumuladorNegativos;
				banderaESNegativos = 1;
			}else{}
		}else{}

		if(usuarioNumeroIngresado % 2 == 0){
			acumuladorPares = usuarioNumeroIngresado;
			if(banderaESPares == 0 || acumuladorPares < menorPares){
				menorPares = acumuladorPares;
				banderaESPares = 1;
			}else{}
		}

	}//fin for

	if(mayorNegativos < 0){
		alert("El mayor de los negativos es : "+mayorNegativos);
	}

	if(menorPares % 2 == 0){
		alert("El menor de los pares es : "+menorPares);
	}
}

For 10 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12 y que las mujeres sean mayores de edad), altura(rangos que quiera))

function mostrar(){

	let nombreIngreso;
	let sexoIngreso;
	let edadIngreso;
	let alturaIngreso;
	let contadorIngresosUsuario;

	contadorIngresosUsuario = 0;

	for(contadorIngresosUsuario = 0;contadorIngresosUsuario < 5;contadorIngresosUsuario++){

		nombreIngreso = prompt("Ingrese nombre : ");
			while(isNaN(nombreIngreso)==false){
				nombreIngreso = prompt("DATO INVALIDO. Ingrese nombre : ");
			}
		
		sexoIngreso = prompt("Ingrese ´masculino´ o ´femenino´:");
			while(!(sexoIngreso == "masculino" || sexoIngreso == "femenino")){
				sexoIngreso = prompt("DATO INVALIDO. Ingrese ´masculino´ o ´femenino´:");
			}

		alturaIngreso = prompt("Ingrese altura : ");
		alturaIngreso = parseFloat(alturaIngreso);
			while(isNaN(alturaIngreso)==true){
				alturaIngreso = prompt("DATO INVALIDO. Ingrese altura : ");
				alturaIngreso = parseFloat(alturaIngreso);
			}


		if(sexoIngreso == "masculino"){
			edadIngreso = prompt("Ingrese edad no mayores a 12: ");
			edadIngreso = parseInt(edadIngreso);
				while(isNaN(edadIngreso)==true || edadIngreso> 12){
					edadIngreso = prompt("Dato Invalido. Ingrese edad no mayores a 12: ");
					edadIngreso = parseInt(edadIngreso);
			}
		}
		else{
			edadIngreso = prompt("Ingrese edad mayor a 18 : ");
			edadIngreso = parseInt(edadIngreso);
				while(isNaN(edadIngreso)==true || edadIngreso < 18){
					edadIngreso = prompt("Dato Invalido. Ingrese edad mayor a 18: ");
					edadIngreso = parseInt(edadIngreso);
			}	

		}	



	}//fin for
}
For 11 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12 y que las mujeres sean ADOLESCENTES), altura(rangos que quiera))
informar el sexo y nombre de la persona mas alta
*/

function mostrar(){

	
	let nombreIngreso;
	let sexoIngreso;
	let edadIngreso;
	let alturaIngreso;
	let contadorIngresosUsuario;
	
	let personaMasAlta;
	let sexoMasAlto;
	let banderaEs;

	banderaEs = 0;
	contadorIngresosUsuario = 0;

	for(contadorIngresosUsuario = 0;contadorIngresosUsuario < 5;contadorIngresosUsuario++){

		nombreIngreso = prompt("Ingrese nombre : ");
			while(isNaN(nombreIngreso)==false){
				nombreIngreso = prompt("DATO INVALIDO. Ingrese nombre : ");
			}
		
		sexoIngreso = prompt("Ingrese ´masculino´ o ´femenino´:");
			while(!(sexoIngreso == "masculino" || sexoIngreso == "femenino")){
				sexoIngreso = prompt("DATO INVALIDO. Ingrese ´masculino´ o ´femenino´:");
			}

		alturaIngreso = prompt("Ingrese altura : ");
		alturaIngreso = parseFloat(alturaIngreso);
			while(isNaN(alturaIngreso)==true){
				alturaIngreso = prompt("DATO INVALIDO. Ingrese altura : ");
				alturaIngreso = parseFloat(alturaIngreso);
			}


		if(sexoIngreso == "masculino"){
			edadIngreso = prompt("Ingrese edad no mayores a 12: ");
			edadIngreso = parseInt(edadIngreso);
				while(isNaN(edadIngreso)==true || edadIngreso> 12){
					edadIngreso = prompt("Dato Invalido. Ingrese edad no mayores a 12: ");
					edadIngreso = parseInt(edadIngreso);
			}
			if(banderaEs == 0 || alturaIngreso > personaMasAlta){
				personaMasAlta = nombreIngreso;
				sexoMasAlto = sexoIngreso;
				banderaEs = 1;
			}
		}
		else{
			edadIngreso = prompt("Ingrese edad (entre 13 y 18) : ");
			edadIngreso = parseInt(edadIngreso);
				while(isNaN(edadIngreso)== true || edadIngreso > 18 || edadIngreso < 12){
					edadIngreso = prompt("Dato Invalido. Ingrese edad (entre 13 y 18) : ");
					edadIngreso = parseInt(edadIngreso);
			}
			if(banderaEs == 0 || alturaIngreso > personaMasAlta){
				personaMasAlta = nombreIngreso;
				sexoMasAlto = sexoIngreso;
				banderaEs = 1;
			}
			
		}	




	}//fin for

	alert ("El nombre de la persona mas alta es : "+ personaMasAlta + " y el sexo es "+sexoMasAlto);

}

