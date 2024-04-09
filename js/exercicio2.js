function tratadorDeCliqueExercicio2() {
    // atualize esta função para
    // exibir um alerta com a hora 
    // atual no seguinte formato:
    // Horário: 8 PM : 40m : 28s

    var date = new Date();

    var hora = date.getHours().toString()+"h";
    var min = date.getMinutes().toString()+"m";
    var sec = date.getSeconds().toString()+"s";

    window.alert(hora + " : " + min + " : " + sec)

    console.log(hora + " : " + min + " : " + sec);
}