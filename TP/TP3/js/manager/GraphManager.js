let graphManager = (function() {


    const ctx = document.getElementById('myChart').getContext('2d');
    let dataTypeList = ["backgroundColor", "data"];
    let oldData = null;

    let data = {
        datasets: [{
            backgroundColor: "Black",
            data: [],
        }]
    };

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
         * @param {Object} newData
         * @param {string} type
         */
        setData: (newData, type) => {
            if(dataTypeList.includes(type)){
                if(oldData != null) {
                    while (graphic.data.datasets[0].data.length != 0){
                        graphic.data.labels.pop();
                        graphic.data.datasets[0].data.pop();
                        graphic.update();
                    }
                }

                switch (type){
                    case "data":

                        let dataRetrieved = calculator.calculateFunction(display.getArray(), 10);
                        oldData = dataRetrieved;

                        graphic.data.datasets.forEach((dataset) => {
                            for (let i = 0; i < dataRetrieved.length; i++){
                                dataset.data.push(dataRetrieved[i]);
                            }
                            // DEBUG
                            //console.log(dataset.data.length);
                        })
                        graphic.update();
                        break;
                    case "backgroundColor":
                        data.datasets.backgroundColor = newData;
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
