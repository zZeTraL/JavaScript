let calculator = (function() {

    let previousResult = 0;
    let operatorType = '';

    return {
        calculate: (number, otherNumber, op) => {
            number = parseFloat(number);
            otherNumber = parseFloat(otherNumber);

            // DEBUG
            //console.log("Number: " + number + " OtherNumber: " + otherNumber);

            let result = parseFloat("0.0");
            if(op === '+') result = number + otherNumber;
            if(op === '-') result = number - otherNumber;
            if(op === '*') result = number * otherNumber;
            if(op === '/') result = number / otherNumber;
            previousResult = result;

            // DEBUG
            //console.log("Result is " + result);
            return result;
        },


        // Getters
        getPreviousResult: () => previousResult,
        getOperatorType: () => operatorType,

        // Setters
        setPreviousResult: (number) => previousResult = number,
        setOperatorType: (array) => operatorType = array,

    }

})();