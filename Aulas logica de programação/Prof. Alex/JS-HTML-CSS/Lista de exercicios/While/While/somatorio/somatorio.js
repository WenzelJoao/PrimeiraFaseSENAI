let contador = 1 
somatorio = 0

while(contador <= 20){
    let resto = contador % 2 
    if(resto ==0){
        alert(`O numero ${contador} é par`)
        somatorio = somatorio + contador
    }
    contador++
}
alert(`A soma dos numeros pares de 1 a 100 é: ${somatorio}`)