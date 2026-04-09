//dblclick - როცა კონკრეტულ ელემენტზე ორჯერ სწრაფად ხდება მაუსის დაჭერა 
//keypress - კლავიატურაზე ღილაკს დაჭერისას
//keydown - კლავიატურაზე ღილაკს აჭერენ, ანუ ღილაკის დაჭერის მომენტში



// const button = document.getElementById("Btn");
// const container = document.getElementById("Container");
// const input = document.getElementById("inp");


// button.addEventListener("dblclick", function(){
//     container.style.backgroundColor = "red";
// });


// input.addEventListener("keypress", function(e){
//     console.log("Keypress:", e.key);
// });


// input.addEventListener("keydown", function(e){
//     if(e.key === "g"){
//         alert("You pressed G in input");
//     }
// });


// document.body.addEventListener("keydown", function(e){
//     if(e.key === "g"){
//         alert("You pressed G in body");
//     }
// });


const input = document.getElementById('myInput');

input.addEventListener('copy', () => {
  document.body.style.backgroundColor = 'yellow';
});


const Input = document.getElementById('myInput');
const output = document.getElementById('output');

input.addEventListener('input', () => {
  output.textContent = input.value;
});




//Click - ეს event ხდება მაშინ, როცა მომხმარებელი აჭერს ელემენტს, მაგალითად ღილაკს.

const something = document.getElementById('MySomething')

something.addEventListener("click", function() {
  alert("Button was clicked!");
});



//mouseover - ეს event მუშაობს მაშინ, როცა მაუსი გადადის ელემენტზე

const smth =  document.getElementById("text")

smth.addEventListener("mouseover", function() {
  this.style.color = "red";
});

