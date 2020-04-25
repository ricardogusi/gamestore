let imagem = document.querySelector("#img")
let carrosel = document.querySelector("#carouselExampleIndicators")
let produtos = document.querySelector(".produtos")


setInterval(function(){
    imagem.classList.toggle("efeito")
}, 600)


carrosel.addEventListener("click", scroll)

function scroll (){
    window.scrollTo(0,1000);
    
}