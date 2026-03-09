try:
    num = int(input("შეიყვანე რიცხვი: "))
    
    if num == 0:
        raise ValueError("რიცხვი არ უნდა იყოს 0")
    
    print("შეყვანილი რიცხვია:", num)

except ValueError as e:
    print("შეცდომა:", e)


try:
    a = int(input("შეიყვანე პირველი რიცხვი: "))
    b = int(input("შეიყვანე მეორე რიცხვი: "))
    
    result = a / b

except :
    print("0-ზე გაყოფა არ შეიძლება!")

else:
    print("შედეგი არის:", result)



try:
    num = int(input("შეიყვანე რიცხვი: "))
    print("შენი რიცხვია:", num)

finally:
    print("პროგრამა დასრულდა")



try:
    num = int(input("შეიყვანე რიცხვი: "))
    
    if num < 0:
        raise ValueError("უარყოფითი რიცხვი არ შეიძლება")
    
    print("რიცხვი არის:", num)

except ValueError as e:
    print("შეცდომა:", e)



try:
    a = int(input("შეიყვანე პირველი რიცხვი: "))
    b = int(input("შეიყვანე მეორე რიცხვი: "))
    
    result = a / b

except :
    print("0-ზე გაყოფა არ შეიძლება!")

else:
    print("შედეგი არის:", result)

finally:
    print("დასრულდა")