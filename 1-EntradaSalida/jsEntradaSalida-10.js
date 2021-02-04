/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;
	let operacion;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt (importe);

	descuento = prompt ("Ingrese descuento : ");
	descuento = parseInt (descuento);

	operacion = importe * descuento / 100;

	resultado = importe - operacion;

	document.getElementById("txtIdResultado").value = resultado;

}
