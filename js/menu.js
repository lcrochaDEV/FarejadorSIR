function refresh(){
	var origem = window.location.origin;
	window[1][1][0].parent.frames.location = document.getElementsByClassName("listaTable").src = `${origem}/navegacao/NOVAframesetNivel2ListaDeTarefasAux.cfm`;
	console.log("Tempo para atualização!");
	atualizar = setInterval(() => {noturno();}, 800);		
};
//atualizar = setInterval(() => {refresh();}, 1200);

//TEMPO DE ABERTORA DA ABA MENU LATERAL
function open_sidebar() {
	var mouseon = document.getElementById('btns');
		mouseon.addEventListener("mouseout", function(event) {
			mouseon.style.width = "50px";
		});
}
window.addEventListener("load", open_sidebar);

//BARRA LATERAL DIV MÃE
function normal_sidebar() {
	//Tempo de abetura e fechamento do menu 
	var mouseover = document.getElementById('btns');
		mouseover.addEventListener("mouseover", function(event) {
			mouseover.style.width = "100px";
		});
}
window.addEventListener("load", normal_sidebar);

//ANIMAÇÃO EM MENUS
function clickEvent (){
	var visibility = document.getElementById("visibility");
		visibility.addEventListener("click", function(event) {	
			if(visibility.innerText == "visibility_off"){
				visibility.innerText = "visibility";
				visibility.style.background = "#001ADE";
				//ATIVA BUSCA POR CCTOS LISTADOS	
				atualizarBanda = setInterval(() => {conectJson();}, 2000);	
				//SALVE EM BD
				save_dados("visibility", 1)
			}else if(visibility.innerText == "visibility"){
				visibility.innerText = "visibility_off";
				visibility.style.background = "";
				//PARA ATUALIZAÇÃO DE BUSCA
				//clearInterval(atualizarBanda);
				window.location.reload()
				//refresh();
				//DELETE EM BD
				deleta_banco("visibility");
			}		
	});
	var update_disabledBD = localStorage.getItem("update_disabled");
	var update_disabled = document.getElementById("update_disabled");
	var contagem = 0;
		update_disabled.addEventListener("click", function(event) {
			contagem ++;
			if(contagem > 0 && contagem < 6){
				atualiza_dados("update_disabled", String(contagem));
				switchC(contagem);
			}else if(contagem == 6){
				deleta_banco("update_disabled");
				switchC(contagem);
				return contagem = 0;
			}			
	});
	var dark_mode = document.getElementById("dark_mode");
		dark_mode.addEventListener("click", function(event) {
			if(dark_mode.innerText == "sunny"){
				dark_mode.innerText = "dark_mode";
				dark_mode.style.background = "#001ADE";
				//noturno(); //ACIONADO
				noturnoInicio(); //ACIONADO
				exibir();  //ACIONADO
				//SALVE EM BD
				return save_dados("dark_mode", 1);
			}else if(dark_mode.innerText == "dark_mode"){
				dark_mode.innerText = "sunny";
				dark_mode.style.background = "";	
				window[0].location.reload();
				window[1].location.reload();
				return deleta_banco("dark_mode");
			}
	});
	var code = document.getElementById("code");
	var forme = document.getElementById("formTag"); 
	code.addEventListener("click", function(event) {
			if(code.innerText == "code"){
				code.innerText = "code_off";
				code.style.background = "#001ADE";
				forme.style.display = 'none';
				//SALVE EM BD
				return save_dados("code", 1);
			}else if(code.innerText == "code_off"){
				code.innerText = "code";
				code.style.background = "";
				forme.style.display = 'flex';
				return deleta_banco("code");
			}
	});
}
window.addEventListener("load", clickEvent);

//SALVA DADOS EM BD
function save_dados(chaveId, pass_dados){
	//CHECA SE EXISTE DADOS CADASTRADOS
	var visibilityBD = localStorage.getItem(chaveId);
		if(visibilityBD == true){
			var dal = localStorage.removeItem(chaveId);
			console.log(`Item deletado do Banco de Dados`);	
		}else{
			var dados = localStorage.setItem(chaveId, pass_dados);
			console.log(`Dados foram salvos em Banco de Dados`);
		}		
}
//ATUALIZA DADOS EM BD
function atualiza_dados(chaveId, pass_dados){
	var dados = localStorage.setItem(chaveId, pass_dados);
	console.log(`Dados foram atualizados em Banco de Dados`);
}
//DELATA DADOS DE BD
function deleta_banco(chaveId){
	localStorage.removeItem(chaveId)
	console.log(`Dados foram deletados em Banco de Dados`);
}
//BUSCA DADOS EM BD
function update_dados(){
	var visibilityBD = localStorage.getItem("visibility");
	var update_disabledBD = localStorage.getItem("update_disabled");
	var dark_modeBD = localStorage.getItem("dark_mode");
	var codeBD = localStorage.getItem("code");
	
	var visibility = document.getElementById("visibility");
	var update_disabled = document.getElementById("update_disabled");
	var dark_mode = document.getElementById("dark_mode");
	var code = document.getElementById("code");
	var forme = document.getElementById("formTag"); 
	
	//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEI SE ESTIVER FORA DO LINK DESEJADO
	if(caminhoURL == urlAtual || caminhoActiveLink == urlAtual){
		if(visibilityBD == true){
			console.log(`Item encontrado em Banco de Dados`);
			visibility.innerText = "visibility";
			visibility.style.background = "#001ADE";
			//ATIVA BUSCA POR CCTOS LISTADOS
			atualizarBusca = setInterval(() => {conectJson();}, 2000);
		} 
		 if(update_disabledBD >= true){
			console.log(`Item encontrado em Banco de Dados`);
			switchC(Number(update_disabledBD));//NUMBER TRANSFORMA STRING E NUMEROS
		} 
		if(dark_modeBD == true){
			console.log(`Item encontrado em Banco de Dados`);
			dark_mode.innerText = "dark_mode";
			dark_mode.style.background = "#001ADE";

				noturno();
				exibir();
		}
		if(codeBD == true){
			console.log(`Item encontrado em Banco de Dados`);
			code.innerText = "code_off";
			code.style.background = "#001ADE";
			forme.style.display = "none";
		}	
	}else{
		visibility.style.pointerEvents = 'none';
		visibility.style.background = "#3D3D3D";
		update_disabled.style.pointerEvents = 'none';
		update_disabled.style.background = "#3D3D3D";
		dark_mode.style.pointerEvents = 'none';
		dark_mode.style.background = "#3D3D3D";
		code.innerText = "code_off";
		code.style.background = "#001ADE";
		forme.style.display = "none";
	}
}
window.addEventListener("load", update_dados);

//FUNÇÃO SWITCH ESCOLHA TIME
function switchC(n){
	//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEI SE ESTIVER FORA DO LINK DESEJADO
	if(caminhoURL == urlAtual || caminhoActiveLink == urlAtual){
		var update_disabled = document.getElementById("update_disabled")
		switch(n){ //avaliação do valor
			case 1: //primeira condição
				update_disabled.innerText = "2";
				update_disabled.style.background = "#001ADE";
				//update_disabled.style.fontSize="15px";
				//ATUALIZAZÃO EM 2 MINUTOS
				atualizar = setInterval(() => {refresh();}, 120000);//1200000 = 2 min
				//SALVE EM BD
				//atualiza_dados("update_disabled", 1)
			break;
			case 2: //segunda condição
				update_disabled.innerText = "5";
				update_disabled.style.background = "#001ADE";
				//ATUALIZAZÃO EM 5 MINUTOS
				atualizar = setInterval(() => {refresh();}, 300000);//300000 = 5 min
				//atualiza_dados("update_disabled", 2)
			break;
			case 3: //terceira condição
				update_disabled.innerText = "10";
				update_disabled.style.background = "#001ADE";
				//ATUALIZAZÃO EM 10 MINUTOS
				atualizar = setInterval(() => {refresh();}, 600000);//1200000 = 10 min
				//atualiza_dados("update_disabled", 3)
			break;
			case 4: //quarta condição
				update_disabled.innerText = "15";
				update_disabled.style.background = "#001ADE";
				//ATUALIZAZÃO EM 15 MINUTOS
				atualizar = setInterval(() => {refresh();}, 900000);//1200000 = 15 min
				//atualiza_dados("update_disabled", 4)
				break;
			case 5: //quinta condição
				update_disabled.innerText = "20";
				update_disabled.style.background = "#001ADE";
				//ATUALIZAZÃO EM 20 MINUTOS
				atualizar = setInterval(() => {refresh();}, 1200000);//1200000 = 20 min
				//atualiza_dados("update_disabled", 5)
			break;
			case 6:
				update_disabled.innerText = "update_disabled";
				update_disabled.style.background = "";
				clearInterval(atualizar);
				//DELETE EM BD
				//localStorage.removeItem("update_disabled")
				//n = 0;
			break;
		}
	}
}
	//OCULTA O FORMULARIO DE BUSCAS
	//window[1][1][0].addEventListener("load", exibir);
	//document.getElementsByClassName("listaTable ")[0].parentNode //NO PAI;
	//document.getElementsByClassName("listaTable ")[0].children; //NO FILHO
	
	/*
	window[1][1][0][1].document.querySelectorAll("*")[14].removeAttribute("onmouseover");
	window[1][1][0][1].document.querySelectorAll("*")[14].removeAttribute("onmouseout");
	*/



