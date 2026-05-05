function revelar() {
    
    const imagemPrincipal = document.querySelector(".card-img-top"); 
    if (imagemPrincipal) {
        imagemPrincipal.src = "img/_vinicius_junior.png";
    }

    
    
    const tituloNome = document.getElementById("Nome");
    if (tituloNome) {
        const spanNome = tituloNome.querySelector(".placeholder");
        if (spanNome) {
            spanNome.textContent = "Vinícius José Paixão de Oliveira Júnior";
            spanNome.classList.remove("placeholder", "col-6");
        }
       
        tituloNome.classList.remove("placeholder-glow");
    }

   
    const dadosJogador = {
        "Data_Nas": "12/07/2000 (25 anos)",
        "Alutra": "1,76 m",
        "Posição ": "Ponta-esquerda / Atacante",
        "Rank": "9,5"
    };

    // 4. Substituir o conteúdo e alterar as classes
    for (const [idElemento, novoTexto] of Object.entries(dadosJogador)) {
        const elementoSpan = document.getElementById(idElemento); 
        
        if (elementoSpan) {
            
            elementoSpan.textContent = novoTexto;
            
            
            elementoSpan.classList.remove("placeholder", "col-4", "col-6");
            
            
            if (idElemento !== "Rank") {
                elementoSpan.classList.add("card-text");
            }
        }
    }

    
    const paragrafoTextos = document.querySelector("p.placeholder-glow");
    if (paragrafoTextos) {
        paragrafoTextos.classList.remove("placeholder-glow");
    }
}