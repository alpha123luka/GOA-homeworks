#else სრულდება მაშიმ როცა try ბლოკში შეცდომა არ მოხდს ხოლო finally 
# ყოველთვის სრულდება მიუხედავად იმისა მოხდა თუ არა შეცდომა


# try:
#     x = int(input("შეიყვანე რიცხვი: "))
#     y = int(input("შეიყვანე მეორე რიცხვი: "))
#     result = x / y
# except ZeroDivisionError:
#     print("შეცდომა: ნულზე გაყოფა შეუძლებელია")
# except ValueError:
#     print("შეცდომა: უნდა შეიყვანო რიცხვი")
# else:
#     print("გამოწვეული შედეგი:")
# finally:
#     print("დასასრული")
2



# names = ["Luka", "Nino", "Giorgi", "Tamar", "Ana"]

# try:
    
#     index = int(input("შეიყვანე ინდექსი: "))

    
#     if 0 <= index < len(names):
#         print("ელემენტი ამ ინდექსზე არის:", names[index])
#     else:
#         raise IndexError("შეცდომა: ინდექსი ლისტში არ არსებობს")

# except ValueError:
#     print("შეცდომა: უნდა შეიყვანო რიცხვი")
# except IndexError as e:
#     print(e)
# finally:
#     print("პროგრამა დასრულდა")




# try:
#     num = int(input("შეიყვანე რიცხვი: "))

   
#     if num > 10:
#         print("OK")
#     else:
#         raise ValueError("რიცხვი უნდა იყოს დადებითი და 10-ზე მეტი")

# except ValueError :
#     print("შეცდომა:", )
# finally:
#     print("პროგრამა დასრულდა")






def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    return a / b

print(divide(10, 2))
print(divide(7, 0))



def validate_age(age):
    if 13 <= age <= 120:
        return "Valid"
    else:
        raise ValueError("Invalid age")


print(validate_age(16))  
