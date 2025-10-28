#ფუნქცია პითონში არის კოდის ნაწილი, რომელსაც შეგვიძლია რამდენჯერაც 
#გვინდა იმდენჯერ გამოვიყენოთ.          


text = "hello world"

print(text.upper())      
print(text.lower())      
print(text.capitalize()) 
print(text.title())     
print(text.find("world"))



# upper -> მთელ ტექსტს დიდ ასოებად აქცევს: "HELLO WORLD"
# lower -> მთელ ტექსტს პატარა ასოებად აქცევს: "hello world"
# capitalize -> პირველი ასო დიდია, დანარჩენი პატარა: "Hello world"
# title -> ყოველი სიტყვის პირველი ასო დიდია: "Hello World"
# find -> ეძებს სიტყვას/ასოს და აბრუნებს მის ადგილს (ინდექსს). აქ "world" იწყება 6-ზე