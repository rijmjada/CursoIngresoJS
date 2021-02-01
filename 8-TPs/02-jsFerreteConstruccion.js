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

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    perimetro = (largo + ancho) * 2;
    alambre = perimetro * 3;

    alert ("La cantidad de alambre es : " +alambre+" metros" );

}
function Circulo () 
{
    let _alambre;
    let _radio;
    
    _radio = parseFloat(document.getElementById("txtIdRadio").value);
    _alambre = _radio * 3;

    alert ("La cantida de alambre es : " +_alambre + " metros");
}
function Materiales () 
{
	
}