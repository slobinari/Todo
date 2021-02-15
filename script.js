var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLenght() {
  return input.value.length;
}
function createListElements() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLenght() > 0) {
    createListElements();
  }
}

function addListAfterKeyPress(event) {
  if (inputLenght() > 0 && event.keyCode === 13) {
    createListElements();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
