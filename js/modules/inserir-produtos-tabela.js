import criarBotaoEditar from "./botao-editar-ordens.js";
import criarBotaoRemover from "./botao-remover-ordens.js";

let indexLinha = 0;

// Função para inserir produtos na tabela apresentada na página de ordens.
export default function inserirProdutosTabela(tituloProduto, quantidadeProduto, precoProduto) {
    const produto = [tituloProduto, quantidadeProduto, precoProduto];
    const tabela = document.getElementById('ordens-tabela');
    let linha = tabela.insertRow();

    linha.setAttribute('data-index', indexLinha);
    indexLinha++;

    for (let i = 0; i < produto.length; i++) {
        let celulas = linha.insertCell(i);
        celulas.textContent = produto[i];
    };    

    criarBotaoEditar(linha.insertCell(-1));
    criarBotaoRemover(linha.insertCell(-1));
};
