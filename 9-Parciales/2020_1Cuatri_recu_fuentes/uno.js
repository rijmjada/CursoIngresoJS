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
	let usuarioTipoProducto;
	let usuarioPrecio;
	let usuarioCantidad;
	let usuarioMarca;
	let usuarioFabricante;
	let jabonMasCaroPrecio;
	let jabonMasCaroUnidades;
	let jabonMasCaroFabricante;
	let acumuladorUnidadesBarbijo;
	let acumuladorUnidadesJabon;
	let acumuladorUnidadesAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let promedio;
	let cantidadDeCargas;
	
	jabonMasCaroUnidades = 0;
	jabonMasCaroPrecio = 0;
	acumuladorUnidadesAlcohol = 0;
	acumuladorUnidadesBarbijo = 0;
	acumuladorUnidadesJabon = 0;
	contadorBarbijo = 0;
	contadorAlcohol = 0;
	contadorJabon = 0;
	cantidadDeCargas = 0;

	for(cantidadDeCargas == 0; cantidadDeCargas < 2; cantidadDeCargas++){

		usuarioTipoProducto = prompt("Ingrese tipo de producto (barbijo, jabon, alcohol) :");
		while(!(usuarioTipoProducto == "barbijo" || usuarioTipoProducto == "jabon" || usuarioTipoProducto == "alcohol")){
			usuarioTipoProducto = prompt("DATO INVALIDO. Ingrese tipo de producto (barbijo, jabon, alcohol) :");
			}

		usuarioPrecio = prompt("Ingrese precio : ");
		usuarioPrecio = parseFloat(usuarioPrecio);
		while(isNaN(usuarioPrecio)== true){
			usuarioPrecio = prompt("DATO INVALIDO. Ingrese precio : ");
			usuarioPrecio = parseFloat(usuarioPrecio);
			}
		
		usuarioCantidad = prompt("Ingrese cantidad : ");
		usuarioCantidad = parseInt(usuarioCantidad);
		while(isNaN(usuarioCantidad)){
			usuarioCantidad = prompt("Ingrese cantidad : ");
			usuarioCantidad = parseInt(usuarioCantidad);
			}	

		usuarioMarca = prompt("Ingrese marca : ");
			while(isNaN(usuarioMarca)==false){
				usuarioMarca = prompt("DATO INVALIDO. Ingrese marca : ");
			}
		
		usuarioFabricante = prompt("Ingrese fabricante : ")
			while(isNaN(usuarioFabricante)==false){
				usuarioFabricante = prompt("DATO INVALIDO. Ingrese fabricante : ")
			}
		
		/////////////// FIN VALIDACIONES ////////////////

		switch(usuarioTipoProducto){

			case "alcohol":
				contadorAlcohol++;
				acumuladorUnidadesAlcohol = acumuladorUnidadesAlcohol + usuarioCantidad;	
				break;
			case "barbijo":
				contadorBarbijo++;
				acumuladorUnidadesBarbijo = acumuladorUnidadesBarbijo + usuarioCantidad;	
				break;
			case "jabon":
				contadorJabon++;
				acumuladorUnidadesJabon = acumuladorUnidadesJabon + usuarioCantidad;
				if(jabonMasCaroPrecio == 0 || usuarioPrecio > jabonMasCaroPrecio){
					jabonMasCaroUnidades = usuarioCantidad;
					jabonMasCaroFabricante = usuarioFabricante;
				}
				break;
		}//fin switch



	}// final for

	if(acumuladorUnidadesAlcohol > acumuladorUnidadesBarbijo && acumuladorUnidadesAlcohol > acumuladorUnidadesJabon){
		promedio = acumuladorUnidadesAlcohol / contadorAlcohol;
	}
	else{
		if(acumuladorUnidadesBarbijo > acumuladorUnidadesJabon && acumuladorUnidadesBarbijo > acumuladorUnidadesAlcohol){
			promedio = acumuladorUnidadesBarbijo / contadorBarbijo;
		}
		else{
			promedio = acumuladorUnidadesJabon / contadorJabon;
		}
	}

	alert ("La cantidad de jabones mas caros es : "+ acumuladorUnidadesJabon + " y el fabricante es : "+ jabonMasCaroFabricante);
	alert ("El promedio por compra del producto mas comprado es : "+ promedio);
	alert ("La cantidad de unidades de barbijos comprados es : "+ acumuladorUnidadesBarbijo);


}//fin fuction
