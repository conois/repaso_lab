/*FUNCIONES */ 

/* funcion que capta el mensaje */ 

function captMess(){
	//tomo el valor del textArea y lo guardo en una variable 
	var comentario = document.getElementById("comment").value;  
	//limpiar el textArea
	document.getElementById("comment").value=""; 
	//Variable con el elemento boton 
	var btn=document.getElementById("btn"); 
	//creando nodo de texto 
	var txtComment= document.createTextNode(comentario)
	//creando div padre 
	var divMess=document.createElement("div");
	//Creando un parrafo para contener el texto 
	divMess.classList.add("newDiv");
	var txt=document.createElement("p"); 
	// llamo al div Dios ; 
	var cont=document.getElementById("cont"); 
	txt.appendChild(txtComment);
	divMess.appendChild(txt);
	mess.appendChild(divMess); 

}

function contar(){ 
	var txtNum=document.getElementById("comment").value; 
	var largo= txtNum.length;
	var contador = 139; 
	contador=contador - largo;
	var parNum=document.getElementById("parNum"); 
	parNum.innerHTML= contador;

	
		if (largo >= 120){
		var contador=document.getElementById("parNum"); 
		contador.classList.add("colorDos");  
		if(largo >= 130){
		var contador=document.getElementById("parNum"); 
		contador.classList.remove("colorDos"); 
		contador.classList.add("colorTres"); 
		if(largo>=140){
		var contador=document.getElementById("parNum"); 
		contador.classList.remove("colorTres");
		contador.classList.add("colorUno");
		var boton=document.getElementById("btn"); 
		boton.setAttribute("disabled", "true"); 
		return false; 
		}
		}
		}
		
	contador=139;

	}


/*EVENTOS */

/*agregar un evento al boton, pero agregarla solo si 
el largo del input es distinto a cero */ 

  