//BUSCAR DADOS EM JSON	
function buscar(data){
	var listCKT = data.split(",\r\n");
	
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

//BANDAS DE AUTA HIERARQUIA 
function buscaBandas(){
	var bodyrec = window[1][1][0][1].document.querySelectorAll(".listaTable tr");
    let regex = /(?:OCH|\s+IT\s+|B4S|B16S|VC4S|OMS|OTS|1G|10G|B40W|10G)/gm; //LSTA DE BANDAS PARA BUSCA -> EXPESSÕES REGULARES
    bodyrec.forEach(bodyrec => {
        let texto = bodyrec.innerText;	
		let capturatxt = [... texto.matchAll(regex)];
        let novoobj = capturatxt.map(capturatxt => ({[capturatxt['index']]: capturatxt[0]}))      
        if(novoobj.find(itens => itens)){
    		bodyrec.style.background = "red";
    		bodyrec.style.fontWeight = "bold";
            bodyrec.parentNode.style.color = "#fff";
            let corfornt = bodyrec.querySelectorAll(".listaTable font");
                corfornt.forEach(corfornt => {			
				corfornt.style.color = "#fff";
			});
        }
    })
}
//atualizar = setInterval(() => {buscaBandas();}, 2000);