

import {  insererModaisTela, fecharModais, sairPagina, checkin, validaCheckin } from '../Services/CheckinService.js';


window.addEventListener( 'DOMContentLoaded', () => { checkinController() });
 function checkinController(){

    const voltarPagina = document.querySelector('#voltarPagina');
    
       const botaoChecar = document.querySelector('#checar');

       const modaisDemostrador = document.querySelector('[root-modal]');
       insererModaisTela( modaisDemostrador );
       
       const botaoSairModal = document.querySelectorAll('[fechar-modal]');
       fecharModais( botaoSairModal );
       
      const inputsNovos = document.querySelectorAll('.input-style-inicial');

      inputsNovos.forEach((input) => {
         console.log(input)
         input.addEventListener('input', () => { validaCheckin( input ) });
         
      });


      botaoChecar.addEventListener('click', (e) => { 
         e.preventDefault();
         checkin(); })

}


