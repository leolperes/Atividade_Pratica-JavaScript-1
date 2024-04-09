function modificaString () {
    
    var str = window.prompt("Insira uma palavra");
    str = str.slice(1, str.length-1);
    window.alert(str);
}