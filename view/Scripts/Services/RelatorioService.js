import * as Controller from '../Controller/RelatorioController.js'
import { logoMarca } from '../../Templates/Logo-64.js'
import { MainServices } from './MainServices.js';
import { MainTemplates } from '../../Templates/MainTemplates.js';
import { insererTabela, limpaTela, insererUtimo } from '../../Templates/AcessoTemplates.js';

const insererModaisTela = (exibidor) => {
    MainTemplates.criarModaisTodos(exibidor);
}

const fecharModais = (seletorDeModais) => {
    seletorDeModais.forEach(botao => {
        botao.addEventListener('click', (dadosent) => {
            // buscando o seu avo
            let pegandoIDdoAvo = dadosent.currentTarget.parentNode.parentNode.parentNode.id;
            console.log('O ID modal e : ' + pegandoIDdoAvo);
            MainServices.mudarEstado('mostrar-modal', 'esconder-modal', `#${pegandoIDdoAvo}`)
        });
    });
}

const mostrarUsuarioLogado = (nomeDoUsuario) => {
    MainServices.exibeDado('#nomeDoUsuario', nomeDoUsuario);
}

const sairPagina = () => {
    MainServices.voltarPagina(100);
}






const gerarRelatorio = async ( informacoes, desmonstrador = 'csv' ) => {
    
    
    
    
    const inicioData = informacoes.dataInicial.value;
    const finalData = informacoes.dataFinal.value;
    
    if (!inicioData) {
        MainServices.exibirInformacaoEmElementoTags('#erroDadosServidor', 'Coloque uma data de inicio! Por gentileza');
        MainServices.mudarEstado('esconder-modal' ,'mostrar-modal', '#modalErro');
        setTimeout(() => {
            MainServices.mudarEstado('mostrar-modal' ,'esconder-modal', '#modalErro');
        }, 2000);
        return;
    }
    
    if (!finalData) {
        MainServices.exibirInformacaoEmElementoTags('#erroDadosServidor', 'Coloque uma data de final! Por gentileza');
        MainServices.mudarEstado('esconder-modal' ,'mostrar-modal', '#modalErro');
        setTimeout(() => {
            MainServices.mudarEstado('mostrar-modal' ,'esconder-modal', '#modalErro');
        }, 2000);
        return;
    }
    
    const numero_credencial = informacoes.numeroCredencial.value;
    
    const GET = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization-token': MainServices.buscaToken()
        }
    };
    
    
    const respostaUsuario = await MainServices.simplesRequisicao(MainServices.rotaPrincipalAPI() + '/relatorios/periodo?',
    `credencial_buscada=${numero_credencial}&data_inicial=${inicioData}&data_final=${finalData}`, GET);
    
    
    if ( desmonstrador === 'pdf') {
            
        let cabecalho = [
            ['Acesso', 'Credencial', 'Nome do Usuário', 'Sobrenome', 'Numero do Documento',' Data do Acesso', 'Direção', 'Esta afastado', 'Quantos creditos restam '],
        ]
        gerarPDF( respostaUsuario, cabecalho );
    } else {
        
        gerarCSV( respostaUsuario )
    }

}

const gerarCSV = ( arrayDados ) => {
    
    console.info(arrayDados);
    if (!arrayDados) {
        MainServices.exibirInformacaoEmElementoTags('#sucessoDadosServidor', 'Nenhum dado filtrado!');
        MainServices.mudarEstado('esconder-modal' ,'mostrar-modal', '#modalSuccess');
        return;
    }
    
    let csv = 'Acesso, Credencial, Data do Acesso, Nome, Sobrenome, Numero de documento, Quantos acessos restam, Esta afastado, Situacao da Credencial\n';
    
    arrayDados.forEach(function(row) {
        
        csv += row.acesso_relatorio;
        csv += ',' + row.credencial_relatorio;
        csv += ',' + row.data_acesso_relatorio;
        csv += ',' + row.direcao_relatorio;
        csv += ',' + row.nome_relatorio;
        csv += ',' + row.sobrenome_relatorio;
            csv += ',' + row.numero_documento_relatorio;
            csv += ',' + row.restam_acessos_relatorio;
            csv += ',' + row.situacao_afastamento_relatorio;
            csv += ',' + row.situacao_credencial_relatorio;
            csv += '\n';
            
        });
        
         let documentoEmGerancao = document.createElement('a'); //Para criar elemento na tela a moda antiga. https://www.w3schools.com/jsref/met_document_createelement.asp
         documentoEmGerancao.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv); //encode = Tranforma em dados de query; https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
         documentoEmGerancao.target = '_blank';// Se ele vai para outra tela o fica na mesa
         documentoEmGerancao.download = 'relatorio-de-acessos.csv';
         documentoEmGerancao.click();
         
        }
        
const gerarPDF = ( arrayDados, container ) => {

    // let tamanho = arrayDados.length;
    let nomeDoArquivo = 'Relatorio-De-Acessos.pdf';
    
    console.info(arrayDados);
    if (!arrayDados) {
        MainServices.exibirInformacaoEmElementoTags('#sucessoDadosServidor', 'Nenhum dado filtrado!');
        MainServices.mudarEstado('esconder-modal' ,'mostrar-modal', '#modalSuccess');
        return;
    }

    arrayDados.forEach((usuario) => {

        let acesso = usuario.acesso_relatorio,
            credencial = usuario.credencial_relatorio,
            dataAcesso = usuario.data_acesso_relatorio,
            direcao = usuario.direcao_relatorio,
            nome = usuario.nome_relatorio,
            sobrenome = usuario.sobrenome_relatorio,
            numeroDocumento = usuario.numero_documento_relatorio,
            quantoRestam = usuario.restam_acessos_relatorio,
            afastamento = usuario.situacao_afastamento_relatorio,
            situacao = usuario.situacao_credencial_relatorio,
            tipoDocumento = usuario.tipo_documento_relatorio,
            id = usuario.id_relatorio

        let linha = [ acesso, credencial, nome, sobrenome, numeroDocumento, dataAcesso ,direcao, afastamento, quantoRestam ];
        container.push(linha);

    });

    let img = logoMarca;
    let docDefinition = {

        pageSize: 'A4',
        pageOrientation: 'landscape',
        content: [
            {
                image: img,
                width: 100,
                height: 95,
            },
            { text: 'Relatorio de Acessos', style: 'header' },
            {
                layout: 'lightHorizontalLines', // optional
                style: 'small',
                table: {

                    headerRows: 1,
                    widths: ['*', 'auto', 100, 'auto', 'auto', 'auto','auto', 'auto', 'auto'],

                    body: container

                }
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true
            },
            subheader: {
                fontSize: 15,
                bold: false
            },
            quote: {
                italics: true
            },
            small: {
                fontSize: 8
            }
        }
    };



    pdfMake.createPdf(docDefinition).download(nomeDoArquivo);
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
    gerarRelatorio,
}