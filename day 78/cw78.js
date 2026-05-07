// const form = document.getElementById('registerForm');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');

// let counter = 0;

// function checkForm(){
//     if(nameInput.value() === ""){
//         alert("სახელი არ უნდა იყოს ცარიელი");
//         counter = 1;
//     } else if(emailInput.value("@")){
//         alert("ელ-ფოსტა უნდა შეიცავდეს @-ს");
//         counter = 1;
//     } else if(passwordInput.value.length < 6){
//         alert("პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს");
//         counter = 1;
//     } else{
//         alert("რეგისტრაცია წარმატებულია!");
//         counter = 0;
//     }
// }

// form.addEventListener('submit', function(event){
//     checkForm();
// });


// const form = document.getElementById('registerForm');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const confirmPasswordInput = document.getElementById('confirmPassword');
// const nameError = document.getElementById('nameError');
// const emailError = document.getElementById('emailError');
// const passwordError = document.getElementById('passwordError');
// const confirmError = document.getElementById('confirmError');
// const success = document.getElementById('success');
// let counter = 0;
// function checkForm(){
//     nameError.textContent = "";
//     emailError.textContent = "";
//     passwordError.textContent = "";
//     confirmError.textContent = "";
//     success.textContent = "";
//     counter = 0;
//     if(namInput.value === ""){
//         nameError.textContent = "სახელი არ უნდა იყოს ცარიელი";
//         counter = 1;
//     }
//     if(!emailInput.value("@")){
//         emailError.textContent = "ელ-ფოსტა უნდა შეიცავდეს @-ს";
//         counter = 1;
//     }
//     if(passwordInput.value.length < 6){
//         passwordError.textContent = "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს";
//         counter = 1;
//     }
//     if(confirmPasswordInput.value !== passwordInput.value){
//         confirmError.textContent = "პაროლები არ ემთხვევა";
//         counter = 1;
//     }
//     if(counter == 0){
//         success.textContent = "რეგისტრაცია წარმატებულია!";
//     }
// }
// form.addEventListener('submit', function(event){
//     checkForm();
// });








let timeoutID;

document.getElementById("sendBtn").addEventListener("click", function () {
  timeoutID = setTimeout(function () {
    alert("შეტყობინება გაიგზავნა!");
  }, 3000);
});

document.getElementById("cancelBtn").addEventListener("click", function () {
  clearTimeout(timeoutID);
  alert("გაუქმდა");
});




let timeoutID;

const text = document.getElementById("text");

document.getElementById("startBtn").addEventListener("click", function () {
  timeoutID = setTimeout(function () {
    text.textContent = "დრო ამოიწურა!";
  }, 5000);
});

document.getElementById("resetBtn").addEventListener("click", function () {
  clearTimeout(timeoutID);
  text.textContent = "დაელოდეთ...";
});