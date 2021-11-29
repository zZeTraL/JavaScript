window.onload = () =>{

    // A chaque load de la page on réinitialise l'affichage
    display.reset();

    // Boucle qui parcourir chaque element avec le balisage <button>
    let allButton = document.getElementsByTagName("button")
    for(let element of allButton){
        // Chacun de ces éléments exécutent désormais une fonction à chaque clique
        element.addEventListener('click', isButtonPressed);
    }
}

function isButtonPressed(event){
    let key;
    // DEBUG
    //console.log(key + " was pressed");

    /*
     * Liste de toutes les touches qui peuvent être activé
     * Cette liste va nous servir pour la saisie sur clavier
     */
    let controlList = ['AC', 'X', 'REP', "=", 'Enter', 'Escape'];
    let operatorList = ['+', '*', '-', '/'];
    let numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

    let keyList = operatorList + numberList + ['Enter', 'Escape'];

    if(event.type === 'keydown'){
        if(keyList.includes(event.key)){
            event.preventDefault();
            key = event.key;
        }
    } else {
        key = this.innerText;
    }

    // Si numberList contient ma key (retourne un booléen true or false)
    if(numberList.includes(key)){
        // On affiche key
        display.addToArray(key)
    }

    // Si operatorListe contient ma key
    if(operatorList.includes(key)){
        let currentResult = display.getArray();

        // Si rien n'est affiché on empêche d'utiliser les opérateurs
        if(currentResult === '' || currentResult === 'X'){
            return;
        } else {
            calculator.setPreviousResult(currentResult);

            // On clear l'affichage
            display.clear();

            // On sauvegarde l'opérateur
            calculator.setOperatorType(key);
        }
    }

    // Si controlList contient ma key
    if(controlList.includes(key)){
        switch (key){
            case 'Escape':
            case 'AC':
                // reset de l'affichage
                display.reset();
                break;

            case 'REP':
                var repResult = calculator.getRepResult();

                // clear de l'écran (mémoire non effacé)
                display.clear();
                if(repResult == 0){break;}

                // J'affiche mon ancien résultat
                display.addToArray(repResult);
                break;

            case 'Enter':
            case '=':

                if(display.getArray().includes('X')){
                    // DEBUG
                    //console.log(display.getArray());
                    updateGraphic(display.getArray());
                }

                var previousResult = calculator.getPreviousResult();
                var currentResult = display.getArray();
                var result;

                if(previousResult == 0 || currentResult == '' || calculator.getOperatorType() == null){break;}
                result = calculator.calculate(previousResult, currentResult, calculator.getOperatorType());

                // Update de l'affichage
                display.setArray(result)

                // Le bouton REP va maintenant fonctionner
                calculator.setRepResult(result);

                // On reset le string de départ afin d'éviter que lorsque l'on appuie sur = on ajoute indéfiniment previousResult
                calculator.setPreviousResult(0);
                break;

            case 'X':
                display.addToArray(key);

            default:
                break;

            /* TODO
             *  - Rendre fonctionnel l'utilisation des puissance de 10
             *  - Afficher le graph en de f(x) (optionnel) car demande un peu plus de travail (saisi manuel)
            */
        }
    }

    /*                              E X P L A N A T I O N
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