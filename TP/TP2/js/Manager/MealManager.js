/**
 * Return the price of a meal
 *
 * @param {meal} meal
 * @returns {Number}
 */
function getMealPrice(meal ){
    let price = parseFloat(meal.preparationPrice);
    for (let index = 0; index < meal.ingredients.length; index++) {
        // DEBUG
        //console.log(ingredients[meal.ingredients[index]].prix);
        price += parseFloat(ingredients[meal.ingredients[index]].prix);
    }
    return price;
}

/**
 * Return a list of all components required for a meal
 *
 * @param {Array} array
 * @returns {String}
 */
function getComponent(array){
    let str = '';
    for (let index = 0; index < array.length; index++) {
        if(index === array.length - 1){            str += ingredients[array[index]].name + ".";
        } else {
            str += ingredients[array[index]].name + ", ";
        }
    }
    // DEBUG
    //console.log(str)
    return str;
}