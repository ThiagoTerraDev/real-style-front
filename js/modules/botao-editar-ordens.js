// Função para criar um botão de edição, para cada linha da tabela
// na página de ordens.

export default function criarBotaoEditar(parent) {
    const botaoEditar = document.createElement('img');
    botaoEditar.src = '../img/edit-icon.svg';
    botaoEditar.alt = 'Editar';
    botaoEditar.className = 'botao-editar';

    parent.appendChild(botaoEditar);
};
