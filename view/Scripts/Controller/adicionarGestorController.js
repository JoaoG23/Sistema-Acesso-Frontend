

import { mostrarUsuarioLogado, insererModaisTela, fecharModais, adicionar, liberaBotao ,mostrarMensagens, verificaSenhasIguais } from '../Services/AdicionarGestorService.js';


 window.addEventListener( 'DOMContentLoaded', () => { adicionarGestorController() });
  function adicionarGestorController(){

       const btnLogOut = document.querySelector('[logout]');
       btnLogOut.addEventListener('click' , () => {finalizarSessao()});

        const campos = document.querySelectorAll('.input-style');
        const botaSalvarDados = document.querySelector('.SalvarDados');
        
        const demonstrador = document.querySelector('[root]');

        const modaisDemostrador = document.querySelector('[root-modal]');
        insererModaisTela( modaisDemostrador );
        
        const botaoSairModal = document.querySelectorAll('[fechar-modal]');
        fecharModais( botaoSairModal );
        
        
        const nomeArmazenado = localStorage.getItem('usuario');
        mostrarUsuarioLogado( nomeArmazenado );

        const loginInput = document.querySelector('#login');
      const senhaInput = document.querySelector('#senha');
     const emailInput = document.querySelector('#email');
      const novaSenhaInput = document.querySelector('#novaSenha');

        let objeto = {
        login:loginInput.value,
        senha:senhaInput.value,
        email:emailInput.value
     }
     

     novaSenhaInput.addEventListener('input', () => verificaSenhasIguais( senhaInput,novaSenhaInput, '#SenhaIguais' ))
     
     campos.forEach((campo)=>{
           campo.addEventListener('input', () =>  mostrarMensagens( campo ));
      });
      
        emailInput.addEventListener('input',() => liberaBotao( emailInput ));
        
        adicionar( loginInput, senhaInput , emailInput , botaSalvarDados );

}





