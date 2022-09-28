 import { validaSeVazioLogin, senhaValidaVazio, logarUsuario, fechaOsModais } from '../Services/IndexService.js'

window.addEventListener('DOMcontentloaded', indexController());

function indexController() {
    
    const logarBotao = document.getElementById('logar');
    
    const loginInput = document.getElementById('login');
    const senhaInput = document.getElementById('senha');
    const botaoFechar = document.querySelectorAll('.fechar_modal');
    
    fechaOsModais( botaoFechar );
  
    // Validacao de login 
    loginInput.addEventListener('input', () => { validaSeVazioLogin( loginInput ) });
    senhaInput.addEventListener('input', () => { senhaValidaVazio( senhaInput ) } );

    // Logar 
    logarBotao.addEventListener('click', ( eventoDoClick ) => {
        eventoDoClick.preventDefault();
          logarUsuario( loginInput , senhaInput );
    });
          
};
