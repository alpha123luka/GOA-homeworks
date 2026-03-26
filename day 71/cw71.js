function pageLoaded() {
    console.log("გვერდი ჩაიტვირთა");
}

function makeYellow(element) {
    element.style.color = "yellow";
}

function resetColor(element) {
    element.style.color = "white";
}


const button = document.getElementById("myButton");

button.addEventListener("click", function() {
alert("ღილაკზე დააჭირე!");
});




const img = document.getElementById("myImage");


document.getElementById("changeBtn").addEventListener("click", function() {
    img.src = secondImage;
    img.style.display = "block";
});

document.getElementById("hideBtn").addEventListener("click", function() {
    img.style.display = "";
});

document.getElementById("resetBtn").addEventListener("click", function() {
    img.src = firstImage;
    img.style.display = "block";
});