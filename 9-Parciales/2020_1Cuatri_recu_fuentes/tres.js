/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/

function mostrar()
{

	let nombreIngreso;
	let nacionalidadIngreso;
	let edadIngreso;
	let sexoIngreso;
	let estadoCivilIngreso;
	let temperaturaIngreso;
	let consultaIngreso;
	let comparadorTemperatura;
	let banderaNacionalidadTemperatura;
	let nacionalidadMayorTemperatura;
	let contadormayores17Solteros;
	let contadorMujeresSolterasOViudas;
	let contador60temp;
	let acumuladorEdadMujeresCasadas;
	let promedioMujeresCasadas;
	let contadorMujeresCasadas;

	promedioMujeresCasadas = 0;
	acumuladorEdadMujeresCasadas = 0;
	contadorMujeresCasadas = 0;
	contador60temp = 0;
	contadorMujeresSolterasOViudas = 0;
	contadormayores17Solteros = 0;
	banderaNacionalidadTemperatura = 0;
	comparadorTemperatura = 0;
	consultaIngreso = "si";

	while(consultaIngreso == "si"){

	nombreIngreso = prompt("Ingrese nombre : ");
		while(isNaN(nombreIngreso)==false){
			nombreIngreso = prompt("DATO INVALIDO. Ingrese nombre : ");
		}

	nacionalidadIngreso = prompt("Ingrese nacionalidad : ")
		while(isNaN(nacionalidadIngreso)==false){
			nacionalidadIngreso = prompt("DATO INVALIDO. Ingrese nacionalidad : ")
		}

	edadIngreso = prompt("Ingrese edad : ");
		while(isNaN(edadIngreso)==true){
			edadIngreso = prompt("DATO INVALIDO.Ingrese edad : ");
		}	

	sexoIngreso = prompt("Ingrese sexo (masculino o femenino) :");
		while(isNaN(sexoIngreso)==false || sexoIngreso != "masculino" && sexoIngreso != "femenino"){
			sexoIngreso = prompt("DATO INVALIDO. Ingrese sexo (masculino o femenino) :");
		}	

	estadoCivilIngreso = prompt("Ingrese estado civil (soltero, casado o viudo) : ");
		while(isNaN(estadoCivilIngreso)==false || estadoCivilIngreso != "soltero" && estadoCivilIngreso != "casado" && estadoCivilIngreso != "viudo"){
			estadoCivilIngreso = prompt("DATO INVALIDO. Ingrese estado civil (soltero, casado o viudo) : ");
		}	

	temperaturaIngreso = prompt("Ingrese temperatura : ");
	temperaturaIngreso = parseInt(temperaturaIngreso);
		while(isNaN(temperaturaIngreso)==true){
			temperaturaIngreso = prompt("DATO INVALIDO. Ingrese temperatura : ");
		temperaturaIngreso = parseInt(temperaturaIngreso);
		}	

	///////////// FIN VALIDACIONES //////////////	

	if(banderaNacionalidadTemperatura == 0 || temperaturaIngreso > comparadorTemperatura)
		{
		nacionalidadMayorTemperatura = nacionalidadIngreso;
		banderaNacionalidadTemperatura = 1;
		}

	if(edadIngreso > 17 && estadoCivilIngreso == "soltero")
		{
		contadormayores17Solteros++;
		}

	if(sexoIngreso == "femenino" && (estadoCivilIngreso == "soltero" || estadoCivilIngreso == "viudo"))
		{
		contadorMujeresSolterasOViudas++;
		}

	if(temperaturaIngreso > 38 && edadIngreso > 60)
		{
		contador60temp++;
		}

	if(sexoIngreso == "femenino" && estadoCivilIngreso == "casado")
		{
		contadorMujeresCasadas++;
		acumuladorEdadMujeresCasadas = acumuladorEdadMujeresCasadas + edadIngreso;
		}

		
	consultaIngreso = prompt("Ingrese ´si´ para continuar :");	

	}// fin while

	promedioMujeresCasadas = acumuladorEdadMujeresCasadas / contadorMujeresCasadas;

	alert ("la Nacionalidad de la persona con mas temperatura es : "+ nacionalidadMayorTemperatura);
	alert (" La cantidad de  mayores de edad( más de 17) que estan solteros es :" +contadormayores17Solteros);
	alert ("La cantidad de Mujeres que hay solteras o viudas : "+contadorMujeresSolterasOViudas);
	alert (" cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura : " +contador60temp);
	if(promedioMujeresCasadas > 0){
		alert ("El promedio de edad entre las mujeres casadas : " + promedioMujeresCasadas);
		}

}
