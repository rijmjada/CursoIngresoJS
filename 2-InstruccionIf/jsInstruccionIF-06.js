function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad > 12){

		if (edad > 17){
			
			alert ("Es mayor de edad");
		}
		else {
			alert ("Es adolescente");
		}
	}
	else {
		alert ("Es menor de edad");
	}
}