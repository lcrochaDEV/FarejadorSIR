//BUSCAR DADOS EM JSON	
function buscar(data){
	var listCKT = data.split(",\r\n");
	//console.log(listCKT);
	
	// var listCKT = [];
		// listCKT[1] = "NULL",
		// listCKT[2] = "NULL",
		// listCKT[3] = "NULL",
		
//SELECIONA TD DE CADA CCTO EM SIR PAGINA ROSA
listCKT.forEach(listCKT => {
	//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEI SE ESTIVER FORA DO LINK DESEJADO
	if(caminhoURL == urlAtual){
		//SEARCH DE ELEMENTO DA PAGINA DO SIR
		var bodyrec = window[1][1][0][1].document.querySelectorAll(".listaTable")[0];
		bodyrec.getElementsByTagName("a")[3].firstElementChild.color = '#fff'
		var search = bodyrec.querySelectorAll(".listaTable tr td");
			search.forEach(search => {
				var result = search.innerText;
					//BUSCA PALAVRAS
					var saida = result.indexOf(listCKT);
					if(saida == 0){
						search.parentNode.style.background = "red";
						search.parentNode.style.fontWeight = "bold";
						search.querySelectorAll("font")[0].style.color = "#fff";
						var corText = search.parentNode.querySelectorAll(".listaTable tr td .listaCelulaFont");
							//window[1][1][0][1].document.querySelectorAll("*")[14].removeAttribute("onmouseover");
							//window[1][1][0][1].document.querySelectorAll("*")[14].removeAttribute("onmouseout");
							
							corText.forEach(corText => {
								corText.style.color = "#fff";
								//console.log(corText);
								});
						console.log(`Circuito ${result} existe na lista!`);
					}
			});
		}
	});
}
//atualizar = setInterval(() => {buscar();}, 2000);
//BANDAS DE AUTA HIERARQUIA 
function bandas(data) {
var arr = [];
	// arr[1] = "OCH";
	// arr[2] = "IT";
	// arr[3] = "B4S";
	// arr[4] = "B16S";
	// arr[5] = "VC4S";
	// arr[6] = "OMS";
	// arr[7] = "OTS";
	// arr[8] = "1G";
	// arr[9] = "10G";
	// arr[10] = "B40W";
	// arr[11] = "10G";
	arr.forEach(arr => {
		//SEARCH DE ELEMENTO DA PAGINA DO SIR
		var bodyrec = window[1][1][0][1].document.querySelectorAll(".listaTable")[0];
		var search = bodyrec.querySelectorAll(".listaTable tr td");
			search.forEach(search => {
				var desigtxt = search.innerText;
				var saida = desigtxt.indexOf(arr) == -1;	
				if(saida == 0){
					search.parentNode.style.background = "red";
					search.parentNode.style.fontWeight = "bold";
					search.parentNode.querySelectorAll("font")[0].style.color = "#fff";
					var corText = search.parentNode.querySelectorAll(".listaTable tr td .listaCelulaFont");
							corText.forEach(corText => {
								corText.style.color = "#fff";
							 });
					console.log(search);
				console.log(`${desigtxt} BANDA DE AUTA HIERARQUIA!`);					
				}
			})
	});
};
//atualizar = setInterval(() => {bandas();}, 2000);