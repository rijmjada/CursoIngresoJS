/*
Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10"*/

function mostrar()
{

    let numeroUno;
    let numeroDos;
    let resta;

    resta = 0;
    numeroUno = prompt("Ingrese el primer numero : ");
    numeroUno = parseFloat(numeroUno);
    
    numeroDos = prompt("Ingrese el segundo numero : ");
    numeroDos = parseFloat(numeroDos);

    
    
    if(numeroUno == numeroDos)
    {
        alert (numeroUno+numeroDos);
    }
    else
    {
        if(numeroUno > numeroDos)
        {
           resta = numeroUno - numeroDos;
           alert (resta);
        }
        else 
        {
            suma = numeroDos + numeroUno;
            
            if(suma > 10)
            {
                alert ("la suma es "+suma+ " y supero el 10");
            }
            else
            {
                alert (suma);
            }
        }
    }


}
