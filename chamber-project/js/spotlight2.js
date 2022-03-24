// Joseph Anucha

const requestURL = "https://anuchaj.github.io/wdd230/chamber-project/data/companies.json";
const companies_directory = document.querySelector(".placeholder");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject["companies"];
    companies.forEach(findSpotlight);
  });
  
function displayCompanies(company, card) {
  // Create elements to add to the document
  let card = document.createElement("section");
  card.setAttribute("class","grid");
  
  let h3 = document.createElement("h3");
  let logo = document.createElement("img");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");

  // Change the textContent property of the h3 element to contain the company's full name
  h3.textContent = ` ${company.name}`;
  p1.innerHTML = `Address: <Strong>${company.address}<Strong>`;
  p2.textContent = `Phone: ${company.phone}`;
  p3.textContent = `Website: ${company.website}`;
  p4.textContent = `Status: ${company.membership}`;
  
  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  logo.setAttribute("src", company.imageurl);
  logo.setAttribute("alt", `Logo of ${company.name}`);
  logo.setAttribute("loading", "lazy");

  // Add/append the section(card) with the h2 element
  card.appendChild(logo);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChild(p4);

  // Add/append the existing HTML div with the cards class with the section(card)
  placeholder.appendChild(card);
}


function findSpotlight(company) { 
  if ((company.membership != "Gold" && company.membership != "Silver") || spotFilled == 3)
      return;
  else {
      if (spotFilled == 0) {
          let bizCard = document.querySelector(".spotOne");
          displayCompanies(company, bizCard);
      }
      if (spotFilled == 1) {
          let bizCard = document.querySelector(".spotTwo");
          displayCompanies(company, bizCard);
      }
      if (spotFilled == 2) {
          let bizCard = document.querySelector(".spotThree");
          displayCompanies(company, bizCard);
      }
      spotFilled++;
  }
}
