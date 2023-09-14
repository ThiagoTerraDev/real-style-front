// Função para criar um botão de remoção, para cada linha da tabela
// na página de ordens.

export default function criarBotaoRemover(parent) {
    const botaoRemover = document.createElement('img');
    botaoRemover.src = '../img/trash-icon.svg';
    botaoRemover.alt = 'Remover';
    botaoRemover.className = 'botao-remover';

    parent.appendChild(botaoRemover);
};
