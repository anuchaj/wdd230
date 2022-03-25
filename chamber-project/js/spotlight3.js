const requestFile = "https://anuchaj.github.io/wdd230/chamber-project/data/companies.json";
let value = false;
let website = '';
let directory
let spotlight = ['spotOne', 'spotTwo', 'spotThree'];

function fetchData (directory){
    fetch(requestFile)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) { 
    
    directory = jsonObject["companies"];

    getSpotlightMembers(directory)
  });
}

function getRandomInt(max) {
    let int = []
    for (let i = 0; i < 3; i++) {
        spot = Math.floor(Math.random() * max);
        if (int.includes(spot)) {
            i--;
        } else {    
            int.push(spot);
        }
    }
    return int
  }

function getSpotlightMembers(directory){
    const newDir = directory.filter(memberStatus);
    const int = getRandomInt(newDir.length)    
    
    displaySpotlight(newDir, int, spotlight);
}

function displayCompanyWebsite(listing, value) {
    for  (const property in listing) {
        if (property == "website") {
            value = true
            website = document.createElement('a');
            website.setAttribute('href', `${listing.website}`)
            website.textContent = 'Website';
            return {website, value};
        }   
    };
return {website, value};
}

function displaySpotlight(listing, int, label) {
    for (let i=0; i < label.length; i++) {
        let spotNum= label[i];
        let compNum = int[i]
        
        let container = document.createElement('div');
        container.setAttribute('class', `${spotNum}`)
        document.querySelector('.placeholder').appendChild(container);

        let compName = document.createElement('h2');
        let image = document.createElement('img');
        let address = document.createElement('p');
        let hr = document.createElement('hr')
        let phone = document.createElement('p');
        let website = displayCompanyWebsite(listing[compNum], value);

        compName.textContent = `${listing[compNum].name}`;
        address.textContent = `${listing[compNum].address}`;
        phone.textContent = `${listing[compNum].phone}`;
        image.setAttribute('src', listing[compNum].logo);
        image.setAttribute('alt', `${listing[compNum].name} logo`);
        hr.setAttribute('stlye', "width:90%;text-align:center;")
        // Add/append the section(card) with the h2 element
        container.appendChild(compName);
        container.appendChild(image);
        container.appendChild(address);
        container.appendChild(hr)
        container.appendChild(phone);
    
        if (website.value == true) {
            container.appendChild(website.website);

        }else {
            alternate = document.createElement('p');
            alternate.setAttribute('class', 'alternate')
            alternate.innerHTML = `<em>Come in and see us!</em>`;
            container.appendChild(alternate);
        }
    }
  }

function memberStatus(dir){
    return dir["membership"] == "Gold" || dir["membership"] == "Silver"

}

window.addEventListener('load', fetchData);

