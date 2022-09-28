

import { 
   mostrarUsuarioLogado,
    insererModaisTela,
     fecharModais,
      sairPagina,
      listaAfastamentos
       } from '../Services/AfastamentoService.js';


window.addEventListener( 'DOMContentLoaded', () => { afastamentosController() });
 function afastamentosController(){

    const voltarPagina = document.querySelector('#voltarPagina');
    
    const btnLogOut = document.querySelector('[logout]');
    btnLogOut.addEventListener('click' , () => {finalizarSessao()});
    
       const demonstrador = document.querySelector('[root]');
       
       const modaisDemostrador = document.querySelector('[root-modal]');
       insererModaisTela( modaisDemostrador );
       
       const botaoSairModal = document.querySelectorAll('[fechar-modal]');
       fecharModais( botaoSairModal );
       
       const nomeArmazenado = localStorage.getItem('usuario');
       mostrarUsuarioLogado( nomeArmazenado );
      

      //  const ultimo = document.querySelector('[root-ultimo]');

      listaAfastamentos( demonstrador )

}


