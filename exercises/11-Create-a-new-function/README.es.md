# `11` Creando una Nueva Función

Como sabes, las funciones son un bloque útil de código que puedes reutilizar las veces que desees. En el último ejercicio, tuviste una función que recibía dos parámetros (dos entradas o inputs) y devolvía la suma de ellas. 

De esta forma:
```js
function addNumbers(a, b){
  return a + b;
}
```

Pero Javascript viene con un montón de funciones "pre-definidas" que puedes utilizar. 

Por ejemplo:
```js
Math.random();
```

Puedes utilizar la función **Math.random()** para obtener un número decimal aleatorio entre 0 y 1. Cada vez que llames a esa función, devolverá otro número decimal aleatorio entre 0 y 1.

## :pencil: Instrucciones:

* Por favor crea una función llamada **generateRandom**, la cual genere un número aleatorio entre 0 y 9 cada vez que sea llamada.

### 💡 Pista:

* Una posible solución incluye utilizar dos funciones predefinidas: las funciones **Math.random()** y **Math.floor()**.
* Puedes descubrir más acerca de esto, aquí:

    https://www.w3schools.com/jsref/jsref_random.asp