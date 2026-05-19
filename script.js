// variáveis

let nome = document.querySelector("#nome")
let idade = document.querySelector("#idade")
let botao = document.querySelector("#btn")
let msg = document.querySelector("#msg")

// função do botão
botao.addEventListener("click", () => {
    msg.textContent = 
    "Olá " + nome.value + ", você tem "
    + idade.value +" anos"
})