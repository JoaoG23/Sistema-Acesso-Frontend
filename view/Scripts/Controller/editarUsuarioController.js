

import { mostrarUsuarioLogado, insererModaisTela, fecharModais, todosDadosEditar , idEditado, sairPagina } from '../Services/editarUsuarioService.js';

const retirandoInterrogacao = window.location.search;
const id = retirandoInterrogacao.replace('?', '');
const botaoSalvarDado = document.querySelector('.SalvarDados');
let ObjetoParaAtualizar;


 window.addEventListener( 'DOMContentLoaded', () => { editarUsuarioController() });
  function editarUsuarioController(){

        
        const demonstrador = document.querySelector('[root]');

        const modaisDemostrador = document.querySelector('[root-modal]');
        insererModaisTela( modaisDemostrador );
        
        const botaoSairModal = document.querySelectorAll('[fechar-modal]');
        fecharModais( botaoSairModal );
        
        
        const nomeArmazenado = localStorage.getItem('usuario');
        mostrarUsuarioLogado( nomeArmazenado );
        
        todosDadosEditar( idEditado, demonstrador  );

        const botaoSairPagina = document.querySelector('#voltarPagina');
        botaoSairPagina.addEventListener('click', () => sairPagina(10))
}





