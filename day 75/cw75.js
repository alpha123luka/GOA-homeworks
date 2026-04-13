// function Human(name, lastname, age) {
//   this.name = name;
//   this.lastname = lastname;
//   this.age = age;

//   this.talk = function() {
//     console.log("გამარჯობა");
//   };
// }

// const person1 = new Human("ლუკა", "ართილაყვა", 16);
// person1.talk();



// function Dogs(name, breed, age) {
//   this.name = name;
//   this.breed = breed;
//   this.age = age;

//   this.feedMe = function() {
//     console.log("გთხოვ მაჭამე");
//   };
// }

// const dogie = new Dogs("ვივი", "იორკი შტერიერი", 1);
// dogie.feedMe();





let count = 0;
const p = document.getElementById("number");

function updateColor() {
  if (count > 0) {
    p.style.color = "green";
  } else {
    p.style.color = "red";
  }
}

function increase() {
  count = count + 1;
  p.textContent = count;
  updateColor();
}

function decrease() {
  count = count - 1;
  p.textContent = count;
  updateColor();
}

updateColor();





function getRandomColor() {
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

}

function changeColor() {
    const color = getRandomColor();
    const box = document.getElementById("colorBox");
    const p = document.getElementById("colorValue");

    box.style.backgroundColor = color;
    p.textContent = color; 
}