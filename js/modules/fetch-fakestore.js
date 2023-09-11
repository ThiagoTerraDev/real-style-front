// Função para carregar dados da API externa "Fakestore API"

export default function fetchFakestoreProducts() {
    document.addEventListener('DOMContentLoaded', function() {
        const produtos = document.querySelector('.produtos');
        
        async function fetchProducts(url) {
            try {
                let data = await fetch(url);
                let response = await data.json()
                console.log(response);           
            }
            catch(err) {
                console.log(err)
            };
        };
        fetchProducts('https://fakestoreapi.com/products');
    });
};
