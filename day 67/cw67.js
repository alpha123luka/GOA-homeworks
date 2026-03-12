document.body.innerText = "გამარჯობა"


function changeText() {
    document.getElementById("text").innerText = "changed by js";
}

function resetText() {
    document.getElementById("text").innerText = "This is the original text";
}



function changeImage() {
    document.getElementById("photo").src = "image2.jpg";
}

function resetImage() {
    document.getElementById("photo").src = "image1.jpg";
}