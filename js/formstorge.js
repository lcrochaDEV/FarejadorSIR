//CRIA TAG FORMULARIO
function inputAreaCFs(passCfs){
	const criandoElementsHtml = document.getElementById('formTag').innerHTML += `
	<div id="campo-cfs">
		<form id="forme1" action="" method="post">
			<input type="text" class="area" name="area" placeholder="&nbsp;" required name=nome />
			<label class="input-group__label" for="cfs">CFs</label>
			<button type="submit" class="sub-area" />Enviar</button>
		</form>
		<div data-dataCfs></div>
	</div>
	<div id="campo-ccto">
		<form id="forme2" action="" method="post">
			<input type="text" class="ccto" name="ccto" placeholder="&nbsp;" required name=nome />
			<label class="input-group__label" for="cctos">CCTOs</label>
			<button type="submit" id="sub-ccto" />Enviar</button>
		</form>
		<div data-dataCctos></div>
	</div>		
	`;
}
window.addEventListener("load", inputAreaCFs);

//Modo para cadastrar elemento em localstorge
//NOVO LOCALSTORGE
const itensStorge = JSON.parse(localStorage.getItem("marcaTxt")) || [];

function cfs(){
	let formesInp = document.querySelector('#campo-cfs');
		formesInp.addEventListener("submit", (event) => {
			event.preventDefault() //Inpede atualizar após evento Click(GET/POST).
			let nome = event.target.elements['area'];
			//TRANSFORMANDO EM OBJETOS
			if(nome.value === ""){
				console.log(`Cadastre um item!`);
			}else if(nome.value != ""){

				let arrStorge = {
					"id": '',
					"valor": nome.value,
				}
				var lista = itensStorge.filter((cfs) => {
					return (cfs.valor === nome.value)
				}) 
				if(lista.length === 0){
					//COLOCA MAIS UM INTEM NA LISTA DE ARRAY
					itensStorge.push(arrStorge);
					//PASSAR DADOS CADASTRADOS
					printCadastro(arrStorge);
					//CADASTRA ITEM NO LOCALSTORGE
					localStorage.setItem("marcaTxt", JSON.stringify(itensStorge));
					console.log(`Cadastrado com sucesso!`);
				}else{
					console.log(`Existe cadastro!`);
				}
				nome.value = "";
				//BUCA DADOS EM EXIBE NA TABELA
			}
		});
}
window.addEventListener("load", cfs);

//BUSCA DADOS E EXIBE NA TABELA
function recuperaLocalstorge(){	
	document.querySelector('[data-dataCfs]');
	itensStorge.forEach(itens => { 
		printCadastro(itens);
	})
}
window.addEventListener("load", recuperaLocalstorge);

//CADASTRA DADOS E EXIBE NA TABELA
function printCadastro(itens){
	let divstorge = document.querySelector('[data-dataCfs]');
	divstorge.innerHTML += `
		<div class="storge">
			<p data-cf>${itens.valor}</p>
			<a href="#" data-delete class="material-symbols-outlined">delete</a>
		</div>
	`;
}

//DELETA ELEMENTO DE LOCALSTORG
function deleta(){
	let apagar = document.querySelectorAll('[data-delete]');
  		apagar.forEach((apagar, i) => { 
			apagar.addEventListener("click", (event) => {
				itensStorge.splice(itensStorge.findIndex(itens => itens.valor === i));
				localStorage.setItem("marcaTxt", JSON.stringify(itensStorge));
				apagar.parentNode.remove()
			})
		})
}
window.addEventListener("load", deleta);
