#lambda ფუნქცია არის ისეთი ფუნქცია, რომელიც გამოიყენება სწრაფი გამოთვლებისთვის.


#lambda ფუნქციას ანონიმური ფუნქცია ეწოდება იმიტომ, რომ მას სახელი არ აქვს


num = lambda x: x * 2
print(num(5))

numbers = lambda a, b: a + b
print(numbers(3, 7))

numbr = lambda a, b: a if a > b else b
print(numbr(10, 4))

square = lambda x: x * 2
print(square(6))

length = lambda s: len(s)
print(length("hello"))

reverse = lambda s: s[::-1]
print(reverse("python"))

max_in_list = lambda list: max(list)
print(max_in_list([1, 5, 3, 9, 2]))

min_in_list = lambda lst: min(lst)
print(min_in_list([1, 5, 3, 9, 2]))