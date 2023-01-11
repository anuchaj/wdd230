let d = new Date();
let currentyear = d.getFullYear();
let lastdatemodified = document.lastModified;

document.getElementById("currentyear").textContent = currentyear;
document.getElementById("datemodified").textContent = lastdatemodified;
