// Função para criar um botão de edição, para cada linha da tabela
// na página de ordens.

export default function criarBotaoEditar(parent) {
    const botaoEditar = document.createElement('img');
    botaoEditar.src = '../img/edit-icon.svg';
    botaoEditar.alt = 'Editar';
    botaoEditar.className = 'botao-editar';

    parent.appendChild(botaoEditar);

    botaoEditar.addEventListener('click', abrirModalEditar)
};


// Função para abrir o modal de edição do produto da respectiva linha.

function abrirModalEditar() {
    const modalEditar = document.getElementsByClassName('modal-container')[0];
    modalEditar.classList.add('active');

    const linhaRespectiva = this.parentElement.parentElement;
    const dataIndex = linhaRespectiva.getAttribute('data-index');
    const botaoSalvar = document.getElementById('botao-salvar-modal');
    botaoSalvar.setAttribute('data-index', dataIndex);

    const quantidade = linhaRespectiva.getElementsByTagName('td')[1].innerHTML;
    const novaQuantidade = document.getElementById('nova-quantidade');
    novaQuantidade.value = quantidade;

    const nomeProduto = linhaRespectiva.getElementsByTagName('td')[0].innerText;    
    const nomeProdutoModal = document.getElementsByClassName('nome-produto-modal')[0];    
    nomeProdutoModal.innerText = nomeProduto;
};


// Função para fechar o modal de edição de acordo com o clique no
// botão "Close"

export function fecharModalEditar() {
    const botaoClose = document.getElementsByClassName('fechar-modal');
    const modalEditar = document.getElementsByClassName('modal-container')[0];

    botaoClose[0].onclick = () => {
        modalEditar.classList.remove('active');
    };
};
