//იმისათვის რომ მომხმარებელს შემოვატანინოთ ინფორმაცია ჩვენ ვიყენებთ"prompt()"-ფინქციას


    function collectUserInfo() {
            
        let firstName = prompt("შეიყვანეთ თქვენი სახელი:");
        let lastName = prompt("შეიყვანეთ თქვენი გვარი:");
        let age = prompt("შეიყვანეთ თქვენი ასაკი:");

            
            let user = {
                firstName: firstName,
                lastName: lastName,
                age: age
            };

            
        console.log(firstName, lastName, age);
        }


    function submitInfo() {

        let name = document.getElementById("name").value ;
        let surname = document.getElementById("surname").value ;
        let age = document.getElementById("age").value ;

            const userInfo = {
                name: name,
                surname: surname,
                age: age
            } ;

        console.log(name, surname, age);
        }