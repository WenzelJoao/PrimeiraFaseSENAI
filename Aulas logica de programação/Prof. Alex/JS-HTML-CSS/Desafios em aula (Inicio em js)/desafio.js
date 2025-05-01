let numero1 = Number(prompt("Digite um numero: "))
let numero2 = Number(prompt("Digite outro numero: "))
let operação = prompt("escreva a operação matematica que voce deseja realizar: ")
let resultado

if (operação === "soma") {
    resultado = numero1 + numero2
    console.log("O resultado da soma entre o numero",numero1, "e o numero",numero2, "é:",resultado)
}
else if (operação === "multiplicação") {
    resultado = numero1 * numero2
    console.log("O resultado da multiplicação entre o numero",numero1, "e o numero",numero2, "é:",resultado)
}
else if (operação === "subtração") {
    resultado = numero1 - numero2
    console.log("O resultado da subtração entre o numero",numero1, "e o numero",numero2, "é:",resultado)
}
else if (operação === "divisão") {
    resultado = numero1 / numero2
    console.log("O resultado da divisão entre o numero",numero1, "e o numero",numero2, "é:",resultado)
}
else {
    console.log("Operação inválida")
}

