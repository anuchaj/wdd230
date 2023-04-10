const requestURL = 'https://anuchaj.github.io/wdd230/bountiful_foods/json/fruit.json';
//const requestURL = "../data/companies.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const fruits = jsonObject['fruits'];

    let randomFruits = [];
    let fruit = "";
    let count = 0;
    while (count < 3) {
        fruit = fruits[Math.floor(Math.random() * fruits.length)];
        randomFruits.push(fruit);
        count++;
    }
    console.log(randomFruits);
    randomFruits.forEach(displayCard);
    //business.forEach(displayCard); 
  });


let carbohydrate = 0;
let protein = 0;
let fat = 0;
let sugar = 0;
let calories = 0;


function displayCard(fruit) {
    // Create elements to add to the document
    let label = document.createElement("label");
    label.setAttribute("class", "fruit_choice");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    

    // Change the textContent property of the h2 element to contain the biz's full name
    label.textContent = fruit.name;
    carbohydrate += fruit.carbohydrates;
    protein += fruit.protein;
    fat += fruit.fat;
    calories += fruit.calories;
    sugar += fruit.sugar;


    // Add/append the section(card) with the businessName element
    label.appendChild(input);


    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector(".fruits_choice").appendChild(label);
}

