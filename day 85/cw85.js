// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let person1 = new Person("Luka", 13);

// console.log(person1.name);
// console.log(person1.age);



// class Human {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     greet() {
//         console.log(`Hello, your name is: ${this.name}`);
//     }
// }

// let person1 = new Human("Luka", "Artilakva");
// person1.greet();


// // ერთ კლასს შეუძლია სხვა კლასის თვისებები და მეთოდები “მიიღოს”
// //super keyword გამოიყენება შვილობილ კლასში რათა მივწვდეთ მშობელი კლასის constructorს ან მეთოდებს

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
// }

// class Dog extends Animal {
//     constructor(name, age) {
//         super(name)
//         this.age = age
//     }

//     info() {
//         console.log(this.name + " is " + this.age + " years old")
//     }
// }

// let dog1 = new Dog("Max", 3)

// dog1.info()









class Human {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

class Student extends Human {
  constructor(name, surname, grade) {
    super(name, surname); 
    this.grade = grade;
  }
}

const student1 = new Student("Luka", "Smith", 10);

console.log(student1.name);
console.log(student1.surname);
console.log(student1.grade);