numbers = {1, 2, 3, 4, 5}
print("საწყისი set:", numbers)

numbers.add(6)
print("add(6) გამოყენების შემდეგ:", numbers)

numbers.remove(3)
print("remove(3) გამოყენების შემდეგ:", numbers)


print("5 არის set-ში?", 5 in numbers)
print("3 არის set-ში?", 3 in numbers)


print("set-ის სიგრძე:", len(numbers))