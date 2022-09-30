//BUSCA URL E COLOCA CONDIÇÃO DE BLOQUEI SE ESTIVER FORA DO LINK DESEJADO
const origem = window.location.origin;
const urlAtual = window.location.href;
const caminhoURL = `${origem}/navegacao/framesetNivel1Aplicacao.cfm`;
const caminhoActiveLink = `${caminhoURL}?opcaoEscolhida=NOVA_LIS_TAR`;
