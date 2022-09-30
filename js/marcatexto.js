//FUNÇÃO MARCA TEXTO
function marcaTexto(marcaParametro){
	//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEI SE ESTIVER FORA DO LINK DESEJADO	
	if(caminhoURL == urlAtual || caminhoActiveLink == urlAtual){
		let GR_VTA = window[1][1][0][1].document.querySelectorAll(".listaCelulaFont");
		itensStorge.find(Object => {
			GR_VTA.forEach(GR_VTA => {
				var txt = GR_VTA.innerText;
				if(txt.indexOf(Object.valor) == 0 ){
				GR_VTA.parentNode.style.background = '#00ff00';
				}
			})
					
		})
	}
};
atualizar = setInterval(() => {marcaTexto();}, 2000);