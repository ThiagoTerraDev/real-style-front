export default function atualizarNumeroCarrinho() {
    let produtosCarrinho = document.getElementsByClassName('produtos-carrinho')[0];
    let produtoCarrinhoBoxes = produtosCarrinho.getElementsByClassName('produto-carrinho-box');

    let totalItens = 0;

    for (var i = 0; i < produtoCarrinhoBoxes.length; i++) {
        let elementoQuantidade = produtoCarrinhoBoxes[i].getElementsByClassName('produto-carrinho-quantidade')[0];
        let quantidade = parseInt(elementoQuantidade.value);
        totalItens += quantidade;
    }

    let carrinhoQuantidadeElement = document.querySelector('.quantidade-carrinho');
    carrinhoQuantidadeElement.textContent = totalItens;
};
