// confirm() ფუნქცია აჩვენებს  ფანჯარას შეკითხვით და აბრუნებს true თუ მომხმარებელმა დააჭირა "OK" ან false თუ "Cancel


const button = document.getElementById('submitBtn');

button.onclick = function() {
    const femaleChecked = document.getElementById("Female").checked;
    const maleChecked = document.getElementById("Male").checked;

    console.log("Female: " + femaleChecked);
    console.log("Male: " + maleChecked);
};




// Dot notation — ეს არის   ნივთის თვისებების  ან მეთოდების წვდომის ერთ-ერთი გზა.

const box = document.getElementById('box');



function changeColorBtn() {
      box.style.backgroundColor = 'lightgreen';
}
function changeColorBtn() {
      box.style.backgroundColor = 'lightblue';
}


