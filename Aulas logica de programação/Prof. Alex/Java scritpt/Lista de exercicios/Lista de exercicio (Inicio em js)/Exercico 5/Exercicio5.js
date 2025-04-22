/*O Robô do Café
História:
Um robô serve café conforme o pedido. Ele só aceita "café", "capuccino" ou
"expresso". Qualquer outro pedido, ele responde educadamente.
Desafio:
let pedido;
Responda com:
"Servindo café ☕"
"Servindo capuccino 🧋"
"Servindo expresso 🔥"
"Desculpe, não temos esse tipo de café 😔"*/
let pedido = prompt("Digite o seu pedido: ")

if (pedido === "café"){
    console.log ("Servindo café ☕")
}
else if (pedido === "capuccino"){
    console.log ("Servindo capuccino 🧋")
}
else if (pedido === "expresso"){
    console.log ("Servindo expresso 🔥")
}
else {
    console.log ("Desculpe, não temos esse tipo de café 😔")
}