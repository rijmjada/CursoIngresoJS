/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let ecuacion;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat (temperatura);


    ecuacion = (temperatura - 32) * 5/9 


    alert ("Su temperatura en Centigrados es : " + ecuacion);

}

function CentigradosFahrenheit () 
{
	let temperatura;
    let ecuacion;

    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat (temperatura);


    ecuacion = (temperatura * 9/5) + 32


    alert ("Su temperatura en Fahrenheit es : " + ecuacion);

}
