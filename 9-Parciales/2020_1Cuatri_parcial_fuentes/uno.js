/*
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar(){

	let tipoProducto;
	let precioProducto;
	let cantidadProducto;
	let marcaProducto;
	let fabricanteProducto;
	let alcoholPrecioBajo;			//EJERCICIO A
	let fabricanteAlcohol; 			//EJERCICIO A
	let cantidadAlcoholPrecioBajo; //EJERCICIO A
	let cantidadIngresosUsuario;  		// EJERCICIO B
	let unidadesJabon;			//EJERCICIO B & C
	let contadorJabon;
	let unidadesBarbijo;		//EJERCICIO B
	let contadorBarbijo;		//EJERCICIO B
	let unidadesAlcohol;		//EJERCICIO B
	let contadorAlcohol;		//EJERCICIO B
	let promedioPorCompra;		//EJERCICIO B

	cantidadIngresosUsuario = 0;
	alcoholPrecioBajo = 0;
	unidadesAlcohol = 0;
	unidadesJabon = 0;
	unidadesBarbijo = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;


	while(cantidadIngresosUsuario < 5){

		tipoProducto = prompt("Ingrese tipo de producto (barbijo, jabon o alcohol): ");
		while(!(tipoProducto == "barbijo" || tipoProducto == "jabon" || tipoProducto == "alcohol")){
			tipoProducto = prompt("Error .Ingrese tipo de producto (barbijo, jabon o alcohol) : ");
		}
		// tipo producto

		precioProducto = prompt("Ingrese el precio (entre 100 y 300) : ");
		precioProducto = parseFloat(precioProducto);
			while(isNaN(precioProducto)== true || precioProducto <100 || precioProducto > 300){
				precioProducto = prompt("Error .Ingrese el precio (entre 100 y 300) : ");
				precioProducto = parseFloat(precioProducto);
			}
		// precio	

		cantidadProducto = prompt("Ingrese cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades) : ");
		cantidadProducto = parseInt(cantidadProducto);
			while(isNaN(cantidadProducto)== true || cantidadProducto < 1 || cantidadProducto > 1000){
				cantidadProducto = prompt("Error . Ingrese cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades): ");
				cantidadProducto = parseInt(cantidadProducto);
			}
		// cantidad	

		marcaProducto = prompt("Ingrese marca : ");

		fabricanteProducto = prompt("Ingrese fabricante : ");
		/// FIN VALIDACIONES

		
		switch (tipoProducto) {

				case "alcohol":
					unidadesAlcohol = unidadesAlcohol + cantidadProducto;
					contadorAlcohol++;
					if(alcoholPrecioBajo == 0 || precioProducto < alcoholPrecioBajo){
						alcoholPrecioBajo = precioProducto;
						cantidadAlcoholPrecioBajo = cantidadProducto;
						fabricanteAlcohol = fabricanteProducto;
					}else{}
					// IF EJERCICIO A //
					break;
				case "barbijo":
					unidadesBarbijo = unidadesBarbijo + cantidadProducto;
					contadorBarbijo++
					break;
				case "jabon":
					unidadesJabon = unidadesJabon+ cantidadProducto;
					contadorJabon++;
					break;
				default:
					break;	
		}// SWITCH EJERCICIO B y A //
				
		cantidadIngresosUsuario++; 

	}///// FIN WHILE  ////


	if(unidadesAlcohol > unidadesBarbijo && unidadesAlcohol > unidadesJabon){
		promedioPorCompra = unidadesAlcohol / contadorAlcohol;
	}
	else{
		if(unidadesBarbijo >  unidadesJabon){
			promedioPorCompra = unidadesBarbijo / contadorBarbijo;
		}
		else{
			promedioPorCompra = unidadesJabon / contadorJabon;
		}
	} // EJERCICIO B //



	if(unidadesAlcohol > 0){
		alert ("El fabricante del alcohol mas barato es : "+ fabricanteAlcohol+ " y las unidades son : " + cantidadAlcoholPrecioBajo );
	}else{
		alert ("No se ingresaron unidades de alcohol. ")
	} // EJERCICIO A // 	
	
	alert ("La cantidad de jabones son : "+ unidadesJabon );
	alert ("El promedio del tipo con mas productos es: "+ promedioPorCompra.toFixed(1));

}

