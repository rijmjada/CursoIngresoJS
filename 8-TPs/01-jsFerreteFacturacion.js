/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let total;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);

    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);

    total = precio1+precio2+precio3;

    alert ("El suma es : " +total);
}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let promedio;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);

    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);


    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);


    promedio = (precio1+precio2+precio3) /3;
    promedio = promedio.toFixed(2); // tofixed nos suma la cantidad de decimales que pongamos

    alert ("El promedio es : " +promedio);
    
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let preciofinal

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);

    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);


    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);




    suma = precio1+precio2+precio3;

    iva = suma * 21 /100;

    preciofinal = iva + suma;

    preciofinal = preciofinal.toFixed(2);

    alert ("El precio final es : $"+ preciofinal);

}