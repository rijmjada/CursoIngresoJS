/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let num1;
	let num2;
	let resultado;

	num1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resultado = num1 % num2;

	alert ("El resto es : " +resultado);



}

/* Sabados ejercicio 3
3 - Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)

UTILIZAR EL EJERCICIO 8 para resolverlo
*/
function SacarResto()
{
	let numero1;
	let numero2;
	let resultado;
	let suma;
	let promedio;
	let modulo;

	numero1 = document.getElementById("txtIdNumeroDividendo").value;
	numero1 = parseFloat(numero1);

	numero2 = document.getElementById("txtIdNumeroDivisor").value;
	numero2 = parseFloat(numero2);

	suma   = numero1 + numero2;

	promedio = suma / 2;

	modulo  = numero1 % numero2;

	console.log ("-Suma: "+ suma + "  -promedio: "+ promedio + "   -modulo : "+ modulo);

}
