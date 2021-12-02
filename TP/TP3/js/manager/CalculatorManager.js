let calculator = (function() {

    let previousResult = 0;
    let repResult = 0
    let operatorType = '';

    return {
        /**
         * Permet de calculer une expression basique
         *
         * @param {number} number
         * @param {number} otherNumber
         * @param {string} op
         * @returns {number}
         */
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

        /**
         * Permet de calculer les n premières images d'une fonction
         *
         * @param {string} str
         * @param {number} n
         * @returns {[{}]}
         */
        calculateFunction: (str, n) => {
            let dataList = [{}];
            let savedString = str;
            let indexOfX = str.indexOf('X');
            for (let i = 0; i < n; i++) {
                if(i > 10) str = savedString;

                str = str.replace('X', i);
                // DEBUG
                //console.log(str);
                //console.log(Function("return " + parseFloat(str))());

                let tmp = {x: i, y:  parseFloat(Function("return " + str)())};
                // Pour les fonctions du type 1/X : car lorsque i = 1 il va replace le premier 1
                str = str.replaceAt(indexOfX, 'X');
                //console.log(tmp);
                dataList.push(tmp);
            }
            return dataList;
        },


        // Getters
        getPreviousResult: () => previousResult,
        getOperatorType: () => operatorType,
        getRepResult: () => repResult,

        // Setters
        setPreviousResult: (number) => previousResult = number,
        setOperatorType: (array) => operatorType = array,
        setRepResult: (number) => repResult = number,

    }

})();