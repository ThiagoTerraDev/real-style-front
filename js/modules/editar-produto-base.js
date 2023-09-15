export function salvarNovaQuantidade() {
    const botaoSalvar = document.getElementById('botao-salvar-modal');
    const modalEditar = document.getElementsByClassName('modal-container')[0];    
    
    botaoSalvar.onclick = function () {
        modalEditar.classList.remove('active');
        
        const dataIndex = this.getAttribute('data-index');
        const linhaRespectiva = document.querySelector(`[data-index="${dataIndex}"]`);

        const novaQuantidade = document.getElementById('nova-quantidade');
        linhaRespectiva.getElementsByTagName('td')[1].innerText = novaQuantidade.value;

        const nomeProduto = linhaRespectiva.getElementsByTagName('td')[0].innerText

        editarProdutoBase(nomeProduto, novaQuantidade.value);

        alert('New quantity successfully defined!')
    };
}; 


// Função que possibilita o envio de requisição de edição para o servidor, 
// através do clique no botão "Save changes".

function editarProdutoBase(nomeProduto, novaQuantidade) { 
    const formData = new FormData();
    formData.append('nome', nomeProduto);
    formData.append('quantidade', novaQuantidade);

    const url = 'http://127.0.0.1:5000/editar_produto';

    return fetch(url, {
        method: 'put',
        body: formData
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error', error)
        });
};
