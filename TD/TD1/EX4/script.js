let str = "Vérifié sur Chuck Norris : Hulk s'est battu contre Chuck Norris une fois. Depuis, il fait de la pub pour du maïs."

var replaceAll = (string, oldString, newString) => {
    while (string.includes(oldString)) {
        string = string.replace(oldString, newString);
    }
    return string;
};

var wordsAverage = (string) => {
    let size = string.split(" ").length;
    let tmp = replaceAll(string, ",", "");
    tmp = replaceAll(tmp, ".", "");
    tmp = replaceAll(tmp, ":", "");
    tmp = replaceAll(tmp, "  ", " ");
    tmp = tmp.split(" ");
    let totalC = 0;
    for (value in fact2) {
        totalC += fact2[value].length;
    }
    console.log(tmp);

}

let tmp = replaceAll(str, "Chuck Norris", "Lucas");
console.log(tmp);

wordsAverage(str);

