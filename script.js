
async function aoClikar() {

    const elementoNome = document.getElementById("nome").value
    const elementoEmail = document.getElementById("email").value
    const elementoMensagem = document.getElementById("mensagem").value

    const retornoApi = await enviarDadosParaAPI(elementoNome, elementoEmail, elementoMensagem)
    console.log(retornoApi)
    mostrarResultado(retornoApi)
    verificarDados(elementoNome,elementoEmail,elementoMensagem)
}


async function enviarDadosParaAPI(valorNome, valorEmail, valorMensagem) {
    console.log(valorNome)
    console.log(valorEmail)
    console.log(valorMensagem)

    const url = "https://target-api-simples.cyclic.app/generica"
    const opcoesFetch = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nome: valorNome,
            email: valorEmail,
            mensagem: valorMensagem
        })
    }

    const resposta = await fetch(url, opcoesFetch)
    const retornoApi = await resposta.json()
    return retornoApi
}

function mostrarResultado(valores){
document.getElementById("status").style.display = "block"
document.getElementById("quadroSucesso").style.display = "block" 

document.getElementById("retornoNome").innerText += valores.apiRecebeu.nome
document.getElementById("retornoEmail").innerText += valores.apiRecebeu.email
document.getElementById("retornoMensagem").innerText += valores.apiRecebeu.mensagem
}