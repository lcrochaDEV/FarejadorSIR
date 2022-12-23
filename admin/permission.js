//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEI SE ESTIVER FORA DO LINK DESEJADO
const origem = window.location.origin;
const urlAtual = window.location.href;

const linksProtect = [
	{
		link:	`${origem}/navegacao/framesetNivel1Aplicacao.cfm`
	},
	{
		link:	`${origem}/navegacao/framesetNivel1Aplicacao.cfm?`
	},
	{
		link:	`${origem}/navegacao/framesetNivel1Aplicacao.cfm?opcaoEscolhida=NOVA_LIS_TAR`
	},
	{
		link:	`http://192.168.1.254/`
	},
];

//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEI SE ESTIVER FORA DO LINK DESEJADO	
if(linksProtect.find(itens => itens.link === urlAtual)){
	atualizar = setInterval(() => {
		marcaTexto();	//MARCATEXTO.JS
		usernameTmp();	//USERNAMERED.JS
	}, 2000);
	window.addEventListener('load', css); //IMPORTAGSIR.JS
}
