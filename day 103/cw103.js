//დაჭერისას ინახავს ინფორმაციას localStorage-ში, გვერდის გადატვირთვისას მონაცემები არ იკარგება, რადგან ინახება ბრაუზერშიconst
//  form = document.getElementById("registerForm");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    let userData = JSON.stringify(user);

    localStorage.setItem("user", userData);


    alert("მონაცემები შენახულია!");

});

let savedData = localStorage.getItem("user");

if (savedData) {

    let user = JSON.parse(savedData);

    console.log("შენახული მომხმარებელი:", user);

}