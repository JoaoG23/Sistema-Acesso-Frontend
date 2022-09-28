
import { mostrarTodosDados , mostrarUsuarioLogado, insererModaisTela } from '../Services/mostrarUsuarioService.js'

window.addEventListener( 'load', mostraUsuarioController);

function mostraUsuarioController() {

    const modaisDemostrador = document.querySelector('[root-modal]');
    insererModaisTela( modaisDemostrador );

    const btnLogOut = document.querySelector('[logout]');
    btnLogOut.addEventListener('click' , () => {finalizarSessao()});
    
    const root = document.querySelector('#rootUsuarios');
    // --- Pega nome e token sessao usuario ---
    const nomeArmazenado = localStorage.getItem('usuario');
    mostrarUsuarioLogado( nomeArmazenado );

        mostrarTodosDados( root );        

}

