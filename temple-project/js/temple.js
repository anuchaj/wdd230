const requestURL = "https://anuchaj.github.io/wdd230/temple-project/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject["temple"];
   
    temple.forEach(displayCard);
  });


function displayCard(templ) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let templeName = document.createElement('p');
    let address = document.createElement('p');
    let phoneNum = document.createElement('p');
    let service = document.createElement('p');
    let portrait = document.createElement('img');
    let ordinance = document.createElement('p');
    let closure = document.createElement('p');
    let history = document.createElement('p');
    let like = document.createElement('button');
    like.classList.add('clickme');

  
    // Change the textContent property of the h2 element to contain the biz's full name
    templeName.textContent = templ.name;
    address.textContent = templ.address;
    phoneNum.textContent = templ.phone;
    service.textContent = templ.service;
    ordinance.textContent = templ.ordinance;
    closure.textContent = templ.closures;
    history.textContent = templ.history;
    like.textContent = templ.like;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', templ.imageurl);
    portrait.setAttribute('alt', 'Logo of ' + templ.name);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the businessName element
    card.appendChild(portrait);
    card.appendChild(templeName);
    card.appendChild(address);
    card.appendChild(phoneNum);
    card.appendChild(ordinance);
    card.appendChild(closure);
    card.appendChild(history);
    card.appendChild(service);
    card.appendChild(like);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#cards').appendChild(card);
  }


let button1 = document.querySelector(".clickme");
counter1 = 0;
button1.onclick = function() {
  counter1 += 1;
  button1.innerHTML = "Like " + counter1;
};


function gridView() {
  document.getElementById('grid').classList.add("open");
  document.getElementById('cards').classList.remove("open");
}

function listView() {
  document.getElementById('cards').classList.add("open");
  document.getElementById('grid').classList.remove("open");
}

const lv = document.getElementById('list');
lv.onclick = listView;

const c = document.getElementById('grid');
c.onclick = gridView;