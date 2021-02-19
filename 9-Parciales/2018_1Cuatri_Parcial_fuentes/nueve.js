/* Diego ORmeño

Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )*/

function mostrar()
{
    let ingresoMarca;
    let ingresoPeso;  //entre 1 y 100
    let ingresoTemp; // entre -30 y 30
    let contadorTempPares;
    let contadorProductosBajoCero;
    let contadorDeIngresos;
    let marcaProductoMasPesado;
    let promedioPeso;
    let acumuladorDePesos;
    let pesoMasAltoMarca;
    let pesoMaximo;
    let pesoMinimo;
    let consultaUsuario;

    acumuladorDePesos = 0;
    contadorDeIngresos = 1;
    contadorProductosBajoCero = 0;
    contadorTempPares = 0;
    
    pesoMasAltoMarca = 0;
    pesoMaximo  = 0;
    pesoMinimo  = 0;

    consultaUsuario = "si"


    while(consultaUsuario == "si")
        {
            
            ingresoMarca = prompt("Igrese marca : ");
            //Fin ingreso marca

            ingresoPeso = prompt("Ingrese peso (entre 1 y 100) : ");
            ingresoPeso = parseFloat(ingresoPeso);
            while (ingresoPeso < 1 || ingresoPeso > 100)
                {
                    ingresoPeso = prompt("Error.Ingrese peso (entre 1 y 100) : ");
                    ingresoPeso = parseFloat(ingresoPeso);
                }
             //Fin ingreso peso

            ingresoTemp = prompt("Ingrese temperatura (entre -30 y 30) : ");
            ingresoTemp = parseFloat(ingresoTemp);
            while(ingresoTemp < -30 || ingresoTemp > 30){
                ingresoTemp = prompt("Error. Ingrese temperatura (entre -30 y 30):");
                ingresoTemp = parseFloat(ingresoTemp);
            }
            //Fin ingreso temperaturas.
            //Fin validaciones


            if(ingresoTemp % 2 == 0){
                contadorTempPares++;
            }

            if(ingresoPeso > pesoMasAltoMarca){
                marcaProductoMasPesado = ingresoMarca;
                pesoMasAltoMarca = ingresoPeso;
            }

            if(ingresoTemp < 0){
                contadorProductosBajoCero++
            }

            if(pesoMinimo == 0 || ingresoPeso < pesoMinimo){
                pesoMinimo = ingresoPeso;
            }

            if(pesoMaximo == 0 || ingresoPeso > pesoMaximo){
                pesoMaximo = ingresoPeso;
            }else

            
            contadorDeIngresos++;
            acumuladorDePesos = ingresoPeso + acumuladorDePesos;
            promedioPeso = acumuladorDePesos / contadorDeIngresos;   
            //promedio pesos

            consultaUsuario = prompt("Ingrese si para continuar  :");
         
        }//Finwhile


     document.write  ("</br>La marca mas pesada es : "+marcaProductoMasPesado);   
     document.write  ("</br>La cantidad de temperaturas pares es : "+ contadorTempPares );   
     document.write  ("</br>La cantidad de productos bajo cero es : "+contadorProductosBajoCero);   
     document.write  ("</br>La peso maximo registrado es : "+pesoMaximo);   
     document.write  ("</br>La peso minimo registrado es : "+pesoMinimo);   
     document.write  ("</br>El promedio de pesos ingresados es : "+promedioPeso);   



    
}//fin
