# INICIACIÓN A PYTHON

> En esta guía encontrarás los principios básicos que debes aprender para empezar a desenvolverte en Python. Comenzaremos con conceptos fundamentales y aumentaremos la complejidad progresivamente.

---

## 📌 Condicionales
Un **condicional** es una **estructura de control** que permite ejecutar un bloque de código **solo cuando se cumple una determinada condición**. En Python, se usan principalmente `if`, `elif` y `else`.

### 📍 Sintaxis básica:
```python
if condicion:
    # Se ejecuta si la condición es True
elif otra_condicion:
    # Se ejecuta si otra_condicion es True
else:
    # Se ejecuta si ninguna de las condiciones anteriores es True
```

### 📍 Ejemplo:
```python
edad = 18

if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")
```

---

## 🔁 Bucles
Los **bucles** permiten **ejecutar un bloque de código repetidamente**. En Python existen dos tipos principales:

### 🔹 **Bucle FOR**
Recorre una secuencia (como una lista o un rango) y ejecuta un bloque de código por cada elemento.

#### 📍 Sintaxis:
```python
for elemento in secuencia:
    # Se ejecuta por cada elemento
```

#### 📍 Ejemplo:
```python
for i in range(5):
    print(i)  # Imprime los números del 0 al 4
```

### 🔹 **Bucle WHILE**
Ejecuta un bloque de código mientras una condición sea verdadera.

#### 📍 Sintaxis:
```python
while condicion:
    # Se ejecuta mientras la condición sea True
```

#### 📍 Ejemplo:
```python
contador = 0
while contador < 5:
    print(contador)
    contador += 1
```

✅ Ambos tipos de bucles son fundamentales para recorrer colecciones de datos y automatizar tareas repetitivas.

---

## 📋 Listas por Comprensión
Las **listas por comprensión** permiten crear listas de manera concisa y eficiente **sin necesidad de usar un bucle** `for` o `while` explícito.

### 📍 Sintaxis:
```python
nueva_lista = [expresion for item in iterable if condicion]
```

### 📍 Ejemplo:
```python
# Lista de cuadrados de los números del 1 al 5
cuadrados = [x**2 for x in range(1, 6)]
print(cuadrados)  # Output: [1, 4, 9, 16, 25]
```

---

## 🎯 Argumentos
Un **argumento** es un valor que se pasa a una **función cuando se llama**. Permiten que la función realice operaciones con datos específicos.

### 📍 Ejemplo:
```python
def saludar(nombre):
    print(f"Hola, {nombre}")

saludar("Iker")  # Output: Hola, Iker
```

---

## ⚡ Funciones Lambda
Una **función lambda** es una función **anónima** y de una sola línea. Se usa para operaciones simples.

### 📍 Sintaxis:
```python
lambda argumentos: expresion
```

### 📍 Ejemplo:
```python
suma = lambda x, y: x + y
print(suma(3, 4))  # Output: 7
```

✅ Se utilizan principalmente en funciones de orden superior como `map()`, `filter()` y `sorted()`.

---

## 📦 Pip: Gestor de Paquetes
**pip** es una herramienta para instalar y administrar paquetes de Python.

📌 **Instalar un paquete:**
```sh
pip install requests
```
📌 **Actualizar un paquete:**
```sh
pip install --upgrade requests
```
📌 **Desinstalar un paquete:**
```sh
pip uninstall requests
```

---

# 🚀 Ejercicios Prácticos

### 1️⃣ **Bucle FOR:**
```python
for i in range(1, 6):
    print(i)  # Output: 1 2 3 4 5
```

### 2️⃣ **Función que suma tres números:**
```python
def suma(a, b, c):
    return a + b + c

print(suma(1, 2, 3))  # Output: 6
```

### 3️⃣ **Función lambda equivalente a `suma`:**
```python
suma_lambda = lambda a, b, c: a + b + c
print(suma_lambda(1, 2, 3))  # Output: 6
```

### 4️⃣ **Verificar si un nombre está en la lista:**
```python
objetivo = 'Enrique'
nombres = ['Jessica', 'Paul', 'George', 'Henry', 'Adán']
encontrado = False

# Usando lista de compresión
encontrado = [True for nombre in nombres if nombre == objetivo]

# Usando un bucle for
for nombre in nombres:
    if nombre == objetivo:
        encontrado = True
        break

if encontrado:
    print(f"{objetivo} está en la lista")
else:
    print(f"{objetivo} no está en la lista")
```

---

¡Felicidades! 🎉 Ahora tienes una base sólida en Python. Sube esta documentación a GitHub y sigue practicando. 🚀

