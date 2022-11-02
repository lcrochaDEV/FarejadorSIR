//TELA DE REC
var recs = window[2].document.querySelectorAll('.formularioSessaoTituloTr')[1].childNodes[3];
function rec(){	
	let url = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
	
	var head = window[2].document.querySelector("head");
	var linkico = document.createElement("link");
		linkico.setAttribute("rel", "stylesheet");
		linkico.setAttribute("href", url);
		head.appendChild(linkico);
	
	var btn = document.createElement("button");
		btn.setAttribute("type", "button");
		btn.setAttribute("data-recbtn", "");  
		btn.setAttribute("class", "material-symbols-outlined");
		btn.innerText = 'content_copy';
		recs.appendChild(btn); //'content_copy';
				
		//OCULTA MANU LATERAL
		document.querySelector('[data-menu]').style.display = 'none';
		//CSS COR NO BOTÃO CRIADO
		window[2].document.querySelector('[data-recbtn]').style.background = '#001ADE';
		window[2].document.querySelector('[data-recbtn]').style.opacity = '0.5';
		window[2].document.querySelector('[data-recbtn]').style.color = '#fff';
		window[2].document.querySelector('[data-recbtn]').style.border = 'none';
		window[2].document.querySelector('[data-recbtn]').style.fontSize = '15px';
		window[2].document.querySelector('[data-recbtn]').style.margin  = '1px';
		window[2].document.querySelector('[data-recbtn]').style.padding  = '3px 6px';

let btncopy = window[2].document.querySelector('[data-recbtn]');
	btncopy.addEventListener('click', function(event) {
		//Alteração em oaginas do SIR
		let rec = window[1].document.querySelectorAll(".formularioTextFont > b")[0].innerText; //REC
		var sla = window[1].document.querySelectorAll(".formularioTextFont > b")[2].innerHTML; //SLA
		var emp = window[1].document.getElementsByTagName("input")[9].value; //NOME EMPRESA
		var cliente = window[1].document.getElementsByTagName("input")[10].value; //NOME CLIENTE
		var tel = window[1].document.querySelectorAll(".formularioTextFont")[10].title; //TELEFONE

		function rein(){
			var rein = window[1].document.getElementsByClassName("formularioSessaoTituloTr")[0].querySelectorAll("td")[1].innerText; //REINCIDENTE  
				if(rein.indexOf("REINCIDENTE") == 0){
					return rein = rein.text = "SIM";
				}else{
					return "";
				} 	
		};	
			if(popup != undefined){
				window.popup.close()
			}
		window.addEventListener("beforeunload", (event) =>{window.popup.close()})
		var popup = window.open('about:blank','popup','width=700, height=300, scrolling=auto, top=0, left=0');
		popup.document.write(`<textarea id="acionamentoTxt" value="" rows="14" cols="70">OBSERVAÇÕES:\nNOME DA EMPRESA: ${emp}\nCLIENTE/CONTATO: ${cliente} ${tel}\nHORÁRIO DE EXPEDIENTE:\nPRAZO DE SLA: ${sla}H\nREC REINCIDENTE: ${rein()}\nACESSO/MARCA/MODELO:\nTRANSMISSÃO/FACILIDADES:</textarea>`); 

		popup.document.title = `${rec.substr(0, 18)}`;
		//********************************************//
	});
}	

window.addEventListener("load", rec);
