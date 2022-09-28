
import { 
    buscaDadosUsuario,
     buscaPeloNome,
     mostrarUsuarioLogado,
     insererModaisTela,
    fecharModais,
    finalizarSessao
     
 } from '../Services/usuariosService.js';

 window.addEventListener( 'DOMContentLoaded', () => { usuarioController() });
 const token = localStorage.getItem('token');
  function usuarioController(){
     
         const btnLogOut = document.querySelector('[logout]');
        btnLogOut.addEventListener('click' , () => {finalizarSessao()});

        const demonstrador = document.querySelector('[root]');
        const modaisDemostrador = document.querySelector('[root-modal]');
        insererModaisTela( modaisDemostrador );
        
        const botaoSairModal = document.querySelectorAll('[fechar-modal]');
        fecharModais( botaoSairModal );
        
        
        const nomeArmazenado = localStorage.getItem('usuario');
        mostrarUsuarioLogado( nomeArmazenado );
        
        
        const barraPesquisa = document.querySelector('#barraPesquisa');
        barraPesquisa.addEventListener('search', (e) => { let pesquisaInput = e.target.value; buscaPeloNome( pesquisaInput , demonstrador );})
        
        let numeroDaPagina = 1;
        buscaDadosUsuario( numeroDaPagina, demonstrador );
        
        const botaosPaginas = document.querySelectorAll('.paginacao');

        botaosPaginas.forEach( botao => {
            botao.addEventListener('click', ( pagina ) => {
                
                numeroDaPagina = pagina.target.textContent;
                demonstrador.innerHTML = '';
                
                buscaDadosUsuario( numeroDaPagina, demonstrador );
                
            });
        });

}





    
