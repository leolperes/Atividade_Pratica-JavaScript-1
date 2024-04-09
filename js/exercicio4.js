function verificaValor () {
    var valor = window.prompt("insira um número");

    let str = "";

    if (valor >= 30 & valor <= 50) {
        str = valor + " está no intervalo [30, 50]."
    } else if (valor >= 60 & valor <= 100) {
        str = valor + " está no intervalo [60, 100]."
    } else {
        str = "O número informado não está em nenhum dos dois intervalos."
    }

    console.log(str)
}