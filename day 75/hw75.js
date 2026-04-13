const p = document.createElement("p");
p.innerText = "ეს არის ახალი პარაგრაფი";
document.body.appendChild(p);

function Person(name) {
  this.name = name;
}

const div = document.createElement("div");
div.innerText = "ეს არის div ელემენტი";
document.body.appendChild(div);

const person1 = new Person("Luka");
const person2 = new Person("Nika");

console.log(person1);
console.log(person2);

const button = document.createElement("button");
button.innerText = "დამაჭირე";
document.body.appendChild(button);