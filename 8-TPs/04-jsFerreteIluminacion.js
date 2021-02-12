/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/*
function CalcularPrecio () 
{
 	//6  $105
 	//5  ArgentinaLuz 40 % 5*35  $105
 	//5  otra marca 30 %   5*35   

 	var cantidadLamparas;
 	var marca;
 	var precioBruto;
 	var descuento;
 	var precioFinal;
 	var porcentaje;
 	
 	
 	cantidadLamparas = document.getElementById('txtIdCantidad').value;
 	cantidadLamparas = parseInt(cantidadLamparas);

 	marca = document.getElementById('Marca').value;

 	descuento=0;

 	precioBruto=35*cantidadLamparas;

 	if(cantidadLamparas>5)
 	{
 		//descuento = precioBruto * 50 / 100;
       porcentaje=50;
 	}
 	else
 	{
 		if(cantidadLamparas==5)
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				//descuento = precioBruto * 40 / 100;
 				 porcentaje=40;
 			}
 			else
 			{
 				 porcentaje=30;
 			}
 		}
 		else
 		{
 			if(cantidadLamparas==4)
 			{
 				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 				{
 					 porcentaje=25;
 				}
 				else
 				{
 					 porcentaje=20;
 				}
 			}
 			else
 			{
 				if(cantidadLamparas==3)
 				{
 					if(marca=="ArgentinaLuz")
 					{
 						porcentaje=15;
 					}
 					else
 					{
 						if(marca=="FelipeLamparas")
 						{
 							porcentaje=10;
 						}
 						else
 						{
 							porcentaje=5;
 						}
 					}
 				}
 				else
 				{
 					porcentaje=0;
 				}//if(cantidadLamparas==3)
 			}//if(cantidadLamparas==4)
 		}//del if(cantidadLamparas==5)
 	}//del if(cantidadLamparas>5)

	descuento = precioBruto * porcentaje / 100;
 	precioFinal = precioBruto - descuento;


	document.getElementById("txtIdprecioDescuento").value = precioFinal;


 	
}*/

/*
function CalcularPrecio () 
{
	//6  $105
	//5  ArgentinaLuz 40 % 5*35  $105
	//5  otra marca 30 %   5*35   

	let cantidad;
	let marca;
	let Subtotal;
	let descuento;
	let precioFinal;
	let porcentaje;
	
	
	cantidad = document.getElementById('txtIdCantidad').value;
	cantidad = parseInt(cantidad);

	marca = document.getElementById('Marca').value;

	porcentaje=0;
	descuento=0;
	Subtotal= 35 * cantidad;

	if(cantidad >5){
			porcentaje = 50;
	}
	else
	{
		switch(marca){

			case "ArgentinaLuz":{

				switch(cantidad){
					case 5:
							porcentaje = 40;
							break;
						
					case 4:
							porcentaje = 25;
							break;
					case 3:
							porcentaje = 15;

						default:
							porcentaje = 0;
							break;
				}//cantidad
				
	
			}//argentinaluz

			break;

			case "FelipeLamparas":{
				
					switch(cantidad){
						
						case 5:
							porcentaje = 30;
							break;
						case 4:
							porcentaje = 25;
							break;
						
						case 3:
							porcentaje = 10;
							break;
						
						default:
							porcentaje = 0;
							break;
	
					}//switch cantidad
				
			}//FelipeLamparas
		
			break;
	

			case "JeLuz":	
			case "HazIluminacion":	
			case "Osram":{
				
				switch(cantidad){
					
					case 5:
						porcentaje =30;
						break;
						case 4:
							porcentaje =20;
							break;
							case 3:
								porcentaje =5;
								break;
					default:
						porcentaje = 0;
						break;			
				}//switch cantidad
				
			}//Jeluz.etc

			break;
				
		}//switch marca
	

	}

	descuento = Subtotal * porcentaje / 100;
	precioFinal = Subtotal - descuento;

   if (precioFinal > 120){
		   iibb = precioFinal * 10 / 100;
		   precioFinal = iibb + precioFinal;
		   
		   alert ("Usted pago "+ iibb +" de impuestos.")
   }
   else {}


   document.getElementById("txtIdprecioDescuento").value = precioFinal;

}



/* Switch con If
function CalcularPrecio () 
{
	
	let cantidad;
	let marca;
	let Subtotal;
	let descuento;
	let precioFinal;
	let porcentaje;
	let iibb;
	
	cantidad = document.getElementById('txtIdCantidad').value;
	cantidad = parseInt(cantidad);

	marca = document.getElementById('Marca').value;

	porcentaje = 0;
	descuento = 0;
	iibb = 0;
	Subtotal= 35 * cantidad;


	
	switch(cantidad){

		case 5:
			if (marca == "ArgentinaLuz"){
					porcentaje = 40;
			}
			else{
				if(marca)
					porcentaje = 30;
			}
			break;

		case 4:	
				if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
					porcentaje = 25;
				}
				else{
					porcentaje = 20;
				}
				break;

		case 3:	
				if (marca == "ArgentinaLuz"){
					porcentaje = 15;
				}
				else {
					if (marca == "FelipeLamparas"){
						porcentaje = 10;
					}
					else{
						porcentaje = 5;
					}
				}
				break;
		case 2:
		case 1:	
				porcentaje = 0;
				break;
		default:
			porcentaje = 50;	
		


	}//switch marca

	descuento = Subtotal * porcentaje / 100;
 	precioFinal = Subtotal - descuento;

	if (precioFinal > 120){
			iibb = precioFinal * 10 / 100;
			precioFinal = iibb + precioFinal;
			
			alert ("Usted pago "+ iibb +" de impuestos.")
	}
	else {}


	document.getElementById("txtIdprecioDescuento").value = precioFinal;

}
*/
/*
function CalcularPrecio () 
{
	
	let cantidad;
	let marca;
	let Subtotal;
	let descuento;
	let precioFinal;
	let porcentaje;
	
	
	cantidad = document.getElementById('txtIdCantidad').value;
	cantidad = parseInt(cantidad);

	marca = document.getElementById('Marca').value;

	porcentaje=0;
	descuento=0;
	Subtotal= 35 * cantidad;

	switch(cantidad){

		case 1:
		case 2:
			porcentaje = 0;
			break;

		case 3:
			switch(marca){

				case "ArgentinaLuz":
					porcentaje = 15;
					break;
				case "FelipeLamparas":
					porcentaje = 10;
				 	break;
				default:
					porcentaje = 5;
					break
			}
			break;


		case 4:
			switch (marca){

				case "ArgentinaLuz":
				case "FelipeLamparas":	
					porcentaje = 25;
					break;
				default:
						porcentaje = 20;
						break
			}
			break;


		case 5:
			switch(marca){

				case "ArgentinaLuz":	
					porcentaje = 40;
					break;
				default:
					porcentaje = 30;
					break
			}
			break;


		default:
			porcentaje = 50;
			break;					
	}

	descuento = Subtotal * porcentaje / 100;
 	precioFinal = Subtotal - descuento;

	if (precioFinal > 120){
			iibb = precioFinal * 10 / 100;
			precioFinal = iibb + precioFinal;
			
			alert ("Usted pago "+ iibb +" de impuestos.")
	}
	else {}


	document.getElementById("txtIdprecioDescuento").value = precioFinal;

}

function CalcularPrecio () 
{
	
	let cantidad;
	let marca;
	let Subtotal;
	let descuento;
	let precioFinal;
	let porcentaje;
	
	
	cantidad = document.getElementById('txtIdCantidad').value;
	cantidad = parseInt(cantidad);

	marca = document.getElementById('Marca').value;

	porcentaje=0;
	descuento=0;
	Subtotal= 35 * cantidad;

	switch(cantidad){

		case 1:
		case 2:
			porcentaje = 0;
			break;

		case 3:
			if(marca == "ArgentinaLuz"){
				porcentaje = 15;
			}
			else {
				if(marca == "FelipeLamparas"){
					porcentaje = 10;
				}
				else {
					porcentaje = 5;
				}
			}


		case 4:
			if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
				porcentaje = 25;
			}
			else{
				porcentaje = 20;
			} 
		break;


		case 5:
			if(marca == "ArgentinaLuz"){
				porcentaje = 40;
			}
			else{
			porcentaje = 30;
			} 
		break;
			


		default:
			porcentaje = 50;
			break;					
	}

	descuento = Subtotal * porcentaje / 100;
 	precioFinal = Subtotal - descuento;

	if (precioFinal > 120){
			iibb = precioFinal * 10 / 100;
			precioFinal = iibb + precioFinal;
			
			alert ("Usted pago "+ iibb +" de impuestos.")
	}
	else {}


	document.getElementById("txtIdprecioDescuento").value = precioFinal;

}

*/
function CalcularPrecio () 
{
	
	let cantidad;
	let marca;
	let Subtotal;
	let descuento;
	let precioFinal;
	let porcentaje;
	
	
	cantidad = document.getElementById('txtIdCantidad').value;
	cantidad = parseInt(cantidad);

	marca = document.getElementById('Marca').value;

	porcentaje=0;
	descuento=0;
	Subtotal= 35 * cantidad;

	if(cantidad < 6){

		if(cantidad == 5){
			switch(marca){
				
				case "ArgentinaLuz":	
					porcentaje = 40;
					break;
				default:
					porcentaje = 30;
					break;
			}
			
			
		}
		else{
			if(cantidad == 4){
				switch(marca){
					case "ArgentinaLuz":
					case "FelipeLamparas":		
					porcentaje = 25;
					break;
				default:
					porcentaje = 20;
					break;
				}
			}
			else{
				if(cantidad == 3){
					switch(marca){
						case "ArgentinaLuz":	
							porcentaje = 15;
							break;
						case "FelipeLamparas":
							porcentaje = 10;	
							break;
						default:
							porcentaje = 5;
							break;
					}
				}
			}
		}

	}

	else{
		porcentaje = 50;

	}
	

	descuento = Subtotal * porcentaje / 100;
 	precioFinal = Subtotal - descuento;

	if (precioFinal > 120){
			iibb = precioFinal * 10 / 100;
			precioFinal = iibb + precioFinal;
			
			alert ("Usted pago $"+ iibb +" de impuestos.")
	}
	else {}


	document.getElementById("txtIdprecioDescuento").value = precioFinal;

}

