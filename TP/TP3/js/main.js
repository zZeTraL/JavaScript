// Variables globales
let displayInput = document.getElementById("displayInput");
let graphDiv = document.getElementById("graphDiv");

// Listener
document.onclick = isInput;
displayInput.oninput = isInput;

// Listener déclarer qui détecte lorsque l'on presse une touche
document.addEventListener('keydown', isInput);

/**
 * Permet de faire la différence entre une saisie dans l'input ou une saisie
 * avec les boutons ou par clavier
 *
 * @param {Event} event
 */
function isInput(event){
    if(event.target !== displayInput){
        isButtonPressed(event);
        // DEBUG
        //console.log("OUTSIDE OF THE INPUT");
    } else {
        let str;
        str = displayInput.value;
        display.setArray(str);
        // DEBUG
        //console.log("INSIDE OF THE INPUT");
    }
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}