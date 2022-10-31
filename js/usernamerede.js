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

let cf = window[1][1][0][1].document.querySelectorAll(".listaCelulaFont");
    cf.forEach(itens => {
       userNamerede.forEach(user => {
          if(itens.innerText === user.codigo){
              console.log(itens.innerText = user.nome);
          }
       })
    })