let myArray = [20, 1, 13, 8, 10, 6, 15, 25, 2, 10, 14, 18, 9];

printHistogramHorizontal = (array) => {
    let tmp = [[], [], [], [], [], [], [], [], [], [], [], [], []];
    for (let index = 0; index < array.length; index++) {
        for (let s = array[index]; s != 0; s--) {
            tmp[index].push("|");
            array[index] -= 1;
            //console.log(array[index])
        }
    }
    console.table(tmp);
};

printHistogramVertical = (array) => {
    let tmp = [[], [], [], [], [], [], [], [], [], [], [], [], []];
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }

    //console.table(tmp);
};

let tmp = myArray;
printHistogramHorizontal(tmp);
printHistogramVertical(myArray);