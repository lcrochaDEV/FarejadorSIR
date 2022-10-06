//FUNÇÃO MARCA TEXTO
function marcaTexto(marcaParametro){
	//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEI SE ESTIVER FORA DO LINK DESEJADO	
	if(caminhoURL == urlAtual || caminhoActiveLink == urlAtual){
		let cf = window[1][1][0][1].document.querySelectorAll(".listaCelulaFont");
		itensStorge.find(Object => {
			cf.forEach(cf => {
				if(cf.innerText === Object.valor){
					cf.parentNode.style.background = '#00ff00';
				}
			})
					
		})
		
		//REC RAL E DESIGNAÇÃO
		let txtTable = window[1][1][0][1].document.querySelectorAll(".listaTable  td");
			desigStorge.find(Object => {
				txtTable.forEach(txtTable => {
					if(txtTable.innerText === Object.valor){
						txtTable.parentNode.style.background = '#9400d3';	
					}

				})
			})
	}
};
atualizar = setInterval(() => {marcaTexto();}, 2000);
// .childNodes
// .childElementCount

