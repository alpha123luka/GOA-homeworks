// key არის "სახელი" (property name)
// value არის ამ სახელის მნიშვნელობა


const object1 = {
  name: "Luka",
  age: 20
};

const object2 = {
  city: "Tbilisi",
  hobby: "gaming"
};

const result = Object.assign({}, object1, object2);
console.log(result);


// destructuring - ვიღებთ მნიშვნელობებს და ვანაწილებთ ცვლადებში ერთ ხაზში

const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);