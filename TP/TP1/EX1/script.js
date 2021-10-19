/**
 * Les fonctions utilisant les opérateurs basiques
 * 
 * @param {any} a 
 * @param {any} b 
 * @returns {any}
 */
function addition(a, b) { return a + b; }
function soustraction(a, b) { return a - b; }
function multiplication(a, b) { return a * b; }
function division(a, b) { if (b != 0) { return a / b; } }
function pow(a) { return a * a; }

// On affiche le résultat retourné par chaque fonction
console.log(addition(5, 5));
console.log(soustraction(5, 2));
console.log(multiplication(5, 10));
console.log(division(5, 5));
console.log(pow(5));
