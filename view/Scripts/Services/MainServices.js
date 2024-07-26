import { env } from '../Data/Environment/index.js';
// ********* Requests *************

const MainServices = {
  buscaToken: () => {
    const token = localStorage.getItem("token");
    return token;
  },

  logoOut: () => {
    window.localStorage.clear();
  },

  buscaID: (simboloSeletor) => {
    let retirandoInterrogacao;

    if (simboloSeletor === "#") {
      retirandoInterrogacao = window.location.hash;
    } else {
      retirandoInterrogacao = window.location.search;
    }

    const idEncontrado = retirandoInterrogacao.replace(simboloSeletor, "");

    return idEncontrado;
  },

  //  ------ Altera Propriendade e estados ------

  removeAtributo: (nomeAtributo, elemento) => {
    const elementoParaModificar = document.querySelector(`${elemento}`);
    elementoParaModificar.removeAttribute(nomeAtributo);
  },

  adicionarAtributo: (nomeAtributo, elemento) => {
    const elementoParaModificar = document.querySelector(`${elemento}`);
    elementoParaModificar.setAttribute(`${nomeAtributo}`, `${nomeAtributo}`);
  },

  mudarEstado: (formaAntiga, formaNova, elemento) => {
    const elementoParaModificar = document.querySelector(`${elemento}`);
    elementoParaModificar.classList.remove(`${formaAntiga}`);
    elementoParaModificar.classList.add(`${formaNova}`);
  },

  validarVazio: (entradaInputs, botaoHabilitar) => {
    const inputs = document.querySelectorAll(entradaInputs);

    let valorInput = inputs.value;

    inputs.forEach((element) => {
      console.log(element);
      seVazio(element.value);
    });

    function seVazio(elemento) {
      if (elemento === "") {
        MainServices.mudarEstado("nada", "requirido", entradaInputs);
        MainServices.adicionarAtributo("disabled", botaoHabilitar);
      } else {
        MainServices.mudarEstado("requirido", "nada", entradaInputs);
        MainServices.removeAtributo("disabled", botaoHabilitar);
      }
    }

    return;
  },

  // ********* Requests *************

  pegarToken: () => {
    const tokenEncontrado = localStorage.getItem("token");
    return tokenEncontrado;
  },

  rotaPrincipalAPI: () => {
    return env.endpoint || "http://localhost:3004/api";
  },

  simplesRequisicao: async (hostname, finalCaminhoAPI, configuracaoRequest) => {
    try {
      MainServices.mudarEstado(
        "esconder-modal",
        "mostrar-modal",
        "#modalLoading"
      );
      const endpoint = hostname + finalCaminhoAPI;

      const response = await fetch(endpoint, configuracaoRequest);

      if (response.status === 401) {
        MainServices.mudarEstado(
          "mostrar-modal",
          "esconder-modal",
          "#modalLoading"
        );
        MainServices.exibirInformacaoEmElementoTags(
          "#erroDadosServidor",
          "Sua sessão expirou, vá se logar de novo!"
        );
        MainServices.mudarEstado(
          "esconder-modal",
          "mostrar-modal",
          "#modalErro"
        );
        MainServices.redirecionarBloquear("./index.html", 2000);
        return;
      }

      MainServices.mudarEstado(
        "mostrar-modal",
        "esconder-modal",
        "#modalLoading"
      );
      return response.json();
    } catch (error) {
      MainServices.mudarEstado("esconder-modal", "mostrar-modal", "#modalErro");
      console.error("Há algo errado com sistema!", error);
    }
  },

  requisicaoComplexa: async (hostname, configuracaoRequest) => {
    try {
      const protocolo = hostname.protocolo;
      const host = hostname.host;
      const port = hostname.port;
      const pathInicial = hostname.pathInicial;
      const pathFinal = hostname.pathFinal;

      const endpoint = `${protocolo}://${host}:${port}/${pathInicial}${pathFinal}`;
      console.info("O seu endpoint é : ", endpoint);

      const response = await fetch(endpoint, configuracaoRequest);
      const respostaFinal = await response.json();

      return respostaFinal;
    } catch (error) {
      console.error("Há algo errado ", error);
    }
  },

  // ****** DEBUG ******
  dug: (dado) => {
    let infoDados = {
      dado: dado,
      seu_tamanho: dado.length,
    };
    console.info(infoDados);
  },

  // **************** Exibe Dados *****************

  exibirInformacaoEmElementoTags: (elemento, informacao) => {
    const elementoExibidor = document.querySelector(`${elemento}`);
    elementoExibidor.innerHTML = `<h2>${informacao}</h3>`;
  },

  exibeDado: (elemento, informacao) => {
    const elementoExibidor = document.querySelector(`${elemento}`);
    elementoExibidor.textContent = informacao;
  },

  redirecionarLocal: (caminho, tempoParaRedirecianar) => {
    return setTimeout(() => {
      window.location.replace(`${caminho}`);
    }, tempoParaRedirecianar);
  },
  redirecionarBloquear: (caminho, tempoParaRedirecianar) => {
    return setTimeout(() => {
      window.location.assign(`${caminho}`);
    }, tempoParaRedirecianar);
  },

  ReceberParams: (trueOrFalse, caminho) => {
    return function exercultarAposOutrosParams(trueOrFalse) {
      if (!trueOrFalse) {
        return "nao pode passar para o proximo passo";
      } else {
        return window.location.replace(caminho);
      }
    };
  },

  voltarPagina: (tempoDeMudanca) => {
    return setTimeout(() => {
      window.history.back();
    }, tempoDeMudanca);
  },

  extrairDadosEstoca: (arrayDeEstocagem, inputsEntrada) => {
    const dadosDeInputs = document.querySelectorAll(`${inputsEntrada}`);

    let estoque = arrayDeEstocagem;

    for (const inputs of dadosDeInputs) {
      estoque.pop(inputs.value);
    }

    for (const inputs of dadosDeInputs) {
      estoque.push(inputs.value);
    }
    console.log(estoque);
    return estoque;
  },

  validaConformeCondicao: (valorInput, condicao) => {
    const validador = valorInput === condicao ? true : false;
    return validador;
  },
};

export { MainServices };
