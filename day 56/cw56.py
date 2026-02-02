#List - შეცვლადია ხოლო Tuple - უცვლადია 
my_tuple = (10, 20, 30)


a, b, c = my_tuple

print(a)  
print(b)  
print(c)  


#*rest აგროვებს დარჩენილ ელემენტებს სიაში.

numbers = (1, 2, 3, 4, 5, 6)
first, second, *rest = numbers

print(first)   
print(second)  
print(rest)    