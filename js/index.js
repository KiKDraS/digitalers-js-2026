/*
    Tipo da Dato
        => undefined - Variable declarada SIN Tipo de Dato ni valor
        => null - Variable declarada, tiene Tipo de Dato pero NO tiene valor
            -> En JS, una variable recibe Tipo de Dato cuando se le asigna valor
*/

var unaVar; // undefined
console.log(unaVar);

var variableNull = document.getElementById("id-que-no-existe");
console.log(
  "Tipo de Dato: " + typeof variableNull + " - Valor: " + variableNull,
);

/*
    Paradigma de Programación Orientada a Objetos (POO)
        => Clases - Plantilla que contiene información
        => Objetos - Copia de esa plantilla
            -> Objeto HTML - Plantilla que permite trabajar con los elementos HTML
                -> Herramientas JS que permite copiar el Objeto HTML
                    -> document.getElementById(idDelElementoHTML)
                    -> document.querySelector(selectorCSS)
                        -> Siempre trabajo con el PRIMER elemento HTML que cumpla con el selector CSS
                    -> document.querySelectorAll(selectorCSS)
                        -> Toma todos los elementos y permite elegir con cuál trabajar

*/

// var main = document.getElementById("main");
var main = document.querySelector("main");
console.log(main);
console.dir(main);

/*
    Programa - Calculadora muy simple que sume 2 números
        -> Objetivo: Sumar dos números y mostrar el resultado

    ¿Qué? - Paso a Paso del Programa
        -> 1. 2 números que tiene que ingresar el usuario
        -> 2. Realizar la suma de esos 2 números
        -> 3. Mostrar el resultado  
            -> a. Cartel con fondo cadeteblue y texto  

    ¿Cómo? - Lenguaje de Programación y el Diseño (Figma)
        -> 1. 
            -> a. Crear 2 variables (n1, n2)    
            -> b. Asignar a cada variable el dato ingresado por el usuario (prompt). 
            -> c. Castear string a number
        -> 2. 
            -> Crear variable resultado
            -> Asignar a resultado la suma de n1 y n2
        -> 3. 
            -> a. Crear etiqueta en el HTML para mostrar el resultado (#resultado-suma)
            -> b. Agregar estilos CSS (.cartel) al archivo index.css para copiar Diseño
            -> c. Usar document.querySelector para agregar el resultado a la etiqueta    
                -> i. Crear variable para almacenar el Objeto HTML
                -> ii. Utilizar la propiedad className para agregar la clase cartel
                -> iii. Utilizar textContent para agregar el resultado


// 1.
var n1 = parseInt(prompt("Ingrese el primer número")); // 1.a, 1.b y 1.c
var n2 = prompt("Ingrese el segundo número"); //1.a y 1.b
n2 = parseInt(n2); //1.c
*/
// 2.
// var resultado = n1 + n2;
var resultado = 10;

// 3.c.i
var divResultado = document.querySelector("#resultado-suma");
console.dir(divResultado);

// var miVar = "mi-clase";
// // miVar += " cartel";
// miVar = miVar + " cartel";
// console.log(miVar);

// 3.c.ii
divResultado.className += " cartel";

// 3.c.iii
// divResultado.textContent =
//   "<p style='text-align: center'>" + resultado + "</p>"; // Permite agregar texto plano. No computa CSS ni layout
// divResultado.innerText = "<p style='text-align: center'>" + resultado + "</p>"; // Permite agregar texto plano. Computa CSS y layout
divResultado.innerHTML = "<p style='text-align: center'>" + resultado + "</p>"; // Permite agregar texto enriquecido (HTML es texto enriquecido). Vulnerable a XSS (Cross-Site Scripting)

/*
    Operadores de Variable
        => Matemáticos
        => Asignación
        => Incremento(++)/Decremento(--)
        => Lógicos - Permiten crear condiciones
            -> Operadores de Comparación
                -> && (AND) - La condición es true si todas las condiciones individuales son true
                -> || (OR) - La condición es true si una de las condiciones individuales es true
                -> ! (NOT) - Invierte el resultado de la condición

    NO SE PUEDE OPERAR CON VARIABLES DE DISTINTO TIPO    
        -> El operador == o != NO impide el casteo implícito
            -> number == string -> string == string -> true
        -> El operador === o !== IMPIDE el casteo implícito    

    Condiciones - Son preguntas que se responden sí o no
        -> ¿Es 7 mayor que 3? - Sí
            -> 7 > 3 - true
        -> ¿3 es mayor o igual que 7? - No
            -> 3 >= 7 - false
        -> ¿Hay algo guardado en la variable? - La existencia o no de un valor almacenado en una variable es una condición
            -> falsie - Valores que hacen que JS castee a false
                -> undefined
                -> null
                -> false
                -> 0
                -> -0
                -> ""
                -> NaN
            -> trusty - Todo valor que no esté en la lista de falsie, es casteado a true   
            
    Estructuras de Control de Flujo - Usan condiciones para saber si realizan/repiten una acción     
        => Condicionales - Escribimos condiciones con la intención de obtener un true. Buscamos responder qué hacer si X sucede
            -> if/else
                -> Podemos no escribir los corchetes si solo ponemos una línea de código
                -> No es obligatorio usar el else
                -> if/else if/else    
                    -> EL ORDEN DE LAS CONDICIONES ALTERA EL RESULTADO DEL PROGRAMA
            -> Operador Ternario - condición ? true : false | condición ? true : condición ? true : false;    
                -> No puedo trabajar con más de una línea de código
                -> Puedo almacenar en una variable el código que se ejecuta producto de la evaluación
                -> No se puede evitar el else
            -> switch    
        => Bucles - Escribimos condiciones que indiquen hasta cuando debe repetirse el bucle. Buscamos que en algún momento la condición sea false. Si nunca se convierte en false, tenemos un error conocido como bucle infinito
            -> for
            -> while
            -> do-while   
*/

var n1 = 1;
var n2 = "1";

//¿Es la variable n1 es igual a la variable n2? - No
console.log(n1 == n2); //true
console.log(n1 != n2); //false

//¿Es la variable n1 es estrictamente igual a la variable n2? - No
console.log(n1 === n2); //false
console.log(n1 !== n2); //true

/*
    if/else

    if (condición) {
        // bloque de código que se ejecuta si la condición es true
    } else {
        // bloque de código que se ejecuta si la condición es false
    }    
*/

var textoAMostrar;

if (n1 === n2) {
  textoAMostrar = "Realizo esta acción porque la condición es true";
} else {
  textoAMostrar = "Realizo esta acción porque la condición es false";
}

console.log(textoAMostrar);

if (n1 === n2)
  textoAMostrar = "Realizo esta acción porque la condición es true";
else textoAMostrar = "Realizo esta acción porque la condición es false";

if (n1 === n2) {
  console.log(
    "En mi programa solo me interesa hacer algo si la condición es true",
  );
}

var num1 = 1;
var num2 = "2";

if (num1 === num2) {
  console.log("n1 es estrictamente igual a n2");
} else if (num1 == num2) {
  console.log("n1 es igual a n2");
} else {
  console.log("n1 y n2 son distintos");
}

console.log("Continuamos con el código");

/*
    Programa - Mostrar por consola si la edad corresponde a un niño, un adolescente o un adulto
        -> niño - menor de 13 años
            -> edad < 13
        -> adolescente - tiene entre 13 y 17 años
            -> ¿Es edad >= 13? ¿Es edad <= 17?
                -> edad >= 13 && edad <= 17
        -> adulto - mayor de 18 años
*/

var edad = "texto";

// false || false ||  true - true | Validación de dato
if (edad < 0 || edad > 120 || typeof edad != "number") {
  console.error("No es una edad válida");
} else if (edad < 13) {
  console.log("Niño");
} else if (edad >= 13 && edad <= 17) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

/*
    Validar que el dato existe
        -> dato que existe === dato que NO es un falsie
        -> dato que NO existe === dato que ES falsie
*/
var miDato = "";

// !false -> true
if (!miDato) {
  console.error("El dato NO existe. Cuidado con el programa");
}

/*
    EJERCICIO

    Pedir al usuario que ingrese un número del 1 al 10.
    Si ingresa un número menor o igual que 4, mostrar en pantalla un cartel rojo con el número elegido
    Si ingresa un número entre 4 y 6, mostrar en pantalla un cartel amarillo con el número elegido
    Para el resto de los números, mostrar en pantalla un cartel amarillo con el número elegido

    ¿Qué?
        -> 1. Obtener el número
        -> 2. Evaluar el número
            -> a. ¿Es el número menor o igual que 4?
            -> b. ¿Es el número mayor que 4 y menor o igual que 6?
        -> 3. Mostrar el resultado con los colores correspondientes
            -> 2.a - rojo
            -> 2.b - amarillo
            -> resto - verde

    ¿Cómo?
        -> 1. Obtener el número
            -> a. Crear variable numElegido
            -> b. Almacenar en la variable la conversión a number del prompt
        -> 2. Evaluar el número (Estructura if/else if/else) 
                -> if - numElegido <= 4
                -> if else - numElegido > 4 && numElegido <= 6
                -> else - todo lo demás 
        -> 3. Mostrar
            -> a. Crear clases en el index.css (.cartel, .red, .yellow y .green)     
            -> b. Copiar el Objeto HTML
                -> i. Crear elemento en documento HTML con id="ejercicio-if"
                -> ii. Crear divIf. Almacenar el Objeto HTML (document.querySelector("#ejercicio-if")) 
                -> ii. Utilizar la variable divIf para modificar las propiedades del Objeto HTML que almacena                
*/

var numElegido = parseInt(prompt("Elija un número del 1 al 10"));
var divIf = document.querySelector("#ejercicio-if");

if (numElegido <= 4) {
  divIf.innerHTML = "<p class='cartel red'>" + numElegido + "</p>";
} else if (numElegido > 4 && numElegido <= 6) {
  divIf.innerHTML = "<p class='cartel yellow'>" + numElegido + "</p>";
} else {
  divIf.innerHTML = "<p class='cartel green'>" + numElegido + "</p>";
}

var divTernario = document.querySelector("#ejercicio-if-ternario");
divTernario.innerHTML =
  numElegido <= 4
    ? "<p class='cartel red'>" + numElegido + "</p>"
    : numElegido > 4 && numElegido <= 6
      ? "<p class='cartel yellow'>" + numElegido + "</p>"
      : "<p class='cartel green'>" + numElegido + "</p>";

/*
    Cómo sacar máxima ventaja del operador ternario
*/
var divTernario2 = document.querySelector("#ejercicio-if-ternario-2");

var classString =
  numElegido <= 4
    ? "red"
    : numElegido > 4 && numElegido <= 6
      ? "yellow"
      : "green";

divTernario2.innerHTML =
  "<p class='cartel " + classString + "'>" + numElegido + "</p>";
