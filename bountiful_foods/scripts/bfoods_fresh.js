const requestURL = 'https://anuchaj.github.io/wdd230/bountiful_foods/json/fruits.json';
//const requestURL = "../json/fruits.json";

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
    //console.log(randomFruits);
    randomFruits.forEach(displayCard);
    //console.log(carbohydrates);
    //fruits.forEach(displayCard);
    
    //Display the selected/available fruits
    document.querySelector(".fruit_1").innerHTML = randomFruits[0].name;
    document.querySelector(".fruit_2").innerHTML = randomFruits[1].name;
    document.querySelector(".fruit_3").innerHTML = randomFruits[2].name;

    // Display the nutritional facts
    document.getElementById("carbohydrate").innerHTML = carbohydrates.toFixed(2);
    document.getElementById("protein").innerHTML = protein.toFixed(2);
    document.getElementById("fat").innerHTML = fat.toFixed(2);
    document.getElementById("sugar").innerHTML = sugar.toFixed(2);
    document.getElementById("calories").innerHTML = calories.toFixed(2);

  });


let carbohydrates = 0;
let protein = 0;
let fat = 0;
let sugar = 0;
let calories = 0;


function displayCard(fruit) {
    // Create elements to add to the document
    let label = document.createElement("label");
    label.setAttribute("class", "select_fruits");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    let br = document.createElement("br");
    

    // Change the textContent property of the label element to contain the fruits's info
    label.textContent = fruit.name;
    carbohydrates += fruit.nutritions.carbohydrates;
    protein += fruit.nutritions.protein;
    fat += fruit.nutritions.fat;
    calories += fruit.nutritions.calories;
    sugar += fruit.nutritions.sugar;


    // Add/append the label with the input and br elements
    label.appendChild(input);
    label.appendChild(br);


    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector(".fruits_choice").appendChild(label);
}

// Adding eventListener to the Make Drink button
//document.getElementById("info_and_nuts").addEventListener("click", cust_info);
let currentDate = new Date().toJSON().slice(0, 10);
//console.log(currentDate);


//Display user's information
function cust_info() {
    //Input
    let fname = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let text_area = document.getElementById("text_area").value;
   
    //Ouput
    document.querySelector(".cust_name").innerHTML = fname;
    document.querySelector(".cust_email").innerHTML = email;
    document.querySelector(".cust_phone").innerHTML = phone;
    document.querySelector(".special_instruction").innerHTML = text_area;
    document.querySelector("#order_date").innerHTML = currentDate;
    document.getElementById('info_and_nuts').style.display='block';

    count++
}

//Track the number of orders or drinks made by the user.
clickCounter();

function clickCounter() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("orders_submitted").innerHTML = localStorage.clickcount;
}
