// Conferi se o CPF tem exatamente 11 digitos
function haOnzeDigitos(cpf) {
    return cpf.length == 11;
}

// Conferi se todos os digitos são números
function todosOsOnzeDigitosSaoNumeros(cpf) {
    listaNumeros = [];
    for (let i = 0; i <= 10; i++){
        listaNumeros.push(cpf[i]);
    }

    let ehNumero = true;
    for (var n of listaNumeros) {
        let nInt = parseInt(n)
        if (isNaN(nInt)){
            ehNumero = false;
            break;
        }
    }
    return ehNumero
}

// Conferi se todos os digitos não são iguais
function osOnzeNumerosSaoDiferentes(cpf) {
    let ehIgual = true;
    for (let i = 1; i<=10; i++){
        if (cpf[i] != cpf[0]){
            ehIgual = false;
        }
    }
    return !ehIgual
}

// Conferi se o primeiro digito de verificação é válido
function oPrimeiroDigitoVerificadorEhValido(cpf) {
    let listaNumeros = [];

    for (let i = 8; i >=0; i--){
        listaNumeros.push(cpf[i])
    }

    let soma = 0

    for (let i = 10; i >= 2; i--){
        soma = soma + (i * listaNumeros[i-2]);
        console.log(listaNumeros[i-2]+" "+i)
        console.log(soma+" "+i)
    }

    soma = soma * 10;
    soma = soma % 11;

    if (soma == 10){
        soma = 0
    }

    return soma == parseInt(cpf[9]);
}

// Conferi se o segundo digito de verificação é válido
function oSegundoDigitoVerificadorEhValido(cpf) {
    let listaNumeros = [];

    for (let i = 9; i >=0; i--){
        listaNumeros.push(cpf[i])
    }

    let soma = 0

    for (let i = 11; i >= 2; i--){
        soma = soma + (i * listaNumeros[i-2]);
        console.log(listaNumeros[i-2]+" "+i)
        console.log(soma+" "+i)
    }

    soma = soma * 10;
    soma = soma % 11;
    
    if (soma == 10){
        soma = 0
    }

    return soma == parseInt(cpf[10]);
}





//------------------- Não edite abaixo ----------------------------
function validarCPF(validacao, cpf) {
    switch (validacao) {
        case "onzeDigitos": return haOnzeDigitos(cpf)
        case "onzeSaoNumeros": return todosOsOnzeDigitosSaoNumeros(cpf) && validarCPF("onzeDigitos", cpf)
        case "naoSaoTodosIguais": return osOnzeNumerosSaoDiferentes(cpf) && validarCPF("onzeSaoNumeros", cpf)
        case "verificador10": return oPrimeiroDigitoVerificadorEhValido(cpf) && validarCPF("naoSaoTodosIguais", cpf)
        case "verificador11": return oSegundoDigitoVerificadorEhValido(cpf) && validarCPF("verificador10", cpf)

        default:
            console.error(validacao+" é um botão desconhecido...")
            return false
    }
}


function tratadorDeCliqueExercicio9(nomeDoBotao) {
    const cpf = document.getElementById("textCPF").value

    const validacao = (nomeDoBotao === "validade") ? "verificador11": nomeDoBotao
    const valido = validarCPF(validacao, cpf)
    const validoString = valido ? "valido": "inválido"
    const validadeMensagem = "O CPF informado ("+cpf+") é "+ validoString
    console.log(validadeMensagem)

    if (nomeDoBotao !== "validade") {
        let divResultado = document.getElementById(validacao);
        divResultado.textContent = validoString
        divResultado.setAttribute("class", valido ? "divValidadeValido": "divValidadeInvalido")    
    } else {
        window.alert(validadeMensagem)
    }

    
}