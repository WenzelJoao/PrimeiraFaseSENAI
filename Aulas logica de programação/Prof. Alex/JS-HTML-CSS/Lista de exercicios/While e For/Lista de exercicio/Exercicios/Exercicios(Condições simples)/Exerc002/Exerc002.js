// 2. Verifique se um número digitado é positivo e par.

function exerc002() {

    let numero = Number(prompt("Digite um numero:"))
    if (numero % 2 === 0) {
        alert(`O numero ${numero} é par!`)
        if (numero > 0) {
            alert(`O numero é positivo! `)
        }
        else if (numero === 0) {
            alert(`O numero digitado ${numero} é um numero neutro!`)
        }
        else {
            alert("O numero é negativo ")
        }
    }
        if (numero % 2 === 1) {
        alert(`O numero ${numero} é impar!`)
    }
}
