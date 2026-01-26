//Integer, Float, String, Boolean, List, Object


let myInfo = {
  name: "Luka",
  age: 13,
  country: "Georgia",
  hobby: "Gaming"
};



console.log(myInfo.name, myInfo.age, myInfo.country, myInfo.hobby)




const name = document.getElementById("Name");
const age = document.getElementById("Age");
const lastname = document.getElementById("lastname");
const Info = document.getElementById("OutputInfo");

function GetInfo() {
    const Person = {
        Name: name.value,
        Age: age.value,
        Lastname: lastname.value
    }

    console.log(Person);

    Info.innerHTML = "Name: " + Person.Name + ", Age: " + Person.Age + ", Lastname: " + Person.Lastname;
}




