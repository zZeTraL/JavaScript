/**
 * Les fonctions utilisant les opérateurs basiques (arrow function)
 * 
 * @param {any} a 
 * @param {any} b 
 * @returns {any}
 */
var addition = (a, b) => { return a + b };
var soustraction = (a, b) => { return a - b };
var multiplication = (a, b) => { return a * b };
var division = (a, b) => { if (b != 0) return a / b };
var pow = (a) => { return a * a };

// On affiche le résultat retourné par chaque fonction
console.log(addition(5, 5));
console.log(soustraction(5, 5));
console.log(multiplication(5, 5));
console.log(division(5, 5));
console.log(pow(5));