//CONEXÃO COM O ARQUIVO JSON
function conectJson(){
	//CRIAMDO TABELA
	fetch('https://raw.githubusercontent.com/lcrochaDEV/FarejadorSIR/master/lista/lista.json')
	  .then(function(response){ response.text()
		.then(function(data){
		  //PASSAGEM POR PARAMENTROS DA BUSCA NO ARQUIVO JSON
			buscar(data);
			//console.log(data);
		  //PASSAGEM POR PARAMENTROS DA BUSCA NO ARQUIVO JSON  	  
		});
	  })
	}
//window.addEventListener("DOMContentLoaded", conectJson);