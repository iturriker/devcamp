# INICIACIÓN A PYTHON

En esta guía encontrarás los **principios básicos** que debes aprender para empezar a desenvolverte en **Python**. Comenzaremos con conceptos fundamentales y aumentaremos la complejidad progresivamente.

---

## 🔀 Condicionales

Un **condicional** es una **estructura de control** que permite ejecutar un bloque de código **solo cuando se cumple una determinada condición** (o conjunto de condiciones).

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

#### Contexto

> Imagina que hoy te has levantado con muchas ganas de comer frutas y que tus frutas favoritas son las **manzanas 🍏**, las **fresas 🍓** y los **melocotones 🍑**, cada una de diferentes temporadas.

#### Ejemplos

<details>
<summary>
📌 Ejemplo 1: Estamos en Otoño
</summary>
<br>

| 🛒 Acción | 🔎 Resultado | 🎯 Consecuencia |
|------------|--------------|------------------|
| Buscas 🍏 | ✅ Hay 🍏  | Compras 🍏 |

```python
hay_manzanas = True

if hay_manzanas:
    compro_manzanas = True
```

</details>

<details>
<summary>
📌 Ejemplo 2: Estamos en Primavera
</summary>
<br>

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

</details>

<details>
<summary>
📌 Ejemplo 3: Estamos en Verano
</summary>
<br>

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

</details>

<details>
<summary>
📌 Ejemplo 4: Estamos en Invierno
</summary>
<br>

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

</details>

> [!TIP]
> Cuando una de las condiciones se cumple, **no pasa a comprobar las siguientes**.

---

### Condicional match-case

#### Sintaxis

```python
match variable:
    case valor_1:
        # Código a ejecutar si la variable es igual a valor_1
    case valor_2:
        # Código a ejecutar si la variable es igual a valor_2
    case _:
        # Código a ejecutar si no coincide con ningún caso
```

#### Contexto

> Te has planteado cambiar el enfoque, y en vez de ir al super a buscar la fruta, primero compruebas la temporada actual para así comprar la fruta en función de ello: **🌸 primavera**, **☀️ verano**, **🍁 otoño**, **❄️ invierno**

#### Ejemplos

<details>
<summary>
📌 Ejemplo 1: Fruta por temporada
</summary>
<br>

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

</details>

> [!TIP]
> - Este condicional es muy útil para mantener un orden cuando el **conjunto de alternativas es grande**, aunque como todo, depende del contexto.
>
> - `match-case` **suele ser más eficiente** que las estructuras `if-elif-else` porque en vez de comprobar todas las condiciones una por una las comprueba en conjunto.

---

## 🔗 Operadores

Los **operadores** son símbolos clave que le indican al programa que debe **realizar una operación específica**.

<img src="/full-stack/checkpoint-5/operators.png" alt="Esquema de operadores" width="600" height="326">

| Tipo | Proposito | operadores |
|------------|-------------------------------------------|---------------------|
| Aritméticos | Para operaciones matemáticas básicas | `+, -, *, /, //, %, **` |
| Comparación | Comparan valores | `==, !=, >, <, >=, <=` |
| Lógicos | Combinan condiciones lógicas | `and, or, not` |
| Asignación | Asignan valores a variables | `=, +=, -=, *=, /=, //=, %=, **=` |
| Identidad | Comparan objetos (si son el mismo en memoria) | `is, is not` |
| Pertenencia | Comprueban si un valor está en una colección | `in, not in` |
| Bitwise | Operan a nivel de bits | `&, |, ^, ~, <<, >>` |

###  Operadores lógicos: and - or - not

#### Sintaxis

```python
condicion_1 and condicion_2
    # Código a ejecutar cuando se cumplen tanto la primera como la segunda condición
condicion_1 or condicion_2
    # Código a ejecutar cuando se cumple una de las dos condiciones
not condicion
    # Código a ejecutar cuando no se cumple la condición
```

#### Contexto

> Esta vez te has levantado con ganas de preparar una pizza, y tus pizzas favoritas son la **margarita** y la **napolitana**. La margarita lleva **tomate 🍅** y **queso 🧀** y la napolitana lleva **tomate 🍅**, **queso 🧀** y **aceitunas 🫒**.

> | Ingrediente | Margarita 🍕 | Napolitana 🍕 |
> |-------------|--------------|---------------|
> | Tomate 🍅 | ✔️ | ✔️ |
> | Queso 🧀 | ✔️ | ✔️ |
> | Aceitunas 🫒 | ❌ | ✔️ |

#### Ejemplos

<details>
<summary>
📌 Ejemplo 1: Queremos una margarita
</summary>
<br>

Tenemos 🍅 y 🧀, **podemos preparar la margarita**

```python
hay_tomate = True
hay_queso = True

if hay_tomate and hay_queso:
    preparo_margarita = True
```

</details>

<details>
<summary>
📌 Ejemplo 2: Queremos una pizza simple
</summary>
<br>

Por desgracia la nevera está casi vacia y **solo queda 🍅**, así que nuestra pizza será una pizza simple

```python
hay_tomate = True
hay_queso = False

if hay_tomate or hay_queso:
    preparo_pizza_simple = True
```

</details>

<details>
<summary>
📌 Ejemplo 3: Queremos una napolitana
</summary>
<br>

Tenemos 🍅, 🧀 y 🫒 por lo que **podemos preparar la napolitana** y **también la margarita**

```python
hay_tomate = True
hay_queso = True
hay_aceitunas = True

if hay_tomate and hay_queso and hay_aceitunas:
    preparo_napolitana = True
    preparo_margarita = True
```

</details>

<details>
<summary>
📌 Ejemplo 4: Queremos solo 1 pizza
</summary>
<br>

Te habrás dado cuenta de que **2 pizzas son demasiado**, solo queremos preparar una. ¿Como lo planteamos? Los ingredientes son los de antes 🍅, 🧀 y 🫒

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

</details>

> [!TIP]
> La **anidación de condiciones** es fundamental en cualquier proceso lógico.

---

## 🔁 Bucles

Los **bucles** permiten **ejecutar un bloque de código repetidamente**. Son fundamentales para **recorrer colecciones** de datos y automatizar tareas repetitivas.

### Bucle while

#### Sintaxis

```python
while condicion:
    # Código a ejecutar mientras la condición sea verdadera
```

#### Contexto

> Últimamente te has **aficionado especialmente a las manzanas 🍏**. Desconoces el motivo, solo sabes que te encantan.

#### Ejemplos

<details>
<summary>
📌 Ejemplo 1: Manzanas de temporada
</summary>
<br>

Todos sabemos que la fruta de temporada siempre es mejor, así que **mientras dure el Otoño 🍁**, vamos a **comprar muchas manzanas 🍏**!

```python
es_otoño = True

while es_otoño:
    compro_manzanas = True
```

</details>

<details>
<summary>
📌 Ejemplo 2: Cajón lleno de manzanas
</summary>
<br>

Por un descuido, hemos comprado **demasiadas manzanas🍏**. Esto ocurre porque el bucle while no tiene fin a no ser que nosotros se lo indiquemos, es decir, hemos comprado infinitas 🍏.

Lo que vamos a hacer para solucionar esto es dejar de comprar 🍏 una vez superado cierto umbral.

```python
es_otoño = True
máximo_de_manzanas = 100
mis_manzanas = 0

while es_otoño and mis_manzanas < máximo_de_manzanas:
    compro_manzanas = True
    mis_manzanas += 1
```

</details>

> [!TIP]
> El while es un operador de **bucle delicado**, es importante definir bien cuando empieza y cuando acaba ya que sino **puede entrar en un bucle infinito**.

---

### Bucle for

#### Sintaxis

```python
for elemento in iterable:
    # Código a ejecutar para cada elemento en el iterable
```

#### Contexto

> Al ver tantas manzanas 🍏 en el cajón de manzanas 🍏 **tu madre se ha empezado a hacer preguntas**, y te has metido en un lio!

#### Ejemplos

<details>
<summary>
📌 Ejemplo 1: Control de manzanas
</summary>
<br>

Durante tus años de vida tu madre te ha insistido en que **el número 13 y sus múltiplos son el demonio**, y te ha obligado que te deshagas de esas 🍏.

```python
mis_manzanas = 100
manzanas_para_tirar = []

for i in range(1, mis_manzanas + 1):
    if i % 13 == 0:  # Si el número es múltiplo de 13
        manzanas_para_tirar.append(i)

print(f"Manzanas para tirar: {manzanas_para_tirar}")
```

</details>

<details>
<summary>
📌 Ejemplo 2: Fruta de temporada
</summary>
<br>

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

</details>

> [!TIP]
> Al trabajar con bucles `for` numéricos, generalmente se suma 1 unidad al rango definido ya que **los rangos** de python por defecto **no incluyen el último número** de la colección.

---

## 📋 Listas por Comprensión

Las **listas por comprensión** permiten crear listas de manera concisa y eficiente **sin necesidad de usar un bucle** `for` o `while` explícito. A nivel de lógica, no deja de ser una **versión resumida** de la sintaxis `for-if` tradicional.

#### Sintaxis

```python
nueva_lista = [expresion for item in iterable if condicion]
```

#### Contexto



#### Ejemplos

<details>
<summary>
📌 Ejemplo 1: Vuelta al control de manzanas
</summary>
<br>

Tu madre no está muy segura de que hayas sacado las 🍏 apropiadas de la caja de 🍏, así que te **exige que se lo presentes de una forma más explicativa**.

```python
mis_manzanas = 100
manzanas_para_tirar = [i for i in range(1, mis_manzanas + 1) if i % 13 == 0]

print(f"Manzanas para tirar: {manzanas_para_tirar}")
```

</details>

> [!TIP]
> Permite **crear una lista directamente**, sin tener que definirla primero fuera del bucle.

---

## 🎯 Argumentos

Un **argumento** es un valor que se pasa a una **función cuando se llama**. Permiten que la función realice operaciones con datos específicos.

#### Sintaxis

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

#### Contexto

#### Ejemplos

<details>
<summary>
📌 Ejemplo 1: Cajón de nuevas manzanas
</summary>
<br>

Entre una cosa y otra, **has tirado demasiadas 🍏**, así que te **toca reponerlas**, pero en vez de reponerlas de una en una quieres comprar todas a la vez.

```python
mis_manzanas = 80

def comprar_manzanas(manzanas):
    mis_manzanas += manzanas

comprar_manzanas(120)
```

</details>

<details>
<summary>
📌 Ejemplo 2: Etiquetar manzanas
</summary>
<br>

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

</details>

> [!TIP]
> Los argumentos **son la base de todo programa**, son lo que hace que se **comporte de manera diferente** según el valor del argumento.

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