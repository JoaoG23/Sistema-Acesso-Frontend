
import { 
    buscaDados,
     mostrarUsuarioLogado,
     insererModaisTela,
    fecharModais,
     
 } from '../Services/GestoresService.js';

 window.addEventListener( 'DOMContentLoaded', () => { gestorController() });
  function gestorController(){
     

        const btnLogOut = document.querySelector('[logout]');
        btnLogOut.addEventListener('click' , () => {finalizarSessao()});

        const demonstrador = document.querySelector('[root]');
        const modaisDemostrador = document.querySelector('[root-modal]');
        insererModaisTela( modaisDemostrador );
        
        const botaoSairModal = document.querySelectorAll('[fechar-modal]');
        fecharModais( botaoSairModal );
        
        
        const nomeArmazenado = localStorage.getItem('usuario');
        mostrarUsuarioLogado( nomeArmazenado );

        buscaDados( demonstrador )
        

}





    
