//CONEXÃO COM O ARQUIVO JSON
function includeHTML() {
	let url = `https://raw.githubusercontent.com/lcrochaDEV/FarejadorSIR/master/menu/menu.html`;
	fetch(url)
	  .then(function(response){ response.text()
		.then(function(menu){
		  //MENU
			document.querySelector('[data-menu]').innerHTML += menu; 
			clickEvent();
			update_dados();
		});
	  })
}
 window.addEventListener('load', includeHTML);

//TEMPO DE ABERTORA DA ABA MENU LATERAL
function open_sidebar() {
	//INICO DA PAGINA
	var menuMovemento = document.querySelector('.btns');
		menuMovemento.style.width = "50px";
	//ABERTURA DO MENU
		menuMovemento.addEventListener("mouseout", function(event) {
			menuMovemento.style.width = "50px";
		});
	//FECHAMENTO DO MENU
		menuMovemento.addEventListener("mouseover", function(event) {
			menuMovemento.style.width = "100px";
		});
}
window.addEventListener("load", open_sidebar);

//BUSCA EM BANCO DE DADOS
const menuLateral = JSON.parse(localStorage.getItem("menuLateral")) || [];
//CLASS
class CadastroDados {
	constructor (id, valor){
		this.id = id;
		this.valor = valor;
	}
	cadastrarBD(dados, cadastrar){	
		localStorage.setItem(dados, JSON.stringify(cadastrar));
	}
}
//ANIMAÇÃO EM MENUS
var contagem = 0;
function clickEvent (){
	var visibility = document.getElementById("visibility");
		visibility.addEventListener("click", function(event) {	
			let visibilityBtn = event.target.id;
			const dados = new CadastroDados('1', visibilityBtn)
			if(visibilityBtn !== visibility.innerText){
				visibility.innerText = "visibility";
				visibility.style.background = "#001ADE";
				//ATIVA BUSCA POR CCTOS LISTADOS	
				atualizarBanda = setInterval(() => {conectJson();}, 2000);	
				//COLOCA MAIS UM INTEM NA LISTA DE ARRAY
				menuLateral.push(dados);
				//CADASTRA ITEM NO LOCALSTORGE
				dados.cadastrarBD("menuLateral", menuLateral)
			}else if(visibilityBtn === visibility.innerText){
				visibility.innerText = "visibility_off";
				visibility.style.background = "";
				//PARA ATUALIZAÇÃO DE BUSCA
				//clearInterval(atualizarBanda);
				window.location.reload()
				//refresh();
				//DELETE EM BD
				menuLateral.splice(menuLateral.findIndex(itens => itens.valor === 'visibility'),1);
				dados.cadastrarBD("menuLateral", menuLateral)
			}
		});
	//TEMPORIZADOR
	var update_disabled = document.getElementById("update_disabled");
		update_disabled.addEventListener("click", function(event) {
			contagem ++;
			const dados = new CadastroDados('2', contagem)
			if(contagem > 0 && contagem < 6){
				//SE O ARRAY NÃO EXISTIR OU FOR VAZIO
				if(menuLateral.length === false || menuLateral.length === 0){
					//COLOCA MAIS UM ITEM NO OBJETO
					menuLateral.push(dados);
					menuLateral.splice(menuLateral.find(itens => itens.id === '2').valor = contagem, 0);
					//CADASTRA ITEM NO LOCALSTORGE
					dados.cadastrarBD("menuLateral", menuLateral)
					switchC(contagem);
				}else if(menuLateral.length){
					if(menuLateral.find(itens => itens.id === '2') === undefined ){
						//COLOCA MAIS UM ITEM NO OBJETO
						menuLateral.push(dados);
						menuLateral.splice(menuLateral.find(itens => itens.id === '2').valor = contagem, 0);
						//CADASTRA ITEM NO LOCALSTORGE
						dados.cadastrarBD("menuLateral", menuLateral)
						switchC(contagem);
					}else if(menuLateral.find(itens => itens.id === '2') ){
						menuLateral.splice(menuLateral.find(itens => itens.id === '2').valor = contagem, 0);
						//CADASTRA ITEM NO LOCALSTORGE
						dados.cadastrarBD("menuLateral", menuLateral);
						switchC(contagem);
					}
				}
			}else if(contagem == 6){
			menuLateral.splice(menuLateral.findIndex(itens => itens.id === '2'), 1);
			dados.cadastrarBD("menuLateral", menuLateral)
			switchC(contagem);
			return contagem = 0;
			}			
	});
	//MODO ESCURO
	var dark_mode = document.getElementById("dark_mode");
	dark_mode.addEventListener("click", function(event) {
		let dark_modeBtn = event.target.id;
		const dados = new CadastroDados('3', dark_modeBtn)
		if(dark_modeBtn !== dark_mode.innerText){
			dark_mode.innerText = "dark_mode";
			dark_mode.style.background = "#001ADE";
			//noturno(); //ACIONADO
			noturnoInicio(); //ACIONADO
			exibir();  //ACIONADO
			//SALVE EM BD
			//COLOCA MAIS UM INTEM NA LISTA DE ARRAY
			menuLateral.push(dados);
			//CADASTRA ITEM NO LOCALSTORGE
			dados.cadastrarBD("menuLateral", menuLateral)
		}else if(dark_modeBtn === dark_mode.innerText){
			dark_mode.innerText = "sunny";
			dark_mode.style.background = "";	
			window[0].location.reload();
			window[1].location.reload();
			menuLateral.splice(menuLateral.findIndex(itens => itens.valor === 'dark_mode'),1);
			dados.cadastrarBD("menuLateral", menuLateral)
		}
	})
	//FORME
	var code = document.getElementById("code");
	var forme = document.getElementById("formTag"); 
	code.addEventListener("click", function(event) {
		let formeBtn = event.target.id;
		const dados = new CadastroDados('4', formeBtn)
			if(formeBtn === code.innerText){
				code.innerText = "code_off";
				code.style.background = "#001ADE";
				forme.style.display = 'none';
				//SALVE EM BD
				//COLOCA MAIS UM INTEM NA LISTA DE ARRAY
				menuLateral.push(dados);
				//CADASTRA ITEM NO LOCALSTORGE
				dados.cadastrarBD("menuLateral", menuLateral)
			}else if(formeBtn !== code.innerText){
				code.innerText = "code";
				code.style.background = "";
				forme.style.display = 'flex';
				menuLateral.splice(menuLateral.findIndex(itens => itens.valor === 'code'),1);
				dados.cadastrarBD("menuLateral", menuLateral)
			}
	});
}
//window.addEventListener("load", clickEvent);

//BUSCA DADOS EM BD
function update_dados(){
	var visibility = document.getElementById("visibility");
	var update_disabled = document.getElementById("update_disabled");
	var dark_mode = document.getElementById("dark_mode");
	var code = document.getElementById("code");
	var forme = document.getElementById("formTag");
	//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEI SE ESTIVER FORA DO LINK DESEJADO
	if(caminhoURL == urlAtual || caminhoActiveLink == urlAtual){
		menuLateral.forEach(itens => {
			//FILTRO CCTO
			if(itens.valor === 'visibility'){
				console.log(`Item encontrado em Banco de Dados`);
				visibility.innerText = "visibility";
				visibility.style.background = "#001ADE";
				//ATIVA BUSCA POR CCTOS LISTADOS
				atualizarBusca = setInterval(() => {conectJson();}, 2000);
			}
			//TEMPORIZADOR
			if(itens.id === '2'){
				console.log(`Item encontrado em Banco de Dados`);
				switchC(Number(itens.valor));
				return contagem = itens.valor;
			} 
			//MODO ESCURO
			if(itens.valor === 'dark_mode'){
				console.log(`Item encontrado em Banco de Dados`);
				dark_mode.innerText = "dark_mode";
				dark_mode.style.background = "#001ADE";

					noturno();
					exibir();
			}
			//FORME
			if(itens.valor === 'code'){
				console.log(`Item encontrado em Banco de Dados`);
				code.innerText = "code_off";
				code.style.background = "#001ADE";
				forme.style.display = "none";
			}
		});
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
//window.addEventListener('load', update_dados);
//menuLateral.findIndex(itens => itens.valor === 'visibility')

//FUNÇÃO SWITCH ESCOLHA TIME
function switchC(n){
	//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEI SE ESTIVER FORA DO LINK DESEJADO
	if(caminhoURL == urlAtual || caminhoActiveLink == urlAtual){
		var update_disabled = document.getElementById("update_disabled")
		switch(n){ //avaliação do valor
			
			case 1: //primeira condição
				update_disabled.innerText = "2";
				update_disabled.style.background = "#001ADE";
				//ATUALIZAZÃO EM 2 MINUTOS
				atualizar = setInterval(() => {refresh();}, 120000);//1200000 = 2 min
			break;
			case 2: //segunda condição
				update_disabled.innerText = "5";
				update_disabled.style.background = "#001ADE";
				//ATUALIZAZÃO EM 5 MINUTOS
				atualizar = setInterval(() => {refresh();}, 300000);//300000 = 5 min
			break;
			case 3: //terceira condição
				update_disabled.innerText = "10";
				update_disabled.style.background = "#001ADE";
				//ATUALIZAZÃO EM 10 MINUTOS
				atualizar = setInterval(() => {refresh();}, 600000);//1200000 = 10 min
			break;
			case 4: //quarta condição
				update_disabled.innerText = "15";
				update_disabled.style.background = "#001ADE";
				//ATUALIZAZÃO EM 15 MINUTOS
				atualizar = setInterval(() => {refresh();}, 900000);//1200000 = 15 min
			break;
			case 5: //quinta condição
				update_disabled.innerText = "20";
				update_disabled.style.background = "#001ADE";
				//ATUALIZAZÃO EM 20 MINUTOS
				atualizar = setInterval(() => {refresh();}, 1200000);//1200000 = 20 min
			break;
			case 6:
				update_disabled.innerText = "update_disabled";
				update_disabled.style.background = "";
				clearInterval(atualizar);
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

