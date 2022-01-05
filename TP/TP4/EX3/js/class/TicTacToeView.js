class TicTacToeView {
    constructor(game, name) {
        this.gameCore = game;
        this.gameName = name;
        this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
    }

    /*
     *          SETTERS
     */

    /**
     * Permet de mettre à jour une balise html afin d'afficher lequel joueur est actuellement en train de joueur
     *
     * @param number
     */
    displayCurrentPlayer(number) {
        document.getElementById("player_number").textContent = "C'est au joueur: " + number;
    }

    /**
     * Cette fonction permet d'afficher le symbole O ou X grâce à une position donnée
     *
     * @param column
     * @param line
     * @param index
     */
    displaySymbol(column, line, index) {
        if (this.gameCore.getCaseState(column, line) === undefined) {
            let gridCase = document.getElementsByTagName("td");
            gridCase[index - 1].textContent = this.gameCore.getCurrentPlayer();
        } else {
            this.setOutput("This case is already crossed !!!");
            document.getElementById("output").classList.add("warning");
            setTimeout(this.clearOutput, 1500);
        }
    }

    /*
     *          METHODS
     */

    /**
     * Permet de reset l'output
     */
    clearOutput(){
        let outputResult = document.getElementById("output");
        outputResult.setAttribute("class", "");
        outputResult.textContent = "";
    }

    /**
     * Permet d'afficher un message dans l'output
     *
     * @param str
     */
    setOutput(str){ document.getElementById("output").textContent = str; }

    /**
     *  Permet de savoir si la partie est finis et ainsi mettre à jour une balise html
     *  afin de communiquer le résultat de la partie
     *
     * @returns {boolean}
     */
    isGameFinished() {
        if (this.gameCore.isFinished()) {
            let outputResult = document.getElementById("output");
            if (this.gameCore.hasWinner()) {
                this.setOutput("GAME IS FINISHED (ID: " + this.gameName + "), DO WE HAVE A WINNER ?\nTHE WINNER IS " + this.gameCore.getWinner());
                setTimeout(this.clearOutput, 5000);
                return true;
            } else {
                this.setOutput("GAME IS FINISHED (ID: " + this.gameName + "), DO WE HAVE A WINNER ?\nNO WINNER :'(");
                setTimeout(this.clearOutput, 5000);
                return true;
            }
        } else {
            return false;
        }
    }


    /**
     * Cette fonction permet de recommencer à zéro une partie
     * Elle s'occupe de clear l'affichage / reset les variables etc...
     */
    reset() {
        this.gameCore.reset();
        let gridCase = document.getElementsByTagName("td");
        for (const gridCaseElement of gridCase) {
            gridCaseElement.textContent = "";
        }
        this.displayCurrentPlayer(0);
    }

    /**
     *          LISTENER
     */

    /**
     * Fonction associé au listener qui va permettre de différencier les cases
     *
     * @param event
     */
    caseClicked(event) {

        /*                                  E X P L I C A T I O N
         *
         *  Chaque case du tableau (dans le html) possède un attribut data unique à celle-ci
         *  On va donc identifier chaque cas où le data est différent et exécuter des instructions
         *  Par exemple lorsque je clique sur la case qui est identifié par le code html suivant : <td data="1"></td>
         *  on remarque que la balise <td> possède comme attribut data="1" :
         *      1. Notre switch s'occupe de faire une série de test
         *      2. Ici data="1", on se retrouve dans le premier cas
         *      3. On va donc exécuter la fonction displaySymbol() qui va AFFICHER soit (O ou X) en fonction du joueur et la case
         *      4. Bien évidemment on doit venir mettre à jour notre array qui contient l'état de chaque case (gameCore)
         *         C'est l'objectif de la fonction gameCore.play() qui va changer la valeur à l'index I et J par (toujours) soit O ou X
         *      5. On va aussi mettre à jour le joueur i.e faire jouer le prochain joueur
         *      6. On regarde si la partie est terminé (un vainqueur ou non) si c'est le cas on va reset la partie
         */

        let caseIndex = event.target.getAttribute("data");
        switch (caseIndex) {
            case "1":
                this.displaySymbol(0, 0, caseIndex);
                this.gameCore.play(0, 0);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if (this.isGameFinished()) {
                    this.reset();
                    break;
                }
                break;

            case "2":
                this.displaySymbol(1, 0, caseIndex);
                this.gameCore.play(1, 0);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if (this.isGameFinished()) {
                    this.reset();
                    break;
                }
                break;

            case "3":
                this.displaySymbol(2, 0, caseIndex);
                this.gameCore.play(2, 0);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if (this.isGameFinished()) {
                    this.reset();
                    break;
                }
                break;

            case "4":
                this.displaySymbol(0, 1, caseIndex);
                this.gameCore.play(0, 1);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if (this.isGameFinished()) {
                    this.reset();
                    break;
                }
                break;

            case "5":
                this.displaySymbol(1, 1, caseIndex);
                this.gameCore.play(1, 1);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if (this.isGameFinished()) {
                    this.reset();
                    break;
                }
                break;

            case "6":
                this.displaySymbol(2, 1, caseIndex);
                this.gameCore.play(2, 1);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if (this.isGameFinished()) {
                    this.reset();
                    break;
                }
                break;

            case "7":
                this.displaySymbol(0, 2, caseIndex);
                this.gameCore.play(0, 2);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if (this.isGameFinished()) {
                    this.reset();
                    break;
                }
                break;

            case "8":
                this.displaySymbol(1, 2, caseIndex);
                this.gameCore.play(1, 2);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if (this.isGameFinished()) {
                    this.reset();
                    break;
                }
                break;

            case "9":
                this.displaySymbol(2, 2, caseIndex);
                this.gameCore.play(2, 2);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if (this.isGameFinished()) {
                    this.reset();
                    break;
                }
                break;
            default:
                break;
        }
    }
}