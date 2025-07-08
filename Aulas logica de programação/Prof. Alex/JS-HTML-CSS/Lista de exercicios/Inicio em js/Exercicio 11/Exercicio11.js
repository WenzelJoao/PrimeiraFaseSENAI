/*Festa VIP
História:
Só entra na festa VIP quem estiver na lista de convidados e trouxer convite.
Desafio:
let nome = "Joana";
let temConvite = true;
Use if/else para dizer se pode entrar ou não.*/

let nome = prompt("Digite o seu nome: ")
let temConvite = prompt("Você tem convite?")

if(nome === "Joana" && temConvite === "sim"){
    alert("Pode entrar! ")
}else{
    alert("Você não pode entrar")
}