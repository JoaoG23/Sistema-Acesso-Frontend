
const gerarCartoes = ( dados, ondeSeraExibido ) => {
    const cartao =
        `<div id="${dados.id_gestor}" class="container-flex cartao branco p-3 tamanho-350 nas-extremidades">
        <section>
            <div id='${dados.login_gestor}'>
                <label>Nome: </label>
                <label>${dados.login_gestor}</label>
            </div>
            <div>
                <label>Email: </label>
                <label>${dados.email_gestor}</label>
            </div>
        </section>
        <div class="container-flex ">
            <img src="./Assets/icons/person_roxo.svg">
            <button class="btn-pequeno remover">X</button>
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