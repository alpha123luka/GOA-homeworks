square = lambda x: x ** 2
print(square(5))  

reversestring = lambda: s[::-1]
print(reversestring("hello"))


maxnum = lambda lst: max(lst)
print(maxnum([1, 5, 3, 9, 2]))


minnum = lambda list: min(list)
print(minnum([1, 5, 3, 9, 2]))


sumnums = lambda a, b: a + b
print(sumnums(3, 7))


#---------------------------------------------


numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x*2, numbers))
print(squared)  


items = ["apple", "banana", "kiwi"]
lengths = list(map(lambda : len(), items))
print(lengths) 


words = ["hello world", "python", "map function"]
upper_words = list(map(lambda x: x.upper(), words))
print(upper_words) 


str_numbers = ["1", "2", "3"]
int_numbers = list(map(lambda x: int(x), str_numbers))
print(int_numbers)  