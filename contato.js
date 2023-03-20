
function verificarDados(valorNome, valorEmail, valorMensagem) {
    if (valorNome == "") {
        alert("Campo Nome é obrigatório!")
        return
    }
    else {
        if (valorEmail == "") {
            alert("Campo E-mail é obrigatório!")
            return
        } else {
            if (valorMensagem == "") {
                alert("Campo Mensagem é obrigatório!")
                return
            }
        }

    }
}
