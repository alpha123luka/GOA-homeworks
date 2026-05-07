let fruits = ["apple", "banana", "orange"];
let [first, second] = fruits;

console.log(first);   
console.log(second);  



let student = {
    name: "Luka",
    age: 14,
    grade: 9
};
let { name, age } = student;
console.log(name); 
console.log(age);  


let numbers = [10, 20, 30];
let [secondNumber] = numbers;
console.log(secondNumber); 


let user = {
    username: "Gio",
    country: "Georgia"
};
let { username: userName, country: userCountry } = user;
console.log(userName);     
console.log(userCountry);  



let colors = ["red"];
let [firstColor, secondColor = "blue"] = colors
console.log(firstColor); 
console.log(secondColor); 