/*Enunciado:
Bienvenidos.
mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".*/
function mostrar()
{
    
    let nombreUsuario;
    let localidadUsuario;

    nombreUsuario = document.getElementById("elNombre").value;
    localidadUsuario = document.getElementById("laLocalidad").value;

    alert ("Usted es "+nombreUsuario+" y vive en la localidad de "+localidadUsuario);
}
