

import { 
   mostrarUsuarioLogado,
    insererModaisTela,
     fecharModais,
      sairPagina,
       acessosTodos,
        limpaTela,
         ultimoAcesso,
         finalizarSessao
       } from '../Services/AcessosServices.js';


window.addEventListener( 'DOMContentLoaded', () => { acessosController() });
 function acessosController(){

    
      const btnLogOut = document.querySelector('[logout]');

      btnLogOut.addEventListener('click' , () => {finalizarSessao()});
      
       const demonstrador = document.querySelector('[root]');
       window.addEventListener('load', () => acessosTodos( demonstrador ));
       
       setInterval(() => {
         limpaTela( demonstrador );
         acessosTodos( demonstrador );
          }, 9000);

         
       const modaisDemostrador = document.querySelector('[root-modal]');
       insererModaisTela( modaisDemostrador );
       
       const botaoSairModal = document.querySelectorAll('[fechar-modal]');
       
       fecharModais( botaoSairModal );
      
      const nomeArmazenado = localStorage.getItem('usuario');
      mostrarUsuarioLogado( nomeArmazenado );
      
      
      const ultimo = document.querySelector('[root-ultimo]');
      
      ultimoAcesso( ultimo );
      
      




}


