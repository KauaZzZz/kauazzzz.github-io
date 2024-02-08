
const botao = document.getElementById("botao")
const resposta = document.getElementById("resposta")

botao.addEventListener("click", () => {
    const input = document.getElementById("input").value
    const sortear = Math.floor(Math.random() * 2);

    if (input == "cara" && sortear == 0) {
        resposta.innerHTML = "você ganhou, saiu cara"
    }
    if (input == "coroa" &&  sortear == 1) {
        resposta.innerHTML = " você ganhou, saiu coroa"
    }
    if (input == "cara" && sortear != 0) {
        resposta.innerHTML = " você perdeu, saiu coroa"
    }
    if (input == "coroa" && sortear != 1) {
        resposta.innerHTML = " você perdeu, saiu cara"
    }
    if (input != "cara" && input != "coroa") {
        resposta.innerHTML = "esse input não é valido"
    }
})