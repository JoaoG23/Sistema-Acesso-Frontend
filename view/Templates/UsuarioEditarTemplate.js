function inserirDados( dadosUsuario, ondeSeraExibido) {
    const dadosEm = `<div class="container-grid col-2 lacuna-10">
    <fieldset>
        

            <h2>Dados Pessoais</h2>
            <div>
                <label>Nome : </label>
                <input name="nome_usuario" class="input-style tamanho-300" type="text" value="${dadosUsuario.nome_usuario}" >
            </div>
            <div>
                <label>Sobrenome : </label>
                <input name="sobrenome_usuario" class="input-style tamanho-300" type="text"  value="${dadosUsuario.sobrenome_usuario}">
            </div>
            <div>
                <label>Tipo de documento : </label>
                <input name="tipo_documento_usuario" class="input-style" type="text" value="${dadosUsuario.tipo_documento_usuario}">
            </div>
            <div>
                <label>Numero de documento : </label>
                <input name="numero_documento_usuario" class="input-style" type="text" value="${dadosUsuario.numero_documento_usuario}">
            </div>
            <div>
                <label>Tel : </label>
                <input name="telefone_usuario" class="input-style" type="text" placeholder="(31)0000-0000"  value="${dadosUsuario.telefone_usuario}">
            </div>
            <div>
                <label>Email : </label>
                <input name="email_usuario" class="input-style" type="text"  value="${dadosUsuario.email_usuario}">
            </div>
            <div>
                <label>Empresa : </label>
                <input name="empresa_usuario" class="input-style" type="text" value="${dadosUsuario.empresa_usuario}">
            </div>
        </fieldset>

    <div class="m-auto">
        <img src="./Assets/icons/sem-foto.svg">
        <div>
            <button class="SalvarDados btn-pequeno verdinho texto-branco p-3"><img
                src="./Assets/icons/salvar.svg">Salvar</button>
        
        </div>
    </div>

        

        <fieldset>
            <h3>Dados da Credencial</h3>
            <div>
                <label>Credencial :</label>
                <input name="crendencial_usuario" class="input-style" type="text"  value="${dadosUsuario.crendencial_usuario}">
            </div>
            <div>
                <label>Situacao :</label>
                <input name="situacao_credencial" class="input-style" type="text"  value="${dadosUsuario.situacao_credencial}">
            </div>
            <div>
                <label>Data inicial :</label>
                <input name="data_inicial_credencial" class="input-style" type="text"  value="${dadosUsuario.data_inicial_credencial}">
            </div>
            <div>
                <label>Data de Vencimento :</label>

                <input name="data_final_credencial" class="input-style" type="datetime-local"  value="${dadosUsuario.data_final_credencial}">
            </div>
            <div>
                <label>Creditos :</label>
                <input name="credito_credencial" class="input-style" type="number"  value="${dadosUsuario.credito_credencial}">
            </div>
            <div>
                <label>Afastamento de : </label>
                <label>${dadosUsuario.nome_afastamento}</label>
            </div>
            <div>
                <label>Tempo de Afastamento</label>
                <input name="fg_tempo_afastamento" class="input-style" type="text" value="${dadosUsuario.fg_tempo_afastamento}">
            </div>
        </fieldset>

    <details class="container-flex lacuna-10">
        <summary class="btn-pequeno">Dados Opcionais &#9660;</summary>
        <div>
            <div>
                <label>Tipo usuario : </label>
                <input name="tipo_usuario" class="input-style" type="text" value="${dadosUsuario.tipo_usuario}">
            </div>
            <div>
                <label>Setor: </label>
                <input name="setor_usuario" class="input-style" type="text" value="${dadosUsuario.setor_usuario}">
            </div>
            <div>
                <label>País: </label>
                <input name="pais_usuario" class="input-style" type="text" value="${dadosUsuario.pais_usuario}">
            </div>
            <div>
                <label>Estado: </label>
                <input name="pais_usuario" class="input-style" type="text" value="${dadosUsuario.estado_usuario}">
            </div>
            <div>
                <label>Cidade: </label>
                <input name="pais_usuario" class="input-style" type="text" value="${dadosUsuario.cidade_usuario}">
            </div>
            <div>
                <label>Rua: </label>
                <input name="rua_usuario" class="input-style" type="text" value="${dadosUsuario.rua_usuario}">
            </div>
            <div>
                <label>N: </label>
                <input name="numero_usuario"  class="input-style" type="text" value="${dadosUsuario.numero_usuario}">
            </div>
        </div>
    </details>


        
    </div>`;

    exiberNaTela(dadosEm, ondeSeraExibido);

    function exiberNaTela(cartoes, exibidor) {
        try {

            exibidor.innerHTML += cartoes;
        } catch (error) {
            exibidor.innerHTML += `<h1>${error}</h1>`
        }
    }
}


export { inserirDados };