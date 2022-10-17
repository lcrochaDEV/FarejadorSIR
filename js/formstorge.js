/*function includeHTML() {
	let url = `https://raw.githubusercontent.com/lcrochaDEV/FarejadorSIR/master/menu/formulario.html`;
	fetch(url)
	  .then(function(response){ response.text()
		.then(function(form){
		  //FORMULARIO
			document.querySelector('[data-form]').innerHTML += form; 
		});
	  })
	}
 window.addEventListener('load', includeHTML);
 */
//CRIA TAG FORMULARIO
function inputAreaCFs(passCfs){
	const criandoElementsHtml = document.getElementById('formTag').innerHTML += `
	<div id="campo-cfs" data-campo-cfs>
		<form class="forme1" action="" method="post">
			<input type="text" class="area" name="area" placeholder="&nbsp;" required name=nome />
			<label class="input-group__label" for="cfs">CFs</label>
			<button type="submit" class="sub-area" />Enviar</button>
			<div data-dataCfs></div>
		</form>
	</div>
	<div id="campo-ccto">
		<form class="forme2" action="" method="post">
			<input type="text" class="ccto" name="ccto" placeholder="&nbsp;" required name=nome />
			<label class="input-group__label" for="cctos">CCTOs</label>
			<button type="submit" id="sub-ccto" />Enviar</button>	
			<div data-dataCctos></div>
		</form>
	</div>		
	`;
}
window.addEventListener("load", inputAreaCFs);

//CLASS
class CadastroDadosForms {
	constructor (id, valor){
		this.id = id;
		this.valor = valor;
	}
	cctoMarcfs(dados, cadastrar){	
		localStorage.setItem(dados, JSON.stringify(cadastrar));
	}
	cadastrarBD(dados, cadastrar){	
		localStorage.setItem(dados, JSON.stringify(cadastrar));
	}
}

//Modo para cadastrar elemento em localstorge
//NOVO LOCALSTORGE
const itensStorge = JSON.parse(localStorage.getItem("marcaTxt")) || [];

function cfs(){
	let formesInp = document.querySelector('#campo-cfs');
		formesInp.addEventListener("submit", (event) => {
			event.preventDefault(); //Inpede atualizar após evento Click(GET/POST).
			let area = event.target.elements['area'];
			//TRANSFORMANDO EM OBJETOS
			if(area.value === ""){
				console.log(`Cadastre um item!`);
			}else if(area.value != ""){
			//CADASTRO DE ID

			//let id = desigStorge.findIndex(id => id.id === desigStorge.length.toString())+1;
			//console.log(id.id)
			let id = desigStorge.findIndex(id => {
				if(id.id === desigStorge.length -1)
					return desigStorge.length;

			}) +1;
			
			//CRIA OBEJTO EM CLASS
			const cfs = new CadastroDadosForms(id, area.value)
			//CERIFICA CAFASTRO REPETIDOS
			var lista = itensStorge.filter((cfs) => {
				return (cfs.valor === area.value)
			})

				if(lista.length === 0){
					//COLOCA MAIS UM INTEM NA LISTA DE ARRAY
					itensStorge.push(cfs);
					//PASSAR DADOS CADASTRADOS
					printCadastro(cfs);
					//CADASTRA ITEM NO LOCALSTORGE
					cfs.cctoMarcfs("marcaTxt", itensStorge)
					console.log(`Cadastrado com sucesso!`);
				}else{
					console.log(`Existe cadastro!`);
				}
				area.value = "";
				//BUCA DADOS EM EXIBE NA TABELA
			}
		});
}
window.addEventListener("load", cfs);

//BUSCA DADOS E EXIBE NA TABELA
function recuperaLocalstorge(){	
	itensStorge.forEach(itens => { 
		printCadastro(itens);
	})
}
window.addEventListener("load", recuperaLocalstorge);

//CADASTRA DADOS E EXIBE NA TABELA
function printCadastro(itens){
	let divstorge = document.querySelector('[data-dataCfs]');
		divstorge.innerHTML += `
			<div data-dataArea class="storge">
				<p data-datacfstxt>${itens.valor}</p>
				<button type="submit" data-delete class="material-symbols-outlined" />delete</button>
			</div>
		`;
}
//<button type="submit" data-delete class="material-symbols-outlined" />delete</button>
//<a href="#" data-delete class="material-symbols-outlined" />delete</a>
//DELETA ELEMENTO DE LOCALSTORG
function deleta(){
	let apagar = document.querySelectorAll('[data-dataArea]');
	let datatxt = document.querySelectorAll('[data-datacfstxt]');
	apagar.forEach((apagar, i) => {
		apagar.addEventListener("click", (event) => {
			itensStorge.splice(itensStorge.findIndex(itens => itens.valor === datatxt[i].innerText),1);
			localStorage.setItem("marcaTxt", JSON.stringify(itensStorge));
			apagar.remove();
		})
	});
}
window.addEventListener("load", deleta);

/*=======================================================================================================================*/

const desigStorge = JSON.parse(localStorage.getItem("designacao")) || [];

//CADASTRO EM BANCO DE DADOS
function designacao(){
	let campoccto = document.querySelector('#campo-ccto');
	campoccto.addEventListener("submit", (event) => {
	event.preventDefault(); //Inpede atualizar após evento Click(GET/POST).
	let ccto = event.target.elements['ccto'];
		//TRANSFORMANDO EM OBJETOS
		if(ccto.value === ""){
			console.log(`Cadastre um item!`);
		}else if(ccto.value != "" ){
			//CADASTRO DE ID
			
			//let id = desigStorge.findIndex(id => id.id === desigStorge.length.toString())+1;
			//console.log(id.id)
			let id = desigStorge.findIndex(id => {
				if(id.id === desigStorge.length -1)
					return desigStorge.length;

			}) +1;
			
			//CRIA OBEJTO EM CLASS
			const dados = new CadastroDadosForms(id, ccto.value)
			//CERIFICA CAFASTRO REPETIDOS
			var lista = desigStorge.filter((cfs) => {
				return (cfs.valor === ccto.value)
			})
						
			if(lista.length === 0){
				//COLOCA MAIS UM INTEM NA LISTA DE ARRAY
				desigStorge.push(dados);
				//PASSAR DADOS CADASTRADOS
				buscaDadosBD(dados);
				//CADASTRA ITEM NO LOCALSTORGE
				dados.cadastrarBD("designacao", desigStorge)
				console.log(`Cadastrado com sucesso!`);
			}else{
				console.log(`Existe cadastro!`);
			}
			ccto.value = "";
			//BUCA DADOS EM EXIBE NA TABELA		
		}
	
	});
};
window.addEventListener("load", designacao);

//BUSCA DADOS E EXIBE NA TABELA
function recuperadados(){	
	desigStorge.forEach(itens => {
		buscaDadosBD(itens)
	})
}
window.addEventListener("load", recuperadados);

//CADASTRA DADOS E EXIBE NA TABELA
function buscaDadosBD(itens){
	let divstorge = document.querySelector('[data-dataCctos]');
		divstorge.innerHTML += `
			<div data-dataccto class="storge">
				<p data-datatxt>${itens.valor}</p>
				<button type="submit" data-delete class="material-symbols-outlined" />delete</button>
			</div>
		`;
}
//DELETAR DADOS DO LOCALSTORGE
function deletaDados(){
	let apagar = document.querySelectorAll('[data-dataccto]');
	let datatxt = document.querySelectorAll('[data-datatxt]');
		apagar.forEach((apagardados, i) => {
			apagardados.addEventListener("click", (event) => {
				desigStorge.splice(desigStorge.findIndex(itens => itens.valor === datatxt[i].innerText),1);
				localStorage.setItem("designacao", JSON.stringify(desigStorge));
				apagardados.remove();
			})
		});
}

window.addEventListener("load", deletaDados);
/*
splice - O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

findIndex - O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. 
Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.
*/