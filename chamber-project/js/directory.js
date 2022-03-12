// Joseph Anucha

const requestURL = "https://anuchaj.github.io/wdd230/chamber-project/data/companies.json";
const companies_directory = document.querySelector(".companies_directory");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject["companies"];
    companies.forEach(displayCompanies);
  });
  
function displayCompanies(company) {
  // Create elements to add to the document
  let card = document.createElement('section');
  card.setAttribute('class','grid');
  let logo = document.createElement('img');
  let h2 = document.createElement('h2');
  let h3 = document.createElement('h3');
  let h4 = document.createElement('h4');
  let order = "";

  // Change the textContent property of the h2 element to contain the company's full name
  h2.textContent = ` ${prophet.name} ${prophet.lastname}`;
  h3.innerHTML = `Birthdate: <Strong>${prophet.birthdate}<Strong>`;
  h4.textContent = `Birthplace: ${prophet.birthplace}`;
  
  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt', `Portait of Prophet #${prophet.order} ${prophet.name} ${prophet.lastname}`);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(portrait);
  card.appendChild(h3);
  card.appendChild(h4);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}
