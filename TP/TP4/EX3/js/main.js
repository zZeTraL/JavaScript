(function() {
    let game = new TicTacToe();
    let view = new TicTacToeView(game, 'morpion1');

    // Listener 'click' pour chaque td
    let gridCase = document.getElementsByTagName("td");
    Array.from(gridCase).forEach(function(element) {
        element.addEventListener('click', (event) => view.caseClicked(event));
    });

})();