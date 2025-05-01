/*História:
O cliente quer um sabor de sorvete. Só há: "baunilha", "chocolate" ou "morango".
Desafio:
let sabor;
Use condicionais para exibir:
"Servindo sorvete de [sabor] 🍦"
Ou "Sabor indisponível 😢"*/

let sabor = prompt(`Qual sabor você quer? \n(1)Baunilha \n(2)Chocolate\n(3)Morango`)
let saborBaunilha = "1"
let saborChocolate = "2"
let saborMorango = "3"

if (sabor === saborBaunilha) {
    alert("Servindo sorvete de baunilha 🍦")
} else if (sabor === saborChocolate) {
    alert("Servindo sorvete de chocolate 🍦")
} else if (sabor === saborMorango) {
    alert("Servindo sorvete de morango 🍦")
} else {
    alert("Sabor indisponível 😢")
}