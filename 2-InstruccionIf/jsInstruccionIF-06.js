function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad >= 13){

		if (edad >= 18){
			
			alert ("Es mayor de edad");
		}
		else {
			alert ("Es adolcente");
		}
	}
	else {
		alert ("Es menor de edad");
	}
}