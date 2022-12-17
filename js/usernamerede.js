//CONEXÃO COM O ARQUIVO JSON
function usernameTmp(){
  //CRIAMDO TABELA
  fetch('https://raw.githubusercontent.com/lcrochaDEV/FarejadorSIR/master/lista/usernameTmp.json')
      .then(function(response){ response.json()
      .then(function(data){
        //PASSAGEM POR PARAMENTROS DA BUSCA NO ARQUIVO JSON
        bucarDadosUser(data[0].userNamerede);
            
        //PASSAGEM POR PARAMENTROS DA BUSCA NO ARQUIVO JSON  	  
      });
      })
  }
  
  let bucarDadosUser = (usernameTmp) => {
  let cf = window[1][1][0][1].document.querySelectorAll(".listaCelulaFont");
      cf.forEach(itens => {
         usernameTmp.forEach(user => {
            if(itens.innerText === user.codigo){
                console.log(itens.innerText = user.nome);
            }
         })
      })
  }
  console.log(atualizar = setInterval(() => {usernameTmp();}, 2000));