let numero_secreto = Math.round(Math.random() * 100)
let numero_usuario = 0
console.log(numero_secreto)

while(numero_secreto !== numero_usuario){
    numero_usuario = Number(prompt("Digite um número:"))
    if(numero_usuario === numero_secreto){
        alert("parabéns, você acertou!")
    }
    else if (numero_usuario < numero_secreto){
        alert("O numero que você digitou é maior !")
    }
    else if (numero_usuario > numero_secreto){
        alert("O numero que você digitou é menor !")
    }
    else{
        alert("Erro")
    }
}