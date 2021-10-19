let myArray = [157, 10, 81, 1000, 4, 1024, 16, 492, 9, 287, 0];

//Array.prototype.filter va supprimer tous les éléments ne correspondant pas à nos conditions
let impair = myArray.filter(value => 0 != value % 2);

//Array.prototype.map va effectuer pour chaque valeur d'une array une fonction
let sin = myArray.map(value => Math.sin(value));
let log = myArray.map(value => Math.log10(value));

//on affiche les résultats
console.log(myArray);
console.log(impair);
console.log(sin);
console.log(log);