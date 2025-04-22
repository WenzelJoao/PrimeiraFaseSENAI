/*Sessão de Cinema
História:
A entrada no cinema é gratuita para crianças até 12 anos ou idosos acima de 60.
Desafio:
let idade;
Exiba:
"Entrada gratuita 🎟" ou
"Precisa pagar ingresso 💳"*/

let idade = Number(prompt("Digite a sua idade: "))
if (idade<12 || idade>60){
    alert("Entrada gratuita 🎟 ")
}else{
    alert("Precisa pagar ingresso 💳")
}
