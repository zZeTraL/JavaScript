window.onload = () =>{

    // A chaque load de la page on réinitialise l'affichage
    display.reset();

    let allButton = document.getElementsByTagName("button")
    for(let element of allButton){
        element.addEventListener('click', isButtonPressed);
    }
}

function isButtonPressed(){
    let key = this.innerText;
    // DEBUG
    //console.log(key + " was pressed");

    /*
     * Liste de toutes les touches qui peuvent être activé
     * Cette liste va nous servir pour la saisie sur clavier
     */
    let controlList = ['AC', 'X', 'REP', "="];
    let operatorList = ['+', '*', '-', '/'];
    let numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

    if(numberList.includes(key)){
        display.addToArray(key)
    }

    if(operatorList.includes(key)){
        let currentResult = display.getArray();

        if(currentResult == ''){
            return;
        } else {
            calculator.setPreviousResult(currentResult);
            display.clear();
            calculator.setOperatorType(key);
        }
    }

    if(controlList.includes(key)){
        switch (key){
            case 'AC':
                display.reset();
                break;

            case 'REP':
                var previousResult = calculator.getPreviousResult();
                if(previousResult == 0){break;}
                display.addToArray(previousResult);
                break;
            case '=':
                var previousResult = calculator.getPreviousResult();
                var currentResult = display.getArray();

                if(previousResult == 0 || currentResult == '' || calculator.getOperatorType() == null){break;}
                display.setArray(calculator.calculate(previousResult, currentResult, calculator.getOperatorType()).toString())
                break;
            default:
                break;


            /* TODO
                Faire pour l'affichage des fonctions afficher le x
            */
        }
    }

    /*
     *
     *  J'ai opter pour un affichage classique
     *  l'affichage se fait inline (lorsque un operateur est activé on clear l'écran)
     *  comme sur les calculatrices à opération basique (ça facilite le code)
     *
     *  Ici, on va donc calculer un à un les parties de notre expression
     *
     *  previousResult contient le résultat précédent
     *
     *  Dès qu'un opérateur est activé par exemple '+' je vais save mon nombre dans previousResult
     *  ainsi dès que mon array principale (qui contient l'expression après l'opérateur qui
     *  se termine lorsque un autre opérateur est appelé ou si l'opérateur = est appelé)
     *
     *  Je vais pouvoir calculer ainsi mon expression est la save dans previousResult et ainsi de suite
     *
     */


}
