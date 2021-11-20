/*
 *  On créé deux variables qui contiennent respectivement l'élement qui porte l'id list pui table
 */
let mealListDiv = document.getElementById("list");
let ingredientTableDiv = document.getElementById("table");

/*
 *  La boucle vient parcourir tous les éléments de meal
 */
for (let index = 0; index < meal.length; index++) {
    // on créé une balise <ul> puis on l'ajoute au html
    let ul = document.createElement("ul");
    mealListDiv.append(ul);

    // de même on créé un élément li
    let li = document.createElement("li");

    // on lui ajoute du texte
    // (le nom du plat / le prix total du plat / les ingrédients requis et le temps de préparation)
    li.innerHTML = "<strong>" + meal[index].name + " : " + getMealPrice(meal[index]) + "€</strong>" +
        "<br><em>Ingrédients: " + getComponent(meal[index].ingredients) + "<br>Temps de préparation: " + meal[index].preparationTime + "s</em>";

    // on ajoute l'élément li à ul (i.e. ul à donc pour childs une multitude de balise <li>)
    ul.append(li);
}

/*
 *  Boucle qui parcourt tous les élément de "ingredients"
 */
for (let element of ingredients) {
    // on créé une balise <tr> puis on l'ajoute au html
    let tr = document.createElement("tr");

    // childNodes retourne un tableau des éléments que contient ingredientTableDiv
    // childNodes[1] = j'ajoute donc ma balise <tr> comme child à l'élément 1 de mon tableau
    ingredientTableDiv.childNodes[1].appendChild(tr);

    // 3 balise <th> qui vont contenir les différents informations
    let th = document.createElement("th");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");

    // on ajoute du texte à cette balise puis on les ajoute dans le html
    th.innerHTML = element.name;
    tr.appendChild(th);
    th1.innerHTML = isLocal(element.local);
    tr.appendChild(th1);
    th2.innerHTML = element.prix + "€";
    tr.appendChild(th2);
}