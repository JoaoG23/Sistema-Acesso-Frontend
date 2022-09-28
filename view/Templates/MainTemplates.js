const MainTemplates = {

    criarModaisTodos: ( ondeSeraExibido ) => {

        const modais = `
        <section id="modalLoading" class="fundo esconder-modal ">
        <div class="modal">
            <h2>Carregando.. </h2>
            <div class="containerSpinner">
         
                <div class="fundoCirculoSpinner">
                    <div class="cursorSpinner"></div>
                    <div class="meioSpinner">
        
                    </div>
                </div>
        </div>
       </section>


 <section id="modalSuccess" class="fundo esconder-modal ">
     <div class="modal">
          <img src="./Assets/icons/concluido.svg">
         <h2>Sucesso</h2>
         <div id="sucessoDadosServidor">
         </div>

        <footer class="container-flex lacuna-10">
            <button fechar-modal="fechar" class="btn">
            <img src="./Assets/icons/cancelar.svg" >
            </button>
      </footer>
     </div>
     </section>
     
 <section id="modalErro" class="fundo esconder-modal  ">
 <div class="modal">
         <img src="./Assets/icons/paradoAi.svg">
         <h2>Houve algo errado</h2>
         <div id="erroDadosServidor">
         </div>

    <footer class="container-flex lacuna-10">
        <button fechar-modal="fechar" class="btn branco fonte-evidente p-2">
           x
        </button>
     </footer>
     </div>
 </section>
 
 <section id="modalQuestionamento" class="fundo esconder-modal ">
     <div class="modal">
         <img src="./Assets/icons/interrogacao.svg">
         <h2>Tem Certeza que irá fazer isso ?</h2>
         
         <footer class="container-flex lacuna-10">
             <button id="sim" class="btn verdinho fonte-grande p-3 texto-branco">
             Sim
             </button>
             <button fechar-modal="fechar" class="btn verm fonte-grande p-3 texto-branco">
             Não
             </button>
         </footer>
     </div>
 </section>

 `;

        exiberNaTela(modais, ondeSeraExibido);
        function exiberNaTela(cartoes, exibidor) {
            exibidor.innerHTML += cartoes;
        }
    }

}

export { MainTemplates }