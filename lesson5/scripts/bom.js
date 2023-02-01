const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
  let chapter = input.value;
  if (input.value.length >= 1) {
    input.value = '';

    const listChapter = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listChapter.appendChild(listText);
    listText.textContent = chapter;
    listChapter.appendChild(listBtn);
    listBtn.textContent = "❌";
    list.appendChild(listChapter);

    listBtn.onclick = function(e) {
      list.removeChild(listChapter);
    }
  } else {
      alert("Please enter a value");
  }

input.focus();
}