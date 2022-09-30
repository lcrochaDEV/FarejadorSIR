//CONEXÃO COM O ARQUIVO JSON
function conectJson(){
	//CRIAMDO TABELA
	fetch('http://10.10.65.42:8080/FarejadorSIR/lista/lista.json')
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