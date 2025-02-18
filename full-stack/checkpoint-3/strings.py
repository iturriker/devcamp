# Exercise 1: Create a string, number, list, and boolean, each stored in their own variable.
myString = "hey my friend"
myNumber = 5
myList = [1,2,3,4,5]
myBool = True

# Exercise 2: Use an index to grab the first 3 letters in your string, store that in a variable. 
hey = myString[:3]

# Exercise 3: Use an index to grab the first element from your list.
one = myList[0]

# Exercise 4: Create a new number variable that adds 10 to your original number.
y = myNumber + 10

# Exercise 5: Use an index to get the last element in your list.
five = myList[-1:]

# Exercise 6: Use split to transform the following string into a list.
names = "harry,alex,susie,jared,gail,conner"
namesList = names.split(",")
type(namesList)

# Exercise 7: Get the first word from your string using indexes.
# Use the upper function to transform the letters into uppercase.
# Create a new string that takes the uppercase word and the rest of the original string.
HEY = myString[:3].upper() + myString[3:]

# Exercise 8: Use string interpolation to print out a sentence that contains your number variable.
sentence = f"{hey}! give me {myNumber}"

# Exercise 9: Print “hello world”.
print("hello world")

# Exercise 10: Create a string that contains the word "Hola".
# Using the keyword in the search method or the index, find and select "Hola" in your string.
# Then, using the replace function, replace "Hola" in your string with "Adiós."
### Reference to Metal Gear Rising: Revengeance -> "Adiós Amigos"
salutation = "Hola amigos"
if "Hola" in salutation:
    salutation = salutation.replace("Hola", "Adiós")