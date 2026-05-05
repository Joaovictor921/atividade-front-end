
function inserirImagem() {
    
    if (!document.getElementById("imagem-tabela")) {
        
       
        const img = document.createElement("img");
        
       
        img.src = "img/Tabela_Jogos.png"; 
        img.id = "imagem-tabela";
        img.alt = "Tabela de Jogos da Copa do Mundo 2026";
        
        
        img.style.display = "block";
        img.style.margin = "40px auto";
        img.style.maxWidth = "80%";
        img.style.borderRadius = "10px";
        img.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

        
        document.body.appendChild(img);
    }
}