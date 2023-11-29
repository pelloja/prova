function adicionarMensagemComBotao() {
    
    var paragrafo = document.createElement("p");
    
    
    paragrafo.textContent = "Links Uteis";
    
    
    var botao = document.createElement("button");
    
    
    botao.textContent = "Acesse";
    botao.addEventListener("click", function() {
       
        window.location.href = "https://drive.google.com/drive/folders/1z7jvjQOkcQwrFzvBQOntN027V8dMjtq-?usp=sharing";
    });
    
    
    paragrafo.appendChild(botao);
    
    
    var container = document.getElementById("mensagemContainer");
    container.appendChild(paragrafo);
}

document.addEventListener("DOMContentLoaded", adicionarMensagemComBotao);