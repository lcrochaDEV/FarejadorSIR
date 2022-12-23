function refresh(){
	var origem = window.location.origin;
	window[1][1][0].parent.frames.location = document.getElementsByClassName("listaTable").src = `${origem}/navegacao/NOVAframesetNivel2ListaDeTarefasAux.cfm`;
	console.log("Tempo para atualização!");
	atualizar = setInterval(() => {noturno();}, 800);		
};
//atualizar = setInterval(() => {refresh();}, 1200);

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
    var menuNivel2TituloFont = window[1][1][0][0].document.querySelectorAll(".menuNivel2TituloFont")[0];
        menuNivel2TituloFont.style.backgroundColor = "#E8E8E8";
        menuNivel2TituloFont.style.transition = "0.9s";
    var listaColunaTituloFont = window[1][1][0][0].document.querySelectorAll(".listaColunaTituloFont");
        listaColunaTituloFont.forEach(listaColunaTituloFont => {
            listaColunaTituloFont.style.color = "#E8E8E8";
            listaColunaTituloFont.style.transition = "0.9s";
        });
    //CAMPO ITENS RECEBIDOS
    var itens_1 = window[1][1][0][0].document.querySelectorAll("body")[0];
        itens_1.style.backgroundColor = "#000";
        itens_1.style.transition = "0.9s";
        
    var itens_2 = window[1][1][0][1].document.querySelectorAll("body")[0];
        itens_2.style.backgroundColor = "#000";
        itens_2.style.transition = "0.9s";
        
    var formularioLabelFont = window[1][0].document.querySelectorAll(".formularioLabelFont");
        formularioLabelFont.forEach(formularioLabelFont => {
            formularioLabelFont.style.color = "#E8E8E8";
            formularioLabelFont.style.transition = "0.9s";
        });
		
		//MUDANDO ICONE DO SIR
		window[1][0].document.querySelector('.formularioLabelFont img').src = 'https://cdn-icons-png.flaticon.com/512/876/876054.png';
		window[1][0].document.querySelector('.formularioLabelFont img').style.width = '20px' 
};
window.addEventListener("DOMContentLoaded", noturnoInicio);
        
function noturno() {
    //CORES DE FUNFO DO SIR
    //CAMPOS DE TITULO
    window[0].document.querySelector("tbody").style.background = "#1C1C1C";
    //CAMPO DE IMPUT TABLE
	window[1][0].document.querySelectorAll('body')[0].style.background = "#1C1C1C";
	window[1][0].document.querySelectorAll('html')[0].style.background = "#1C1C1C";
	window[1][0].document.querySelectorAll('td')[0].style.background = "#1C1C1C";

    //TELA ROSA
    window[1][1][0][0].document.querySelectorAll(".menuNivel2TituloFont")[0].style.color = "#E8E8E8";
        var listaColunaTituloFont = window[1][1][0][0].document.querySelectorAll(".listaColunaTituloFont");
            listaColunaTituloFont.forEach(listaColunaTituloFont => {
            listaColunaTituloFont.style.color = "#E8E8E8";
        });
    //CAMPO ITENS RECEBIDOS
    window[1][1][0][0].document.querySelectorAll("body")[0].style.background = "#000";
    window[1][1][0][1].document.querySelectorAll("body")[0].style.background = "#000";

    var formularioLabelFont = window[1][0].document.querySelectorAll(".formularioLabelFont");
        formularioLabelFont.forEach(formularioLabelFont => {
        formularioLabelFont.style.color = "#E8E8E8";
    });

}
window.addEventListener("DOMContentLoaded", noturno);
        
//BOTÃO EXIBIR DO SIR
function exibir(){
//BOTÃO EXIBIR
var exibir = window[1][0].document.getElementsByClassName('formulariobutton')['confirma'];
    exibir.addEventListener("click", function(event){
        console.log("Botão Exibir");
        //return noturno();
        atualizar = setInterval(() => {noturno();}, 800);			
    });
}

