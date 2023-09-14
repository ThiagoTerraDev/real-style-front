// Função para obter a lista de produtos cadastrados na base, via requisição GET
export default async function buscarProdutos() {
    try {
        const url = 'http://127.0.0.1:5000/produtos';
        const response = await fetch(url, {
            method: 'get'
        });
        const data = await response.json();

        console.log(data)

    } catch (error) {
        console.log('Error', error)
    };
};
