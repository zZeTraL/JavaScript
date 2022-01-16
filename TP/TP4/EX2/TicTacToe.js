class TicTacToe extends Observable {
    constructor() {
        super();
        this.currentPlayer = 0;
        this.mate = false;
        this.winner = undefined;
        this.grid = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]]
    }

    // Getters
    getCurrentPlayer(){ return this.currentPlayer; }
    getCaseState(column, line){ return this.grid[column][line]; }
    isFinished(){

        // win column / 3 possibilités
        if((this.grid[0][0] === 0 && this.grid[0][1] === 0 && this.grid[0][2] === 0) || (this.grid[0][0] === 1 && this.grid[0][1] === 1 && this.grid[0][2] === 1)){ return true; }
        if((this.grid[1][0] === 0 && this.grid[1][1] === 0 && this.grid[1][2] === 0) || (this.grid[1][0] === 1 && this.grid[1][1] === 1 && this.grid[1][2] === 1)){ return true; }
        if((this.grid[2][0] === 0 && this.grid[2][1] === 0 && this.grid[2][2] === 0) || (this.grid[2][0] === 1 && this.grid[2][1] === 1 && this.grid[2][2] === 1)){ return true; }

        // win line / 3 possibilités
        if((this.grid[0][0] === 0 && this.grid[1][0] === 0 && this.grid[2][0] === 0) || (this.grid[0][0] === 1 && this.grid[1][0] === 1 && this.grid[2][0] === 1)){ return true; }
        if((this.grid[0][1] === 0 && this.grid[1][1] === 0 && this.grid[2][1] === 0) || (this.grid[0][1] === 1 && this.grid[1][1] === 1 && this.grid[2][1] === 1)){ return true; }
        if((this.grid[0][2] === 0 && this.grid[1][2] === 0 && this.grid[2][2] === 0) || (this.grid[0][2] === 1 && this.grid[1][2] === 1 && this.grid[2][2] === 1)){ return true; }

        // win diag / 2 possiblités
        if((this.grid[0][0] === 0 && this.grid[1][1] === 0 && this.grid[2][2] === 0) || (this.grid[0][0] === 1 && this.grid[1][1] === 1 && this.grid[2][2] === 1)){ return true; }
        if((this.grid[0][2] === 0 && this.grid[1][1] === 0 && this.grid[2][0] === 0) || (this.grid[0][2] === 1 && this.grid[1][1] === 1 && this.grid[2][0] === 1)){ return true; }


        // On check si toutes les cases sont actives
        let count = 0;
        for(let column = 0; column < 3; ++column) {
            for(let line = 0; line < 3; ++line) {
                if(this.grid[column][line] !== undefined){ count++; }
            }
        }

        if(count === 9){
            this.mate = true;
            return true;
        }

    }

    /**
     * Vérifie si la partie possède un vainqueur
     * @returns {boolean}
     */
    hasWinner(){
        if(this.isFinished() && this.currentPlayer === 1 && !this.mate){
            this.winner = 0;
            return true;
        } else if (this.isFinished() && this.currentPlayer === 0 && !this.mate) {
            this.winner = 1;
            return true;
        } else {
            return false;
        }
    }

    // Retourne le vainqueur actuel
    getWinner(){ return this.winner; }

    /**
     * Permet de cocher une case
     * @param column
     * @param line
     */
    play(column, line){
        if(this.currentPlayer === 0){
            this.grid[column][line] = 0;
            this.currentPlayer = 1;
        } else {
            this.grid[column][line] = 1;
            this.currentPlayer = 0;
        }
    }

    /**
     * Permet de reset la partie
     */
    reset(){
        this.currentPlayer = 0;
        this.winner = undefined
        this.mate = false;
        for(let column = 0; column < 3; ++column) {
            for(let line = 0; line < 3; ++line) {
                this.grid[column][line] = undefined;
            }
        }
    }

}