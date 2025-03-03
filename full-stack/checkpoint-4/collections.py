import math
from decimal import Decimal

# Exercise 1: Create a list, tuple, float, integer, decimal, and dictionary.
myList = ["yellow", "red", "green"]
myTuple = (10, 20, 30)
myFloat = 0.99
myInteger = 1
myDecimal = Decimal("0.123456789")
myDict = {"r": 100, "g": 50, "b": 150}

# Exercise 2: Round your float up.
roundFloat = math.ceil(myFloat)

# Exercise 3: Get the square root of your float.
sqrtFloat = math.sqrt(myFloat)

# Exercise 4: Select the first element from your dictionary.
firstDictElement = list(myDict.items())[0]

# Exercise 5: Select the second element from your tuple.
secondTupleElement = myTuple[1]

# Exercise 6: Add an element to the end of your list.
myList.append("grey")

# Exercise 7: Replace the first element in your list.
myList[0] = "blue"

# Exercise 8: Sort your list alphabetically.
myList.sort()

# Exercise 9: Use reassignment to add an element to your tuple.
myTuple += (40,)  # Tuples are immutable, so we create a new tuple and assign it to the same variable