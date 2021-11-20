let mealListDiv = document.getElementById("list");
let ingredientTableDiv = document.getElementById("table");

for (let index = 0; index < meal.length; index++) {
    let ul = document.createElement("ul");
    mealListDiv.append(ul);

    let li = document.createElement("li");
    li.innerHTML = "<strong>" + meal[index].name + " : " + getMealPrice(meal[index]) + "€</strong>" +
        "<br><em>Ingrédients: " + getComponent(meal[index].ingredients) + "<br>Temps de préparation: " + meal[index].preparationTime + "s</em>";
    ul.append(li);
}

for (let element of ingredients) {
    let tr = document.createElement("tr");
    ingredientTableDiv.childNodes[1].appendChild(tr);

    let th = document.createElement("th");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");

    th.innerHTML = element.name;
    tr.appendChild(th);
    th1.innerHTML = isLocal(element.local);
    tr.appendChild(th1);
    th2.innerHTML = element.prix + "€";
    tr.appendChild(th2);
}