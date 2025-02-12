
let secao = document.querySelector(".respostas")

function enviarFeedbacks(event) {
    event.preventDefault()
    let inputTexto = document.querySelector("#answer")
    let inputNome = document.querySelector("#nome")

    let escopo = document.createElement("div")
    let h2 = document.createElement("h2")
    let texto = document.createElement("p")

    h2.innerText = inputNome.value
    texto.innerText = inputTexto.value

    console.log(h2)
    console.log(texto)

    escopo.append(h2)
    escopo.append(texto)
    secao.append(escopo)

    // Limpando campos do formulário
    inputNome.value = ""
    inputTexto.value = ""
}


let btn_enviar = document.querySelector("#btn_enviar")
btn_enviar.addEventListener("click", ()=>{enviarFeedbacks(event)})

