//BUSCAR DADOS EM JSON	
function buscar(data){
	var listCKT = data.split(",\r\n");
	//console.log(listCKT);
	
	// var listCKT = [];
		// listCKT[1] = "NULL",
		// listCKT[2] = "NULL",
		// listCKT[3] = "NULL",

//SELECIONA TD DE CADA CCTO EM SIR PAGINA ROSA
var bodyrec = window[1][1][0][1].document.querySelectorAll(".listaTable td");
	bodyrec.forEach(bodyrec => {
		//BUSCA PALAVRAS
		if(listCKT.find(listCKT => listCKT === bodyrec.innerText)){
			bodyrec.parentNode.style.background = "red";
			//CSS COLOR E BOLD FONT
			let corTr = bodyrec.parentElement.querySelectorAll('* font');
				corTr.forEach(corTr => {
					corTr.style.color = "#fff";
					corTr.style.fontWeight = "bold";	
				});
			console.log(`Circuito ${bodyrec.innerText} existe na lista!`);
		}
	})
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