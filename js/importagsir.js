//CRIANDO TAGS NO DOM
function btnFult(){
	let caminho = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
	
	var head = document.querySelector("head");
	var linkico = document.createElement("link");
		linkico.setAttribute("rel", "stylesheet");
		linkico.setAttribute("href", caminho);
		head.appendChild(linkico);
	
	//var corpo = document.querySelector("body");
	var html = document.querySelector("html");
	//CRIA TAG DO FORMULARIO DE FILTRO
	var div1 = document.createElement("div");
		div1.setAttribute("id", "formTag");    
		html.appendChild(div1);

	//CRIA TAG DO MENU LATERAL
	var div2 = document.createElement("div");
		div2.setAttribute("id", "btns");    
		html.appendChild(div2);

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
	//CRIA TAG HEADER
	var div3 = document.createElement("div");
		div3.setAttribute("data-menu-top", "");  
		div3.setAttribute("class", "menu-top");  
		html.appendChild(div3);
}
window.addEventListener("load", btnFult);


function css(){
	//MUDANDO ICONE DO SIR
	window[1][0].document.querySelector('.formularioLabelFont img').src = 'https://cdn-icons-png.flaticon.com/512/876/876054.png';
	window[1][0].document.querySelector('.formularioLabelFont img').style.width = '20px' 
	document.getElementsByTagName('html')[0].style.margin = '80px 0';
}
window.addEventListener("load", css);
