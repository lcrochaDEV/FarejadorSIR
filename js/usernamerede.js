//CONEXÃO COM O ARQUIVO JSON
function usernameTmp(){
	//CRIAMDO TABELA
	fetch('https://raw.githubusercontent.com/lcrochaDEV/FarejadorSIR/master/lista/usernameTmp.json')
	  .then(function(response){ response.text()
		.then(function(data){
		  //PASSAGEM POR PARAMENTROS DA BUSCA NO ARQUIVO JSON
			console.log(data);
		  //PASSAGEM POR PARAMENTROS DA BUSCA NO ARQUIVO JSON  	  
		});
	  })
}
//ATIVA BUSCA POR CCTOS LISTADOS	
atualizarBanda = setInterval(() => {usernameTmp();}, 2000);	

let userNamerede = [
    {
        codigo: "Z089196",
        nome: "D.RITA"
    },
    {
        codigo: "Z328444",
        nome: "ARLETE"
    }
];
let bucarDadosUser = (usernameTmp) => {
let cf = window[1][1][0][1].document.querySelectorAll(".listaCelulaFont");
    cf.forEach(itens => {
       userNamerede.forEach(user => {
          if(itens.innerText === user.codigo){
              console.log(itens.innerText = user.nome);
          }
       })
    })
}