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

Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano

function mostrar (){

let tipoMascota;
let pelajeMascota;
let edadMascota;
let nombreMascota;
let razaMascota;
let pesoMascota;
let estadoClinico;
let temperaturaMascota;

let comparadorPesoPerro;
let nombrePerroPesado;

let acumuladorGralMascotas;
let porcentajeEnfermos;

let nombreUltimaMascotaOtro;

let nombreSinpeloMenorTemp;
let comparadorSinpeloMenorTemp;

let acumuladorTempPerros;
let acumuladorTempGatos;
let acumuladorTempOtro;

let AcumuladorPerrosYgatos;

let nombreGatoSinPeloLiviano;
let razaGatoSinPeloLiviano;


let consultaUsuario;

comparadorPesoPerro = 0;
consultaUsuario = "si";

while(consultaUsuario == "si"){

	tipoMascota = prompt("Ingrese tipo mascota (gato, perro u otro) : ");
		while(isNaN(tipoMascota)==false || tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "otro"){
			tipoMascota = prompt("DATO INVALIDO . Ingrese tipo mascota (gato, perro u otro) : ");
		}

	
	switch(tipoMascota){

		case "gato":
		pelajeMascota = prompt("Ingrese tipo de pelaje (corto, largo , sin pelo) : ");
				while((pelajeMascota)==false || pelajeMascota != "corto" && pelajeMascota != "largo" && pelajeMascota != "sin pelo" ){
					pelajeMascota = prompt(" DATO INVALIDO . Ingrese tipo de pelaje (corto, largo , sin pelo) : ");
				}
				edadMascota = prompt ("Ingrese edad de la mascota :");
		edadMascota = parseInt(edadMascota);
			while(isNaN(edadMascota)==true){
				edadMascota = prompt ("DATO INVALIDO . Ingrese edad de la mascota :");
			}
		nombreMascota = prompt("Ingrese nombre de la mascota : ");
			while(isNaN(nombreMascota)==false){
				nombreMascota = prompt("DATO INVALIDO . Ingrese nombre de la mascota : ");
			}
		
		razaMascota = prompt("Ingrese la raza : ");
			while(isNaN(razaMascota)==false){
				razaMascota = prompt("DATO INVALIDO . Ingrese  la raza: ");
			}	
		
		pesoMascota = prompt ("Ingrese el peso  :");
		pesoMascota = parseInt(edadMascota);
				while(isNaN(pesoMascota)==true){
					pesoMascota = prompt ("DATO INVALIDO . Ingrese el peso  :");
					pesoMascota = parseInt(edadMascota);
				}


		estadoClinico = prompt("Ingrese el estado clinico (enfermo,internado o adopcion) : ")	
			while(isNaN(estadoClinico)==false || estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion"){
				estadoClinico = prompt("DATO INVALIDO .Ingrese el estado clinico (enfermo,internado o adopcion) : ")	
			}


		temperaturaMascota = prompt ("Ingrese la temperaruta corporal :");
		temperaturaMascota = parseInt(temperaturaMascota);
			while(isNaN(temperaturaMascota)==true){
				temperaturaMascota = prompt ("DATO INVALIDO . Ingrese la temperaruta corporal :");		
				temperaturaMascota = parseInt(temperaturaMascota);
			}
			break;

		case "perro":
			pelajeMascota = prompt("Ingrese tipo de pelaje (corto, largo , sin pelo) : ");
			while((pelajeMascota)==false || pelajeMascota != "corto" && pelajeMascota != "largo" && pelajeMascota != "sin pelo" ){
				pelajeMascota = prompt(" DATO INVALIDO . Ingrese tipo de pelaje (corto, largo , sin pelo) : ");
			}
			break;
			edadMascota = prompt ("Ingrese edad de la mascota :");
			edadMascota = parseInt(edadMascota);
				while(isNaN(edadMascota)==true){
					edadMascota = prompt ("DATO INVALIDO . Ingrese edad de la mascota :");
				}
			nombreMascota = prompt("Ingrese nombre de la mascota : ");
				while(isNaN(nombreMascota)==false){
					nombreMascota = prompt("DATO INVALIDO . Ingrese nombre de la mascota : ");
				}
		
			razaMascota = prompt("Ingrese la raza : ");
				while(isNaN(razaMascota)==false){
					razaMascota = prompt("DATO INVALIDO . Ingrese  la raza: ");
				}	
		
			pesoMascota = prompt ("Ingrese el peso  :");
			pesoMascota = parseInt(edadMascota);
					while(isNaN(pesoMascota)==true){
						pesoMascota = prompt ("DATO INVALIDO . Ingrese el peso  :");
						pesoMascota = parseInt(edadMascota);
				}


			estadoClinico = prompt("Ingrese el estado clinico (enfermo,internado o adopcion) : ")	
				while(isNaN(estadoClinico)==false || estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion"){
					estadoClinico = prompt("DATO INVALIDO .Ingrese el estado clinico (enfermo,internado o adopcion) : ")	
				}


			temperaturaMascota = prompt ("Ingrese la temperaruta corporal :");
			temperaturaMascota = parseInt(temperaturaMascota);
				while(isNaN(temperaturaMascota)==true){
					temperaturaMascota = prompt ("DATO INVALIDO . Ingrese la temperaruta corporal :");		
					temperaturaMascota = parseInt(temperaturaMascota);
				}
			
			
		
		case "otro":
			pelajeMascota = prompt("Ingrese tipo de pelaje (corto, largo , sin pelo) : ");
				while((pelajeMascota)==false || pelajeMascota != "corto" && pelajeMascota != "largo" && pelajeMascota != "sin pelo" ){
					pelajeMascota = prompt(" DATO INVALIDO . Ingrese tipo de pelaje (corto, largo , sin pelo) : ");
				}
			edadMascota = prompt ("Ingrese edad de la mascota :");
			edadMascota = parseInt(edadMascota);
				while(isNaN(edadMascota)==true){
					edadMascota = prompt ("DATO INVALIDO . Ingrese edad de la mascota :");
				}
			nombreMascota = prompt("Ingrese nombre de la mascota : ");
				while(isNaN(nombreMascota)==false){
					nombreMascota = prompt("DATO INVALIDO . Ingrese nombre de la mascota : ");
				}
		
			razaMascota = prompt("Ingrese la raza : ");
				while(isNaN(razaMascota)==false){
					razaMascota = prompt("DATO INVALIDO . Ingrese  la raza: ");
			}	
		
			pesoMascota = prompt ("Ingrese el peso  :");
			pesoMascota = parseInt(edadMascota);
				while(isNaN(pesoMascota)==true){
					pesoMascota = prompt ("DATO INVALIDO . Ingrese el peso  :");
					pesoMascota = parseInt(edadMascota);
				}


			estadoClinico = prompt("Ingrese el estado clinico (enfermo,internado o adopcion) : ")	
				while(isNaN(estadoClinico)==false || estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion"){
					estadoClinico = prompt("DATO INVALIDO .Ingrese el estado clinico (enfermo,internado o adopcion) : ")	
				}


			temperaturaMascota = prompt ("Ingrese la temperaruta corporal :");
			temperaturaMascota = parseInt(temperaturaMascota);
				while(isNaN(temperaturaMascota)==true){
					temperaturaMascota = prompt ("DATO INVALIDO . Ingrese la temperaruta corporal :");		
					temperaturaMascota = parseInt(temperaturaMascota);
				}
			break;	
	}//switch
		

}//while
}


Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal

e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal

f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano

*/

function mostrar (){

let tipoMascota;
let tipoPelaje;
let edadMascota;
let razaMascota;
let pesoMascota;
let estadoClinico;
let temperaturaMascota;

let contadorPerros;
let contadorGatos;
let contadorOtros;

let ultimoNombreOtro;
let contadorTotalMascotas;

let contadorEnfermos;
let porcentajeEnfermos;

let nombrePerroMayorPeso;
let compradoPerroMayorPeso;

let comparadorSinpeloMenorTemp;
let banderaSinPeloTemp;
let nombreSinpeloMenorTemp;

let comparadorTipoMayorTemp;





let consultaUsuario;

banderaSinPeloTemp = 0;
contadorEnfermos = 0;
contadorTotalMascotas = 0;
contadorPerros = 0;
contadorGatos = 0;
contadorOtros = 0;
consultaUsuario = "si";

while(consultaUsuario == "si"){

	tipoMascota = prompt("Ingerse tipo de mascota (perro, gato u otro) : ");
		while(isNaN(tipoMascota)==false || tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "otro"){
			tipoMascota = prompt("DATO INVALIDO . Ingrese tipo mascota (gato, perro u otro) : ");
		}
	
	pelajeMascota = prompt("Ingrese tipo de pelaje (corto, largo , sin pelo) : ");
		while(isNaN(pelajeMascota)==false || pelajeMascota != "corto" && pelajeMascota != "largo" && pelajeMascota != "sin pelo" ){
				pelajeMascota = prompt(" DATO INVALIDO . Ingrese tipo de pelaje (corto, largo , sin pelo) : ");
			}

	edadMascota = prompt ("Ingrese edad de la mascota :");
	edadMascota = parseInt(edadMascota);
		while(isNaN(edadMascota)==true){
				edadMascota = prompt ("DATO INVALIDO . Ingrese edad de la mascota :");
			}

	nombreMascota = prompt("Ingrese nombre de la mascota : ");
		while(isNaN(nombreMascota)==false){
				nombreMascota = prompt("DATO INVALIDO . Ingrese nombre de la mascota : ");
			}
		
	razaMascota = prompt("Ingrese la raza : ");
		while(isNaN(razaMascota)==false){
				razaMascota = prompt("DATO INVALIDO . Ingrese  la raza: ");
			}	
		
	pesoMascota = prompt ("Ingrese el peso  :");
	pesoMascota = parseInt(pesoMascota);
		while(isNaN(pesoMascota)==true){
				pesoMascota = prompt ("DATO INVALIDO . Ingrese el peso  :");
				pesoMascota = parseInt(pesoMascota);
			}


	estadoClinico = prompt("Ingrese el estado clinico (enfermo,internado o adopcion) : ")	
		while(isNaN(estadoClinico)==false || estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion"){
				estadoClinico = prompt("DATO INVALIDO .Ingrese el estado clinico (enfermo,internado o adopcion) : ")	
			}


	temperaturaMascota = prompt ("Ingrese la temperaruta corporal :");
	temperaturaMascota = parseInt(temperaturaMascota);
		while(isNaN(temperaturaMascota)==true){
				temperaturaMascota = prompt ("DATO INVALIDO . Ingrese la temperaruta corporal :");		
				temperaturaMascota = parseInt(temperaturaMascota);
			}
				///////////// fin validaciones //////////////
	
	switch(tipoMascota){

		case "perro":
			if(compradoPerroMayorPeso < pesoMascota){
				nombrePerroMayorPeso = nombreMascota;
			}
			contadorPerros++;
				break;
			
		case "gato":
			contadorGatos++;
			break;

		case "otro":
			ultimoNombreOtro = nombreMascota;
			contadorOtros++;
			break;			

	}//switch

	if(banderaSinPeloTemp == 0 || tipoPelaje == "sin pelo" && comparadorSinpeloMenorTemp < temperaturaMascota){
		nombreSinpeloMenorTemp = nombreMascota;
		banderaSinPeloTemp = 1;
	}

	if(estadoClinico == "enfermo"){
		contadorEnfermos++;
	}

	contadorTotalMascotas++;

	consultaUsuario = prompt("Ingrese si para continuar : ");
}//fin while

porcentajeEnfermos = contadorTotalMascotas / contadorTotalMascotas * 100;


alert ("El nombre del perro mas pesado es : "+ nombrePerroMayorPeso);
alert ("El porcentaje de enfermos sobre el total es : "+porcentajeEnfermos);
if(contadorOtros > 0){
	alert ("El nombre de la ultima mascota de tipo otra cosa es : "+ultimoNombreOtro);
}

if(banderaSinPeloTemp == 1){
	alert ("El nombre del animal sin pelo con menor temperatura corporal es : "+nombreSinpeloMenorTemp);
}


}//fuction

