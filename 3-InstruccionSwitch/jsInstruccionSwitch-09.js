/* Diego Ormeño

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	let base;
	let estacion;
	let destino;
	let descuento;
	let aumento;
	let precioFinal;

	base = 15000;

	estacion = document.getElementById("txtIdEstacion").value;

	destino = document.getElementById("txtIdDestino").value;

	descuento = 0;
	aumento = 0;

	switch(estacion){

		case "Invierno":{

			if (destino == "Bariloche"){
				aumento = 20;
			}
			else {
				if (destino == "Mar del plata"){
					descuento = 20;
				}
				else {
					descuento = 10;

				}
			}
			
		}//invierno
			break;
		
		case "Verano":{
			if (destino == "Bariloche"){
				descuento = 20;
			}
			else {
				if(destino == "Mar del plata"){
					aumento = 20;
				}
				else{
					aumento = 10;
				}
			}
		}// verano
			break;
		
		case "Otoño":
		case "Primavera":{
			if (destino == "Bariloche" || destino == "Cataratas" || destino === "Mar del plata"){
				aumento = 10;
			}
			else {
				descuento = 0;
			}
			
		}// otoño primavera
				break;			
		
	}

	 if(descuento!=0){
		precioFinal = base - base * descuento / 100;
	 }
	 else {
		 if(aumento!=0){
			precioFinal = base + base * aumento / 100;
		 }
		 else {
			 precioFinal = base;
		 }
	 }
	



	alert ("El total a pagar sera: $" + precioFinal + " pesos.");
}