# elif ვიყენებთ მაშინ, როცა რამდენიმე პირობა გვაქვს, მაგრამ ერთდროულად მხოლოდ 
# ერთი უნდა შესრულდეს.
# თუ გამოვიყენებთ მხოლოდ if-if-if, ყველა პირობა შემოწმდება, რაც არ არის ეფექტური.
# elif ამცირებს ზედმეტ შემოწმებებს და კოდი უფრო მარტივი ხდება.





#age = int(input("Enter your age: "))

#if age >= 64:
 #   print("elderly discount")
#elif age >= 10:
    #print("Child discount")
#else:
    #print("regular price")





#Nested if Python-ში ნიშნავს, რომ ერთი if პირობა ჩაწერილია მეორეში. ანუ როცა ერთ რამეს ამოწმებ და თუ ეს მართალია, 
#მაშინ შიგნით კიდევ სხვა პირობას ამოწმებ.


age = int(input("შეიყვანე შენი ასაკი: "))
name = input("შეიყვანე შენი სახელი: ")

if age >= 18:  # ასაკი 18 ან მეტი?
    if name == "დემე":  # სახელი "დემე" არის?
        print("Denied")
    else:
        print("Accepted")
else:
    print("Denied")