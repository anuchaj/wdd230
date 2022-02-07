const d = new Date();
let currentyear = d.getFullYear();
let lastdatemodified = document.lastModified;

const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let notification = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

if (day == "Monday" || day == "Tuesday") {
  document.getElementById("banner").textContent = notification;
}

document.getElementById("©").textContent = currentyear;
document.getElementById("wk-day").textContent = day;
document.getElementById("date").innerHTML = d.getDate();
document.getElementById("month").textContent = monthNames[d.getMonth()];
document.getElementById("year").innerHTML = d.getFullYear();
document.getElementById("datemodified").textContent = lastdatemodified;
