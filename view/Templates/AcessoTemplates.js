// function insererTabela( dados, ondeSeraExibido ) {
//     let tabela = `
// <tr>
//     <td>${dados.situacao_do_acesso}</td>
//     <td>${dados.nome_acesso}</td>
//     <td>${dados.sobrenome_acesso}</td>
//     <td>${dados.credencial_acesso}</td>
//     <td>${dados.situacao_credencial}</td>
//     <td>${dados.direcao}</td>
//     <td>${dados.data_acesso}</td>
//     <td>${dados.restam_acessos}</td>
//     <td>${dados.situacao_afastamento}</td>
// </tr>
//     `;
//     exiberNaTela( tabela, ondeSeraExibido );
//     function exiberNaTela( template, exibidor ) {
//         exibidor.innerHTML += template;
//     }
// }

function insererTabela(dados, ondeSeraExibido) {

    let tabela = '';
    if (dados.situacao_do_acesso === 'ACESSO BARRADO') {
        tabela = `
        <tr class='acessoBarradoStyle'>
        <td>${dados.situacao_do_acesso}</td>
        <td>${dados.nome_acesso}</td>
        <td>${dados.sobrenome_acesso}</td>
        <td>${dados.credencial_acesso}</td>
        <td>${dados.situacao_credencial}</td>
        <td>${dados.direcao}</td>
        <td>${dados.data_acesso}</td>
        <td>${dados.restam_acessos}</td>
        <td>${dados.situacao_afastamento}</td>
        </tr>
        `;
    } else if ( dados.situacao_do_acesso === 'ACESSO LIBERADO' ){

        tabela = `
    <tr class='acessoLiberadoStyle'>
    <td>${dados.situacao_do_acesso}</td>
    <td>${dados.nome_acesso}</td>
    <td>${dados.sobrenome_acesso}</td>
    <td>${dados.credencial_acesso}</td>
    <td>${dados.situacao_credencial}</td>
    <td>${dados.direcao}</td>
    <td>${dados.data_acesso}</td>
    <td>${dados.restam_acessos}</td>
    <td>${dados.situacao_afastamento}</td>
    </tr>
    `;
    } else {
        tabela = `
        <tr>
        <td>${dados.situacao_do_acesso}</td>
        <td>${dados.nome_acesso}</td>
        <td>${dados.sobrenome_acesso}</td>
        <td>${dados.credencial_acesso}</td>
        <td>${dados.situacao_credencial}</td>
        <td>${dados.direcao}</td>
        <td>${dados.data_acesso}</td>
        <td>${dados.restam_acessos}</td>
        <td>${dados.situacao_afastamento}</td>
        </tr>
        `;
    }

    exiberNaTela(tabela, ondeSeraExibido);
    function exiberNaTela(template, exibidor) {
        exibidor.innerHTML += template;
    }
}

function insererUtimo(dados, ondeSeraExibido) {
    let lista = `
    <li class="fonte-grande texto-azul">Situacão : ${dados.situacao_do_acesso}</li>
    <li>Nome: ${dados.nome_acesso}</li>
    <li>Sobrenome: ${dados.sobrenome_acesso}</li>
    <li>Credencial: ${dados.credencial_acesso}</li>
    <li>Situacão da Credencial : ${dados.situacao_credencial}</li>
    <li>Direção : ${dados.direcao}</li>
    <li>Data e Hora do acesso : ${dados.data_acesso}</li>
    <li>Quantos acessos restam : ${dados.restam_acessos}</li>
    <li>Tipo de afastamento : ${dados.situacao_afastamento}</li>
    `;
    exiberNaTela(lista, ondeSeraExibido);
    function exiberNaTela(template, exibidor) {
        exibidor.innerHTML = template;
    }
}

function mostrarFullScreen(dados, ondeSeraExibido) {
    let modal = `

    <div class="telaCheia">
    
    
    <h4 class="texto-verm"> ${dados.situacao_do_acesso}</h4>
    <li>O Usuario(a) </li>
    <li class="texto-azul fonte-gigante">${dados.nome_acesso}</li>
    <li class="texto-azul fonte-gigante"> ${dados.sobrenome_acesso}</li>
    <li> passou na portaria</li>
    <li class=" texto-verde fonte-gigante">Codigo: ${dados.credencial_acesso}</li>
    <li>Na Direcao : ${dados.direcao}</li>

        
            <a href='./acessos.html' fechar-modal="fechar" class="btn verm fonte-grande p-3 texto-branco">
            X
            </a>
    </div>
`;
    exiberNaTela(modal, ondeSeraExibido);
    function exiberNaTela(template, exibidor) {
        exibidor.innerHTML = template;
    }
}

function limpaTela(ondeSeraExibido) {

    exiberNaTela('', ondeSeraExibido);
    function exiberNaTela(template, exibidor) {
        exibidor.innerHTML = template;
    }
}



export {
    mostrarFullScreen,
    limpaTela,
    insererTabela,
    insererUtimo
}


