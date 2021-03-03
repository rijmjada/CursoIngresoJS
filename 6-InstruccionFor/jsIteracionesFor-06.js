/*
Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.

function mostrar()
{
	let numeroUsuario;
	let contadorPares;
	let contadorNumeros;

	numeroUsuario = 0;
	contadorNumeros = 1;
	contadorPares = 0;

	numeroUsuario = prompt("Ingrese un numero : ");
	numeroUsuario = parseInt(numeroUsuario);
		

	for(numeroUsuario == 0 ; contadorNumeros <= numeroUsuario ; contadorNumeros++){

		
		if(contadorNumeros % 2 == 0 ){

			alert(contadorNumeros);
			contadorPares++;
			

		}
		else{}
	}

	alert("La cantidad de pares es : "+ contadorPares);


	


}//FIN DE LA FUNCIÓN
2- "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d)el tipo de mercadería  que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/
function mostrar (){

let tipoProductoIngreso;
let nombreIngreso;
let precioIngreso;
let procendenciaIngreso;
let pesoIngreso;
let contadorIngresos;
let nombrePesadoComestibles;
let comparadorPesoComestibles;
let banderaPesadoComestible;
let compradorPrecioProductoCaro;
let nombreProductoMasCaro;
let nombreBaratoElaborado;
let comparadorBaratoElaborado;
let banderaBaratoElaborado;
let contadorLimpieza;
let contadorComestible;
let contadorOtros;
let tipoMercaderaMasAparece;
let contadorElaborados;
let porcentajeElaborados;
let acumuladorPesoLimpieza;
let acumuladorPesoComestible;
let acumuladorPesoOtros;
let promedioPesoLimpieza;
let promedioPesoComestible;
let promedioPesoOtros;

banderaBaratoElaborado = 0;
banderaPesadoComestible = 0;
acumuladorPesoComestible = 0;
acumuladorPesoLimpieza = 0;
acumuladorPesoOtros = 0;
contadorElaborados = 0;
contadorLimpieza = 0;
contadorComestible = 0;
contadorOtros = 0;
compradorPrecioProductoCaro = 0;
comparadorPesoComestibles = 0;
contadorIngresos = 0;

while(contadorIngresos <3){

	tipoProductoIngreso = prompt("Ingrese tipo de producto (limpieza , comestible , otros) :");
		while(isNaN(tipoProductoIngreso)==false || tipoProductoIngreso != "limpieza" && tipoProductoIngreso != "comestible" && tipoProductoIngreso != "otros" ){
			tipoProductoIngreso = prompt("DATO INVALIDO. Ingrese tipo de producto (limpieza , comestible , otros) :");
		}
	nombreIngreso = prompt("Ingrese nombre producto : ");
		while(isNaN(nombreIngreso)==false){
			nombreIngreso = prompt("DATO INVALIDO. Ingrese nombre producto : ");
		}	

	precioIngreso = prompt("Ingrese el precio (no mayor a 1000 pesos): ");
		while(isNaN(precioIngreso)==true || precioIngreso < 1 || precioIngreso > 1000){
			precioIngreso = prompt("DATO INVALIDO. Ingrese el precio (no mayor a 1000 pesos): ");
		}	

	procendenciaIngreso = prompt("Ingrese procedencia(importado, nacional, elaborado) : ");
		while(isNaN(procendenciaIngreso)==false || procendenciaIngreso != "importado" && procendenciaIngreso != "nacional" && procendenciaIngreso != "elaborado"){
			procendenciaIngreso = prompt("DATO INVALIDO. Ingrese procedencia (importado, nacional, elaborado): ");
		}		

	pesoIngreso = prompt("Ingrese Peso (no mayor a 30 kilos) ");
		while(isNaN(pesoIngreso)==true || pesoIngreso  < 1 || pesoIngreso > 30){
			pesoIngreso = prompt("DATO INVALIDO. Ingrese Peso (no mayor a 30 kilos) ");
		}	

	////////////// FIN VALIDACIONES //////////////////
	
	
	switch(tipoProductoIngreso){
		
		case "comestible":
			if(banderaPesadoComestible == 0 || comparadorPesoComestibles < pesoIngreso){
				nombrePesadoComestibles = nombreIngreso;
				banderaPesadoComestible = 1;
			}
			contadorComestible++;
			acumuladorPesoComestible = acumuladorPesoComestible + pesoIngreso;
			break;
		
		case "limpieza":
			contadorLimpieza++;
			acumuladorPesoLimpieza= acumuladorPesoLimpieza + pesoIngreso;
			break;	

		case "otros":
			contadorOtros++;
			acumuladorPesoOtros = acumuladorPesoOtros + pesoIngreso;
			break;	

	}//switch	

	if(procendenciaIngreso == "elaborado"){
		contadorElaborados++;
		if(banderaBaratoElaborado == 0 || precioIngreso > comparadorBaratoElaborado){
			nombreBaratoElaborado = nombreIngreso;
			banderaBaratoElaborado = 1;
		}
	}

	if(compradorPrecioProductoCaro == 0 || compradorPrecioProductoCaro < precioIngreso){
		nombreProductoMasCaro = nombreIngreso;
	}

	if(contadorComestible > contadorLimpieza && contadorComestible > contadorOtros){
		tipoMercaderaMasAparece = "Comestible";
	}
	else{
		if(contadorLimpieza > contadorComestible && contadorLimpieza > contadorOtros){
			tipoMercaderaMasAparece = "Limpieza";
		}
		else{
			tipoMercaderaMasAparece = "Otros";
		}
	}


contadorIngresos++;
}//fin while

porcentajeElaborados = contadorElaborados / contadorIngresos * 100;

promedioPesoComestible = acumuladorPesoComestible / contadorComestible;
promedioPesoLimpieza = acumuladorPesoLimpieza / contadorLimpieza;
promedioPesoOtros = acumuladorPesoOtros / contadorOtros;

if(banderaPesadoComestible == 1)
	{
	alert ("El nombre del mas pesado de los comestibles es : "+ nombrePesadoComestibles);
	}

alert ("el NOMBRE del  mas caro de todos los productos : "+nombreProductoMasCaro );

if(banderaBaratoElaborado == 1)
	{
	alert (" el NOMBRE del  mas barato de los elaborados es : "+nombreBaratoElaborado);
	}

alert (" el tipo de mercadería  que mas aparece es : "+tipoMercaderaMasAparece);

alert ("el porcentaje de productos elaborados por sobre el total es : "+porcentajeElaborados.toFixed(2) );
alert ("El promedio de peso para comestibles es : " + promedioPesoComestible.toFixed(2));
alert ("El promedio de peso para limpieza es : " + promedioPesoLimpieza.toFixed(2));
alert ("El promedio de peso para otros es : " + promedioPesoOtros.toFixed(2));

	
}