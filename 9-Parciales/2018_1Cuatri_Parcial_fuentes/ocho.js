/*
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
    let tempAlmacenamiento; // entre -30 y 30
    let contadorTempPares;
    let marcaProductoMasPesado;
    let contadorProductosBajoCero;
    let promedioPeso;
    let pesoMaximo;
    let pesoMinimo;
    let consultaUsuario;

    consultaUsuario = "si"


    while(consultaUsuario == "si")
        {
            
            ingresoMarca = prompt("Igrese marca : ");

            ingresoPeso = prompt("Ingrese peso (entre 1 y 100) : ");
            ingresoPeso = parseFloat(ingresoPeso);
            while(ingresoPeso > 1 && ingresoPeso < 101)
                {
                    ingresoPeso = prompt("Error.Ingrese peso (entre 1 y 100) : ");
                    ingresoPeso = parseFloat(ingresoPeso);
                }

         consultaUsuario = prompt("Desea continuar ? :");
         
        }//whileconsultausuario   

}
