/* Diego Ormeño

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso () 
{
	let edad;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;

	edad = prompt("Ingrese edad entre 18 y 90 inclusive : ");
	edad = parseInt(edad);
	
	while(edad < 18 || edad > 91)
	{
		edad = prompt("Reingrese: Edad entre 18 y 90 inclusive : ");
		edad = parseInt(edad);
	}
	document.getElementById("txtIdEdad").value = edad;
	//termina edad

sexo = prompt("Ingrese Sexo, masculino o femenino : ");

	while(sexo != "masculino" && sexo != "femenino"){
		sexo = prompt("Reingrese: Sexo, “M” para masculino y “F” para femenino : ");
	}
	document.getElementById("txtIdSexo").value = sexo;
	//termina sexo

	estadoCivil = prompt("Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	estadoCivil = parseInt(estadoCivil);

	while(estadoCivil <1 || estadoCivil >4){
		estadoCivil = prompt("Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	}
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	//termina estadoCivil


	sueldoBruto = prompt("Sueldo bruto, no menor a 8000");
	sueldoBruto = parseInt(sueldoBruto);

	while(sueldoBruto < 8000)
	{
		sueldoBruto = prompt("Reingrese : Sueldo bruto, no menor a 8000");
	sueldoBruto = parseInt(sueldoBruto);
	}
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	//termina sueldoBruto


	numeroLegajo = prompt("Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
	numeroLegajo = parseInt(numeroLegajo);

	while(numeroLegajo < 1000 || numeroLegajo > 9999)
	{
		numeroLegajo = prompt("Reingrese :  Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
		numeroLegajo = parseInt(numeroLegajo);
	}
	document.getElementById("txtIdLegajo").value = numeroLegajo;
	//termina Legajo


	nacionalidad = prompt("Ingrese nacionalidad : ¨Argentino¨, ¨Extranjero¨ o ¨Nacionalizado¨");

	while (nacionalidad != "Argentino" && nacionalidad != "Extranjero" && nacionalidad != "Nacionalizado")
	{
		nacionalidad = prompt("Dato invalido. Ingrese nacionalidad : ¨Argentino¨, ¨Extranjero¨ o ¨Nacionalizado¨");
	}
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
	//termina nacionalidad

}
