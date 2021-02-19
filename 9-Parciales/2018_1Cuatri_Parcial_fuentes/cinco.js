/*
Enunciado:
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/

function mostrar()
{
    let planetas;
    let tierra;

 
    planetas = prompt(" Ingrese en minúscula un planeta del sistema solar : ");
    
    switch(planetas)
    {
        case "mercurio":
        case "venus":
            alert (" acá hace más calor. ");
            break;
        case "tierra":
            alert (" acá vivimos. ");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert (" áca hace más frio")
            break;
        default:
          alert  ("No es un planeta valido.");
   
     }



}
