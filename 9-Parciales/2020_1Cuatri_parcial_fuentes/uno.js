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
	let alcoholPrecioBajo;
	let fabricanteAlcohol;
	let cantidadAlcoholPrecioBajo;
	let contadorProductos;
	let sumaJabones;
	let unidadesJabon;
	let contadorJabon;
	let unidadesBarbijo;
	let contadorBarbijo;
	let unidadesAlcohol;
	let contadorAlcohol;
	let promedioPorCompra;

	
	sumaJabones = 0;
	contadorProductos = 0; 
	alcoholPrecioBajo = 0;
	comparadorTipoMasUnidades = 0;
	sumaJabones = 0;
	unidadesAlcohol = 0;
	unidadesJabon = 0;
	unidadesBarbijo = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;


	while(contadorProductos < 2){

		tipoProducto = prompt("Ingrese tipo de producto (barbijo, jabon o alcohol : ");
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
		// fin validaciones

		if(alcoholPrecioBajo == 0 || tipoProducto == "alcohol" && precioProducto < alcoholPrecioBajo){
			alcoholPrecioBajo = precioProducto;
			cantidadAlcoholPrecioBajo = cantidadProducto;
			fabricanteAlcohol = fabricanteProducto;
		}else{}
		
		switch (tipoProducto) {

				case "alcohol":
					unidadesAlcohol = unidadesAlcohol + cantidadProducto;
					contadorAlcohol++;
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
		}


		
				
		contadorProductos++;

	}//fin while                       //////////////////////

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
	}

	/*if(ingresoProducto == "jabon"){
		unidadesJabon = cantidadProducto;
		sumaJabones = sumaJabones + unidadesJabon;
	}else{}*/

	alert ("La cantida de jabones es : "+ contadorJabon );
	alert ("El promedio del tipo con mas productos es: "+ promedioPorCompra);
}


/*
function mostrar()
{
	let tipoDeProducto;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let precioBarbijo;
	let precioJabon;
	let precioBajoAlcohol;
	let marca;
	let fabricante;
	let contador;
	let promedioCompra;

	contador = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	acumuladorAlcohol = 0;

	precioBajoAlcohol = 0;
	cantidadAlcohol = 0;
	fabricanteAlcohol = 0;
	


	for(contador = 0 ; contador < 5 ; contador++ ){

		tipoDeProducto = prompt("Ingrese tipo de producto (barbijo , jabon o alcohol) : ");
		while(!(tipoDeProducto =="barbijo" || tipoDeProducto == "jabon" || tipoDeProducto =="alcohol"))
		{
			tipoDeProducto = prompt("Reingrese un dato valido (barbijo , jabon o alcohol) : ");
		}

		precioProducto = prompt ("Ingrese el precio (entre $100 y $300): ");
		precioProducto = parseFloat(precioProducto);
		while(precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = prompt ("Reingrese el precio (entre $100 y $300): ");
			precioProducto = parseFloat(precioProducto);
		}

		cantidadProducto = prompt("Ingrese cantidad (no puede superar las 1000 unidades) : ");
		cantidadProducto = parseInt(cantidadProducto);
		while (cantidadProducto < 1 && cantidadProducto > 1000 )
		{
			cantidadProducto = prompt("Reingrese cantidad (no puede superar las 1000 unidades) : ");
			cantidadProducto = parseInt(cantidadProducto);
		}

		marca = prompt("Ingrese marca del producto : ");
		fabricante = prompt("Ingrese fabricante del producto : ");


		switch (tipoDeProducto) 
		{
		
			case "barbijo":
				acumuladorBarbijo = acumuladorBarbijo + cantidadProducto;
				break;

			case "jabon":
				acumuladorJabon = acumuladorJabon + cantidadProducto;
				break;

			case "alcohol":
				acumuladorAlcohol = acumuladorAlcohol + cantidadProducto;

				if (precioBajoAlcohol == 0 || precioBajoAlcohol > precioProducto){
					
					precioBajoAlcohol = precioProducto;
					cantidadAlcohol = cantidadProducto;
					fabricanteAlcohol = fabricante;
				}else{}
				break;
			
		}//switch


	}//for

    //FALTA TERMINAR ACA ABAJO:
	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon){
		alert ("promedio gano alcohol");
	}
	else 
	{
		if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol){
			alert ("promedio gano jabon");
		}
		else{
			alert ("promedio gano barbijo");

		}
	}


	alert ("El alcohol mas baratos cuesta : $" +precioBajoAlcohol+ ". La cantidad son: "+cantidadAlcohol+"unidaddes y el fabricante es : "+ fabricanteAlcohol);
	alert ("La cantidad total de jabones es : "+ acumuladorJabon+ " unidades");
}*/
