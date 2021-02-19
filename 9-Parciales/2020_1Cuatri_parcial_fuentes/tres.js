/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
	let nombreIngreso;
	let edadIngreso;
	let sexoIngreso;
	let estadoCivilIngreso;
	let temperaturaIngreso;
	let nombreTempAlta;
	let temperaturaMasAlta;
	let mayoresDeEdadViudos;
	let contadorSolteros;
	let contadorHombresSolterosViudos;
	let contadorMayoresEdadViudos;
	let contadorMasDe60ConTemp;
	let acumuladorEdadSolteros;
	let promedioSolteros;
	let consultaUsuario;

	consultaUsuario = "si"
	temperaturaMasAlta = 0;
	contadorMayoresEdadViudos = 0;
	contadorHombresSolterosViudos = 0;
	contadorMasDe60ConTemp = 0;
	contadorSolteros = 0;
	acumuladorEdadSolteros = 0;
	

	while(consultaUsuario == "si")
		{

			nombreIngreso = prompt("Ingrese el nombre : ");
			
			edadIngreso = prompt("Ingrese edad : ");
			edadIngreso = parseInt(edadIngreso);
				while(isNaN(edadIngreso)){
				edadIngreso = prompt("Error .Ingrese edad : ");
				edadIngreso = parseInt(edadIngreso);
				}

			sexoIngreso = prompt ("Ingrese sexo (femenino o masculino) : ");
				while(sexoIngreso != "femenino" && sexoIngreso != "masculino"){
				sexoIngreso = prompt ("Error . Ingrese sexo (femenino o masculino) : ");
				}

			estadoCivilIngreso = prompt("Ingrese estado civil (soltero, casado o viudo) :");
				while(estadoCivilIngreso != "soltero" && estadoCivilIngreso != "casado" && estadoCivilIngreso != "viudo"){
				estadoCivilIngreso = prompt("Error . Ingrese estado civil (soltero, casado o viudo :");
				}

			temperaturaIngreso = prompt("Ingrese temperatura corporal : ");
			temperaturaIngreso = parseFloat(temperaturaIngreso);
				while(isNaN(temperaturaIngreso)){
				temperaturaIngreso = prompt("Error . Ingrese temperatura corporal : ");
				temperaturaIngreso = parseFloat(temperaturaIngreso);
				}
			//Fin validaciones

			
			if(temperaturaMasAlta == 0 || temperaturaMasAlta < temperaturaIngreso){
				temperaturaMasAlta = temperaturaIngreso;
				nombreTempAlta = nombreIngreso;
			}else{}
			// nombre de la persona con mayor temp

			if(edadIngreso > 17 && estadoCivilIngreso == "viudo"){
				contadorMayoresEdadViudos++;
			}else{}
			// contador mayores de edad y viudos
			
			if(sexoIngreso == "masculino" && estadoCivilIngreso == "soltero" || estadoCivilIngreso == "viudo"){
				contadorHombresSolterosViudos++;
			}else{}
			// contador hombres solteros o viudos

			if(edadIngreso > 59 && temperaturaIngreso > 38 ){
				contadorMasDe60ConTemp++;
			}else{}

			if(estadoCivilIngreso == "soltero"){
				contadorSolteros++;
				acumuladorEdadSolteros = edadIngreso;
			}else{}

			promedioSolteros = acumuladorEdadSolteros / contadorSolteros;

			consultaUsuario = prompt("Ingrese si para continuar : ");
		}// Fin while principal	


}
/*
let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCarga;
	let contadorMayoresEdadViudos;
	let solteros;
	let viudos;
	let ancianoFiebre;
	let promedioSolteros;
	let consultaUsuario;
	let tempCovid;
	let nombreCovid;
	let contadorSolteros;
	let contadorViudos;



	consultaUsuario = "si"; 						// entrada al bucle
	nombreCovid = 0; 								// nombre persona con mayor temperatura
	contadorSolteros = 0;							// cantidad de solteros
	contadorViudos = 0;								// cantidad de viudos
	contadorMayoresEdadViudos = 0;					// cantidad de gente mayor de edad y viudos



	while(consultaUsuario == "si"){

		nombre = prompt ("Ingrese nombre pasajero : ");

		edad = prompt("Ingrese edad : ");
		edad = parseInt(edad);
			while(isNaN(edad))
				{
					edad = prompt("Dato erroneo. Ingrese edad : ");
					edad = parseInt(edad);
				}

		sexo = prompt("Igrese sexo ( f o m ) : ");
			while(!(sexo == "f" || sexo == "m"))
				{
					sexo = prompt("Dato erroneo. Igrese sexo ( f o m ) : ");
				}

		estadoCivil = prompt('Ingrese estado civil ("soltero", "casado" o "viudo")');
			while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo"))
				{
					estadoCivil = prompt('Error. Ingrese estado civil ("soltero", "casado" o "viudo")');
				}
			if(estadoCivil == "soltero"){
				contadorSolteros++;
			}
			if(estadoCivil == "viudo"){
				contadorViudos++;
			}
			else{}	

		temperaturaCarga = prompt('Ingrese temperatura corporal : ');
		temperaturaCarga = parseInt(temperaturaCarga);
			if(tempCovid == 0 || temperaturaCarga > tempCovid){
				tempCovid = temperaturaCarga;
				nombreCovid = nombre;
			}

		if(edad >18 && estadoCivil == "viudo"){
			contadorMayoresEdadViudos++;
		}
		else{}

			
			
		consultaUsuario = prompt("Desea continuar con la carga de datos?. Indique ¨si¨ en caso afirmativo : ");
	}//while


	alert ("El nombre de la persona con mayore temperatura es : "+nombreCovid);
	alert ("La cantidad de mayores de edad viudos es : "+contadorMayoresEdadViudos);
	alert ("La cantidad de hombres que hay solteros es : "+ contadorSolteros);
	alert ("La cantidad de hombres que hay viudos es : "+ contadorViudos);
*/