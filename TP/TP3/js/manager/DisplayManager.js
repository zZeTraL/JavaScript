let display = (function() {

    let displayInput = document.getElementById("displayInput");
    let displayText = null;

    return {
        // reset de l'affichage
        reset: () => {
          displayInput.value = "";
          displayText = "";
          calculator.setPreviousResult(0);
          calculator.setOperatorType(null);
        },

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