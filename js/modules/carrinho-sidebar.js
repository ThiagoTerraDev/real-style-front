const carrinhoSidebar = document.querySelector('.carrinho-sidebar');
const carrinhoCompras = document.querySelector('.carrinho-compras');
const fecharCarrinho = document.querySelector('#fechar-carrinho');
const overlay = document.getElementById('overlay');


export function abrirCarrinho() {
    carrinhoSidebar.onclick = () => {
        carrinhoCompras.classList.add('active');
        overlay.style.display = 'block';
    };
};

export function ocultarCarrinho() {
    fecharCarrinho.onclick = () => {
        carrinhoCompras.classList.remove('active');
        overlay.style.display = 'none';
    };
};
