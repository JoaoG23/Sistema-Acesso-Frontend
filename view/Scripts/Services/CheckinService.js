import * as Controller from '../Controller/CheckinController.js'
import { MainServices } from './MainServices.js';
import { MainTemplates } from '../../Templates/MainTemplates.js';

const insererModaisTela = (exibidor) => {
    MainTemplates.criarModaisTodos(exibidor);
}

const fecharModais = (seletorDeModais) => {
    seletorDeModais.forEach(botao => {
        botao.addEventListener('click', (element) => {
            // buscando o seu avo
            let pegandoIDdoAvo = element.currentTarget.parentNode.parentNode.parentNode.id;
            console.log('O ID modal e : ' + pegandoIDdoAvo);
            MainServices.mudarEstado('mostrar-modal', 'esconder-modal', `#${pegandoIDdoAvo}`)
        });
    });
}


const sairPagina = () => {
    MainServices.voltarPagina(100);
}


const checkin = async ( desmonstrador ) => {

    try {
        const inputCredencial = document.querySelector('#credencial');
        const inputDirecao = document.querySelector('#direcao');

        let credencialEDirecao = {
            credencial: inputCredencial.value,
            direcao: inputDirecao.value
        }

        let dados = JSON.stringify( credencialEDirecao );

        const POST = {
            method: 'POST',
            body: dados,
            headers: {
                'Content-Type': 'application/json',
                'authorization-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9nZXN0b3IiOjIyLCJlbWFpbCI6ImFybGluZG9vMkBlbWFpbC5jb20iLCJpYXQiOjE2NDcyMTEyOTF9.uvoctVMOrumUYFybKiRN2Z262oK549NPGb630391tfE'
            }
        };

        const respostaCheckin = await MainServices.simplesRequisicao(MainServices.rotaPrincipalAPI() + '/acessos/', 'checkin/', POST);

        
        MainServices.exibirInformacaoEmElementoTags( '#erroDadosServidor', respostaCheckin.msg );
        MainServices.exibirInformacaoEmElementoTags( '#sucessoDadosServidor', respostaCheckin.msg );

        const validaEdicao = ( dadosValidacao ) => {
            
            if ( dadosValidacao === true ) {
                // Mostra modal Bom
                MainServices.mudarEstado('esconder-modal', 'mostrar-modal', '#modalSuccess');
            } else {
                // Mostra modal Ruin
                MainServices.mudarEstado('esconder-modal', 'mostrar-modal', '#modalErro');
            }
        }
        validaEdicao( respostaCheckin.acesso )
    } catch (error) {

        MainServices.mudarEstado('esconder-modal', 'mostrar-modal', '#modalErro');
    }


}


const validaCheckin = ( valorInput ) => {
  

        const notificacaoVazio = MainServices.mudarEstado;
        const habilitarbotao = MainServices.removeAtributo;
        const desabilitarbotao = MainServices.adicionarAtributo;
    
       if ( valorInput.value === '' ) {
            desabilitarbotao('disabled', '#checar');
           notificacaoVazio('nao-visivel', 'visivel', '#msgValidacao');
       } else {
           notificacaoVazio('visivel', 'nao-visivel', '#msgValidacao');
           habilitarbotao('disabled', '#checar');
       }

}
export {
    insererModaisTela,
    fecharModais,
    sairPagina,
    checkin,
    validaCheckin
}