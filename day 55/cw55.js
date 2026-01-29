const Username = document.getElementById("Name")
const Userage = document.getElementById("Age")
const Text = document.getElementById("Display")


function UserInfo(name, age){
    this.name = name;
    this.age = age;
    this.BornYear = YearCalculate
}

function YearCalculate(){
    return 2026 - this.age
}

function FormSubmit(e){
    e.preventDefault()

    const user1 = new UserInfo(Username.value, Userage.value)
    Text.innerHTML = "hello. your name is: " + User.name + "<br>" + "You were born in: " + User.BornYear()
}



function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
    this.talk = function() {
        console.log("bark bark");
    };
}

const myDog = new Dog("Rex", "German Shepherd");

