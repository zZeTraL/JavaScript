let displayInput = document.getElementById("displayInput");

document.onclick = isInput;
displayInput.oninput = isInput;

document.addEventListener('keydown', isInput);

function isInput(event){
    if(event.target !== displayInput){
        console.log("OUTSIDE OF THE INPUT");
        isButtonPressed(event);
    } else {
        let str;
        str = displayInput.value;
        display.setArray(str);
        console.log("INSIDE OF THE INPUT");
    }
}


/*========================================
 *
 *========================================*/
function calc(str, n){
    let array = [];
    for(let i = 0; i < str.size(); i++){
        if(str[i].includes(operatorList)){

        }
    }
}

const ctx = document.getElementById('myChart').getContext('2d');
const data = {
    datasets: [{
        backgroundColor: 'black',
        data: [10]
    }],
};
const options = {
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
}

let graph = new Chart(ctx, config);
