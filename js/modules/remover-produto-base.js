// Função para remover produto da tabela de ordens.

export default function removerProdutoTabela() {
    const linha = this.parentElement.parentElement;
    const nomeProduto = linha.getElementsByTagName('td')[0].innerText;   
    
    if (confirm('Are you sure?')) {
        linha.remove();
        removerProdutoBase(nomeProduto);
    };
};


// Função para remover produto da base de dados.

function removerProdutoBase(produto) {
    const url = 'http://127.0.0.1:5000/produto?nome=' + produto;
    fetch(url, {
        method: 'delete'
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log('Error', error)
        });
}; 
