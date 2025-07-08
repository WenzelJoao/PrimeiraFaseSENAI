let numero = Number(prompt("Digite um numero:"))
let contador = 1
fatorial = numero

while(contador < numero){
     fatorial =  fatorial * (numero - contador)
    contador++ 
}

alert(`O fatorial de ${numero} é ${fatorial}`)