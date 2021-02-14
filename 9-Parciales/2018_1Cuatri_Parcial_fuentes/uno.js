/*Enunciado:
Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.*/
function mostrar()
{

    let ancho;
    let largo;
    let perimetro;

    ancho = prompt("Ingrese ancho : ");
    ancho = parseFloat(ancho);

    largo = prompt("Ingrese largo : ");
    largo = parseFloat(largo);

    perimetro = (ancho + largo) * 2;

    alert ("El perimetro es : " + perimetro);

}
