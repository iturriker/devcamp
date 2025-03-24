# INICIACIÓN A PYTHON

> En esta guia encontrarás los principios básicos que debes aprender para empezar a desenvolverte en python. Para ello, empezaremos por conceptos básicos e iremos aumentando la complejidad

1. ¿Qué es un condicional?
Un condicional es una estructura de control que permite ejecutar un bloque de código solo si se cumple una determinada condición. En Python, se usa principalmente con las palabras clave if, elif y else.

Sintaxis básica:

'''
if condición:
    # código que se ejecuta si la condición es True
elif otra_condición:
    # código que se ejecuta si la otra_condición es True
else:
    # código que se ejecuta si ninguna de las condiciones anteriores es True
'''

Ejemplo:

python
Copiar
Editar
edad = 18

if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")
2. ¿Cuáles son los diferentes tipos de bucles en Python? ¿Por qué son útiles?
Los bucles permiten ejecutar un bloque de código repetidamente. En Python existen dos tipos principales:

Bucle for: Repite el código para cada elemento de una secuencia (como una lista o un rango).

Sintaxis básica:

python
Copiar
Editar
for elemento in secuencia:
    # código que se ejecuta por cada elemento
Ejemplo:

python
Copiar
Editar
for i in range(5):
    print(i)
Bucle while: Repite el código mientras una condición sea verdadera.

Sintaxis básica:

python
Copiar
Editar
while condición:
    # código que se ejecuta mientras la condición sea True
Ejemplo:

python
Copiar
Editar
contador = 0
while contador < 5:
    print(contador)
    contador += 1
Ambos son útiles porque permiten automatizar tareas repetitivas y son fundamentales para recorrer colecciones de datos.

3. ¿Qué es una lista por comprensión en Python?
Una lista por comprensión es una forma compacta de crear una lista utilizando una expresión, sin necesidad de utilizar un bucle explícito. Es muy útil para generar nuevas listas de manera eficiente.

Sintaxis básica:

python
Copiar
Editar
nueva_lista = [expresión for item in iterable if condición]
Ejemplo:

python
Copiar
Editar
# Crear una lista de cuadrados de los números del 1 al 5
cuadrados = [x**2 for x in range(1, 6)]
print(cuadrados)  # Output: [1, 4, 9, 16, 25]
4. ¿Qué es un argumento en Python?
Un argumento es un valor que se pasa a una función cuando se llama. Estos valores permiten que la función realice operaciones con datos específicos.

Ejemplo:

python
Copiar
Editar
def saludar(nombre):
    print(f"Hola, {nombre}")

saludar("Iker")  # El argumento es "Iker"
5. ¿Qué es una función Lambda en Python?
Una función lambda es una función anónima y de una sola línea que se puede definir sin un nombre. Generalmente se usa para operaciones simples.

Sintaxis básica:

python
Copiar
Editar
lambda argumentos: expresión
Ejemplo:

python
Copiar
Editar
# Sumar dos números usando lambda
suma = lambda x, y: x + y
print(suma(3, 4))  # Output: 7
6. ¿Qué es un paquete pip?
pip es una herramienta de gestión de paquetes en Python. Permite instalar, actualizar y desinstalar bibliotecas o paquetes de Python. Por ejemplo, puedes usar pip para instalar una biblioteca externa como requests:

Instalar paquete:

bash
Copiar
Editar
pip install requests
Actualizar paquete:

bash
Copiar
Editar
pip install --upgrade requests
Eliminar paquete:

bash
Copiar
Editar
pip uninstall requests
Ejercicios prácticos:
Bucle for en Python:

python
Copiar
Editar
# Imprimir números del 1 al 5
for i in range(1, 6):
    print(i)
Función de Python llamada suma que toma 3 argumentos y devuelve la suma de los 3:

python
Copiar
Editar
def suma(a, b, c):
    return a + b + c

print(suma(1, 2, 3))  # Output: 6
Función Lambda con la misma funcionalidad que la función suma:

python
Copiar
Editar
suma_lambda = lambda a, b, c: a + b + c

print(suma_lambda(1, 2, 3))  # Output: 6
Determinar si el valor de la variable nombre coincide o no con un valor de la lista lista_nombre:

python
Copiar
Editar
nombre = 'Enrique'
lista_nombre = ['Jessica', 'Paul', 'George', 'Henry', 'Adán']

# Usando un bucle for
encontrado = False
for persona in lista_nombre:
    if persona == nombre:
        encontrado = True
        break

if encontrado:
    print(f"{nombre} está en la lista")
else:
    print(f"{nombre} no está en la lista")
Una vez que tengas todo listo, recuerda subirlo a tu repositorio de GitHub en formato Markdown y verificar que se visualice correctamente. ¿Te gustaría que te ayude con alguna parte específica o algún detalle adicional sobre cómo estructurarlo en GitHub?