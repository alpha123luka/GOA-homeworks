// Objectში key ჩვეულებრივ stringია, Mapში კი ნებისმიერი ტიპის მონაცემი შეიძლება იყოს

const peopleMap = new Map ([[function(){console.log('name')}, 'mark'], ['age',12]])

console.log(peopleMap.size)

// set ამატებს ახალ ელემენტს mapში
// get აბრუნებს მნიშვნელობას keyის მიხედვით
// has ამოწმებს არსებობს თუ არა key
// delete წაშლის ელემენტს
// size ითც=ვლის ელემენტების რაოდენობას

const myMap = new Map()
myMap.set("name", "Luka");
myMap.set("age", 13);

console.log(myMap.get('name'));

console.log(myMap.has('age'));
myMap.delete("age");

console.log(myMap)


//set ინახავს უნიკალურ მნიშვნელობებს.

const fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("orange");
console.log(fruits.size);
console.log(fruits.has("banana"));
fruits.delete("orange");
console.log(fruits);