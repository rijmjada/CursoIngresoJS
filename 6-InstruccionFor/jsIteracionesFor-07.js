/*
Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.

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

Diego Ormeño

Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 

i) que continente tiene mas habitantes.


function mostrar(){

	let continenteUsuario;
	let paisUsuario;
	let cantidadHabitantesUsuario;
	let nivelPobrezaUsuario;
	let temperaturaMinimaUsuario;

	let acumuladorTempPares;

	let acumuladorTempImparesEuropa;

	let banderaPaisMenosHabitantes;
	let comparadorCantidadHabitantes;
	let nombrePaisMenosHabitantes;

	let contadorPaises40Grados;
	let contadorAmerica0Grados;
	
	let acumuladorGeneralHabitantes;
	let promedioHabitantesTotal;
	let acumuladorHabitantesPaises40;
	let promedioHabitantesPaises40;
	let comparadorTempMinima;
	let nombrePaisMinima;
	let banderaTempMinima;
	let acumuladorAsia;
	let acumuladorAmerica;
	let acumuladorAfrica;
	let acumuladorEuropa;
	let acumuladorOceania;
	let continenteMasHabitantes;


	let cantidadIngresos;

	cantidadIngresos = 0;
	acumuladorTempPares = 0;
	acumuladorTempImparesEuropa = 0;
	banderaPaisMenosHabitantes = 0;
	contadorPaises40Grados = 0;
	contadorAmerica0Grados = 0;
	acumuladorGeneralHabitantes = 0;
	acumuladorHabitantesPaises40 = 0;
	banderaTempMinima = 0;
	acumuladorAsia = 0;
	acumuladorAmerica = 0;
	acumuladorAfrica = 0;
	acumuladorEuropa = 0;
	acumuladorOceania = 0;
	continenteMasHabitantes = 0;

	for(cantidadIngresos == 0; cantidadIngresos < 5; cantidadIngresos++){

		continenteUsuario = prompt("Ingrese continente (Asia, America, Africa, Europa, Oceania) : ");
			 while(!(continenteUsuario == "Asia" || continenteUsuario == "America" || continenteUsuario == "Africa" || continenteUsuario == "Europa" || continenteUsuario == "Oceania")){
			continenteUsuario = prompt("DATO INVALIDO. Ingrese continente (Asia, America, Africa, Europa, Oceania) : ");
			 } // CONTINENTE

		paisUsuario = prompt("Ingrese el pais : "); 
			 while(isNaN(paisUsuario)==false){
				paisUsuario = prompt("DATO INVALIDO. Ingrese el pais : "); 
			 }
			 // PAIS

		cantidadHabitantesUsuario = prompt("Ingrese cantidad de habitantes (entre 1 y 7000)");
		cantidadHabitantesUsuario = parseInt(cantidadHabitantesUsuario);
			 while(isNaN(cantidadHabitantesUsuario)==true || cantidadHabitantesUsuario < 1 || cantidadHabitantesUsuario > 7000){
				cantidadHabitantesUsuario = prompt("DATO INVALIDO. Ingrese cantidad de habitantes (entre 1 y 7000)");
				cantidadHabitantesUsuario = parseInt(cantidadHabitantesUsuario);
			 }//CANTIDAD HABITANTES

		nivelPobrezaUsuario = prompt("Ingrese nivel de pobreza (pobre, rico o muy rico) : ");
			 while(!(nivelPobrezaUsuario == "pobre" || nivelPobrezaUsuario == "rico" || nivelPobrezaUsuario == "muy rico")){
				nivelPobrezaUsuario = prompt("DATO INVALIDO. Ingrese nivel de pobreza (pobre, rico o muy rico) : ");
			 }// NIVEL POBREZA


		temperaturaMinimaUsuario = prompt("Ingrese temperatura minima del pais (entre -50 y 50) : ");	 
		temperaturaMinimaUsuario = parseInt(temperaturaMinimaUsuario);
			 while(isNaN(temperaturaMinimaUsuario)== true || temperaturaMinimaUsuario < -50 || temperaturaMinimaUsuario > 50){
				temperaturaMinimaUsuario = prompt("DATO INVALIDO. Ingrese temperatura minima del pais (entre -50 y 50) : ");	 
				temperaturaMinimaUsuario = parseInt(temperaturaMinimaUsuario);
			 }//TEMPERATURA PAIS

		//////////// FIN VALIDACIONES ///////////	 

		if(temperaturaMinimaUsuario % 2 == 0){
			acumuladorTempPares++;
			}

		if(continenteUsuario == "Europa" && temperaturaMinimaUsuario % 2 != 0){
			acumuladorTempImparesEuropa++;
			}

		if(banderaPaisMenosHabitantes == 0 || comparadorCantidadHabitantes < cantidadHabitantesUsuario){
			nombrePaisMenosHabitantes = paisUsuario;
			banderaPaisMenosHabitantes = 1;
			}

		if(temperaturaMinimaUsuario > 40){
			contadorPaises40Grados++;
			acumuladorHabitantesPaises40 = acumuladorHabitantesPaises40 + cantidadHabitantesUsuario;
			}

		if(continenteUsuario == "America" && temperaturaMinimaUsuario < 0 ){
			contadorAmerica0Grados++;
			}

		if(cantidadHabitantesUsuario > 0){
			acumuladorGeneralHabitantes = acumuladorGeneralHabitantes + cantidadHabitantesUsuario;
			}

		if(banderaTempMinima == 0 ||temperaturaMinimaUsuario < comparadorTempMinima){
			comparadorTempMinima = temperaturaMinimaUsuario;
			nombrePaisMinima = paisUsuario;
			banderaTempMinima = 1;
			}

		switch (continenteUsuario){
			case "Asia":
				acumuladorAsia = acumuladorAsia + cantidadHabitantesUsuario;
				break;
			case "America":
				acumuladorAmerica = acumuladorAmerica + cantidadHabitantesUsuario;
				break;
			case "Africa":
				acumuladorAfrica = acumuladorAfrica + cantidadHabitantesUsuario;
				break;
			case "Europa":
				acumuladorEuropa = acumuladorEuropa + cantidadHabitantesUsuario;
				break;
			case "Oceania":
				acumuladorOceania = acumuladorEuropa + cantidadHabitantesUsuario;
				break;

		}	


	}//FINAL FOR

	promedioHabitantesTotal = acumuladorGeneralHabitantes / cantidadIngresos; 

	promedioHabitantesPaises40 = acumuladorHabitantesPaises40 / contadorPaises40Grados;

	if(acumuladorAsia > acumuladorAmerica && acumuladorAsia > acumuladorAfrica && acumuladorAsia > acumuladorEuropa && acumuladorAsia > acumuladorOceania){
		continenteMasHabitantes = "Asia";
	}
	else{
		if(acumuladorAmerica > acumuladorAfrica && acumuladorAmerica > acumuladorEuropa && acumuladorAmerica > acumuladorOceania){
			continenteMasHabitantes = "America";
		}else
			{
				if(acumuladorAfrica > acumuladorAsia && acumuladorAfrica > acumuladorEuropa && acumuladorAfrica > acumuladorOceania){
					continenteMasHabitantes = "Africa";
				}else
					{
						if(acumuladorOceania > acumuladorEuropa && acumuladorOceania > acumuladorAmerica ){
							continenteMasHabitantes = "Oceania";
							}
							else{
								continenteMasHabitantes = "Europa";
								}
					}	
			}
		
	}

	alert ("La cantidad de temperaturas pares son : " +acumuladorTempPares);
	alert ("la cantidad de temperaturas impares de europa son : " + acumuladorTempImparesEuropa);
	alert ("El nombre del pais con menos habitantes es : "+ nombrePaisMenosHabitantes);
	alert ("la cantidad de paises que superan los 40 grados son : "+ contadorPaises40Grados);
	alert ("la cantidad de paises de america que tienen menos de 0 grados es : "+ contadorAmerica0Grados);
	alert ("el promedio de habitantes entre los paises ingresados es : "+ promedioHabitantesTotal);
	alert ("el promedio de habitantes entre los paises que superan los 40 grados es : "+ promedioHabitantesPaises40);
	alert ("la temperatura mínima ingresada es : "+ comparadorTempMinima +  " y el nombre del pais es : "+nombrePaisMinima);
	alert ("el continente con mas habitantes es : " + continenteMasHabitantes);

}
3- validación :
pedir el ingreso de 10 mascotas 
 validar 
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y  si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo

mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza

function mostrar(){

	let mascotaIngreso;
	let razaIngreso;
	let edadIngreso;
	let nombreIngreso;
	let contadorIngresos;

	let edadperroViejo;
	let edadgatoViejo;
	let edadpajaroViejo;
	let edadotrosViejo;

	let nombrePerroViejo;
	let nombreGatoViejo;
	let nombrePajaroViejo;
	let nombreOtrosViejo;

	edadperroViejo= 0;
	edadgatoViejo= 0;
	edadpajaroViejo= 0;
	edadotrosViejo= 0;

	contadorIngresos = 0;

	for(contadorIngresos == 0; contadorIngresos < 1; contadorIngresos++){

		mascotaIngreso = prompt("Ingrese tipo de mascota ( gato , perro , pajaro y otros) : ");
			while((mascotaIngreso)==false || mascotaIngreso != "gato" && mascotaIngreso != "perro" && mascotaIngreso != "pajaro" && mascotaIngreso != "otros"){
				mascotaIngreso = prompt("DATO INVALIDO. Ingrese tipo de mascota ( gato , perro , pajaro y otros) : ");
			}

		switch(mascotaIngreso){

			case "perro":
				razaIngreso = prompt("Ingrese raza (pastor, toy, callejero) : ");
					while(isNaN(razaIngreso)==false || razaIngreso != "pastor" && razaIngreso != "toy" && razaIngreso != "callejero"){
						razaIngreso = prompt("DATO INVALIDO. Ingrese raza (pastor, toy, callejero) : ");
					}

				edadIngreso = prompt("Ingrese edad (entre 1 y 20) : ");
					while(isNaN(edadIngreso)==true || edadIngreso < 1 || edadIngreso > 20 ){
						edadIngreso = prompt("DATO INVALIDO. Ingrese edad (entre 1 y 20) : ");
					}	

				nombreIngreso = prompt("Ingrese nombre mascota : ");
					while(isNaN(nombreIngreso)==false){
						nombreIngreso = prompt("DATO INVALIDO. Ingrese nombre mascota : ");
					}

					
				if(edadperroViejo == 0 || edadperroViejo < edadIngreso){
					nombrePerroViejo = nombreIngreso;
					edadperroViejo = edadIngreso;
				}
				break;


			case "gato":
				razaIngreso = prompt("Ingrese raza gato (siames, turco, Peterbald , generico) : ");
					while(isNaN(razaIngreso)==false || razaIngreso != "siames" && razaIngreso != "turco" && razaIngreso != "Peterbald" && razaIngreso != "generico"){
						razaIngreso = prompt("DATO INVALIDO. Ingrese raza gato (siames, turco, Peterbald , generico) : ");
					}

				edadIngreso = prompt("Ingrese edad (entre 1 y 20) : ");
					while(isNaN(edadIngreso)==true || edadIngreso < 1 || edadIngreso > 20 ){
					edadIngreso = prompt("DATO INVALIDO. Ingrese edad (entre 1 y 20) : ");
					}		
				
				nombreIngreso = prompt("Ingrese nombre mascota : ");
					while(isNaN(nombreIngreso)==false){
						nombreIngreso = prompt("DATO INVALIDO. Ingrese nombre mascota : ");
					}

				if(edadgatoViejo == 0 || edadgatoViejo < edadIngreso){
						nombreGatoViejo = nombreIngreso;			
						edadgatoViejo= edadIngreso;
					}

				break;


			case "pajaro":
				razaIngreso = prompt("Ingrese raza ");
					while(isNaN(razaIngreso)==false){
						razaIngreso = prompt("DATO INVALIDO. Ingrese raza ");
					}

				edadIngreso = prompt("Ingrese edad (entre 1 y 50) : ");
					while(isNaN(edadIngreso)==true || edadIngreso < 1 || edadIngreso > 50){
						edadIngreso = prompt("DATO INVALIDO. Ingrese edad (entre 1 y 50) : ");
					}	

				nombreIngreso = prompt("Ingrese nombre mascota : ");
					while(isNaN(nombreIngreso)==false){
						nombreIngreso = prompt("DATO INVALIDO. Ingrese nombre mascota : ");
					}

				if(edadpajaroViejo == 0 || edadpajaroViejo < edadIngreso){
						nombrePajaroViejo = nombreIngreso;	
						edadpajaroViejo = edadIngreso;
					}
	
				break;


			case "otros":
				razaIngreso = prompt("Ingrese raza ");
					while((razaIngreso)==false){
						razaIngreso = prompt("DATO INVALIDO. Ingrese raza ");
					}

				edadIngreso = prompt("Ingrese edad (entre 1 y 100) : ");
					while(isNaN(edadIngreso)==true || edadIngreso < 1 || edadIngreso > 100){
						edadIngreso = prompt("DATO INVALIDO. Ingrese edad (entre 1 y 100) : ");
					}			

				nombreIngreso = prompt("Ingrese nombre mascota : ");
					while(isNaN(nombreIngreso)==false){
						nombreIngreso = prompt("DATO INVALIDO. Ingrese nombre mascota : ");
					}

				if(edadotrosViejo == 0 || edadotrosViejo < edadIngreso){
						nombreOtrosViejo = nombreIngreso;
						edadotrosViejo= edadIngreso;
					}	
					
				break;


		}//switch


	}//final for

	if(edadperroViejo != 0){
		alert("El nombre del perro mas viejos es : "+nombrePerroViejo );
	}

	if(edadgatoViejo != 0){
		alert("El nombre del gato mas viejos es : "+nombreGatoViejo);
	}

	if(edadpajaroViejo != 0){
		alert("El nombre del pajaro mas viejos es : "+nombrePajaroViejo );
	}

	if(edadotrosViejo != 0){
		alert("El nombre del x mas viejos es : "+nombreOtrosViejo );
	}


}//fuction

Realizar el algoritmo que permita ingresar 5 paises:

el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)

el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   

la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.

*/

function mostrar (){
	
	let continenteUsuario;
	let paisUsuario;
	let cantidadHabitantesUsuario;
	let nivelPobrezaUsuario;
	let temperaturaMinimaUsuario;

	let acumuladorTempPares;

	let acumuladorTempImparesEuropa;

	let banderaPaisMenosHabitantes;
	let comparadorCantidadHabitantes;
	let nombrePaisMenosHabitantes;

	let contadorPaises40Grados;
	let contadorAmerica0Grados;
	
	let acumuladorGeneralHabitantes;
	let promedioHabitantesTotal;
	let acumuladorHabitantesPaises40;
	let promedioHabitantesPaises40;
	let comparadorTempMinima;
	let nombrePaisMinima;
	let banderaTempMinima;
	let acumuladorAsia;
	let acumuladorAmerica;
	let acumuladorAfrica;
	let acumuladorEuropa;
	let acumuladorOceania;
	let continenteMasHabitantes;


	let cantidadIngresos;

	cantidadIngresos = 0;
	acumuladorTempPares = 0;
	acumuladorTempImparesEuropa = 0;
	banderaPaisMenosHabitantes = 0;
	contadorPaises40Grados = 0;
	contadorAmerica0Grados = 0;
	acumuladorGeneralHabitantes = 0;
	acumuladorHabitantesPaises40 = 0;
	banderaTempMinima = 0;
	acumuladorAsia = 0;
	acumuladorAmerica = 0;
	acumuladorAfrica = 0;
	acumuladorEuropa = 0;
	acumuladorOceania = 0;
	continenteMasHabitantes = 0;

	for(cantidadIngresos == 0; cantidadIngresos < 5; cantidadIngresos++){

		continenteUsuario = prompt("Ingrese continente (Asia, America, Africa, Europa, Oceania) : ");
			 while(!(continenteUsuario == "Asia" || continenteUsuario == "America" || continenteUsuario == "Africa" || continenteUsuario == "Europa" || continenteUsuario == "Oceania")){
			continenteUsuario = prompt("DATO INVALIDO. Ingrese continente (Asia, America, Africa, Europa, Oceania) : ");
			 } // CONTINENTE

		paisUsuario = prompt("Ingrese el pais : "); 
			 while(isNaN(paisUsuario)==false){
				paisUsuario = prompt("DATO INVALIDO. Ingrese el pais : "); 
			 }
			 // PAIS

		cantidadHabitantesUsuario = prompt("Ingrese cantidad de habitantes (entre 1 y 7000)");
		cantidadHabitantesUsuario = parseInt(cantidadHabitantesUsuario);
			 while(isNaN(cantidadHabitantesUsuario)==true || cantidadHabitantesUsuario < 1 || cantidadHabitantesUsuario > 7000){
				cantidadHabitantesUsuario = prompt("DATO INVALIDO. Ingrese cantidad de habitantes (entre 1 y 7000)");
				cantidadHabitantesUsuario = parseInt(cantidadHabitantesUsuario);
			 }//CANTIDAD HABITANTES

		nivelPobrezaUsuario = prompt("Ingrese nivel de pobreza (pobre, rico o muy rico) : ");
			 while(!(nivelPobrezaUsuario == "pobre" || nivelPobrezaUsuario == "rico" || nivelPobrezaUsuario == "muy rico")){
				nivelPobrezaUsuario = prompt("DATO INVALIDO. Ingrese nivel de pobreza (pobre, rico o muy rico) : ");
			 }// NIVEL POBREZA


		temperaturaMinimaUsuario = prompt("Ingrese temperatura minima del pais (entre -50 y 50) : ");	 
		temperaturaMinimaUsuario = parseInt(temperaturaMinimaUsuario);
			 while(isNaN(temperaturaMinimaUsuario)== true || temperaturaMinimaUsuario < -50 || temperaturaMinimaUsuario > 50){
				temperaturaMinimaUsuario = prompt("DATO INVALIDO. Ingrese temperatura minima del pais (entre -50 y 50) : ");	 
				temperaturaMinimaUsuario = parseInt(temperaturaMinimaUsuario);
			 }//TEMPERATURA PAIS

		//////////// FIN VALIDACIONES ///////////	 

		if(temperaturaMinimaUsuario % 2 == 0){
			acumuladorTempPares++;
			}

		if(continenteUsuario == "Europa" && temperaturaMinimaUsuario % 2 != 0){
			acumuladorTempImparesEuropa++;
			}

		if(banderaPaisMenosHabitantes == 0 || comparadorCantidadHabitantes < cantidadHabitantesUsuario){
			nombrePaisMenosHabitantes = paisUsuario;
			banderaPaisMenosHabitantes = 1;
			}

		if(temperaturaMinimaUsuario > 40){
			contadorPaises40Grados++;
			acumuladorHabitantesPaises40 = acumuladorHabitantesPaises40 + cantidadHabitantesUsuario;
			}

		if(continenteUsuario == "America" && temperaturaMinimaUsuario < 0 ){
			contadorAmerica0Grados++;
			}

		if(cantidadHabitantesUsuario > 0){
			acumuladorGeneralHabitantes = acumuladorGeneralHabitantes + cantidadHabitantesUsuario;
			}

		if(banderaTempMinima == 0 ||temperaturaMinimaUsuario < comparadorTempMinima){
			comparadorTempMinima = temperaturaMinimaUsuario;
			nombrePaisMinima = paisUsuario;
			banderaTempMinima = 1;
			}

		switch (continenteUsuario){
			case "Asia":
				acumuladorAsia = acumuladorAsia + cantidadHabitantesUsuario;
				break;
			case "America":
				acumuladorAmerica = acumuladorAmerica + cantidadHabitantesUsuario;
				break;
			case "Africa":
				acumuladorAfrica = acumuladorAfrica + cantidadHabitantesUsuario;
				break;
			case "Europa":
				acumuladorEuropa = acumuladorEuropa + cantidadHabitantesUsuario;
				break;
			case "Oceania":
				acumuladorOceania = acumuladorEuropa + cantidadHabitantesUsuario;
				break;

		}	


	}//FINAL FOR

	promedioHabitantesTotal = acumuladorGeneralHabitantes / cantidadIngresos; 

	promedioHabitantesPaises40 = acumuladorHabitantesPaises40 / contadorPaises40Grados;

	if(acumuladorAsia > acumuladorAmerica && acumuladorAsia > acumuladorAfrica && acumuladorAsia > acumuladorEuropa && acumuladorAsia > acumuladorOceania){
		continenteMasHabitantes = "Asia";
	}
	else{
		if(acumuladorAmerica > acumuladorAfrica && acumuladorAmerica > acumuladorEuropa && acumuladorAmerica > acumuladorOceania){
			continenteMasHabitantes = "America";
		}else
			{
				if(acumuladorAfrica > acumuladorAsia && acumuladorAfrica > acumuladorEuropa && acumuladorAfrica > acumuladorOceania){
					continenteMasHabitantes = "Africa";
				}else
					{
						if(acumuladorOceania > acumuladorEuropa && acumuladorOceania > acumuladorAmerica ){
							continenteMasHabitantes = "Oceania";
							}
							else{
								continenteMasHabitantes = "Europa";
								}
					}	
			}
		
	}

	alert ("La cantidad de temperaturas pares son : " +acumuladorTempPares);
	alert ("la cantidad de temperaturas impares de europa son : " + acumuladorTempImparesEuropa);
	alert ("El nombre del pais con menos habitantes es : "+ nombrePaisMenosHabitantes);
	alert ("la cantidad de paises que superan los 40 grados son : "+ contadorPaises40Grados);
	alert ("la cantidad de paises de america que tienen menos de 0 grados es : "+ contadorAmerica0Grados);
	alert ("el promedio de habitantes entre los paises ingresados es : "+ promedioHabitantesTotal);
	alert ("el promedio de habitantes entre los paises que superan los 40 grados es : "+ promedioHabitantesPaises40);
	alert ("la temperatura mínima ingresada es : "+ comparadorTempMinima +  " y el nombre del pais es : "+nombrePaisMinima);
	alert ("el continente con mas habitantes es : " + continenteMasHabitantes);
}