import * as Controller from '../Controller/AcessosController.js'
import { MainServices } from './MainServices.js';
import { MainTemplates } from '../../Templates/MainTemplates.js';
import { insererTabela, limpaTela, insererUtimo, mostrarFullScreen } from '../../Templates/AcessoTemplates.js';

const insererModaisTela = ( exibidor ) => {
    MainTemplates.criarModaisTodos( exibidor );
}

const fecharModais = ( seletorDeModais ) => {
    seletorDeModais.forEach( botao => {
        botao.addEventListener('click', ( element ) => {
            // buscando o seu avo
            let pegandoIDdoAvo = element.currentTarget.parentNode.parentNode.parentNode.id;
            console.log('O ID modal e : '+  pegandoIDdoAvo );
            MainServices.mudarEstado('mostrar-modal' ,'esconder-modal', `#${pegandoIDdoAvo}`)
        });
    });
}

const mostrarUsuarioLogado = ( nomeDoUsuario ) => {
    MainServices.exibeDado('#nomeDoUsuario', nomeDoUsuario );
}

const sairPagina = () => {
   MainServices.voltarPagina( 1000 );
}


const GET = {
    method: 'GET',
    headers: { 
        'Content-Type': 'application/json',
        'authorization-token': MainServices.buscaToken()
       }
   };



const acessosTodos = async (  desmonstrador ) => {


    const respostaUsuario = await MainServices.simplesRequisicao( MainServices.rotaPrincipalAPI() + '/acessos/', '' , GET );

    respostaUsuario.map(( seusDados ) => {
        insererTabela( seusDados, desmonstrador );
    });


}

const ultimoAcesso = async ( desmonstrador ) => {



    const respostaUsuario = await MainServices.simplesRequisicao( MainServices.rotaPrincipalAPI() + '/acessos/', 'ultimo' , GET );

        insererUtimo( respostaUsuario, desmonstrador );

}

const finalizarSessao = () => {
    return MainServices.logoOut();
}


export {
    finalizarSessao,
    limpaTela,
    insererModaisTela,
    fecharModais, 
    mostrarUsuarioLogado,
    sairPagina,
    acessosTodos,
    ultimoAcesso
}