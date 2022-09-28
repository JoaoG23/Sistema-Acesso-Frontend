
import { MainServices } from './MainServices.js';


const apareceSideBar = () => {
    // aparece
     MainServices.mudarEstado('esconder' ,'mostrar', '.side-bar' );

}
const sairSideBar = () => {
    // desparece 
     MainServices.mudarEstado('mostrar' ,'esconder', '.side-bar' );

}

const  esconderAoDescer = ( elemento , SuaClasse ) => {
    
    const elementoSelecionado = document.querySelector(elemento);
    
    if ( document.documentElement.scrollTop >= 100 ) { 
        elementoSelecionado.classList.add(`${SuaClasse}`);
    } else {
        elementoSelecionado.classList.remove(`${SuaClasse}`);
    }
}
window.addEventListener('load' , () =>  {  esconderAoDescer( '#botao_mobile ', 'esconder-botaoSair' ) })

const botaoSanduiche = document.querySelector('#botao_mobile');
const botaoSideSair = document.querySelector('#sair_side_bar');

botaoSanduiche.addEventListener('click', () => {
    apareceSideBar();
});
botaoSideSair.addEventListener('click', () => {
    sairSideBar();
});
