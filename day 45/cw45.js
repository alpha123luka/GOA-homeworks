//DOM ნიშნავს Document Object Model-ს

    let paragraph = document.getElementById("text")
    paragraph.textContent = "ნახვამდის";


    // ფუნქციებს ვიყენებთ, რომ კოდი იყოს მოკლე და გასაგები

        
function changeText() {
  document.getElementById("myParagraph").innerText = "ნახვამდის";
}

    
function hideParagraph() {
  document.getElementById("myParagraph").style.display = "none";
}