let display = (function() {

    let displayInput = document.getElementById("displayInput");
    let displayText = null;

    return {
        // Reset de l'affichage
        reset: () => {
          displayInput.value = "";
          displayText = "";
          calculator.setPreviousResult(0);
          calculator.setOperatorType(null);
        },

        // Clear de l'affichage (mémoire non effacé)
        clear: () => {
            displayInput.value = "";
            displayText = "";
        },

        // Adders
        addToArray: (array) => {
            displayText += array;
            displayInput.value = displayText;
        },

        // Getters
        getArray: () => displayText,

        // Setters
        setArray: (array) => {
            displayText = array
            displayInput.value = displayText;
        },

    }

})();