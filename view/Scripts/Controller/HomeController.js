

import {
       mostrarUsuarioLogado,
       insererModaisTela,
       fecharModais,
       sairPagina,
       quantoAcessosMes,
       limpaTela,
       ultimoAcesso,
       quantoAcessosHoje,
       graficoUtimo4Meses,
       graficoRodaMes
} from '../Services/HomeService.js';


window.addEventListener('DOMContentLoaded', () => { HomeController() });
function HomeController() {


       const btnLogOut = document.querySelector('[logout]');
       btnLogOut.addEventListener('click' , () => {finalizarSessao()});

       const area4Meses = document.querySelector('#area4Meses');
       const pizzaDeSituacoesAcesso = document.querySelector('#partilhaPorSitucaoAcesso');

       google.charts.load('current', { 'packages': ['corechart'] });

       const modaisDemostrador = document.querySelector('[root-modal]');
       insererModaisTela( modaisDemostrador );

       const botaoSairModal = document.querySelectorAll('[fechar-modal]');
       fecharModais( botaoSairModal );

       const nomeArmazenado = localStorage.getItem('usuario');
       mostrarUsuarioLogado( nomeArmazenado );
       quantoAcessosHoje();
       quantoAcessosMes();
       ultimoAcesso();
       graficoUtimo4Meses( area4Meses );
       graficoRodaMes( pizzaDeSituacoesAcesso );

}


