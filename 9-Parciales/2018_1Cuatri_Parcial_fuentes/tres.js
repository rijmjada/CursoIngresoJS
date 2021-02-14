/*Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/
function mostrar()
{

    let precio;
    let porcentajeUsuario;
    let subTotal;
    let precioFinal;
    
    precio = prompt("Ingrese el precio : ");
    precio = parseFloat(precio);

    porcentajeUsuario = prompt("Ingrese descuento : ");
    porcentajeUsuario = parseFloat(porcentajeUsuario);

    subTotal = precio * porcentajeUsuario / 100;

    precioFinal = precio - subTotal;

    document.getElementById("elPrecioFinal").value = precioFinal;
    
}
