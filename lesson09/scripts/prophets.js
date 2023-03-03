const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      //card.setAttribute('class','grid');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let h3 = document.createElement('h3');
      let h4 = document.createElement('h4');
      let order = document.createElement('h4');
  
      // Build the h2, h3, and h4 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      h3.innerHTML = `Birthdate: <Strong>${prophet.birthdate}<Strong>`;
      h4.textContent = `Birthplace: ${prophet.birthplace}`;
      order.textContent = `# ${prophet.order}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of Prophet #${prophet.order} ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
      card.appendChild(h3);
      card.appendChild(h4);
      card.appendChild(order);
  
      cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression

getProphetData();