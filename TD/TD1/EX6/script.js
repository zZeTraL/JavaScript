let array = [20, 1, 13, 8, 10, 6, 15, 25, 2, 10, 14, 18, 9];

function histogram(array) {
    let tmparray = [[" "], [" "], [" "], [" "], [" "]];
    for (let i in array) {
        if (array[i] > 0 && array[i] <= 5) {
            tmparray[0].unshift("█");
        }
        else if (array[i] > 5 && array[i] <= 10) {
            tmparray[1].unshift("█");
        }
        else if (array[i] > 10 && array[i] <= 15) {
            tmparray[2].unshift("█");
        }
        else if (array[i] > 15 && array[i] <= 20) {
            tmparray[3].unshift("█");
        }
        else {
            tmparray[4].unshift("█");
        }
    }
    let max = Math.max(tmparray[0].length, tmparray[1].length, tmparray[2].length, tmparray[3].length, tmparray[4].length);
    while (tmparray[0].length < max) {
        tmparray[0].push(" ");
    }
    while (tmparray[1].length < max) {
        tmparray[1].push(" ");
    }
    while (tmparray[2].length < max) {
        tmparray[2].push(" ");
    }
    while (tmparray[3].length < max) {
        tmparray[3].push(" ");
    }
    while (tmparray[4].length < max) {
        tmparray[4].push(" ");
    }
    console.log("1-5 6-10 11-15 16-20 21-25");
    for (let i = 0; i < max; i++) {
        console.log(" " + tmparray[0][i] + "   " + tmparray[1][i] + "     " + tmparray[2][i] + "     " + tmparray[3][i] + "     " + tmparray[4][i]);
    }
}

histogram(array);