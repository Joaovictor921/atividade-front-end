function add() {
    // 1. Alterar o atributo src da imagem principal
    // Selecionamos a imagem pela classe padrão do Bootstrap do card
    const imagem = document.querySelector('.card-img-top');
    if (imagem) {
        imagem.src = 'img/_vinicius_junior.png';
    }

    // 2. Mapeamento dos dados com os IDs presentes no HTML
    // Mantivemos 'Alutra' e 'Posição ' exatamente como constam na estrutura original
    const dadosJogador = {
        "Data_Nas": "12/07/2000 (25 anos)",
        "Alutra": "1,76 m",
        "Posição ": "Ponta-esquerda / Atacante",
        "Rank": "9,5"
    };

    // 3. Atualizar o Nome (que está estruturado dentro de um h5)
    const tituloNome = document.getElementById("Nome");
    if (tituloNome) {
        // Remove a animação de carregamento do título pai
        tituloNome.classList.remove("placeholder-glow");
        
        // Seleciona o span específico do nome dentro do h5 e atualiza
        const spanNome = tituloNome.querySelector('.placeholder');
        if (spanNome) {
            spanNome.textContent = "Vinícius José Paixão de Oliveira Júnior";
            spanNome.classList.remove("placeholder", "col-6");
        }
    }

    // 4. Substituir o conteúdo dos demais <span> e manipular as classes
    for (const [idElemento, texto] of Object.entries(dadosJogador)) {
        const elementoSpan = document.getElementById(idElemento);
        
        if (elementoSpan) {
            // Substitui o conteúdo do placeholder pela informação de apoio
            elementoSpan.textContent = texto;
            
            // Remove as classes CSS do placeholder
            elementoSpan.classList.remove("placeholder", "col-4", "col-6");
            
            // Aplica a classe card-text para finalizar a estilização
            if (idElemento !== "Rank") { 
                elementoSpan.classList.add("card-text");
            }
        }
    }

    // 5. Opcional: Limpar a classe de animação 'placeholder-glow' do parágrafo pai para finalizar
    const paragrafoTextos = document.querySelector('p.placeholder-glow');
    if (paragrafoTextos) {
        paragrafoTextos.classList.remove('placeholder-glow');
    }
}