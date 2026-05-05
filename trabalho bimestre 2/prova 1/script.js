
function mostrarTabela() {
    
    if (!document.getElementById("imgTabela")) {
       
        const imagem = document.createElement("img");
        
        
        imagem.src = "img/Tabela_Jogos.png"; 
        imagem.id = "imgTabela";
        imagem.alt = "Tabela de Jogos da Copa";
        
       
        imagem.style.display = "block";
        imagem.style.margin = "30px auto";
        imagem.style.maxWidth = "80%";
        imagem.style.borderRadius = "8px";

        
        document.body.appendChild(imagem);
    }
}