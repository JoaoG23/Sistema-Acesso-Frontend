import { MainServices } from "./MainServices.js";
import { MainTemplates } from '../../Templates/MainTemplates.js';
import * as Controller from "../Controller/adicionarUsuarioController.js"

let idInserido = MainServices.buscaID('?');

const mostrarUsuarioLogado = (nomeDoUsuario) => {
    MainServices.exibeDado('#nomeDoUsuario', nomeDoUsuario);
}

const gerarAleatorioAlfa = () => {
    let AleatorioHexa = Math.floor(Date.now() * Math.random()).toString(28).toLocaleUpperCase();
    return AleatorioHexa;
}

// const osRequiridos = document.querySelectorAll('[requerido]');


const adicionar = () => {

    const botaoSalvarDado = document.querySelector('.SalvarDados');
    botaoSalvarDado.addEventListener('click', async (evento) => {
        evento.preventDefault();

        let extrairTodosDados = [];

        
        MainServices.extrairDadosEstoca(extrairTodosDados, '.input-style');

        const extraidos = document.querySelectorAll('.input-style');


        let ObjetoParaAtualizar = {
            id_credencial: idInserido,
            situacao_credencial: extraidos[8].value,
            data_inicial_credencial: extraidos[9].value,
            data_final_credencial: extraidos[10].value,
            direcao: 'Entrada',
            credencial: extraidos[7].value,
            credito_credencial: parseInt(extraidos[11].value),
            tempo_afastamento: extraidos[12].value,

            id_usuario: idInserido,
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

        let dados = JSON.stringify(ObjetoParaAtualizar);

        const POST = {
            method: 'POST',
            body: dados,
            headers: {
                'Content-Type': 'application/json',
                'authorization-token': MainServices.buscaToken()
            }
        };

        try {



            const respostaUsuario = await MainServices.simplesRequisicao(MainServices.rotaPrincipalAPI() + '/usuario/inserir/', '', POST);
            console.log(respostaUsuario)


            const validaEdicao = (dadosValidacao) => {

                if (dadosValidacao === true) {
                    // Mostra modal Bom
                    MainServices.mudarEstado('esconder-modal', 'mostrar-modal', '#modalSuccess');
                    MainServices.redirecionarLocal('./usuarios.html', 1600);
                } else {
                    // Mostra modal Ruin
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
    gerarAleatorioAlfa,
}