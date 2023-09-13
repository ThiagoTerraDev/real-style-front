export function quantidadeProdutoCarrinho() {

    let quantidadeInputs = document.getElementsByClassName('produto-carrinho-quantidade');
       
    for (var i = 0; i < quantidadeInputs.length; i++) {
        let input = quantidadeInputs[i];
        input.addEventListener('change', quantidadeAlterada);
    };   
           
    function quantidadeAlterada(event) {
        let input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        };
        atualizarTotal();
    };
};


export function removerProdutoCarrinho() {

    let botaoRemoverProduto = document.getElementsByClassName('icone-lixeira');

    for (var i = 0; i < botaoRemoverProduto.length; i++) {
        let botao = botaoRemoverProduto[i];
        botao.addEventListener('click', removerProduto);
    };

    function removerProduto(event) {
        let botaoClicado = event.target;
        botaoClicado.parentElement.remove();
        atualizarTotal();
    }
}


export function atualizarTotal() {
    let produtosCarrinho = document.getElementsByClassName('produtos-carrinho')[0];
    let produtoCarrinhoBoxes = produtosCarrinho.getElementsByClassName('produto-carrinho-box');
    var total = 0;

    for (var i = 0; i < produtoCarrinhoBoxes.length; i++) {
        let produtoCarrinhoBox = produtoCarrinhoBoxes[i];
        let elementoPreco = produtoCarrinhoBox.getElementsByClassName('produto-carrinho-preco')[0];
        let elementoQuantidade = produtoCarrinhoBox.getElementsByClassName('produto-carrinho-quantidade')[0];

        let preco = parseFloat(elementoPreco.innerText.replace("$", ""));
        let quantidade = elementoQuantidade.value;

        total = total + preco * quantidade;

        // Se o preço contiver algum valor em centavos
        total = Math.round(total * 100) / 100;
    }

    if (produtoCarrinhoBoxes.length === 0) {
        total = 0;
    }

    document.getElementsByClassName('total-preco')[0].innerText = '$' + total;    
};
