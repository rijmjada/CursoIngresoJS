/*Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/

function mostrar()
{
	
let tipoProductoIngreso;
let precioIngreso;
let cantidadIngreso;
let marcaIngreso;
let fabricanteIngreso;
let contadorIngresos;
let comparadorPrecioJabones;
let cantidadJabonCaro;
let fabricanteJabonCaro;
let acumuladorJabon;
let acumuladorBarbijo;
let acumuladorAlcohol;
let promedioPorCompra;
let contadorComprasJabon;
let contadorComprasAlcohol;
let contadorComprasBarbijo;

contadorComprasBarbijo = 0;
contadorComprasAlcohol = 0;
contadorComprasJabon = 0;
comparadorPrecioJabones = 0;
promedioPorCompra = 0;
cantidadJabonCaro = 0;
acumuladorJabon = 0;
acumuladorBarbijo = 0;
acumuladorAlcohol = 0;
contadorIngresos = 0;

for(contadorIngresos == 0; contadorIngresos < 3; contadorIngresos++){

	tipoProductoIngreso = prompt("Ingrese barbijo, jabon o alcohol : ");
		while(isNaN(tipoProductoIngreso)==false || tipoProductoIngreso != "barbijo" &&  tipoProductoIngreso != "jabon" && tipoProductoIngreso != "alcohol"){
			tipoProductoIngreso = prompt("DATO INVALIDO. Ingrese barbijo, jabon o alcohol : ");
		}

	precioIngreso = prompt("Ingrese precio (100 a 300) : ");
	precioIngreso = parseInt(precioIngreso);
	 while(isNaN(precioIngreso)==true || precioIngreso < 100 || precioIngreso > 300){
		precioIngreso = prompt("DATO INVALIDO. Ingrese precio (100 a 300) : ");
		precioIngreso = parseInt(precioIngreso);
	 }	


	cantidadIngreso = prompt("Ingrese cantidad ( mayor a 0 y no mas de 100) : ");
	cantidadIngreso = parseInt(cantidadIngreso);
	 	while(isNaN(cantidadIngreso)==true || cantidadIngreso <1 || cantidadIngreso > 1000){
			cantidadIngreso = prompt("DATO INVALIDO. Ingrese cantidad ( mayor a 0 y no mas de 100) : ");
			cantidadIngreso = parseInt(cantidadIngreso);
		 }

	marcaIngreso = prompt("Igrese marca : ");
		 while(isNaN(marcaIngreso)==false){
			marcaIngreso = prompt("DATO INVALIDO. Igrese marca : ");
		 }


	fabricanteIngreso = prompt("Ingrese fabricante : ");
	while(isNaN(fabricanteIngreso)==false){
		fabricanteIngreso = prompt("DATO INVALIDO. Igrese fabricante : ");
	 }

	/////////////////// fin validaciones ////////////////

	switch (tipoProductoIngreso){
		case "jabon":
			acumuladorJabon= acumuladorJabon + cantidadIngreso;
			contadorComprasJabon++;
			break;
		case "barbijo":
			acumuladorBarbijo = acumuladorBarbijo+ cantidadIngreso;
			contadorComprasBarbijo++;
			break;
		case "alcohol":
			acumuladorAlcohol = acumuladorAlcohol + cantidadIngreso;
			contadorComprasAlcohol++;
			break;
	}//switch


	 if(tipoProductoIngreso == "jabon" && precioIngreso > comparadorPrecioJabones){
		cantidadJabonCaro = cantidadIngreso;
		fabricanteJabonCaro = fabricanteIngreso;
	 }



	}//final for

	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon){
		promedioPorCompra = acumuladorAlcohol / contadorComprasAlcohol;
	}
	else{
		if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol){
			promedioPorCompra = acumuladorBarbijo / contadorComprasBarbijo;
		}
		else{
			promedioPorCompra = acumuladorJabon / contadorComprasJabon;
		}
	}


	if(cantidadJabonCaro > 0){
		alert ("La cantidad de unidades del jabon mas caro es : "+cantidadJabonCaro + " y el fabricante es : "+fabricanteJabonCaro);
	}
	alert ("Del tipo de producto con más unidades en total de la compra, el promedio por compra es : "+ promedioPorCompra.toFixed(2));
	alert ("Las unidades de Barbijos se compraron en total son : "+ acumuladorBarbijo);

}//fin fuction
