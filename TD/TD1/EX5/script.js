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

/**
 * simulateParty simule plusieurs parties en fonction de n
 * 
 * @param {any} n 
 * @returns {Array}
 */
var simulateParty = (n) => {
    let result = [0, 0];
    for (let i = 0; i < n; i++) {
        let tmp = getRandomNumber();
        result[1] += tmp;
        for (let j = 0; j < tmp; j++) {
            let random = Math.random();
            if(random <= 0.78){result[0]++;}
        }
    }
    return result;
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
console.log("\nPour 1000 simulation...");

let t = simulateParty(1000);
console.log(t[0], t[1]);
console.log("En moyenne, il faut préparer: " + (t[0] / 1000) + " cocktails du brevage divin !");