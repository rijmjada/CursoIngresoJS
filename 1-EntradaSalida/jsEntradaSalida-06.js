/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let resultado;


	numero1   = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2   = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 + numero2;

	alert ("La suma es " +resultado);

	/*
	let numero1;
	let numero2;
	let resultado;
	

	numero1   = document.getElementById("txtIdNumeroUno").value;
	numero 2   = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(numero1) + parseInt(numero2);


	alert ("La suma es "+resultado);

	*/


}

