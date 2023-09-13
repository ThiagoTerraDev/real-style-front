export default function comprarProdutos() {
    const botaoComprar = document.getElementsByClassName('botao-comprar')[0];
    const produtoCarrinhoBox = document.getElementsByClassName('produto-carrinho-box');

    botaoComprar.addEventListener('click', selecionarProduto);
  
    function selecionarProduto() {
        
        for (let i = 0; i < produtoCarrinhoBox.length; i++) {
            const tituloProduto = produtoCarrinhoBox[i].getElementsByClassName('produto-carrinho-titulo')[0].innerText;
            const quantidadeProduto = produtoCarrinhoBox[i].getElementsByClassName('produto-carrinho-quantidade')[0].value;
            const precoProduto = produtoCarrinhoBox[i].getElementsByClassName('produto-carrinho-preco')[0].innerText;
            const precoProdutoDefinitivo = parseFloat(precoProduto.replace('$', ''));

            // Ativando a função para cadastrar produtos na base de dados.
            postItem(tituloProduto, quantidadeProduto, precoProdutoDefinitivo);            
        };
        alert('Your order has been sent!')      
    };       
};

// Função para cadastrar produtos na base de dados.
function postItem(tituloProduto, quantidadeProduto, precoProdutoDefinitivo) {
    const formData = new FormData();
    formData.append('nome', tituloProduto);
    formData.append('quantidade', quantidadeProduto);
    formData.append('valor_unitario', precoProdutoDefinitivo);

    const url = 'http://127.0.0.1:5000/produto';
    return fetch(url, {
        method: 'post',
        body: formData
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error', error);
        });
};
