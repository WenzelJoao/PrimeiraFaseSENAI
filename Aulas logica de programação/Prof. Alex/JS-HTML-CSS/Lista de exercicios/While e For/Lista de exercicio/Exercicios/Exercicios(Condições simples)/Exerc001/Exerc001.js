// 1. Peça ao usuário sua idade e se ele tem carteira de motorista. Exiba "Pode
// dirigir" se for maior de 18 e tiver carteira.

function exerc001() {
    let idade = 0
    let cartMot = false

    while (idade < 18 || !cartMot) {
        idade = Number(prompt("Qual a sua idade?"))
        let resposta = prompt("Você tem carteira de motorista? Sim ou Não:")

        if (resposta === "Sim") cartMot = true

    }
    alert("Pode dirigir")

}
