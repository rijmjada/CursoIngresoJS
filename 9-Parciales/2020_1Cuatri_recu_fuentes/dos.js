/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro


function mostrar(){

  let tipoProductoUsuario;
  let cantidadUsuario;
  let precioUsuario;
  let consultaUsuario;
  let acumuladorBolsas;
  let gastoArena;
  let gastoCal;
  let gastoCemento;
  let bolsasArena;
  let bolsasCal;
  let bolsasCemento;
  let porcentajeDescuento;
  let precioSinDescuento;

  let descuentoAplicado;
  let precioFinal;

  gastoCemento = 0;
  gastoCal = 0;
  gastoArena = 0;
  acumuladorBolsas = 0;
  consultaUsuario = "si";

  while(consultaUsuario == "si"){

    tipoProductoUsuario = prompt("Ingrese tipo (arena, cal o cemento) : ");
      while(!(tipoProductoUsuario == "arena" || tipoProductoUsuario == "cal" || tipoProductoUsuario == "cemento")){
        tipoProductoUsuario = prompt("DATO INVALIDO. Ingrese tipo (arena, cal o cemento) : ");
      }

    cantidadUsuario = prompt("ingrese la cantidad : ");
    cantidadUsuario = parseInt(cantidadUsuario);
      while(isNaN(cantidadUsuario)==true){
        cantidadUsuario = prompt("DATO INVALIDO. ingrese la cantidad : ");
         cantidadUsuario = parseInt(cantidadUsuario);
      }
      
     precioUsuario = prompt ("Ingrese el precio : ");
     precioUsuario = parseFloat(precioUsuario); 
     while(isNaN(precioUsuario)==true){
      precioUsuario = prompt("DATO INVALIDO. ingrese precio: ");
      precioUsuario = parseInt(precioUsuario);
    }
    /////// fin validaciones ////////

    switch(tipoProductoUsuario){

      case "arena":
        acumuladorBolsas = acumuladorBolsas + cantidadUsuario;
        gastoArena = gastoArena + (precioUsuario * cantidadUsuario);
        bolsasArena = bolsasArena + cantidadUsuario;
        break;
      case "cal":
        acumuladorBolsas = acumuladorBolsas + cantidadUsuario;
        gastoArena = gastoArena + (precioUsuario * cantidadUsuario);
        bolsasCal = bolsasCal + cantidadUsuario;
        break;
      case "cemento":
        acumuladorBolsas = acumuladorBolsas + cantidadUsuario;
        gastoArena = gastoArena + (precioUsuario * cantidadUsuario);
        bolsasCemento = bolsasCemento + cantidadUsuario;
        break;
    }

    consultaUsuario = prompt("Desea continuar ? Marque ´si´ o ´no´");
  }//while

  precioSinDescuento = gastoCemento + gastoCal + gastoArena;

  if(acumuladorBolsas > 30 ){
    porcentajeDescuento = 25;
    descuentoAplicado = precioSinDescuento * porcentajeDescuento / 100;
    precioFinal = precioSinDescuento - descuentoAplicado;

  }
  else{
    if(acumuladorBolsas > 10){
      porcentajeDescuento = 15;
      descuentoAplicado = precioSinDescuento * porcentajeDescuento / 100;
      precioFinal = precioSinDescuento - descuentoAplicado;
    }
  }

  

  alert("El precio sin descuento es : "+precioSinDescuento);

  if(precioFinal > 0 ){
    alert("El precio con descuento es : "+precioFinal)
  }else{}

  if(bolsasArena > bolsasCal && bolsasArena > bolsasCemento){
    alert("La mayor cantida es arena");
  }
  else{
    if(bolsasCal > bolsasCemento && bolsasCal > bolsasArena){
      alert("La mayor cantida es cal");

    }
      else{
        alert("La mayor cantida es cemento");
    }
  }


}

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)

d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/

function  mostrar(){

  let tipoProductoUsuario;
  let cantidadUsuario;
  let precioUsuario;
  let consultaUsuario;
  let acumuladorBolsas;
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  let porcentajeDescuento;
  let importeSubtotal;
  let importeConDescuento;  
  let descuentoAplicado;
  let banderaComparador;
  let nombreMasCaro;
  let comparadorMasCaro;
  let mayorCantidad;

  
  banderaComparador = 0;
  descuentoAplicado = 0;
  porcentajeDescuento = 0;
  importeConDescuento = 0;
  importeSubtotal = 0;
  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  acumuladorBolsas = 0;
  consultaUsuario = "si";

  while(consultaUsuario == "si"){

    tipoProductoUsuario = prompt("Ingrese tipo de producto (cal, arena o cemento) : " );
       while(!(tipoProductoUsuario == "cal" || tipoProductoUsuario == "arena" || tipoProductoUsuario == "cemento")){
         tipoProductoUsuario = prompt("DATO INVALIDO. Ingrese tipo de producto (cal, arena o cemento) : " );
      }

    cantidadUsuario = prompt("Ingrese cantidad de bolsas : ");
    cantidadUsuario = parseInt(cantidadUsuario);
        while(isNaN(cantidadUsuario)== true ){
          cantidadUsuario = prompt("DATO INVALIDO. Ingrese cantidad de bolsas : ");
          cantidadUsuario = parseInt(cantidadUsuario);
        }

    precioUsuario = prompt("ingrese el precio : ");
    precioUsuario = parseFloat(precioUsuario);
      while(isNaN(precioUsuario)== true || precioUsuario < 1){
        precioUsuario = prompt("DATO INVALIDO. ingrese el precio : ");
        precioUsuario = parseFloat(precioUsuario);
      } 
      
    switch(tipoProductoUsuario){

        case "arena":
          acumuladorArena = acumuladorArena + cantidadUsuario;
          importeSubtotal = importeSubtotal + (precioUsuario * cantidadUsuario); 
          break;
        case "cal":
          acumuladorCal = acumuladorCal + cantidadUsuario;
          importeSubtotal = importeSubtotal + (precioUsuario * cantidadUsuario); 
          break;
        case "cemento":
          acumuladorCemento = acumuladorCemento + cantidadUsuario;
          importeSubtotal = importeSubtotal + (precioUsuario * cantidadUsuario); 
          break;

    }//switch  

    if(banderaComparador == 0 ||comparadorMasCaro > precioUsuario){
      comparadorMasCaro = precioUsuario;
      nombreMasCaro = tipoProductoUsuario;
      banderaComparador = 1;
    }

    ////////////// FIN VALIDACIONES ////////////////  
    acumuladorBolsas = acumuladorBolsas + cantidadUsuario;
    consultaUsuario = prompt("Ingrese ´si´ para continuar : ");

  }//while principal

  if(acumuladorBolsas > 30){
      porcentajeDescuento = 25;
    }
  else{
      if(acumuladorBolsas > 10){
        porcentajeDescuento = 15;
      }
    
  }

  if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento){
     mayorCantidad = "Arena";
   }else if(acumuladorCemento > acumuladorCal && acumuladorCemento > acumuladorArena){
      mayorCantidad = "Cemento";
    }
    else{
    mayorCantidad = "Cal";
    }

  descuentoAplicado = importeSubtotal * porcentajeDescuento / 100;
  importeConDescuento = importeSubtotal - descuentoAplicado;

  alert ("El importe sin descuento es : "+ importeSubtotal);
  if(importeConDescuento != 0){
      alert("El importe con descuento es : " + importeConDescuento);
    }

  alert ("El tipo mas caro es : "+ nombreMasCaro);


}//fuction
