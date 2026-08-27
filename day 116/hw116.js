let numbers = [5, 10, 15, 20, 25];

let index = numbers.indexOf(20);

console.log(index);

document.getElementById("result").textContent =
    "20-ის ინდექსია: " + index;




    let names = ["Luka", "Nika", "Giorgi", "Ana"];

names.forEach(function(name) {
    console.log(name);
});


let Numbers = [3, 8, 12, 15, 7, 25, 30];

let Result = numbers.filter(function(number) {
    return number > 10;
});

console.log(result);

document.getElementById("result").textContent =
    result.join(", ");




    let fruits = ["Banana", "Orange", "Apple", "Mango"];

let Result = fruits.includes("Apple");

console.log(result);

document.getElementById("result").textContent =
    "არის თუ არა Apple მასივში: " + result;

    let numbers = [5, 12, 18, 25, 30, 40];

let result = numbers.find(function(number) {
    return number > 20;
});

console.log(result);

document.getElementById("result").textContent =
    "პირველი 20-ზე მეტი რიცხვია: " + result;