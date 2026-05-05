function add() {
    
    const cardOriginal = document.querySelector('.card');
    
    
    if (!cardOriginal) {
        console.error("Card original não encontrado.");
        return;
    }

   
    const novoCard = cardOriginal.cloneNode(true);

   
    const imagem = novoCard.querySelector('img');
    if (imagem) {
        imagem.src = "img/Lucas_Paqueta.webp";
    }

    
    const spans = novoCard.querySelectorAll('span');
    
    
    if (spans.length >= 5) {
        spans[0].textContent = "Lucas Tolentino Coelho de Lima"; 
        spans[1].textContent = "27/08/1997 (28 anos)";           
        spans[2].textContent = "1,80 m";                         
        spans[3].textContent = "Meio-campista";                  
        spans[4].textContent = "8,8";                            
    }

   
    spans.forEach(span => span.removeAttribute('id'));

    
    cardOriginal.parentNode.appendChild(novoCard);
}