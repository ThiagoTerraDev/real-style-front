const carrinhoSidebar = document.querySelector('.carrinho-sidebar');
const carrinhoCompras = document.querySelector('.carrinho-compras');
const fecharCarrinho = document.querySelector('#fechar-carrinho');


export function abrirCarrinho() {
    carrinhoSidebar.onclick = () => {
        carrinhoCompras.classList.add('active');
    };
};

export function ocultarCarrinho() {
    fecharCarrinho.onclick = () => {
        carrinhoCompras.classList.remove('active');
    };
};
