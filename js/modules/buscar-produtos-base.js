import inserirProdutosTabela from "./inserir-produtos-tabela.js";

// Função para obter a lista de produtos cadastrados na base, via requisição GET
export default async function buscarProdutos() {
    try {
        const url = 'http://127.0.0.1:5000/produtos';
        const response = await fetch(url, {
            method: 'get'
        });
        const data = await response.json();

        // Assim que a lista é obtida, os produtos são inseridos na tabela da página de ordens.
        data.produtos.forEach((produto) => inserirProdutosTabela(produto.nome, produto.quantidade, produto.valor_unitario));        

    } catch (error) {
        console.log('Error', error)
    };
};
