// Variables globales
let displayInput = document.getElementById("displayInput");
let graphDiv = document.getElementById("graphDiv");

// Listener
document.onclick = isInput;
displayInput.oninput = isInput;

// Listener déclarer qui détecte lorsque l'on presse une touche
document.addEventListener('keydown', isInput);

/**
 * Permet de faire la différence entre une saisie dans l'input ou une saisie
 * avec les boutons ou par clavier
 *
 * @param {Event} event
 */
function isInput(event){
    if(event.target !== displayInput){
        isButtonPressed(event);
        // DEBUG
        //console.log("OUTSIDE OF THE INPUT");
    } else {
        let str;
        str = displayInput.value;
        display.setArray(str);
        // DEBUG
        //console.log("INSIDE OF THE INPUT");
    }
}

/**
 * Permet d'update le graphique avec une nouvelle fonction
 *
 * @param {string} str
 */
let updateGraphic = (str) => {
    graph.data.datasets.data = []
    graph.update();

    // On récupère l'objet data qui contient le 10 première images de ma fonction
    let dateRetrieved = calculateSomeImage(str, 10);

    // On push les résult dans l'objet data de mon graph
    graph.data.datasets.forEach((dataset) => {
        for (let i = 0; i < dateRetrieved.length; i++) {
            dataset.data.push(dateRetrieved[i]);
        }
        console.log(dataset.data.length);
    });

    // On update le graphique
    graph.update();
};
/**
 * Permet de calculer les n premières images d'une fonction
 *
 * @param {string} str
 * @param {number} n
 * @returns {[{}]}
 */
function calculateSomeImage(str, n){
    let dataList = [{}]
    for (let i = 0; i < n; i++) {
        str = str.replace('X', i);
        console.log(str);
        let tmp = {
            x: i,
            y: eval(str),
        };
        str = str.replace(i, 'X');
        console.log(str);
        dataList.push(tmp);
    }
    return dataList;
}

/*
 * CANVAS SECTION
 */
const ctx = document.getElementById('myChart').getContext('2d');

// Data que contient mon tableau i.e. les x, y
let data = {
    datasets: [{
        backgroundColor: "Black",
        data: [],
    }]
};

// Permet de définir les axes x et y l'origine etc...
let options = {
    responsive: true,
    indexAxis: ['x', 'y'],
    scales: {
        x: {
            beginAtZero: true,
        },
        y: {
            beginAtZero: true,
        }
    }
};

// Type de graphique
let config = {
    type: 'line',
    data: data,
    options: options,
}

let graph = new Chart(ctx, config);
