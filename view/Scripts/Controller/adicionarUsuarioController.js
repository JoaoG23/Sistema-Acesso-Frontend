

import { mostrarUsuarioLogado, insererModaisTela, fecharModais, adicionar,gerarAleatorioAlfa } from '../Services/adicionarUsuarioService.js';


 window.addEventListener( 'DOMContentLoaded', () => { adicionarUsuarioController() });
  function adicionarUsuarioController(){

      const btnLogOut = document.querySelector('[logout]');
      btnLogOut.addEventListener('click' , () => {finalizarSessao()});

        const modaisDemostrador = document.querySelector('[root-modal]');
        insererModaisTela( modaisDemostrador );
        
        const botaoSairModal = document.querySelectorAll('[fechar-modal]');
        fecharModais( botaoSairModal );
        
        
        const nomeArmazenado = localStorage.getItem('usuario');
        mostrarUsuarioLogado( nomeArmazenado );
        
        
        const botaoGerarCredencial = document.querySelector('#gerarCredencial');
        botaoGerarCredencial.addEventListener('click', () => {
              
              const inputCredencial = document.getElementsByName('crendencial_usuario');
              let valorHexa = gerarAleatorioAlfa();
            
              inputCredencial[0].value = valorHexa;
        });

        adicionar();
        


}





