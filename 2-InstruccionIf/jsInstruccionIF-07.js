function mostrar()
{
	let edad;
	let estadocivil;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadocivil = document.getElementById("estadoCivil").value;

	if (edad < 18 && estadocivil != "Soltero"){

		alert ("Es muy pequeño para NO ser soltero");
	}
}