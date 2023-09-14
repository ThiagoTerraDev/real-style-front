// Função para remover produto da tabela de ordens.

export default function removerProdutoBase() {
    const linha = this.parentElement.parentElement;
    const nomeProduto = linha.getElementsByTagName('td')[0].innerHTML;
    
    if (confirm('Are you sure?')) {
        linha.remove();
    }
};
