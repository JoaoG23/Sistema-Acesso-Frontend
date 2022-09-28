function informacoesUsuario( dadosUsuario , ondeSeraExibido ) {
    const dados = `<article>
    <h2>${dadosUsuario.nome_usuario} ${dadosUsuario.sobrenome_usuario}</h2>
    <div>
        <label>Tipo de documento : </label>
        <label>${dadosUsuario.tipo_documento_usuario}</label>
    </div>
    <div>
        <label>Numero de documento : </label>
        <label>${dadosUsuario.numero_documento_usuario}</label>
    </div>
    <div>
        <label>Tel : </label>
        <label>${dadosUsuario.telefone_usuario}</label>
    </div>
    <div>
        <label>Email : </label>
        <label>${dadosUsuario.email_usuario}</label>
    </div>
    <div>
        <label>Empresa : </label>
        <label>${dadosUsuario.empresa_usuario}</label>
    </div>
    <div>
        <label>Tipo usuario : </label>
        <label>${dadosUsuario.tipo_usuario}</label>
    </div>
    <address>
        <h3>Dados complementares</h3>
        <div>
            <label>Setor: </label>
            <label>${dadosUsuario.setor_usuario}</label>
        </div>
        <div>
            <label>País: </label>
            <label>${dadosUsuario.pais_usuario}</label>
        </div>
        <div>
            <label>Estado: </label>
            <label>${dadosUsuario.estado_usuario}</label>
        </div>
        <div>
            <label>Cidade: </label>
            <label>${dadosUsuario.cidade_usuario}</label>
        </div>
        <div>
            <label>Rua: </label>
            <label>${dadosUsuario.rua_usuario}</label>
        </div>
        <div>
            <label>N: </label>
            <label>${dadosUsuario.numero_usuario}</label>
        </div>
    </address>
    <div>
        <h3>Dados Credencial</h3>
        <div>
            <label>Credencial :</label>
            <label>${dadosUsuario.crendencial_usuario}</label>
        </div>
        <div>
            <label>Situacao :</label>
            <label>${dadosUsuario.situacao_credencial}</label>
        </div>
        <div>
            <label>Data inicial :</label>
            <label>${dadosUsuario.data_inicial_credencial}</label>
        </div>
        <div>
            <label>Data de Vencimento :</label>
            <label>${dadosUsuario.data_final_credencial}</label>
        </div>
        <div>
            <label>Creditos :</label>
            <label>${dadosUsuario.credito_credencial}</label>
        </div>
        <div>
            <label>Esta afastado ? :</label>
            <label>${dadosUsuario.nome_afastamento}</label>
        </div>
        <div>
            <label>Tempo do Afastamento: </label>
            <label>${dadosUsuario.fg_tempo_afastamento}</label>
        </div>
    </div>
</article>
<aside>
    <img src="./Assets/icons/sem-foto.svg">
    <div>
    <a href="./editar_usuario.html?${dadosUsuario.id_usuario}"><button class="btn-pequeno amarelo texto-branco p-3"><img src="./Assets/icons/editar.svg">Editar</button></a>
    </div>
</aside>`;
           exiberNaTela( dados, ondeSeraExibido );

           function exiberNaTela(cartoes, exibidor) {
            exibidor.innerHTML += cartoes;
        }
}


export { informacoesUsuario };