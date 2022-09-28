import { MainServices } from "./MainServices.js";
import { MainTemplates } from '../../Templates/MainTemplates.js';
import * as Controller from "../Controller/registrarGestorController.js";


const mostrarUsuarioLogado = (nomeDoUsuario) => {
    MainServices.exibeDado('#nomeDoUsuario', nomeDoUsuario);
}

function liberaBotao( elemento ) {
    let valorElemento = elemento.value;

    const notificacaoVazio = MainServices.mudarEstado;
    const habilitarbotao = MainServices.removeAtributo;
    const desabilitarbotao = MainServices.adicionarAtributo;
            
    if ( valorElemento === '' && valorElemento.length < 2  ) {
        desabilitarbotao('disabled', '.SalvarDados');
        notificacaoVazio('nao-visivel', 'visivel', '.validacao');
    }  else {
        notificacaoVazio('visivel', 'nao-visivel', '.validacao');
        habilitarbotao('disabled', '.SalvarDados');
    }
        
}

function mostrarMensagens( elemento ) {
    let valorElemento = elemento.value;

    const notificacaoVazio = MainServices.mudarEstado;

    
            
    if ( valorElemento === '' && valorElemento.length < 2  ) {
        notificacaoVazio('nao-visivel', 'visivel', '.validacao');
    }  else {
        notificacaoVazio('visivel', 'nao-visivel', '.validacao');
    }
        
}


const verificaSenhasIguais =  ( senha, confimacaoSenha, elementoModificado ) => {

    let validador = senha.value === confimacaoSenha.value ? (
       MainServices.mudarEstado('visivel', 'nao-visivel', elementoModificado )) : ( MainServices.mudarEstado('nao-visivel', 'visivel', elementoModificado ));

}

const adicionar = ( login, senha, email,  botaoSalvar ) => {

    botaoSalvar.addEventListener('click', async (evento) => {
            // Iniciar carregamento ate que a promise seja resolvida
        // MainServices.mudarEstado('esconder-modal', 'mostrar-modal', '#modalLoading');
        evento.preventDefault();
        
        try {
        
        let objeto = {
            login:login.value,
            senha:senha.value,
            email:email.value
        }
        

        let dados = JSON.stringify(objeto);

        const POST = {
            method: 'POST',
            body: dados,
            headers: {
                'Content-Type': 'application/json',
                'authorization-token': MainServices.buscaToken()
            }
        };

        
        
            const respostaUsuario = await MainServices.simplesRequisicao( MainServices.rotaPrincipalAPI() + '/init/registrar', '', POST );

            MainServices.mudarEstado('mostrar-modal', 'esconder-modal', '#modalLoading');
            
            const validaEdicao = ( dadosValidacao ) => {
                
                if (dadosValidacao === true) {
                    // Mostra modal Bom
                    MainServices.mudarEstado('esconder-modal', 'mostrar-modal', '#modalSuccess');
                    MainServices.redirecionarLocal('./index.html', 1000);
                } else {
                    // Mostra modal Ruin
                    // MainServices.mudarEstado('esconder-modal', 'mostrar-modal', '#modalSuccess');
                    MainServices.mudarEstado('esconder-modal', 'mostrar-modal', '#modalErro');
                }
            }
            validaEdicao(respostaUsuario.situacao)
        } catch (error) {

            MainServices.mudarEstado('esconder-modal', 'mostrar-modal', '#modalErro');
        }

    });


}

const insererModaisTela = (exibidor) => {
    MainTemplates.criarModaisTodos(exibidor);
}

const fecharModais = (seletorDeModais) => {
    seletorDeModais.forEach(botao => {
        botao.addEventListener('click', (element) => {
            // buscando o seu avo
            let pegandoIDdoAvo = element.currentTarget.parentNode.parentNode.parentNode.id;
            MainServices.mudarEstado('mostrar-modal', 'esconder-modal', `#${pegandoIDdoAvo}`)
        });
    });
}

const finalizarSessao = () => {
    return MainServices.logoOut();
}



export {
    finalizarSessao,
    adicionar,
    mostrarUsuarioLogado,
    insererModaisTela,
    fecharModais,
    liberaBotao,
    mostrarMensagens,
    verificaSenhasIguais,
}