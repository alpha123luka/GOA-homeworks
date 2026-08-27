// const Form = document.getElementById("Form")
// const Tasks = document.getElementById("Tasks")
// const deleteAll = document.getElementById("deleteAll")

// let taskArray = []

// Form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     taskArray.push(Form.input.value)

//     localStorage.setItem("tasks", JSON.stringify(taskArray))

//     Tasks.innerHTML = ""

//     for (let i = 0; i < taskArray.length; i++) {
//         Tasks.innerHTML += `
//             <li id="task${i}">
//                 ${taskArray[i]}
//                 <button onclick="done(${i})">Done</button>
//             </li>
//         `
//     }

//     Form.input.value = ""
// })

// function done(i) {
//     const task = document.getElementById(`task${i}`)

//     task.style.textDecoration = "line-through"
// }

// deleteAll.addEventListener("click", () => {
//     taskArray = []

//     localStorage.removeItem("tasks")

//     Tasks.innerHTML = ""
// })



function getCat() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
            const catImage = document.getElementById("catImage");

            catImage.src = data[0].url;
        })
        .catch(error => {
            console.log("Error:", error);
        });
}