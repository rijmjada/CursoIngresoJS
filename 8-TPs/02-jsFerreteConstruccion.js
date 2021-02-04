/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);

    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

    perimetro = (largo + ancho) * 2;

    alambre = perimetro * 3;

    alert ("La cantidad de alambre es : " +alambre+" metros" );

}

function Circulo () 
{
    let radio;
    let perimetro;
    let alambre;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio);

    perimetro = radio * 3.14;

    alambre = perimetro * 2;

    alert ("La cantidad de alambre es : " + alambre + " metros");
    
}

function Materiales () 
{
	
}