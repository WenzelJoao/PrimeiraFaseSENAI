function botao() {
    let brinquedos, moedas = 0
    brinquedos = Number(prompt("Quantos brinquedos você trouxe? "))
    if (brinquedos >= 1 && brinquedos <= 3) {
        moedas = brinquedos
        alert(`Você ganhou ${moedas} Moedas!!`)
    }
    else if (brinquedos > 3) {
        moedas = 3
        alert(`Você trouxe muitos brinquedos! Você ganhou ${moedas} Moedas pelo máximo de 3 brinquedos.`)
    } else if (brinquedos === 0) {
        alert("Você não ganhou nenhuma moedas ")
    } else {
        alert("Por favor, digite um número válido de brinquedos.");
    }

}