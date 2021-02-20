/*
Diego Ormeño

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
	let contadorSolteros;
	let contadorHombresSolterosViudos;
	let contadorMayoresEdadViudos;
	let contadorMasDe60ConTemp;
	let acumuladorEdadSolterosViudos;
	let promedioSolteros;
	let consultaUsuario;

	consultaUsuario = "si"
	temperaturaMasAlta = 0;
	contadorMayoresEdadViudos = 0;
	contadorHombresSolterosViudos = 0;
	contadorMasDe60ConTemp = 0;
	contadorSolteros = 0;
	acumuladorEdadSolterosViudos = 0;
	

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

			
			if(temperaturaMasAlta == 0 || temperaturaIngreso > temperaturaMasAlta){
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
				acumuladorEdadSolterosViudos = acumuladorEdadSolterosViudos + edadIngreso;
			}else{}
			// contador hombres solteros o viudos

			if(edadIngreso > 59 && temperaturaIngreso > 38 ){
				contadorMasDe60ConTemp++;
			}else{}

			if(estadoCivilIngreso == "soltero" && sexoIngreso == "masculino"){
				contadorSolteros++;
			}else{}


			consultaUsuario = prompt("Ingrese si para continuar : ");

			
		}// Fin while principal	
	
	promedioSolteros = acumuladorEdadSolterosViudos / contadorSolteros;
	

	alert ("El nombre de la persona con mas temperatura es : "+nombreTempAlta);
	alert ("La cantidad de mayores de edad viudos es : "+ contadorMayoresEdadViudos);
	alert ("La cantidad de hombres solteros o viudos es : "+contadorHombresSolterosViudos);
	alert ("La cantidad de mayores de 60 con mas de 38° de temperatura es : "+contadorMasDe60ConTemp);
	alert ("El promedio de edad entre los hombres solteros es : "+promedioSolteros);
}
