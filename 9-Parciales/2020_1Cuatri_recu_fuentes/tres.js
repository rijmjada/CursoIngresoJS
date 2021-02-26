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
let consultaUsuario;
let nacionalidadTemperatura;

let banderaNacionalidadTemperatura;

banderaNacionalidadTemperatura = 0;

consultaUsuario = "si";

while(consultaUsuario == "si"){

	nombreIngreso = prompt("Ingrese nombre : ");
	
	nacionalidadIngreso = prompt("Ingrese nacionalidad : ");

	edadIngreso = prompt("Ingrese edad : ");

	sexoIngreso = prompt("Ingrese femenino o masculino : ");

	estadoCivilIngreso = prompt("Ingrese estado civil (soltero, casado o viudo) : ");

	temperaturaIngreso = prompt("Ingrese temperatura : ");

	if(banderaNacionalidadTemperatura == 0 || temperaturaIngreso > nacionalidadTemperatura){
		nacionalidadTemperatura = temperaturaIngreso;
		banderaNacionalidadTemperatura = 1;
	}else{}

	


}//while

}
