let graphManager = (function() {


    const ctx = document.getElementById('myChart').getContext('2d');
    let dataTypeList = ["backgroundColor", "data"];
    let oldData = null;

    let data = {
        datasets: [{
            label: "Fonction",
            backgroundColor: "Black",
            data: [],
        }]
    };

    let options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Graphique de la fonction f(x)"
            },
        },
        indexAxis: ['x', 'y'],
        scales: {
            x: {
                min: 0,
            },
            y: {
                min: 0,
            }
        }
    };

    let config = {
        type: 'line',
        data: data,
        options: options,
    };

    let graphic = new Chart(ctx, config);

    return {

        // Setters
        /**
         * Permet d'update le graphique avec une nouvelle fonction ou bien de le styliser
         *
         * @param {any} newData
         * @param {string} type
         */
        setData: (newData, type) => {
            if(dataTypeList.includes(type)){
                if(type == "data" && oldData != null) {
                    while (graphic.data.datasets[0].data.length !== 0){
                        graphic.data.labels.pop();
                        graphic.data.datasets[0].data.pop();
                        graphic.update();
                    }
                }

                console.log(type)
                console.log(newData)

                switch (type){
                    case "data":

                        // On va venir calculer les 50 premières images de notre fonction
                        let dataRetrieved = calculator.calculateFunction(display.getArray(), 51);

                        // On stocke les anciennes de données afin de pouvoir les rétablir si on le souhaite
                        oldData = dataRetrieved;

                        // On va ajouter chaque objet (qui contient la composante x et y) au dataset
                        graphic.data.datasets.forEach((dataset) => {
                            for (let i = 0; i < dataRetrieved.length; i++){
                                dataset.data.push(dataRetrieved[i]);
                            }
                        })

                        // On update le graphique
                        graphic.update();
                        break;

                    case "backgroundColor":
                        graphic.data.datasets[0].backgroundColor = newData;
                        graphic.update();
                        break;
                    default:
                        break;
                }
            } else {
                return;
            }
        },

        // Getters
        getGraphic: () => graphic,
        getData: () => data,
        getOldData: () => oldData,
        getOptions: () => options,
        getConfig: () => config,
    }
})();
