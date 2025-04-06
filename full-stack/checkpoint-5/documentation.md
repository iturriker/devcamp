# INICIACIÓN A PYTHON

En esta guía encontrarás los principios básicos que debes aprender para empezar a desenvolverte en Python. Comenzaremos con conceptos fundamentales y aumentaremos la complejidad progresivamente.

---

## 🔀 Condicionales

Un **condicional** es una **estructura de control** que permite ejecutar un bloque de código **solo cuando se cumple una determinada condición** (o conjunto de condiciones).

Vamos a verlo con diferentes ejemplos ➡️

### Condicionales: if - elif - else

#### Sintaxis

```python
if condicion:
    # Código a ejecutar si la condición es verdadera
elif otra_condicion:
    # Código a ejecutar si la otra condición es verdadera
else:
    # Código a ejecutar si ninguna de las condiciones anteriores es verdadera
```

#### Ejemplos

Imagina que hoy te has levantado con muchas ganas de comer frutas y que tus frutas favoritas son las **manzanas 🍏**, las **fresas 🍓** y los **melocotones 🍑**, cada una de diferentes temporadas.

<details>
<summary>
📌 Ejemplo 1: Estamos en Otoño
</summary>

| 🛒 Acción | 🔎 Resultado | 🎯 Consecuencia |
|------------|--------------|------------------|
| Buscas 🍏 | ✅ Hay 🍏  | Compras 🍏 |

```python
hay_manzanas = True

if hay_manzanas:
    compro_manzanas = True
```

<summary>
📌 Ejemplo 2: Estamos en Primavera
</summary>

| 🛒 Acción | 🔎 Resultado | 🎯 Consecuencia |
|------------|--------------|------------------|
| Buscas 🍏 | ❌ No hay 🍏  | Buscas alternativas |
| Buscas 🍓 | ✅ Hay 🍓 | Compras 🍓 |

```python
hay_manzanas = False
hay_fresas = True

if hay_manzanas:
    compro_manzanas = True
elif hay_fresas:
    compro_fresas = True
```

3. Estamos en Verano

| 🛒 Acción | 🔎 Resultado | 🎯 Consecuencia |
|------------|--------------|------------------|
| Buscas 🍏 | ❌ No hay 🍏  | Buscas alternativas |
| Buscas 🍓 | ❌ No hay 🍓| Buscas alternativas |
| Buscas 🍑 | ✅ Hay 🍑 | Compras 🍑 |


```python
hay_manzanas = False
hay_fresas = False
hay_melocotones = True

if hay_manzanas:
    compro_manzanas = True
elif hay_fresas:
    compro_fresas = True
elif hay_melocotones:
    compro_melocotones = True
```

4. Estamos en Invierno

| 🛒 Acción | 🔎 Resultado | 🎯 Consecuencia |
|-----------|----------------|-----------------|
| Buscas 🍏 | ❌ No hay 🍏 | Buscas alternativas |
| Buscas 🍓 | ❌ No hay 🍓 | Buscas alternativas |
| Buscas 🍑 | ❌ No hay 🍑 | No te quedan alternativas 😱 |
| Buscas 🍕 | ✅ Hay 🍕 | Compras 🍕 🎉 |

```python
hay_manzanas = False
hay_fresas = False
hay_melocotones = False

if hay_manzanas:
    compro_manzanas = True
elif hay_fresas:
    compro_fresas = True
elif hay_melocotones:
    compro_melocotones = True
else:
    compro_pizza = True
```

> [!TIP]
> Cuando una de las condiciones se cumple, **no pasa a comprobar las siguientes**

### Condicionales con operadores lógicos: and - or - not

#### Sintaxis

```python
condicion_1 and condicion_2
    # Código a ejecutar cuando se cumplen tanto la primera como la segunda condición
condicion_1 or condicion_2
    # Código a ejecutar cuando se cumple una de las dos condiciones
not condicion
    # Código a ejecutar cuando no se cumple la condición
```

#### Ejemplos

Esta vez te has levantado con ganas de preparar una pizza, y tus pizzas favoritas son la **margarita** y la **napolitana**. La margarita lleva **tomate 🍅** y **queso 🧀** y la napolitana lleva **tomate 🍅**, **queso 🧀** y **aceitunas 🫒**.

| Ingrediente | Margarita 🍕 | Napolitana 🍕 |
|-------------|--------------|---------------|
| Tomate 🍅 | ✔️ | ✔️ |
| Queso 🧀 | ✔️ | ✔️ |
| Aceitunas 🫒 | ❌ | ✔️ |


📌 Ejemplo: Queremos una margarita

- Tenemos 🍅 y 🧀, **podemos preparar la margarita**

```python
hay_tomate = True
hay_queso = True

if hay_tomate and hay_queso:
    preparo_margarita = True
```

2. Queremos una pizza simple

Por desgracia la nevera está casi vacia y **solo queda 🍅**, así que nuestra pizza será una pizza simple

```python
hay_tomate = True
hay_queso = False

if hay_tomate or hay_queso:
    preparo_pizza_simple = True
```

3. Queremos una napolitana

Tenemos 🍅, 🧀 y 🫒 por lo que **podemos preparar la napolitana** y **también la margarita**

```python
hay_tomate = True
hay_queso = True
hay_aceitunas = True

if hay_tomate and hay_queso and hay_aceitunas:
    preparo_napolitana = True
    preparo_margarita = True
```

4. Queremos solo 1 pizza

Te habrás dado cuenta de que **2 pizzas son demasiado**, solo queremos preparar una. ¿Como lo planteamos?
Los ingredientes son los de antes 🍅, 🧀 y 🫒

```python
hay_tomate = True
hay_queso = True
hay_aceitunas = True

if hay_tomate and hay_queso:
    if not hay_aceitunas:
        preparo_margarita = True 
    else:
        preparo_napolitana = True
```

> [!TIP]
> La anidación de condiciones es fundamental en cualquier proceso lógico.

### Condicional match-case

```python
match variable:
    case valor_1:
        # Código a ejecutar si la variable es igual a valor_1
    case valor_2:
        # Código a ejecutar si la variable es igual a valor_2
    case _:
        # Código a ejecutar si no coincide con ningún caso
```

Volvamos a hablar de las temporadas pero esta vez desde un enfoque distinto: **🌸 primavera**, **☀️ verano**, **🍁 otoño**, **❄️ invierno**

```python
temporada = "Invierno"

match temporada:
    case "Verano":
        compro_melocotones = True
    case "Otoño":
        compro_manzana = True
    case "Invierno":
        compro_mandarina = True
    case "Primavera":
        compro_fresas = True
    case _:
        calendario_se_ha_roto = True
```

> [!TIP]
> Este condicional es muy útil para mantener un orden cuando el **conjunto de alternativas es grande**, aunque como todo, depende del contexto
> `match-case` **suele ser más eficiente** que las estructuras `if-elif-else` porque en vez de comprobar todas las condiciones una por una las comprueba en conjunto

---

## 🔁 Bucles

Los **bucles** permiten **ejecutar un bloque de código repetidamente**. Son fundamentales para **recorrer colecciones** de datos y automatizar tareas repetitivas.

Pasamos a verlo con ejemplos ➡️

### Bucle while

```python
while condicion:
    # Código a ejecutar mientras la condición sea verdadera
```

#### Escenario 1 — Manzanas de temporada

Nuestra madre nos enseñó que la fruta de temporada siempre es mejor, aí que **mientras dure el Otoño 🍁**, vamos a **comprar manzanas 🍏**!

```python
es_otoño = True

while es_otoño:
    compro_manzanas = True
```

#### Escenario 2 — Cajón está lleno de manzanas

Hemos seguido el consejo de nuestra madre, pero hemos comprado **demasiadas manzanas🍏**. Esto ocurre porque el bucle while no tiene fin a no ser que nosotros se lo indiquemos, es decir, hemos comprado infinitas 🍏.

Lo que vamos a hacer para solucionar esto es dejar de comprar 🍏 una vez superado cierto umbral:

```python
es_otoño = True
máximo_de_manzanas = 100
mis_manzanas = 0

while es_otoño and mis_manzanas < máximo_de_manzanas:
    compro_manzanas = True
    mis_manzanas += 1
```

> [!TIP]
> El while es un operador de **bucle delicado**, es importante definir bien cuando empieza y cuando acaba ya que sino **puede entrar en un bucle infinito**

### Bucle for

```python
for elemento in iterable:
    # Código a ejecutar para cada elemento en el iterable
```

#### Escenario 1 — Control de manzanas

Durante tus años de vida tu madre te ha insistido en que **el número 13 y sus múltiplos son el demonio**, y te ha sugerido que te deshagas de esas 🍏, por si acaso:

```python
mis_manzanas = 100
manzanas_para_tirar = []

for i in range(1, mis_manzanas + 1):
    if i % 13 == 0:  # Si el número es múltiplo de 13
        manzanas_para_tirar.append(i)

print(f"Manzanas para tirar: {manzanas_para_tirar}")
```

> [!TIP]
> Al trabajar con bucles `for` numéricos, generalmente se suma 1 unidad al rango definido ya que **los rangos** de python por defecto **no incluyen el último número** de la colección.

#### Escenario 2 — Fruta de temporada

¿Te encanta la fruta pero nunca sabes de que temporada es cada fruta? ¿Quieres un **sistema para identificarlas**? Prueba con esto

| Fruta         | Temporada        |
|---------------|------------------|
| Manzana       | Otoño            |
| Naranja       | Invierno         |
| Plátano       | Todo el año      |
| Fresa         | Primavera        |
| Cereza        | Primavera        |
| Melocotón     | Verano           |
| Frambuesa     | Verano           |
| Piña          | Todo el año      |
| Kiwi          | Invierno         |
| Granada       | Otoño            |

```python
frutas_temporada = {
    "Manzana": "Otoño",
    "Naranja": "Invierno",
    "Plátano": "Todo el año",
    "Fresa": "Primavera",
    "Cereza": "Primavera",
    "Melocotón": "Verano",
    "Frambuesa": "Verano",
    "Piña": "Todo el año",
    "Kiwi": "Invierno",
    "Granada": "Otoño"
}

# Lista de frutas a comprobar
frutas = ["Granada", "Kiwi", "Piña", "Fresa"]

for fruta in frutas:
    temporada = frutas_temporada.get(fruta, "Desconocida")
    print(f"La fruta {fruta} es de la temporada {temporada}")
```

---

## 📋 Listas por Comprensión
Las **listas por comprensión** permiten crear listas de manera concisa y eficiente **sin necesidad de usar un bucle** `for` o `while` explícito. A nivel de lógica, no deja de ser una **versión resumida** de la sintaxis `for-if` tradicional.

```python
nueva_lista = [expresion for item in iterable if condicion]
```

Pasamos a verlo con ejemplos ➡️

#### Escenario 1 — Vuelta al control de manzanas

Tu madre no está muy segura de que hayas sacado las 🍏 apropiadas de la caja de 🍏, así que te **exige que se lo presentes de una forma más explicativa**.

```python
mis_manzanas = 100
manzanas_para_tirar = [i for i in range(1, mis_manzanas + 1) if i % 13 == 0]

print(f"Manzanas para tirar: {manzanas_para_tirar}")
```

> [!TIP]
> Permite **crear una lista directamente**, sin tener que definirla primero fuera del bucle

---

## 🎯 Argumentos

```python
def mi_funcion(arg1, arg2):
    # Código que usa los argumentos

def mi_funcion(*args):
    for arg in args:
        # Código que usa los argumentos

def mi_funcion(**kwargs):
    for clave, valor in kwargs.items():
        # Código que usa los argumentos
```

Un **argumento** es un valor que se pasa a una **función cuando se llama**. Permiten que la función realice operaciones con datos específicos.

Veamos unos ejemplos ➡️

#### Escenario 1 — Cajón de nuevas manzanas

Entre una cosa y otra, **has tirado demasiadas 🍏**, así que te **toca reponerlas**, pero en vez de reponerlas de una en una quieres comprar todas a la vez.

```python
mis_manzanas = 80

def comprar_manzanas(manzanas):
    mis_manzanas += manzanas

comprar_manzanas(120)
```

#### Escenario 2 — Etiquetar manzanas

Ahora que **ya tienes un montón de 🍏** puedes calcular cuanto tiempo te van a durar antes de acabarse

```python
mis_manzanas = 200
periodos = 10 # meses

def calcular_manzanas(manzanas, periodos):
    manzanas_por_periodo = manzanas // periodos # División entera
    return manzanas_por_periodo

manzanas_por_periodo = calcular_manzanas(mis_manzanas, periodos)

print(f"Cada periodo tengo {manzanas_por_periodo:.2f} manzanas.")

```

> [!TIP]
> Los argumentos son la base de todo programa, son lo que hace que se comporte de manera diferente según el valor del argumento

---











## ⚡ Funciones Lambda
Una **función lambda** es una función **anónima** y de una sola línea. Se usa para operaciones simples.

```python
lambda argumentos: expresion
```

### 📍 Sintaxis:


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