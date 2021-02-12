/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt(numero);


	while(numero < 1 || numero > 9){
		numero = prompt("Reintente");
		numero = parseInt(numero);
	}

	document.getElementById("txtIdNumero").value = numero;
	
}//FIN DE LA FUNCIÓN