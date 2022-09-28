

import { 
    insererModaisTela,
     fecharModais,
         ultimoAcesso,
       } from '../Services/MonitorService.js';


window.addEventListener( 'DOMContentLoaded', () => { monitorController() });
 function monitorController(){

      

       const modaisDemostrador = document.querySelector('[root-modal]');
       insererModaisTela( modaisDemostrador );
       
       const botaoSairModal = document.querySelectorAll('[fechar-modal]');
       
       fecharModais( botaoSairModal );
          
      
      const ultimo = document.querySelector('[root]');
      
      ultimoAcesso( ultimo );
    

}


