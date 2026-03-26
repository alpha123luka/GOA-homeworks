const text = document.createTextNode("გამარჯობა, მე ვარ ტექსტი");



const Container = document.getElementById("Container");

const Paragraph = document.createElement("")
Paragraph.textContent = "This is a paragraph created using JavaScript."
Paragraph.style.color = "red"
Paragraph.id = "P1"
Paragraph.className = "Paragraph"

window.onload = function() {
    Container.appendChild(Paragraph)
}




let progress = 0;
const bar = document.getElementById("loading-bar");

function load() {
  if (progress < 100) {
    progress++;
    bar.style.width = progress + "%";
  } else {
    clearInterval(interval);
  }
}

const interval = setInterval(load, 50);