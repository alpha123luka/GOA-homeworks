numbers = [1, 4, 45, 6, 58]

result = list(map(lambda x: x * 5, numbers))
print(result) 


words = ["hello", "world", "python"]

result = list(map(lambda x: x.upper(), words))
print(result) 



strings = ["apple", "banana", "kiwi"]

result = list(map(len, strings))
print(result) 