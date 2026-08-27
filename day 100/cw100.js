
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("რეგისტრაცია წარმატებით დასრულდა!");
    window.location.href = "login.html";
  });
}


const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      alert("შესვლა წარმატებით დასრულდა!");
      window.location.href = "shop.html";
    } else {
      alert("არასწორი მომხმარებელი ან პაროლი!");
    }
  });
}


function logout() {
  alert("გამოსვლა წარმატებით დასრულდა!");
  window.location.href = "login.html";
}

const storedUsername = localStorage.getItem('username');
if (!storedUsername) {
    alert ('You must log in first!')
    window.location.href = "login.html"
}