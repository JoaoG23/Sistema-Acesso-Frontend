
const gerarCartoesUsuario = ( dadosUsuario, ondeSeraExibido ) => {
    const cartao =
        ` <div class="cartao-usuario branco efeito-expancao" id="${dadosUsuario.id_usuario}">
         <a href="./mostrar_usuario.html#${dadosUsuario.id_usuario}">
              <ul>
                   <li class="nomeSelecionadoPesquisa fonte-grande">${dadosUsuario.nome_usuario}</li>
                   <li class=" fonte-mediana"> ${dadosUsuario.sobrenome_usuario}</li>
                   <li>Credencial: ${dadosUsuario.credencial}</li>
                   <li>Situacao: ${dadosUsuario.situacao_credencial}</li>
                   <li>Creditos: ${dadosUsuario.credito_credencial}</li>
                   <li class="fonte-pequena">Email: ${dadosUsuario.email_usuario}</li>
                   <li class="fonte-pequena">Data Final: ${dadosUsuario.data_final_credencial}</li>
               </ul>
            </a>
               <img src="./Assets/icons/sem-foto.svg">
                <div class="container-flex coluna">
                <button class="btn-pequeno remover">X</button>
               </div>
           </div>`;

    exiberNaTela(cartao, ondeSeraExibido);
    function exiberNaTela(cartoes, exibidor) {
        exibidor.innerHTML += cartoes;
    }

}


export {
     gerarCartoesUsuario
     };