// Função para carregar dados da API externa "Fakestore API"

export default function fetchFakestoreProducts() {
    document.addEventListener('DOMContentLoaded', function() {
        const produtos = document.querySelector('.produtos');
        
        async function fetchProducts(url) {
            try {
                let data = await fetch(url);
                let response = await data.json()
                
                for (let i = 0; i < response.length; i++) {
                    if (response[i].category === "men's clothing" || response[i].category === "women's clothing") {
                        produtos.innerHTML += `
                            <div class="produto">
                                <img src="${response[i].image}" alt="Imagem Produto" class="produto-img">
                                <h4 class="produto-categoria">${response[i].category}</h4>
                                <h2 class="produto-titulo">${response[i].title}</h2>
                                <div class="produto-preco-container">
                                    <h3 class="produto-preco">$${response[i].price}</h3>
                                    <span data-produtoId="${response[i].id}" class="add-carrinho"></span>
                                </div>
                            </div>
                        `;
                    };
                };           
            }
            catch(err) {
                console.log(err)
            };
        };
        fetchProducts('https://fakestoreapi.com/products');
    });
};
