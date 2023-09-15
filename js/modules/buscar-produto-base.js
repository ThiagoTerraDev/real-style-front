// Função para buscar informações de um produto cadastrado na base,
// via requisição GET.

export default async function buscarProduto(nomeProduto) {
    try {
        const url = 'http://127.0.0.1:5000/produto?nome=' + nomeProduto;
        const response = await fetch(url, {
            method: 'get'
        });
        const data = await response.json();
        console.log(data);

        if (data.message === 'Produto não encontrado na base.') {
            alert('Product not found in the database.')
        };

    } catch(error) {
        console.error('Error:', error);
    };
};
