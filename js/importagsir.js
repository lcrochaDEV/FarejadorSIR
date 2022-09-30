//CRIANDO TAGS NO DOM
function btnFult(){
	let caminho = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
	
	var head = document.querySelector("head");
	var linkico = document.createElement("link");
		linkico.setAttribute("rel", "stylesheet");
		linkico.setAttribute("href", caminho);
		head.appendChild(linkico);
	
	//CRIA TAG DO FORMULARIO DE FILTRO
	var corpo = document.querySelector("html");
	var div1 = document.createElement("div");
		div1.setAttribute("id", "formTag");    
		corpo.appendChild(div1);

	//CRIA TAG DO MENU LATERAL
	var div2 = document.createElement("div");
		div2.setAttribute("id", "btns");    
		corpo.appendChild(div2);

	var arrTagaUP = ['visibility', 'update_disabled', 'dark_mode', 'code'];
	var arrTagDown = ['visibility_off', 'update_disabled', 'sunny', 'code'];
	var btn = document.querySelector("#btns");
		arrTagaUP.forEach((arrTagaUP, i) => {
			var a = document.createElement("a");
				a.setAttribute("id", arrTagaUP);    
				a.setAttribute("class", "material-symbols-outlined");
				//a1.setAttribute("href", "#");
				a.textContent = arrTagDown[i];		
				btn.appendChild(a);
			})
}
window.addEventListener("load", btnFult);
