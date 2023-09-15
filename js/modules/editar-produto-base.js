export function salvarNovaQuantidade() {
    const botaoSalvar = document.getElementById('botao-salvar-modal');
    const modalEditar = document.getElementsByClassName('modal-container')[0];    
    
    botaoSalvar.onclick = function () {
        modalEditar.classList.remove('active');
        
        const dataIndex = this.getAttribute('data-index');
        const linhaRespectiva = document.querySelector(`[data-index="${dataIndex}"]`);

        const novaQuantidade = document.getElementById('nova-quantidade');
        linhaRespectiva.getElementsByTagName('td')[1].innerText = novaQuantidade.value;
    };
}; 
