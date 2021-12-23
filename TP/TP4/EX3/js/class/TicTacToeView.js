class TicTacToeView{
    constructor(game, name) {
        this.gameCore = game;
        this.gameName = name;

        this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
    }

    // Setters
    displayCurrentPlayer(number){
        document.getElementById("player_number").textContent = "C'est au joueur: " + number;
    }

    displaySymbol(column, line, index){
        if(this.gameCore.getCaseState(column, line) === undefined){
            let gridCase = document.getElementsByTagName("td");
            gridCase[index - 1].textContent = this.gameCore.getCurrentPlayer();
        } else {
            console.log("THIS CASE IS ALREADY CROSSED !!!!")
        }
    }


    // Methods
    isGameFinished(){
        if(this.gameCore.isFinished()){
            let outputResult = document.getElementById("output");
            //console.log("GAME IS FINISHED, DO WE HAVE A WINNER ???");
            if(this.gameCore.hasWinner()){
                //console.log("GAME IS FINISHED, WE HAVE A WINNER !!!!");
                //console.log("THE WINNER IS: " + this.gameCore.getWinner());
                //console.log("GAME: " + this.gameName + " IS NOW FINISHED !!!");
                outputResult.textContent = "GAME IS FINISHED (ID: " + this.gameName + "), DO WE HAVE A WINNER ?\nTHE WINNER IS " + this.gameCore.getWinner();
                return true;
            } else {
                //console.log("NO WINNER :'(");
                outputResult.textContent = "GAME IS FINISHED (ID: " + this.gameName + "), DO WE HAVE A WINNER ?\nNO WINNER :'(";
                return true;
            }
        } else {
            return false;
        }
    }

    reset(){
        this.gameCore.reset();
        let gridCase = document.getElementsByTagName("td");
        for (const gridCaseElement of gridCase) {
            gridCaseElement.textContent = "";
        }
        this.displayCurrentPlayer(0);
    }


    caseClicked(event){
        let caseIndex = event.target.getAttribute("data");
        // DEBUG
        //console.log("Case index is: " + caseIndex);

        switch (caseIndex){
            case "1":
                this.displaySymbol(0, 0, caseIndex);
                this.gameCore.play(0, 0);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if(this.isGameFinished()){
                    this.reset();
                    break;
                }
                break;

            case "2":
                this.displaySymbol(1, 0, caseIndex);
                this.gameCore.play(1, 0);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if(this.isGameFinished()){
                    this.reset();
                    break;
                }
                break;

            case "3":
                this.displaySymbol(2, 0, caseIndex);
                this.gameCore.play(2, 0);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if(this.isGameFinished()){
                    this.reset();
                    break;
                }
                break;

            case "4":
                this.displaySymbol(0, 1, caseIndex);
                this.gameCore.play(0, 1);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if(this.isGameFinished()){
                    this.reset();
                    break;
                }
                break;

            case "5":
                this.displaySymbol(1, 1, caseIndex);
                this.gameCore.play(1, 1);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if(this.isGameFinished()){
                    this.reset();
                    break;
                }
                break;

            case "6":
                this.displaySymbol(2, 1, caseIndex);
                this.gameCore.play(2, 1);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if(this.isGameFinished()){
                    this.reset();
                    break;
                }
                break;

            case "7":
                this.displaySymbol(0, 2, caseIndex);
                this.gameCore.play(0, 2);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if(this.isGameFinished()){
                    this.reset();
                    break;
                }
                break;

            case "8":
                this.displaySymbol(1, 2, caseIndex);
                this.gameCore.play(1, 2);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if(this.isGameFinished()){
                    this.reset();
                    break;
                }
                break;

            case "9":
                this.displaySymbol(2, 2, caseIndex);
                this.gameCore.play(2, 2);
                this.displayCurrentPlayer(this.gameCore.getCurrentPlayer());
                if(this.isGameFinished()){
                    this.reset();
                    break;
                }
                break;

            default:
                break;
        }
    }
}