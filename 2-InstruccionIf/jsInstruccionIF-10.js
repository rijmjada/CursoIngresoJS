function mostrar()
{
	let nota;

	nota = Math.floor((Math.random() * 10) + 1);

	

	if (nota >4){

		if(nota >8){

			alert ("("+nota + ") Excelente.");
		}
		else {
			alert ("("+nota + ")  APROBÓ");
		}
	}
	
	else{

		alert("("+nota + ")  Vamos, la proxima se puede ");
	}




}
