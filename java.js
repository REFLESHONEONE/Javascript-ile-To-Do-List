const input = document.querySelector(".in-pt");
const BTN = document.querySelector(".BTN");
const title = document.querySelector(".title");
const ul = document.querySelector(".ul-ul");
BTN.addEventListener("click", go);
function go() {
  if (input.value != "") {
    let liste = document.createElement("li");
    liste.innerHTML = input.value;
    ul.appendChild(liste);
    input.value = "";
  }
}
