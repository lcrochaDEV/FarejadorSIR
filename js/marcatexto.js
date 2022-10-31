//FUNÇÃO MARCA TEXTO
function marcaTexto(marcaParametro){
	const marcaTxt = JSON.parse(localStorage.getItem("marcaTxt")) || [];
	//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEI SE ESTIVER FORA DO LINK DESEJADO	
	if(caminhoURL == urlAtual || caminhoActiveLink == urlAtual){
		var arrCores = ['#00ff00', '#cc0000', '#0099cc', '#cc0000', '#6600cc' , '#cc00cc'];
		let cf = window[1][1][0][1].document.querySelectorAll(".listaCelulaFont");
		marcaTxt.forEach((itens, i)=> {
			cf.forEach(cf => {
				if(cf.innerText == itens.valor){
					if(arrCores[i] === '#00ff00'){
						cf.style.color = '#000';
						cf.style.fontWeight = "bold"
						cf.parentNode.style.background = arrCores[i];
					}else{
						cf.style.color = '#fff';
						cf.style.fontWeight = "bold"
						cf.parentNode.style.background = arrCores[i];
					}
				}
			})
		})
		//REC RAL E DESIGNAÇÃO
		let txtTable = window[1][1][0][1].document.querySelectorAll(".listaTable  td");
			desigStorge.find(Object => {
				txtTable.forEach(txtTable  => {
					if(txtTable.innerText === Object.valor){
						txtTable.parentNode.style.background = '#9400d3';
						txtTable.parentElement.removeAttribute("onmouseover");
						let corTr = txtTable.parentElement.querySelectorAll('* font');
							corTr.forEach(corTr  => {
								corTr.style.color = '#fff'
								corTr.style.fontWeight = "bold";										
						})
					}
				})
			})
	}
};
atualizar = setInterval(() => {marcaTexto();}, 2000);


//window[1][1][0][1].document.querySelectorAll(".listaTable td")[4].parentElement.removeAttribute("onmouseover");

//window[1][1][0][1].document.querySelectorAll(".listaTable td")[4].parentElement.removeAttribute("onmouseout");

