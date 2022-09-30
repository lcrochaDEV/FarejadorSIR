function noturnoInicio(){
//CORES DE FUNDO DO SIR	
    //CAMPOS DE TITULO
    var bdFunfdoG = window[0].document.querySelectorAll("tbody")[0];
        bdFunfdoG.style.backgroundColor = "#1C1C1C";
        bdFunfdoG.style.transition = "0.9s";
    
    //CAMPO DE IMPUT TABLE
    var tagsir = ["body", "html", "td"];
        for (var i = 0; i < 3; i++){
            var tabela = window[1][0].document.querySelectorAll(tagsir[i])[0];
                //tabela.querySelectorAll(".formularioLimiteTd")[0].style.background = "#1C1C1C";
                tabela.style.backgroundColor = "#1C1C1C";
                tabela.style.transition = "0.9s";
        }	
    //TELA ROSA
    var telaRosa = window[1][1][0][0].document.querySelectorAll(".menuNivel2TituloFont")[0];
        telaRosa.style.backgroundColor = "#E8E8E8";
        telaRosa.style.transition = "0.9s";
    var textoRosa = window[1][1][0][0].document.querySelectorAll(".listaColunaTituloFont");
        textoRosa.forEach(textoRosa => {
            textoRosa.style.color = "#E8E8E8";
            textoRosa.style.transition = "0.9s";
        });
    //CAMPO ITENS RECEBIDOS
    var itens_1 = window[1][1][0][0].document.querySelectorAll("body")[0];
        itens_1.style.backgroundColor = "#000";
        itens_1.style.transition = "0.9s";
        
    var itens_2 = window[1][1][0][1].document.querySelectorAll("body")[0];
        itens_2.style.backgroundColor = "#000";
        itens_2.style.transition = "0.9s";
        
    var fonte = window[1][0].document.querySelectorAll(".formularioLabelFont");
        fonte.forEach(fonte => {
            fonte.style.color = "#E8E8E8";
            fonte.style.transition = "0.9s";
        });
};
window.addEventListener("DOMContentLoaded", noturnoInicio);
        
function noturno() {
    //CORES DE FUNFO DO SIR
    //CAMPOS DE TITULO
    window[0].document.querySelectorAll("tbody")[0].style.background = "#1C1C1C";
    //CAMPO DE IMPUT TABLE
    var tagsir = ["body", "html", "td"];
        for (var i = 0; i < 3; i++){
            window[1][0].document.querySelectorAll(tagsir[i])[0].style.background = "#1C1C1C";
        }
    //TELA ROSA
    window[1][1][0][0].document.querySelectorAll(".menuNivel2TituloFont")[0].style.color = "#E8E8E8";
        var texto = window[1][1][0][0].document.querySelectorAll(".listaColunaTituloFont");
            texto.forEach(texto => {
            texto.style.color = "#E8E8E8";
        });
    //CAMPO ITENS RECEBIDOS
    window[1][1][0][0].document.querySelectorAll("body")[0].style.background = "#000";
    window[1][1][0][1].document.querySelectorAll("body")[0].style.background = "#000";

    var fonte = window[1][0].document.querySelectorAll(".formularioLabelFont");
        fonte.forEach(fonte => {
        fonte.style.color = "#E8E8E8";
    });

}
window.addEventListener("DOMContentLoaded", noturno);
        
//BOTÃO EXIBIR DO SIR
function exibir(){
//BOTÃO EXIBIR
var exibir = window[1][0].document.querySelectorAll(".formulariobutton")[1];
    exibir.addEventListener("click", function(event){
        console.log("Botão Exibir");
        //return noturno();
        atualizar = setInterval(() => {noturno();}, 800);			
    });
}