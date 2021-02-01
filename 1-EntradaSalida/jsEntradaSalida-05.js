/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
 
/*
function mostrar()
{	
	let nombre;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;
	edad   = document.getElementById("txtIdEdad").value;

	//se puede escribir de esta forma tambien// alert ("Usted se llama "+ nombre +  " y tiene " + edad + " años" );


	alert (`Usted se llama ${nombre} y tiene ${edad} años`)

}*/

// 5 bis

function mostrar () 
 {
	let nombre;
	let edad;
	let apellido;

	nombre = document.getElementById("txtIdNombre").value;
	edad   = document.getElementById("txtIdEdad").value;
	apellido = prompt("Ingrese su apellido: ");

	alert ("Usted se llama " + nombre + " " + apellido + " y tiene " + edad +" años");
}
