var personagem = document.getElementById("personagem");
var bloco = document.getElementById("bloco");
function jump(){
    if(personagem.classList != "animate"){
        personagem.classList.add("animate");
        setTimeout(function(){
            personagem.classList.remove("animate");
        },1000)
    }
}

var morreu = setInterval(function(){
    var personagemTop = parseInt(window.getComputedStyle(personagem).getPropertyValue("top"));
    var blocoLeft = parseInt(window.getComputedStyle(bloco).getPropertyValue("left"));
    if(blocoLeft<120 && blocoLeft>100 && personagemTop>=130){
        bloco.style.animation = "none";
        bloco.style.display = "none";
        alert("Você perdeu!");
    }
},10);