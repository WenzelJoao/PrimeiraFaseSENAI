/*A Máquina de Suco Inteligente
História:
Uma máquina mágica de sucos aceita o nome da fruta e prepara o suco
correspondente. Se não reconhecer a fruta, diz que está fora do cardápio.
Desafio:
Use if/else com strings.
let fruta;
Se fruta for:
"laranja" → "Preparando suco de laranja 🍊"
"uva" → "Preparando suco de uva 🍇"
"morango" → "Preparando suco de morango 🍓"*/
let sabor = prompt("Escolha o sabor de suco que você deseja (laranja, uva e morango): ")

if (sabor == "laranja") {
    console.log("Preparando suco de laranja 🍊")
}
else if (sabor == "uva") {
    console.log("Preparando suco de uva 🍇")
}

else if(sabor === "morango"){
    console.log("Preparando suco de morango 🍓")
}
else {
    console.log("Fruta invalida!")
}
