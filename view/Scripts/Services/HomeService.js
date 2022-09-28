import * as Controller from '../Controller/HomeController.js'
import { MainServices } from './MainServices.js';
import { MainTemplates } from '../../Templates/MainTemplates.js';
import { insererTabela, limpaTela, insererUtimo } from '../../Templates/AcessoTemplates.js';

const insererModaisTela = (exibidor) => {
    MainTemplates.criarModaisTodos(exibidor);
}

const fecharModais = (seletorDeModais) => {
    seletorDeModais.forEach(botao => {
        botao.addEventListener('click', (element) => {
            // buscando o seu avo
            let pegandoIDdoAvo = element.currentTarget.parentNode.parentNode.parentNode.id;
            MainServices.mudarEstado('mostrar-modal', 'esconder-modal', `#${pegandoIDdoAvo}`)
        });
    });
}

const mostrarUsuarioLogado = (nomeDoUsuario) => {
    MainServices.exibeDado('#nomeDoUsuario', nomeDoUsuario);
}

const sairPagina = () => {
    MainServices.voltarPagina(100);
}

const mobile = () => {
    MainServices.mudarEstado('escondido', 'naoescondido', `#${pegandoIDdoAvo}`)
}

const GET = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'authorization-token': MainServices.buscaToken()
    }
};



const quantoAcessosMes = async (desmonstrador) => {


    const respostaUsuario = await MainServices.simplesRequisicao(MainServices.rotaPrincipalAPI() + '/acessos/contar30Dias/', '', GET);
    MainServices.exibeDado('[root-mes]', respostaUsuario);


}

const quantoAcessosHoje = async () => {


    const respostaUsuario = await MainServices.simplesRequisicao(MainServices.rotaPrincipalAPI() + '/acessos/contaQuantoHoje/', '', GET);
    MainServices.exibeDado('[root-hoje]', respostaUsuario);

}

const ultimoAcesso = async () => {


    const respostaUsuario = await MainServices.simplesRequisicao(MainServices.rotaPrincipalAPI() + '/acessos/', 'ultimo', GET);


    let NomeCompleto = respostaUsuario.nome_acesso + ' ' + respostaUsuario.sobrenome_acesso;

    MainServices.exibeDado('[root-ultimo]', NomeCompleto);

}

const graficoUtimo4Meses = async (demostradorGrafico) => {
    const dados = await MainServices.simplesRequisicao(MainServices.rotaPrincipalAPI() + '/acessos/contar4meses/', '', GET);

    google.charts.setOnLoadCallback(graficoAreaUltimos4Meses);

    function graficoAreaUltimos4Meses() {

        let data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Quanto Acesso por mês');
        data.addRows([
            ['Quarto Mês', dados.ultimos120Dias],
            ['Terceiro Mes', dados.ultimos90Dias],
            ['Segundo Mes', dados.ultimos60Dias],
            ['Mês atual', dados.ultimos30Dias]
        ]);

        let options = {
          
            'width': 340,
            'width_units': '%',
            'height': 270,

            'backgroundColor': 'transparent',

            series: {
                0: { color: '#7334fc' }
            },
            hAxis: { title: 'Meses', titleTextStyle: { color: '#AA21FF' } },
        };

        let chart = new google.visualization.AreaChart(demostradorGrafico);
        chart.draw(data, options);
    }

}

const graficoRodaMes = async (demostradorGrafico) => {

    const dados = await MainServices.simplesRequisicao(MainServices.rotaPrincipalAPI() + '/acessos/busca30DiasCriterio', '', GET);

    google.charts.setOnLoadCallback(graficoRodaSitucaoAcessoMes);

    function graficoRodaSitucaoAcessoMes() {

        let data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            ['Negados', dados[0].acessos_negados],
            ['Liberado', dados[1].acessos_liberado],
            ['Barrados', dados[2].acessos_barrados]
        ]);

        let options = {
            'width': 340,
            'width_units': '%',
            'height': 270,
            'backgroundColor': 'transparent',
            'is3D': true,

            slices: {
                0: { color: '#eb6d46' },
                1: { color: '#60ebc7' },
                2: { color: '#ebe24d' }
            }
        };

        let chart = new google.visualization.PieChart(demostradorGrafico);
        chart.draw(data, options);
    }

}


const finalizarSessao = () => {
    return MainServices.logoOut();
}


export {
    finalizarSessao,
    limpaTela,
    insererModaisTela,
    fecharModais,
    mostrarUsuarioLogado,
    sairPagina,
    quantoAcessosMes,
    ultimoAcesso,
    quantoAcessosHoje,
    graficoUtimo4Meses,
    graficoRodaMes
}