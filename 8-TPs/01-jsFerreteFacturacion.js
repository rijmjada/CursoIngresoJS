/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let s1;
    let p2;
    let s3;
    let total;

    s1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    p2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    s3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    total = s1+p2+s3;

    alert ("El suma es : " +total);
}
function Promedio () 
{
    let p1;
    let p2;
    let p3;
    let promedio;

    p1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    p2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    p3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    promedio = (p1+p2+p3) /3;
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

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma = precio1+precio2+precio3;
    iva = suma * 21 /100;
    preciofinal = iva + suma;
    preciofinal = preciofinal.toFixed(2);

    alert ("El precio final es : $"+ preciofinal);

}