/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;

	nombre = prompt (" Ingrese su dato ");

	document.getElementById("txtIdNombre").value = nombre //Me imprime en la caja de texto el dato tomado por prompt//

}

