// Função para definir o termo de busca, ou seja, o produto cadastrado
// na base que está sendo pesquisado na tabela de ordens.

export default function definirTermoBusca() {
    const formularioBuscaProduto = document.getElementById('formulario-busca');

    formularioBuscaProduto.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputBusca = document.getElementById('input-busca');
        const termoDeBusca = inputBusca.value.trim();

        const tabela = document.getElementById('ordens-tabela');    
        
        if (termoDeBusca !== '') {
            const linhas = tabela.getElementsByTagName('tr');
            
            for (let i = 1; i < linhas.length; i++) {
                const linha = linhas[i];                
                const nomeProduto = linha.cells[0].textContent;

                if (nomeProduto.includes(termoDeBusca)) {
                    linha.style.display = '';                
                } else {
                    linha.style.display = 'none';
                };
            };
                        
        } else {
            alert('Text area cannot be empty!');
        };
    });
};
