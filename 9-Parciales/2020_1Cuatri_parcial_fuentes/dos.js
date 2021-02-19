/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
  let ingresoProducto;
  let ingresoCantidad;
  let ingresoPrecio;
  let acumuladorBolsas;
  let porcentajeDescuento;
  let precioSubtotal;
  let sumaPrecioSubtotal;
  let descuentoAplicado;
  let precioFinal;
  let promedioBolsas;
  let consultaUsuario;

  let acumuladorCemento;
  let acumuladorArena;
  let acumuladorCal;

  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;

  descuentoAplicado = 0;
  sumaPrecioSubtotal = 0;
  porcentajeDescuento = 0;
  precioSubtotal = 0;
  precioFinal = 0;
  acumuladorBolsas = 0;
  consultaUsuario = "si";
  ingresoCantidad = 0;
  


  while(consultaUsuario == "si")
  {

    ingresoProducto = prompt ("Ingrese el producto que desea cargar (arena, cal ,cemento): ");
    while(!(ingresoProducto == "arena" || ingresoProducto =="cal" || ingresoProducto =="cemento")){
      ingresoProducto = prompt ("Dato erroneo. Ingrese arena, cal o cemento : ");
    }

    ingresoCantidad = prompt ("Ingrese cantidad de bolsas : ");
    ingresoCantidad = parseInt(ingresoCantidad);
      while(isNaN(ingresoCantidad)== true ){
        ingresoCantidad = prompt ("Error . Ingrese cantidad de bolsas : ");
       ingresoCantidad = parseInt(ingresoCantidad);
      }
      
    ingresoPrecio = prompt ("Ingrese precio: ");
    ingresoPrecio = parseFloat(ingresoPrecio);
      while(isNaN(ingresoPrecio)== true){
        ingresoPrecio = prompt ("Error . Ingrese precio : ");
        ingresoPrecio = parseInt(ingresoPrecio);
      }
      /// Fin validaciones ///

    acumuladorBolsas = acumuladorBolsas + ingresoCantidad;
    precioSubtotal = ingresoPrecio * ingresoCantidad;
    sumaPrecioSubtotal = precioSubtotal + sumaPrecioSubtotal;

    switch(ingresoProducto){

        case "arena":
          acumuladorArena = acumuladorArena + ingresoCantidad;
          break;
        case "cemento":
          acumuladorCemento = acumuladorCemento + ingresoCantidad;
          break;
        case "cal":
          acumuladorCal = acumuladorCal + ingresoCantidad;
          break;
    }//fin switch

      
    
     consultaUsuario= prompt("Desea continuar? Ingrese ¨si¨ en dicho caso : ");
  
    }// Fin while

    descuentoAplicado = sumaPrecioSubtotal * porcentajeDescuento
    precioFinal = sumaPrecioSubtotal - descuentoAplicado;

    
    if(acumuladorBolsas > 30){
        porcentajeDescuento = 25;
      }if(acumuladorBolsas > 10){
        porcentajeDescuento = 15
      }else{}
    
      // porcentajes descuento.


    if(acumuladorCemento > acumuladorArena && acumuladorCemento > acumuladorCal){
          alert ("La mayor cantidad de bolsas fueron de cemento.");
      } if(acumuladorArena > acumuladorCemento){
             alert ("La mayor cantidad de bolsas fueron de arena");
    }
    else{
      alert ("La mayor cantidad de bolsas fueron de cal.");
    }
    // tipo con mas cantidad.


    

}
