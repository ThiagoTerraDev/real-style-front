import buscarProdutos from "./modules/buscar-produtos-base.js";
import definirTermoBusca from "./modules/formulario-busca-produto.js";

document.addEventListener('DOMContentLoaded', () => {
    buscarProdutos();
    definirTermoBusca();    
});
