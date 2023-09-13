import { quantidadeProdutoCarrinho, removerProdutoCarrinho, atualizarTotal } from "./carrinho-operacoes.js";
import atualizarNumeroCarrinho from "./atualizar-numero-carrinho.js";


export function handleClickAddCarrinho() {
    const botaoAddCarrinho = document.getElementsByClassName('add-carrinho');
    
    for (var i = 0; i < botaoAddCarrinho.length; i++) {
        let botao = botaoAddCarrinho[i]
        botao.addEventListener('click', coletarInfosProduto);       
    };    
};

function coletarInfosProduto(event) {
    let botao = event.target;
    let botaoParente = botao.parentElement;
    let produtoInfos = botaoParente.parentElement;
    let tituloProduto = produtoInfos.getElementsByClassName('produto-titulo')[0].innerText;
    let precoProduto = produtoInfos.getElementsByClassName('produto-preco')[0].innerText;
    let imagemProduto = produtoInfos.getElementsByClassName('produto-img')[0].src;
    addProdutoCarrinho(tituloProduto, precoProduto, imagemProduto);
    atualizarTotal();    
};

function addProdutoCarrinho(tituloProduto, precoProduto, imagemProduto) {
    let produtoCarrinhoBox = document.createElement('div');
    produtoCarrinhoBox.classList.add('produto-carrinho-box');
    let produtosCarrinho = document.getElementsByClassName('produtos-carrinho')[0];
    let produtoCarrinhoTitulo = document.getElementsByClassName('produto-carrinho-titulo');

    for (var i = 0; i < produtoCarrinhoTitulo.length; i++) {
        if (produtoCarrinhoTitulo[i].innerText == tituloProduto) {
            alert('You have already add this item to cart!');
            return;
        }
    };

    alert("Product added to cart!")

    let carrinhoBoxConteudo = `
        <img src="${imagemProduto}" alt="" class="produto-carrinho-img">
        <div class="produto-carrinho-detalhes">
            <p class="produto-carrinho-titulo">${tituloProduto}</p>
            <p class="produto-carrinho-preco">${precoProduto}</p>
            <input type="number" value="1" class="produto-carrinho-quantidade">
        </div>
        <img src="../img/trash-icon.svg" alt="" class="icone-lixeira">`;
    
    produtoCarrinhoBox.innerHTML = carrinhoBoxConteudo;
    produtosCarrinho.append(produtoCarrinhoBox);

    quantidadeProdutoCarrinho();
    removerProdutoCarrinho();
    atualizarNumeroCarrinho()
};
