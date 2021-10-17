/**
 * Génère un nombre aléatoire dans un intervalle fermé
 * 
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */
var getRandomNumber = (min = 200, max = 250) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let guest = getRandomNumber();
let guestWhoDrinks = 0;
//
for (let index = 0; index < guest; index++) {
    let tmp = Math.random();
    if (tmp <= 0.78) {
        guestWhoDrinks++;
    }
}

console.log("\nPour une simple soirée...\nNombre de personnes présentent à la soirée: " + guest);
console.log("Nombre de personnes voulant boire le brevage divin: " + guestWhoDrinks);
console.log("\nPour 5 soirées...");

guestWhoDrinks = 0;
for (let repeat = 0; repeat < 5; repeat++) {
    for (let index = 0; index < guest; index++) {
        let tmp = Math.random();
        if (tmp <= 0.78) {
            guestWhoDrinks++;
        }
    }
}

console.log("Il faut donc préparer en moyenne: " + Math.ceil(guestWhoDrinks / 5) + " cocktails du brevage divin !");