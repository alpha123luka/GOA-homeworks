// const Colors = [
//     "red",     
//     "blue",    
//     "green",   
//     "purple"   
// ]

// let currentColor = 0

// const box = document.getElementById("colorBox")
// const counter = document.getElementById("counter")

// function next(){
//     if(currentColor === 3){
//         currentColor = 0
//     } else {
//         currentColor += 1
//     }

//     box.style.background = Colors[currentColor]
//     counter.innerHTML = `${currentColor + 1}/4`
// }

// function previous(){
//     if(currentColor === 0){
//         currentColor = 3
//     } else {
//         currentColor -= 1
//     }

//     box.style.background = Colors[currentColor]
//     counter.innerHTML = `${currentColor + 1}/4`
// }





const facts = [
    "Cats sleep about 70% of their lives 🐱",
    "A cat's nose print is unique like a human fingerprint 🐾",
    "Cats meow only to communicate with humans 😺",
    "Cats can jump up to 6 times their body length 🐈"
]

let currentFact = 0

const box = document.getElementById("factBox")
const counter = document.getElementById("counter")

function update(){
    box.innerHTML = facts[currentFact]
    counter.innerHTML = `${currentFact + 1}/4`
}

function next(){
    if(currentFact === 3){
        currentFact = 0
    } else {
        currentFact += 1
    }
    update()
}

function previous(){
    if(currentFact === 0){
        currentFact = 3
    } else {
        currentFact -= 1
    }
    update()
}