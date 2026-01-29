function User(name, age) {
  this.name = name;
  this.age = age;
}


function createUser() {
  const user = new User("Luka", 18);

  document.getElementById("output").textContent =
    "Name: " + user.name + ", Age: " + user.age;

  console.log(user);
}


function User(name, age) {
  this.name = name;
  this.age = age;
}


const user1 = new User("Luka", 18);
const user2 = new User("Nino", 22);


document.getElementById("output").textContent =
  "User 1: " + user1.name + " (" + user1.age + ")\n" +
  "User 2: " + user2.name + " (" + user2.age + ")";


console.log(user1);
console.log(user2);


const numbers = [10, 20, 30, 40, 50];

function showFirstAndLast() {
  const first = numbers[0];               
  const last = numbers[numbers.length-1]; 

  document.getElementById("output").textContent =
    "First: " + first + ", Last: " + last;

  console.log("First:", first, "Last:", last);
}


const Numbers = [10, 20, 30, 40, 50];

function addNumber() {
  
  numbers.push(60);

  
  document.getElementById("output").textContent =
    "Updated Numbers: " + numbers.(", ");

  console.log(numbers);
}
