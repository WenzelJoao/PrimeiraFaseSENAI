function mostrarLogin() {
    esconderTodas()
    document.getElementById("login").style.display = "flex"
    document.getElementById("inpLogNome").focus()
}

function mostrarCadastro() {
    esconderTodas()
    document.getElementById("cadastro").style.display = "flex"
    document.getElementById("inpCadNome").focus()
}

function mostrarProdutos() {
    esconderTodas()
    document.getElementById("produtos").style.display = "flex"
    document.getElementById("navbar").style.display = "flex"
}

function esconderTodas() {
    document.getElementById("login").style.display = "none"
    document.getElementById("produtos").style.display = "none"
    document.getElementById("cadastro").style.display = "none"

}

let usuarios = []

function cadastrar() {
    let usuario = {
        nome : document.getElementById("inpCadNome").value,
        email : document.getElementById("inpCadEmail").value,
        senha : document.getElementById("inpCadSenha").value

    }


    usuarios.push(usuario)
    limparImputs()
    mostrarLogin()

    alert("Cadastro realizado com sucesso!")
    
    console.log(usuario)
}



function logar(){
    let nome = document.getElementById("inpLogNome").value
    let senha = document.getElementById("inpLogSenha").value

    for(let i=0; i<usuarios.length; i++){

        if(nome === usuarios[i].nome || nome === usuarios[i].nome && senha === usuarios[i].senha){
            alert("Login efetuado")
            limparImputs()
            mostrarProdutos()
        // }
        // else{
        //     alert("Login não efetuado")
        // }
        
    }

    }
}

function limparImputs(){
    document.getElementById("inpCadNome").value = ''
    document.getElementById("inpCadEmail").value = ''
    document.getElementById("inpCadSenha").value = ''
    
    document.getElementById("inpLogNome").value = ''
    document.getElementById("inpLogSenha").value = ''

}

