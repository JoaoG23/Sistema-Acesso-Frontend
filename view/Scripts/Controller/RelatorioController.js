

import {
   mostrarUsuarioLogado,
   insererModaisTela,
   fecharModais,
   sairPagina,
   gerarRelatorio,
} from '../Services/RelatorioService.js';


window.addEventListener('DOMContentLoaded', () => { acessosController() });
function acessosController() {

   const btnLogOut = document.querySelector('[logout]');
   btnLogOut.addEventListener('click' , () => {finalizarSessao()});

   const dataInicial = document.querySelector('#data_inicio');
   const dataFinal = document.querySelector('#data_fim');

   
   const codigoCredencial = document.querySelector('#codigo_credencial');
   const botaoPdf = document.querySelector('#pdf');
   const botaoCSV = document.querySelector('#csv');

   const filtro = {
      dataInicial: dataInicial,
      dataFinal: dataFinal,
      numeroCredencial: codigoCredencial,
   }

   const modaisDemostrador = document.querySelector('[root-modal]');
   insererModaisTela( modaisDemostrador );

   const botaoSairModal = document.querySelectorAll('[fechar-modal]');
   fecharModais( botaoSairModal );

   const nomeArmazenado = localStorage.getItem('usuario');
   mostrarUsuarioLogado( nomeArmazenado );

   botaoCSV.addEventListener('click', () =>  { gerarRelatorio( filtro, 'csv') })

   botaoPdf.addEventListener('click', () => { gerarRelatorio( filtro, 'pdf' ) });


}


