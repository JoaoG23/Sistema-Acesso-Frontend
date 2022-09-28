

import { 
   mostrarUsuarioLogado,
    insererModaisTela,
     fecharModais,
       } from '../Services/ConfiguracaoServices.js';


window.addEventListener( 'DOMContentLoaded', () => { configController() });
 function configController(){

         
      const btnLogOut = document.querySelector('[logout]');
      btnLogOut.addEventListener('click' , () => {finalizarSessao()});
      
       const modaisDemostrador = document.querySelector('[root-modal]');
       insererModaisTela( modaisDemostrador );
       
       const botaoSairModal = document.querySelectorAll('[fechar-modal]');
       
       fecharModais( botaoSairModal );
      
      const nomeArmazenado = localStorage.getItem('usuario');
      mostrarUsuarioLogado( nomeArmazenado );
    


}


