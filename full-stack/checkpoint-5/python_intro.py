# Ejercicios Prácticos introducción a Python
# En este archivo encontrarás ejercicios prácticos para poner en práctica lo aprendido en la introducción a Python.

# Contexto
# Llegados a este punto deberias de ser todo un experto de las manzanas 🍏, te atreves a ayudar a tu amigo con los limones 🍋?

# Ejercicios

# Ejercicio 1: Letras de limon
# Siempre has tenido problemas de concentración, prueba a deletrear de la palabra "limon" para espabilar un poco

palabra = 'limon'

for letra in palabra:
    print(letra)

# Ejercicio 2: Sumar cajas de limones
# Tu amigo es un novato, necesita tu ayuda para contar cuantos limones hay en sus cajas de limones 🍋

caja_limones_1 = 25
caja_limones_2 = 40
caja_limones_3 = 15

def sumar_limones(a, b, c):
    return a + b + c

print(sumar_limones(caja_limones_1, caja_limones_2, caja_limones_3))

# Ejercicio 3: Vuelta a sumar limones
# Recuerda que él no entiende de código, simplificalo para que lo vea más claro!

caja_limones_1 = 25
caja_limones_2 = 40
caja_limones_3 = 15

sumar_limones = lambda a, b, c: a + b + c
print(sumar_limones(caja_limones_1, caja_limones_2, caja_limones_3))

# Ejercicio 4: Verificar que hay limones en la caja de frutas
# Te ha pedido ayuda para comprobar si en su caja de frutas hay algún limón 🍋. Como buen amigo tienes que ayudarle

fruta_objetivo = 'limon'
frutas = ['manzana', 'kiwi', 'platano', 'limon', 'pera']
hay_limon = False

# Usando lista de compresión
hay_limon = [True for fruta in frutas if fruta == fruta_objetivo]

# Usando un bucle for
for fruta in frutas:
    if fruta == fruta_objetivo:
        hay_limon = True
        break

if hay_limon:
    print(f"Hay {fruta_objetivo} en la caja")
else:
    print(f"No hay {fruta_objetivo} en la caja")