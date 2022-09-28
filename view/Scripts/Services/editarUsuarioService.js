import { inserirDados } from '../../Templates/UsuarioEditarTemplate.js'
import { MainServices } from "./MainServices.js";
import { MainTemplates } from '../../Templates/MainTemplates.js';
import * as Controller from "../Controller/editarUsuarioController.js"

let idEditado = MainServices.buscaID('?');

const mostrarUsuarioLogado = ( nomeDoUsuario ) => {
    MainServices.exibeDado('#nomeDoUsuario', nomeDoUsuario );
}

const todosDadosEditar = async ( idUsuario , desmonstrador ) => {

    const GET = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'authorization-token': MainServices.buscaToken()
           }
       };

    const respostaUsuario = await MainServices.simplesRequisicao( MainServices.rotaPrincipalAPI() + '/usuario/lista/', idUsuario , GET );
    inserirDados( respostaUsuario, desmonstrador );

    let extrairTodosDados = [];


              const extraidos = document.querySelectorAll('.input-style');
              
              MainServices.extrairDadosEstoca(extrairTodosDados, '.input-style');
              
              const botaoSalvarDado = document.querySelector('.SalvarDados');


        botaoSalvarDado.addEventListener('click', (evento) => {
        evento.preventDefault();


//           // ---- CRIAR OBJETO PARA ATUALIZAR

        MainServices.extrairDadosEstoca(extrairTodosDados, '.input-style');
 
    let ObjetoParaAtualizar = {
            id_credencial: idEditado,
            situacao_credencial: extraidos[8].value,
            data_inicial_credencial: extraidos[9].value,
            data_final_credencial: extraidos[10].value,
            direcao: 'Entrada',
            credencial: extraidos[7].value,
            credito_credencial: extraidos[11].value,
            tempo_afastamento: extraidos[12].value,
            
            id_usuario: idEditado,
            foto_usuario: "",
            nome_usuario: extraidos[0].value,
            sobrenome_usuario: extraidos[1].value,
            tipo_documento_usuario: extraidos[2].value,
            numero_documento_usuario: extraidos[3].value,
            telefone_usuario: extraidos[4].value,
            email_usuario: extraidos[5].value,
            empresa_usuario: extraidos[6].value,
            tipo_usuario: extraidos[13].value,
            setor_usuario: extraidos[14].value,
            pais_usuario: extraidos[15].value,
            estado_usuario: extraidos[16].value,
            cidade_usuario: extraidos[17].value,
            rua_usuario: extraidos[18].value,
            numero_usuario: extraidos[19].value,
            crendencial_usuario: extraidos[7].value,
        }

        console.log(ObjetoParaAtualizar)

        let dadoUpdate = JSON.stringify(ObjetoParaAtualizar);

        const PUT = {
            method: 'PUT',
            body: dadoUpdate,
           headers: {
                'Content-Type': 'application/json',
                'authorization-token': MainServices.buscaToken()
            }
        };

    
        const editar = async () => {
            const respostaAtualizacao = await MainServices.simplesRequisicao( MainServices.rotaPrincipalAPI() + '/usuario/edit/','',PUT )
            console.log(respostaAtualizacao);

            const respostaEdicao = respostaAtualizacao.situacao;
            
            const validaEdicao = ( dadosValidacao ) => {
                
                if ( dadosValidacao === true  ) {
                    // Mostra modal Bom
                    MainServices.mudarEstado('esconder-modal' ,'mostrar-modal', '#modalSuccess');
                    MainServices.redirecionarLocal('./usuarios.html', 1600);
                } else {
                    // Mostra modal Ruin
                    MainServices.mudarEstado('esconder-modal' ,'mostrar-modal', '#modalErro');
                }
            }
            
            validaEdicao( respostaEdicao );
        }

        editar();
    });
        


        
        
}


const sairPagina = () => {
    MainServices.voltarPagina(100);
}

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


const finalizarSessao = () => {
    return MainServices.logoOut();
}

export { 
    finalizarSessao,
    todosDadosEditar,
    mostrarUsuarioLogado,
     insererModaisTela,
     fecharModais, 
     idEditado,
     sairPagina
     }