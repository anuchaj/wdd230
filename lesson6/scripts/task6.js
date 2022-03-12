/* Lesson 6 */
// Joseph Anucha

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const today = new Date();

// Step 2: Declare another variable to hold the day of the week
let dayOfWeek;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = today.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message1;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
/* if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message1 = "Hang in there!";
} */

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message1 = "Hang in there!";
} else {
    message1 = "Woohoo!  It is the weekend!";
}


/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
    case 0:
        message2 = 'Sunday';
        break;
    case 1:
        message2 = 'Monday';
        break;
    case 2:
        message2 = 'Tuesday';
        break;
    case 3:
        message2 = 'Wednesday';
        break;
    case 4:
        message2 = 'Thursday';
        break;
    case 5:
        message2 = 'Friday';
        break;
    case 6:
        message2 = 'Saturday';
        break;
    default:
        message2 = 'Unknown - ' + dayOfWeek;
        break;
}


/* OUTPUT */

// Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').textContent = message1;

// Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').textContent = message2;



/* FETCH */

// Declare a global empty array variable to store a list of foods and their 
// nutritional contents.
let foodList = [];

const output = (foods) => {
    foods.forEach(
        food => {
            let article = document.createElement('article');

            let foodId = document.createElement('h3');
            foodId.textContent = "Food ID: " + food.fdcId;

            let foodDescription = document.createElement('h3');
            foodDescription.textContent = "Food Description: " + food.description;

            let dataType = document.createElement('h3');
            dataType.textContent = "Food Data type: " + food.dataType;

            let publicationDate = document.createElement('h3');
            publicationDate.textContent = "Publication Date: " + food.publicationDate;

            let foodCode = document.createElement('h3');
            foodCode.textContent = "Food Code: " + food.foodCode;

            article.appendChild(foodId);
            article.appendChild(foodDescription);
            article.appendChild(dataType);
            article.appendChild(publicationDate);
            article.appendChild(foodCode);

            document.querySelector('#foods').appendChild(article);
            let line = document.createElement("hr");
            article.appendChild(line);
        }
    );
}

// Call the output function and pass it the list of foods
fetch("https://run.mocky.io/v3/3aa815ed-b96a-4df6-8f2d-af7aca3a790a")
    .then(response => response.json())
    .then(foods => {
        foodList = foods;
        output(foodList);
    });


