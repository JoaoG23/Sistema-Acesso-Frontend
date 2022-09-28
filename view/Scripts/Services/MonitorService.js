import * as Controller from '../Controller/MonitorController.js'
import { MainServices } from './MainServices.js';
import { MainTemplates } from '../../Templates/MainTemplates.js';
import { mostrarFullScreen } from '../../Templates/AcessoTemplates.js';

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


const ultimoAcesso = async ( desmonstrador ) => {



    const respostaUsuario = await MainServices.simplesRequisicao( MainServices.rotaPrincipalAPI() + '/acessos/', 'ultimo' , GET );

    mostrarFullScreen( respostaUsuario, desmonstrador );

}

const finalizarSessao = () => {
    return MainServices.logoOut();
}


export {
    finalizarSessao,
    insererModaisTela,
    fecharModais, 
    sairPagina,
    ultimoAcesso
}