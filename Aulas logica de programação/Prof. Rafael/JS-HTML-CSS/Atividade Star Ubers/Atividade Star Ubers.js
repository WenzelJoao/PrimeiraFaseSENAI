function calcularTempoViagem() {
  let distanciaKm = Number(prompt("Digite qual a distancia da viagem:"))
  let velocidadeMediaKmH = 80
  let tempoHoras = distanciaKm / velocidadeMediaKmH
  let tempoSegundos = tempoHoras * 3600
  

  alert(`Tempo de viagem: ${tempoSegundos.toFixed(2)} segundos`)

  if (tempoSegundos >= 60) {
      const minutos = tempoSegundos / 60
      alert(`ou ${minutos} minutos`)
  }
  if (tempoSegundos >= 3600) {
      const horas = tempoSegundos / 3600
      alert(`ou ${horas} horas`)
  }
  if (tempoSegundos >= 86400) {
      const dias = tempoSegundos / 86400
      alert(`ou ${dias.toFixed(2)} dias`)
  }
  if (tempoSegundos >= 2592000) {
      const meses = tempoSegundos / 2592000
      alert(`ou ${meses.toFixed(2)} meses`)
  }
  if (tempoSegundos >= 31104000) {
      const anos = tempoSegundos / 31104000
      alert(`ou ${anos.toFixed(2)} anos`)
  }
}
