let str = "Vérifié sur Chuck Norris : Hulk s'est battu contre Chuck Norris une fois. Depuis, il fait de la pub pour du maïs."

/**
 * Replace tous les mots d'une chaîne par un autre
 * 
 * @param  {any} string
 * @returns {any}
 */
var replaceAll = (string, oldString, newString) => {
    /* 
        Array.prototype.includes va chercher si la chaîne contient un mot
        retourne donc true ou false en fonction 
    */
    while (string.includes(oldString)) {
        // Array.prototype.replace = remplace une occurrence par une autre
        string = string.replace(oldString, newString);
    }
    return string;
};


/**
 * Trouve la taille moyenne des mots dans une chaîne
 * 
 * @param  {any} string
 * @returns {Number}
 */
var wordsSizeAverage = (string) => {
    string = string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "");
    string = replaceAll(string, "  ", " ");
    string = string.split(" ");
    let numOfWord = string.length;
    let numOfLetter = 0;
    for (value in string) {
        numOfLetter += string[value].length;
    }
    // DEBUG
    //console.log(numOfWord);
    //console.log(numOfLetter);
    return numOfLetter / numOfWord;
}

var uniqueLetterArray = (string) => {
    /*  
        Set est un objet qui permet de stocker des valeurs uniques
        On a donc créer une instance qui matérialise la classe de Set et qui va contenir les valeurs uniques
        De plus on met les lettres en minuscules pour évincer les majuscules de notre tableau unique
    */
    let uniqueLetterSet = new Set(string.replace(/[&\/\\#,+()$~%.'":*?<>{}  ]/g, "").toLowerCase());

    /* 
        Avant d'effectuer le console.log on va convertir notre collection (Set) en array afin de pouvoir l'afficher comme un tableau et ensuite le trier
        DEBUG
    */
    //console.log(Array.from(uniqueLetterSet));
    return Array.from(uniqueLetterSet);
};

//Affichage des résultats
console.log("\n" + str);
console.log("\nLa taille moyenne des mots de la phrase est de: " + wordsSizeAverage(str) + " lettres !");
console.log("Voici notre tableau contenant les lettres uniques: " + uniqueLetterArray(str));

//Utilisation de la fonction sort() qui va venir trier notre tableau par ordre croisant (ici alphabétique)
console.log("Voici notre tableau contenant les lettres uniques triées par ordre alphabétique: " + uniqueLetterArray(str).sort());