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

For 12 (lo anterior mas..--de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito , ... solo si los hay

function mostrar(){
	
	let nombreIngreso;
	let sexoIngreso;
	let edadIngreso;
	let alturaIngreso;
	let contadorIngresosUsuario;
	let edadMujerJoven;
	let nombreMujerJoven;
	let banderaMujerJoven;
	let alturaHombrebajito;
	let nombreHombreBajito;
	let banderaHombreBajito;
	let comparadorPersonaMasAlta;
	let nombrePersonaMasAlta;
	let sexoMasAlto;
	let banderaEs;

	banderaHombreBajito = 0;
	banderaMujerJoven = 0;
	banderaEs = 0;
	contadorIngresosUsuario = 0;

	for(contadorIngresosUsuario = 0;contadorIngresosUsuario < 3;contadorIngresosUsuario++){

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
				while(isNaN(edadIngreso)==true || edadIngreso > 12){
					edadIngreso = prompt("Dato Invalido. Ingrese edad no mayores a 12: ");
					edadIngreso = parseInt(edadIngreso);
			}
			if(banderaEs == 0 || alturaIngreso > comparadorPersonaMasAlta){
				comparadorPersonaMasAlta = alturaIngreso;
				nombrePersonaMasAlta = nombreIngreso;
				sexoMasAlto = sexoIngreso;
				banderaEs = 1;
			}
			if(banderaHombreBajito == 0 || alturaHombrebajito > alturaIngreso){
				alturaHombrebajito = alturaIngreso;
				nombreHombreBajito = nombreIngreso;
				banderaHombreBajito = 1;
			}
		}
		else{
			edadIngreso = prompt("Ingrese edad (entre 13 y 18) : ");
			edadIngreso = parseInt(edadIngreso);
				while(isNaN(edadIngreso)== true || edadIngreso > 18 || edadIngreso < 12){
					edadIngreso = prompt("Dato Invalido. Ingrese edad (entre 13 y 18) : ");
					edadIngreso = parseInt(edadIngreso);
			}
			if(banderaEs == 0 || alturaIngreso > comparadorPersonaMasAlta){
				comparadorPersonaMasAlta = alturaIngreso;
				nombrePersonaMasAlta = nombreIngreso;
				sexoMasAlto = sexoIngreso;
				banderaEs = 1;
			}
			if(banderaMujerJoven == 0 ||edadMujerJoven < edadIngreso ){
				nombreMujerJoven = nombreIngreso;
				banderaMujerJoven = 1;
			}else{}
			
		}	




	}//fin for

	alert ("El nombre de la persona mas alta es : "+ nombrePersonaMasAlta + " y el sexo es "+sexoMasAlto);
	if(banderaHombreBajito == 1){
		alert ("El nombre del hombre mas bajito es : "+ nombreHombreBajito);
	}
	if(banderaMujerJoven == 1){
		alert ("El nombre de la mujer mas joven es : "+ nombreMujerJoven);
	}
}
For 13 ( o anterior mas ...el promedio de edad entre los hombre ,
el promedio de edad entre las mujeres, la cantidad de personas que miden mas de 1,60 metros, 
y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts
*/
function mostrar(){
	
	let nombreIngreso;
	let sexoIngreso;
	let edadIngreso;
	let alturaIngreso;
	let contadorIngresosUsuario;

	let edadMujerJoven;
	let nombreMujerJoven;
	let banderaMujerJoven;

	let alturaHombrebajito;
	let nombreHombreBajito;
	let banderaHombreBajito;

	let comparadorPersonaMasAlta;
	let nombrePersonaMasAlta;
	let sexoMasAlto;
	let banderaEs;

	let acumuladorEdadMujeres;
	let promedioEdadMujeres;
	let contadorMujeresIngresadas;
	let acumuladorEdadHombres;
	let promedioEdadHombres;
	let contadorHombresIngresados;

	let contadorMiden160Hombres;
	let contadorMiden160Mujeres;
	let totalMide160;

	let porcentajeSobre160;

	promedioEdadMujeres = 0;
	totalMide160 = 0;
	contadorMujeresIngresadas = 0;
	contadorHombresIngresados = 0;
	acumuladorEdadHombres = 0;
	acumuladorEdadMujeres = 0;
	totalMide160 = 0;
	contadorMiden160Hombres = 0;
	contadorMiden160Mujeres = 0;
	contadorMiden160 = 0;
	banderaHombreBajito = 0;
	banderaMujerJoven = 0;
	banderaEs = 0;
	contadorIngresosUsuario = 0;

	for(contadorIngresosUsuario = 0;contadorIngresosUsuario < 3;contadorIngresosUsuario++){

		nombreIngreso = prompt("Ingrese nombre : ");
			while(isNaN(nombreIngreso)==false){
				nombreIngreso = prompt("DATO INVALIDO. Ingrese nombre : ");
			}
		
		sexoIngreso = prompt("Ingrese ´masculino´ o ´femenino´:");
			while(!(sexoIngreso == "masculino" || sexoIngreso == "femenino")){
				sexoIngreso = prompt("DATO INVALIDO. Ingrese ´masculino´ o ´femenino´:");
			}

		alturaIngreso = prompt("Ingrese altura : ");
		alturaIngreso = parseInt(alturaIngreso);
			while(isNaN(alturaIngreso)==true){
				alturaIngreso = prompt("DATO INVALIDO. Ingrese altura : ");
				alturaIngreso = parseInt(alturaIngreso);
			}
			

		if(sexoIngreso == "masculino"){
			edadIngreso = prompt("Ingrese edad no mayores a 12: ");
			edadIngreso = parseInt(edadIngreso);
				while(isNaN(edadIngreso)==true || edadIngreso > 12){
					edadIngreso = prompt("Dato Invalido. Ingrese edad no mayores a 12: ");
					edadIngreso = parseInt(edadIngreso);
			}
			if(banderaEs == 0 || alturaIngreso > comparadorPersonaMasAlta){
				comparadorPersonaMasAlta = alturaIngreso;
				nombrePersonaMasAlta = nombreIngreso;
				sexoMasAlto = sexoIngreso;
				banderaEs = 1;
			}
			if(banderaHombreBajito == 0 || alturaHombrebajito > alturaIngreso){
				alturaHombrebajito = alturaIngreso;
				nombreHombreBajito = nombreIngreso;
				banderaHombreBajito = 1;
			}
			if(alturaIngreso == 160){
				contadorMiden160Hombres++;
			}
	
			acumuladorEdadHombres = acumuladorEdadHombres + edadIngreso; ///for 13
			contadorHombresIngresados++;							     ///for 13
			}//if
		else{
			edadIngreso = prompt("Ingrese edad (entre 13 y 18) : ");
			edadIngreso = parseInt(edadIngreso);
				while(isNaN(edadIngreso)== true || edadIngreso > 18 || edadIngreso < 12){
					edadIngreso = prompt("Dato Invalido. Ingrese edad (entre 13 y 18) : ");
					edadIngreso = parseInt(edadIngreso);
				}
			if(banderaEs == 0 || alturaIngreso > comparadorPersonaMasAlta){
				comparadorPersonaMasAlta = alturaIngreso;
				nombrePersonaMasAlta = nombreIngreso;
				sexoMasAlto = sexoIngreso;
				banderaEs = 1;
				}
			if(banderaMujerJoven == 0 ||edadMujerJoven < edadIngreso ){
				nombreMujerJoven = nombreIngreso;
				banderaMujerJoven = 1;
				}
			if(alturaIngreso == 160){
				contadorMiden160Mujeres++;

			}
		

			acumuladorEdadMujeres = acumuladorEdadMujeres + edadIngreso;  ///for 13
			contadorMujeresIngresadas++;								///for 13

			}//else	
		


	}//fin for

	promedioEdadMujeres = acumuladorEdadMujeres / contadorMujeresIngresadas;

	promedioEdadHombres = acumuladorEdadHombres / contadorHombresIngresados;

	totalMide160 = contadorMiden160Mujeres + contadorMiden160Hombres;
	if(totalMide160 == 0){
		porcentajeSobre160 = 0;
	}
	else{
		porcentajeSobre160 = (contadorMiden160Mujeres / totalMide160) * 100;
	}

	alert ("El nombre de la persona mas alta es : "+ nombrePersonaMasAlta + " y el sexo es "+sexoMasAlto);
	if(banderaHombreBajito == 1){
		alert ("El nombre del hombre mas bajito es : "+ nombreHombreBajito);
	}
	if(banderaMujerJoven == 1){
		alert ("El nombre de la mujer mas joven es : "+ nombreMujerJoven);
	}

	if(promedioEdadMujeres == 0){
		alert ("El promedio de edad en las mujeres es : "+ promedioEdadMujeres.toFixed(2));
	}
	
	alert("El porcentaje de mujeres que miden 160 es : "+ porcentajeSobre160);

}