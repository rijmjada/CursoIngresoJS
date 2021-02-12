/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let genero;
	let femenino;
	let masculino;

	genero = prompt("ingrese F o M .");
	
	femenino ="F";
	masculino = "M";

	while (genero != femenino && genero != masculino){
				
		genero = prompt("Reingrese");
	}

	document.getElementById("txtIdSexo").value = genero;


}//FIN DE LA FUNCIÓN