let mealListDiv = document.getElementById("list")

for (let index = 0; index < meal.length; index++) {
    let li = document.createElement("li")
    li.innerHTML = "<strong>" + meal[index].name + " : " + getMealPrice(meal[index]) + "€</strong>"
    mealListDiv.append(li)

    let ul = document.createElement("ul")
    ul.innerHTML = "<em>" + getComponent(meal[index].ingredients) + "<br>" + "Temps de préparation: " + meal[index].preparationTime + "</em>"
    li.append(ul)
    
}

/**
 * Return the price of a meal
 * 
 * @param {meal} meal
 * @returns {any}
 */
function getMealPrice(meal){
    let price = parseFloat(meal.preparationPrice)
    for (let index = 0; index < meal.ingredients.length; index++) {
        // DEBUG
        //console.log(ingredients[meal.ingredients[index]].prix)
        price += parseFloat(ingredients[meal.ingredients[index]].prix)
    }
    return price
}

console.log(getMealPrice(meal[0]))

/**
 * Return a string of all components required
 * 
 * @param {Array} array
 * @returns {String} 
 */
function getComponent(array){
    let str = ''
    for (let index = 0; index < array.length; index++) {
        if(index == array.length - 1){
            str += ingredients[array[index]].name + "."
        } else {
            str += ingredients[array[index]].name + ", "
        }
    }
    // DEBUG
    //console.log(str)
    return str
}