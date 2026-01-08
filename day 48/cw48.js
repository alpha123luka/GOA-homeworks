//or- || ; and-&&


const number = parseInt(prompt("შეიყვანეთ რიცხვი:"));


if (number > 20) {
    console.log("20+");
} else if (number > 10) {
    console.log("10+");
} else {
    console.log("max");
}



const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const password = document.getElementById('password').value;

    if(password === "Password123") {
        messageElement.textContent = `Welcome to the website {firstName}`;
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Wrong Password";
        messageElement.style.color = "red";
    }
});

