//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEI SE ESTIVER FORA DO LINK DESEJADO
const origem = window.location.origin;
const urlAtual = window.location.href;
const caminhoURL = `${origem}/navegacao/framesetNivel1Aplicacao.cfm`;
const caminhoActiveLink = `${caminhoURL}?opcaoEscolhida=NOVA_LIS_TAR`;

//OCULTA BOTÃO DE BUSCA DE DADOS DAS RECS
let links = `?exibe_msg=`;
let btns = window.location.href.indexOf(links);

//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEI SE ESTIVER FORA DO LINK DESEJADO	
if(caminhoURL === urlAtual || caminhoActiveLink === urlAtual){
	atualizar = setInterval(() => {
		marcaTexto();
		usernameTmp();
	}, 2000);

}