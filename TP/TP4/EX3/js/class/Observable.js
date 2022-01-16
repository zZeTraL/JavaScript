class Observable{

    constructor() {
        // On déclare notre array
        this.data = [];
    }

    /**
     * Ajoute un event à notre gestionnaire d'évènement
     *
     * @param {string} eventName
     * @param {function} callback
     */
    on(eventName, callback){
        // On déclare une clé(string) et une valeur(function) (ça ressemble à une hashmap)
        let array = [eventName, callback]
        // On push notre nouvelle array dans notre array principale
        this.data.push(array);
    }

    /**
     * Retire un event à notre gestionnaire d'évènement
     *
     * @param {string} eventName
     * @param {function} callback
     */
    off(eventName, callback){
        // Cette boucle se charge de trouvé la première occurrence de eventName et de la supprimer
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i][0] === eventName && this.data[i][1] === callback){
                // DEBUG
                //console.log("L'event: " + eventName + " a été trouvé à l'index: " + i + " avec comme callback cette fonction: " + callback);
                //console.log("Win found at index: " + i);
                this.data[i].splice(0, 2);
            }
        }

        // Lorsque notre occurrence est supprimée elle laisse un "déchet" ([] vide), on va donc le retirer
        let newData = [];
        for (let i = 0; i < this.data.length; i++) {
            // Si l'array actuelle n'est pas vide...
            if(this.data[i].length !== 0){
                // On va récréer notre paire clé-valeur
                let array = [this.data[i][0], this.data[i][1]]
                newData.push(array);
            }
        }
        // On affecte l'array principale à notre nouvelle array
        this.data = newData;
    }

    /**
     * Active un event de notre gestionnaire d'évènement
     *
     * @param {string} eventName
     * @param {any} args
     */
    trigger(eventName, ...args){
        // On parcoure notre array afin de trouver notre eventName (1ère occurrence)
        for (let i = 0; i < this.data.length; i++) {
            // Si notre event est trouvé
            if(this.data[i][0] === eventName){
                // On save notre callback function associée à notre event
                let callback = this.data[i][1];

                // L'utilisation de ...args requiert de savoir quelles sont les fonctions qui peuvent être appelées
                switch (eventName){
                    case "win":
                        if(args.length === 1){
                            callback(args[0])
                        }
                        break;
                    case "move":
                        if(args.length === 3){
                            callback(args[0], args[1], args[2])
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }

}