let inputField = document.getElementById("consoleOutput");

let array = ""

function display(text) {
    inputField.value += text;
}

function reset(){
    inputField.value = "";
}

function calculer(){
    let a = inputField.value;
    let b = eval(a);
    inputField.value = b;
}