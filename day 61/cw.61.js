//setInterval არის  ფუნქცია, რომელიც ასრულებს მითითებულ კოდს განმეორებით ან განსაზღვრული დროის ინტერვალით

function startBtn(){
    alert("Hello, i'll be back soon")
}

setInterval(console.log("Hello, i'll be back soon"), 5000)



// getFullYear() - გვიბრუნებს მიმდინარე წელს
// getMonth() - გვიბრუნებს მიმდინარე თვეს
// getDate() - გვიბრუნებს მიმდინარე თარიღს 
// getDay() - გვიბრუნებს მიმდინარე კვირის დღეს 
// getHours() - გვიბრუნებს მიმდინარე საათს 
// getMinutes() - გვიბრუნებს მიმდინარე წუთს 
// getSeconds() - გვიბრუნებს მიმდინარე წამს
// getMilliseconds() - გვიბრუნებს მიმდინარე მილიწამს    

function UpdateTime(){
    const Date = new Date
    console.log(date.getHours(), date.getMinutes(), date.getSeconds())
}