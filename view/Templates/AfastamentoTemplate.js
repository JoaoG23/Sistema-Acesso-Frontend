
const gerarCartoes = ( dados, ondeSeraExibido ) => {
    const cartao =
        `<div class="container-flex cartao branco p-3 lacuna-10 tamanho-300 nas-extremidades" id="${dados.id_afastamento}" >
        <section>
            <div>
                <p>${dados.nome_afastamento}</p>
                <h2>${dados.fg_tempo_afastamento}</h2>
            </div>
        </section>
        <div class="container-flex coluna lacuna-10">
        </div>
    </div>`;

    exiberNaTela(cartao, ondeSeraExibido);
    function exiberNaTela(cartoes, exibidor) {
        exibidor.innerHTML += cartoes;
    }

}

export{
    gerarCartoes
}