/*Um guerreiro encontrou um dragão! Se ele tiver uma espada mágica e mais de 18
anos, ele pode lutar. Se não, deve fugir.
Desafio:
Crie um programa que receba:
let idade;
let temEspadaMagica;
E exiba:
"Você pode lutar contra o dragão!" ou
"Fuja enquanto é tempo!"*/

let idade = Number(prompt("Digite a sua idade: "))
let temEspadaMagica = prompt("Você tem a espada magica?")

if (idade > 18 && temEspadaMagica === "sim") {
    alert("Você pode lutar contra o dragão")
} else {
    alert("Fuja enquanto é tempo!")
}
