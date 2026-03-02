squares = [x**2 for x in range(1, 11)]
print(squares)

numbers = [1, 2, 5, 8, 10, 13, 18, 21]
even_numbers = []

for num in numbers:
    if num % 2 == 0:
        even_numbers.append(num)

print(even_numbers)


fruits = ["  apple", "banana  ", "  cherry "]
cleaned = [fruit.strip() for fruit in fruits]

print(cleaned)


doubled = [x * 2 for x in range(1, 6)]
print(doubled)