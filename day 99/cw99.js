//.setItem
//.getItem
//.removeItem
//.clear

// const email = document.getElementById("email");
// const username = document.getElementById("username");
// const password = document.getElementById("password");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//     const user = {
//         email: email.value,
//         username: username.value,
//         password: password.value
//     };

//     localStorage.setItem("user", JSON.stringify(user));

//     alert("Information saved!");
// });


const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");


document.getElementById("signUpBtn").addEventListener("click", function () {
    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value
    };

    localStorage.setItem("user", JSON.stringify(user));

    
    signUp.style.display = "none";
    signIn.style.display = "block";
});


document.getElementById("signInBtn").addEventListener("click", function () {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (
        user &&
        username === user.username &&
        password === user.password
    ) {
        alert("Login successful!");
    } else {
        alert("Wrong username or password!");
    }
});

document.getElementById("signInBtn").addEventListener("click", function () {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("user"));

    
    if (user === null) {
        alert("User does not exist!");
        return;
    }

    
    if (username !== user.username || password !== user.password) {
        alert("Incorrect username or password!");
        return;
    }

    
    alert("Login successful!");
});