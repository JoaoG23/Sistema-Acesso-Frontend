import { informacoesUsuario } from '../../Templates/MostraUsuarioTemplate.js'
import { MainServices } from "./MainServices.js";
import { MainTemplates } from '../../Templates/MainTemplates.js';
import * as Controller from '../Controller/mostrarUsuarioController.js'

const insererModaisTela = (exibidor) => {
    MainTemplates.criarModaisTodos(exibidor);
}

let idEncontrado = MainServices.buscaID('#'); 

const mostrarTodosDados = async ( desmonstrador ) => {

    
    const GET = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'authorization-token':MainServices.pegarToken()
           }
       };
    

    const respostaUsuario = await MainServices.simplesRequisicao( MainServices.rotaPrincipalAPI() + '/usuario/lista/', idEncontrado , GET );
    informacoesUsuario( respostaUsuario, desmonstrador );
}


const mostrarUsuarioLogado = ( nomeDoUsuario ) => {
    MainServices.exibeDado('#nomeDoUsuario', nomeDoUsuario );
}

const finalizarSessao = () => {
    return MainServices.logoOut();
}

export { finalizarSessao,
     mostrarTodosDados,
    mostrarUsuarioLogado,
    insererModaisTela }