import { MainServices } from "./MainServices.js";
import * as indexController from "../Controller/indexController.js"


const validaSeVazioLogin = ( valorLogin ) => {

    const notificacaoVazio = MainServices.mudarEstado;
    const desabilitaBotaoLogar = MainServices.adicionarAtributo;

    switch ( true ) {
        // case '':
        case ( valorLogin.value.length < 3 ):
        case ( valorLogin === '' ):
            notificacaoVazio('nao-visivel', 'visivel', '#msgValidacao');
            desabilitaBotaoLogar('disabled', '#logar');
            break;
        default:
            MainServices.mudarEstado('visivel', 'nao-visivel', '#msgValidacao');
            break;

    }
}

const senhaValidaVazio = ( valorSenha ) => {

    const notificacaoVazio = MainServices.mudarEstado;
    const habilitarBotaoLogar = MainServices.removeAtributo;

    switch (true) {
        case ( valorSenha.value.length < 3 ):
        case ( valorSenha === '' ):
            notificacaoVazio('nao-visivel', 'visivel', '#msgValidacao');
            break;
        default:
            notificacaoVazio('visivel', 'nao-visivel', '#msgValidacao');
            habilitarBotaoLogar('disabled', '#logar');
            break;
    }

}



const fechaOsModais = (seletorDeModais) => {

    seletorDeModais.forEach((element) => {
        element.addEventListener('click', () => {
            MainServices.mudarEstado('mostrar-modal', 'esconder-modal', '#modalSuccess');
            MainServices.mudarEstado('mostrar-modal', 'esconder-modal', '#modalErro');
        });
    });
}

const logarUsuario = async (login, senha) => {

    MainServices.mudarEstado('esconder-modal' ,'mostrar-modal', '#modalLoading'); 
    
     let dadosValidacao = JSON.stringify({
         login: login.value,
         senha: senha.value
        });
        
        const configRequisicao = {
            method: 'POST',
            body: dadosValidacao,
            headers: { 'Content-Type': 'application/json' }
        };
        
        const endPoint = MainServices.rotaPrincipalAPI();
        
        const resposta = await MainServices.simplesRequisicao(endPoint + '/init/logar', '', configRequisicao)
        
        const respostaValidacao = resposta.situacao;
        const mensagemResposta = resposta.msg;
        const getToken = resposta.tokenlogado;
        const nomeUsuario = resposta.usuario;
        
        let armazenarSessao = localStorage.setItem("token", getToken);
        let armazenarNomeUsuario = localStorage.setItem("usuario", nomeUsuario);
        
        console.info('O seu token e esse : ' + getToken);
        
        // Inserer resposta do back end em modal
        MainServices.exibirInformacaoEmElementoTags('#sucessoDadosServidor', mensagemResposta);
        MainServices.exibirInformacaoEmElementoTags('#erroDadosServidor', mensagemResposta);
        
        // Valida login e exibe modal
        const validaLoginServido = (dadosValidacao) => {
            
            const validador = dadosValidacao === true ? (
                // Mostra modal bom
                // MainServices.mudarEstado('mostrar-modal' ,'esconder-modal', '#modalLoading'), // Depois implementar o loading LEMBRETE
            MainServices.mudarEstado('esconder-modal', 'mostrar-modal', '#modalSuccess'),
            MainServices.redirecionarLocal('./home.html', 1500)
        ) : (
            // Mostra modal Ruin
            // MainServices.mudarEstado('mostrar-modal' ,'esconder-modal', '#modalLoading'),
            MainServices.mudarEstado('esconder-modal', 'mostrar-modal', '#modalErro')
        );

    }
    validaLoginServido(respostaValidacao);

}


export {
    validaSeVazioLogin,
    senhaValidaVazio,
    logarUsuario,
    fechaOsModais
}
