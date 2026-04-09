//mousedown ეს ივენთი ირთვება მაშინ როცა მაუსის ღილაკს დააჭერ
//mouseenter ეს ხდება მაშინ როცა მაუსი შევა ელემენტში
//mouseleave ეს ხდება მაშინ როცა მაუსი გამოვა ელემენტიდან
//mousemove ეს ირთვება ყოველ მოძრაობაზე როცა მაუსი მოძრაობს ელემენტში
//mouseover ირთვება როცა მაუსი გადავა ელემენტზე 


const div = document.getElementById("myDiv");

div.addEventListener("mouseenter", function() {
  div.style.backgroundColor = "red"})