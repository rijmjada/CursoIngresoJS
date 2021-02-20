/*Enunciado:
Diego Ormeño

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
  let productoUsuario;
  let unidadesUsuario;
  let precioUsuario;
  let porcentajeDescuento;
  let precioSubtotal;
  let acumuladorSubtotal;
  let descuentoAplicado;
  let precioFinal;
  let promedioBolsas;
  let consultaUsuario;
  let acumuladorBolsas;
  let acumuladorCemento;
  let acumuladorArena;
  let acumuladorCal;
  let tipoMasCaro;
  let precioMasAlto;

  precioMasAlto = 0;
  acumuladorBolsas = 0;
  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  descuentoAplicado = 0;
  acumuladorSubtotal = 0;
  porcentajeDescuento = 0;
  precioSubtotal = 0;
  precioFinal = 0;
  consultaUsuario = "si";
  unidadesUsuario = 0;
  


  while(consultaUsuario == "si")
  {

    productoUsuario = prompt ("Ingrese el producto que desea cargar (arena, cal ,cemento): ");
    while(!(productoUsuario == "arena" || productoUsuario =="cal" || productoUsuario =="cemento")){
      productoUsuario = prompt ("Dato erroneo. Ingrese arena, cal o cemento : ");
    }

    unidadesUsuario = prompt ("Ingrese cantidad de bolsas : ");
    unidadesUsuario = parseInt(unidadesUsuario);
      while(isNaN(unidadesUsuario)== true ){
        unidadesUsuario = prompt ("Error . Ingrese cantidad de bolsas : ");
       unidadesUsuario = parseInt(unidadesUsuario);
      }
      
    precioUsuario = prompt ("Ingrese precio: ");
    precioUsuario = parseFloat(precioUsuario);
      while(isNaN(precioUsuario)== true){
        precioUsuario = prompt ("Error . Ingrese precio : ");
        precioUsuario = parseInt(precioUsuario);
      }
      /// FIN VALIDACIONES ///

    acumuladorBolsas = acumuladorBolsas + unidadesUsuario;
    precioSubtotal = precioUsuario * unidadesUsuario;
    acumuladorSubtotal = precioSubtotal + acumuladorSubtotal;

    switch(productoUsuario){

        case "arena":
          acumuladorArena = acumuladorArena + unidadesUsuario;
          if(precioMasAlto == 0 || precioUsuario > precioMasAlto){
             tipoMasCaro = "Arena";
          }else{}
          break;
        case "cemento":
          acumuladorCemento = acumuladorCemento + unidadesUsuario;
          if(precioMasAlto == 0 || precioUsuario > precioMasAlto){
            tipoMasCaro = "Cemento";
         }else{}
          break;
        case "cal":
          acumuladorCal = acumuladorCal + unidadesUsuario;
          if(precioMasAlto == 0 || precioUsuario > precioMasAlto){
            tipoMasCaro = "Cal";
         }else{}
          break;
      }// FIN SWITCH
      
     consultaUsuario= prompt("Desea continuar? Ingrese ¨si¨ en dicho caso : ");
  
    }////              FIN WHILE            /////

    
    if(acumuladorBolsas > 30){
        porcentajeDescuento = 25;
      }
      else{
        if(acumuladorBolsas > 10){
        porcentajeDescuento = 15;
        }
      }

      if(acumuladorBolsas > 10){
        descuentoAplicado = acumuladorSubtotal * porcentajeDescuento / 100;
        precioFinal = acumuladorSubtotal - descuentoAplicado;
      }
      else{}
    /// PORCENTAJES DESCUENTOS
     
    if(acumuladorArena > acumuladorCemento && acumuladorArena > acumuladorCal){
      alert ("La mayor cantidad de unidades son de : Arena. ");
    }
    else{
      if(acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento){
        alert ("La mayor cantidad de unidades son de : Cal. ");
      }
      else{
        alert ("La mayor cantidad de unidades son de : Cemento. ");
      }
    }
   /// TIPO CON MAS UNIDADES 
   

  alert (" El importe total en bruto es : $"+acumuladorSubtotal);

   if(precioFinal > 0)
     {
         alert (" El precio final con descuento es : $"+ precioFinal)
     }else{}

  alert ("El tipo mas caro es : "+ tipoMasCaro);
  /// TIPO MAS CARO


}
