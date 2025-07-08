let senha = "Joao123"
let tentativas = 1
let acertou = false

while(tentativas <= 3 && acertou === false){
    let senhaTentativa = prompt("Digite sua senha:")
    if(senha === senhaTentativa){
        alert("Senha correta, usuário logado!")
        acertou = true
    }   
    else{
        let tentativasSobrando = 3 - tentativas
        alert(`Senha incorreta! você tem mais ${tentativasSobrando} tentativas.`)
    }
    tentativas++
}
if(acertou === false) alert("Conta bloqueada!")
else alert("Você esta dentro do sistema!")