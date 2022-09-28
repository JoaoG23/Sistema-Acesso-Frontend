import { MainServices } from "./MainServices.js";
import { MainTemplates } from "../../Templates/MainTemplates.js";
import * as usuariosController from "../Controller/usuariosController.js";
import { gerarCartoesUsuario } from '../../Templates/usuariosElementos.js';

const GET = {
    method: 'GET',
    headers: { 
        'Content-Type': 'application/json',
        'authorization-token':MainServices.pegarToken()
       }
   };


const buscaDadosUsuario = async ( entradaNumeroPagina, exibidor ) => {
  
    // Todos os Metodos De Exclusao e Adicao deve estar no mesmo escopo :LEMBRETE:
    const usuarios = await MainServices.simplesRequisicao( MainServices.rotaPrincipalAPI() + '/usuario/listapagina/', entradaNumeroPagina, GET );
    const dadosUsuarios = usuarios.dados;
    
    
    dadosUsuarios.map(( seusDados ) => {
        gerarCartoesUsuario( seusDados, exibidor );
    });

    
// Remover os Usuarios
    const botaoRemover =  document.querySelectorAll('.remover');
    botaoRemover.forEach(element => {
        
        let buscandoOAvo = element.parentElement.parentElement.id;

        
        element.addEventListener('click', () => { 
            removerUsuario( buscandoOAvo );
         })
    });



    const  removerUsuario =  ( id ) => {

        // Aparece modal
        MainServices.mudarEstado('esconder-modal' ,'mostrar-modal', '#modalQuestionamento');
        
             let idSelecionado = JSON.stringify({
                 id_usuario:id
             });
        
             const DELETE = {
                 method: 'DELETE',
                  body: idSelecionado,
                 headers: { 'Content-Type': 'application/json',
                             'authorization-token':MainServices.pegarToken()
                         }
             };
             
             const SimBotaoModal = document.querySelector('#sim');
             SimBotaoModal.addEventListener('click', async () => {
    
                 console.log('O ID de remover e esse: ' + id);
                 document.getElementById(id).remove();
    
                 MainServices.mudarEstado('mostrar-modal' ,'esconder-modal', '#modalQuestionamento');
                 const resposta = await MainServices.simplesRequisicao( MainServices.rotaPrincipalAPI(),'/usuario/remover/', DELETE )
    
                 console.info( resposta );
             });
        }


};

const buscaPeloNome = async ( dadosPesquisa, exibidor ) => {
    const usuarios = await MainServices.simplesRequisicao( MainServices.rotaPrincipalAPI() + '/usuario/listaNome/', dadosPesquisa, GET );
    exibidor.innerHTML = '';

    usuarios.map(( seusDados ) => {
        gerarCartoesUsuario( seusDados, exibidor )
    });
}

const insererModaisTela = ( exibidor ) => {
    MainTemplates.criarModaisTodos( exibidor )
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
    MainServices.exibeDado('#nomeDoUsuario', nomeDoUsuario);
}

const finalizarSessao = () => {
    return MainServices.logoOut();
}

export {
    finalizarSessao,
    buscaDadosUsuario,
    buscaPeloNome,
    mostrarUsuarioLogado,
    insererModaisTela,
    fecharModais,
};