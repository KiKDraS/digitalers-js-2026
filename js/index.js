/*
  Tipos da Datos - https://lenguajejs.com/javascript/tipos/que-son/       
    => Primitivos - number, string, boolean, etc
    => Compuestos
        -> Objetos
            => Arrays    
            => Objetos Literales
        -> Funciones (acción) - https://lenguajejs.com/fundamentos/funciones/que-es-una-funcion/
          => Espacio de memoria que almacena un Bloque de Código que permite en qué momento, y cuántas veces, nuestro programa va a ejecutar ese Bloque de Código almacenado
          => Declaración (preparo la acción) - Creo la caja y guardo el Bloque de Código
            -> Las funciones deberían ser nombradas con verbos
          => Ejecución (realizo la acción) - Uso el Bloque de Código guardado
            -> () === Ejecutar la función
              -> nombreFuncion() - Realizar las acciones correspondientes a la función cuyo nombre es nombreFuncion
              -> nombreFuncion - Acceder al espacio de memoria que almacena la función  
*/

var miVar;

console.log(miVar);

/*
  Funciones
*/

// Declaración
function saludar() {
  console.log("Hola desde las función saludar");
}

// Ejecutar
saludar();
console.log(saludar);

miSaludo();

/*
  Scope de la Variable
    -> Qué variable puedo usar según dónde estoy trabajando
    -> ¿Cuál es el Espacio de Memoria que contiene la variable?
      -> Variable Global
      -> Variable Local
    -> Variable Global - Es contenida por la Memoria del Navegador
    -> Variable Local - Es contenida por la Memoria de un elemento dentro de la Memoria del Navegador  

    TODO ELEMENTO TIENE ACCESO AL ESPACIO DE MEMORIA QUE LO CONTIENE
    NINGÚN ELEMENTO PUEDE ACCEDER AL ESPACIO DE MEMORIA DE UN ELEMENTO CONTENIDO
    NINGÚN ELEMENTO PUEDE ACCEDER AL ESPACIO DE MEMORIA DE OTRO ELEMENTO QUE NO SEA SU CONTENEDOR
*/

function miFn() {
  console.log(miVarGlobal);
  var miVarLocal = "Un Dato Local";
}

var miVarGlobal = "Un Dato Global";

miFn();

// console.log(miVarLocal);

function otraFn() {
  console.log(miVarLocal);
}

/*
  ECMAScript 2015
    => Introducción de let y const
    => Introducción de string literals
    => Introducción de Arrow Function

  variables
    => var - Deja de ser recomendado
      -> Hoisting de variable - Todas las variables se "elevan" a la parte superior del código
      -> Crea una clave en el Objeto window (Objeto Global)
      -> var es "Variable Global" porque se almacena en el Objeto Global. No confundir con Scope de Variable
      -> Define el Scope de Variable por función
    => let 
      -> Funciona igual que var
      -> No tiene hoisting de variable. No se almacena en el Objeto window
      -> Define el Scope de Variable por Bloque de Código
    => const
      -> No tiene hoisting de variable. No se almacena en el Objeto window
      -> Define el Scope de Variable por Bloque de Código
      -> No puede ser declarada sin asignarle valor
      -> No puede ser reasignada
      -> Convención de Nombres
        -> Si almacena dato primitivo (string, boolean, number, etc) UPPER_SNAKE_CASE
        -> Si almacena dato complejo (Objetos, Arrays, Functions) camelCase
*/

console.log(window);

console.log(unaVar); //undefined - JS sabe que en el Objeto window existe la variable unaVar, todavía no tiene dato almacenado

var unaVar = "Mi Dato";
var unaVar = "Otro dato";

// Simulación de que sucede con var y el Objeto Global
var miObjGlobal = {};

miObjGlobal.unaVar = "Mi Dato";
miObjGlobal.unaVar = "Otro dato";

// console.log(miVarLet);

let miVarLet = "Mi dato";

/*
  Hoisting de función
*/

miNuevaFn();

function miNuevaFn() {
  console.log("Soy miNuevaFn");
}

/*
  Definición de Scope de Variable por función
*/

function miFnConVar() {
  // El if crea un Bloque de Código
  if (true) {
    // Variable Local con Scope por función (si estás adentro de la función la podes usar)
    var miVarEnFn = "Soy una variable con Scope por función";
  }

  console.log(miVarEnFn);
}

miFnConVar();

/*
  Definición de Scope de Variable por Bloque de Código
*/

let miVarGlobalConLet = "Soy una var global"; // Se almacena en el Espacio de Memoria del Navegador

function miFnConLet() {
  // El if crea un Bloque de Código
  if (true) {
    // Variable Local con Scope por Bloque de Código (solo la podes usar dentro del Bloque de Código)
    let miVarEnFn = "Soy una variable con Scope por función";
  }

  // console.log(miVarEnFn); // Error
  console.log(miVarGlobalConLet);
}

miFnConLet();

const PI = 3.14;
// PI = 3.1416;

const miArr = [];
console.log(miArr);

miArr.push("Un dato");
console.log(miArr);

/*
  String Literals - Sirve para simplificar la concatenación de variables con string
*/

const frase = "Mundo!";
console.log("Hola " + frase);
console.log(`Hola 
  
  
${frase}`);

console.log(
  `También se puede usar el ${false ? "ternario" : "operador ternario"}`,
);

/*
  Formas de trabajar con funciones
    -> Funciones que no reciben parámetros ni retornan valor
    -> Funciones que reciben parámetros pero no retornan valor
    -> Funciones que reciben parámetros y retornan valor
    -> Funciones que no reciben parámetros pero retornan valor

  Parámetro - Se agrega en la declaración de la función https://lenguajejs.com/fundamentos/funciones/parametros/  
    -> Espacio de Memoria propio de ESA ejecución de la función
    -> "Variable" que guarda datos para ESA ejecución de la función  

  Argumento - Se agrega en la ejecución de la función
    -> Valor que se asigna al Parámetro en ESA ejecución de la función  
    -> Se pasan de forma secuencial. No puedo pasar el segundo si no paso el primero
    -> El orden de los argumentos altera el producto

  return - Palabra reservada que permite "sacar" un dato de una función
    -> Solo se puede retornar un dato  

  LAS FUNCIONES CREAN SU PROPIO ESPACIO DE MEMORIA
*/

/*
 Funciones que no reciben parámetros ni retornan valor
*/
function fnSinParams() {
  console.log("En la declaración la función no tiene parámetro");
}

/*
  Funciones que reciben parámetros pero no retornan valor
*/
function saludarConNombre(nombre) {
  var miVar = "Dato";
  console.log("Hola " + nombre);
}

saludarConNombre("Anahí");
saludarConNombre("Pepe");

function sumar2(n1, n2) {
  console.log(n1 + n2);
}

sumar2(2, 5); //n1: 2, n2: 5 -> 7

function restar2(n1, n2) {
  console.log(n1 - n2);
}

restar2(5, 2); //n1: 5, n2: 2 -> 3
restar2(2, 5); //n1: 2, n2: 5 -> -3

/*
 Funciones que no reciben parámetros pero retornan valor
*/

function obtenerNumRandom() {
  let random = Math.random(); //0 ... 0.99999999999
  random *= 10; //0 .. 1.9999999
  random = Math.round(random);

  return random;
}

const miNumRandom = obtenerNumRandom();
console.log("random 1:", miNumRandom);

function crearObj() {
  const obj = {};
  obj.nombre = "Pepe";
  obj.apellido = "Peposo";

  return obj;
}

/*
  1. Ejecuta la función crearObj
  2. Usa el valor retornado para mostrar en consola
*/
console.log(crearObj());

/*
 Funciones que reciben parámetros y retornan valor
*/

function sumarConReturn(n1, n2) {
  // Es posible retornar el resultado de operaciones, sin almacenarlo en una variable local
  return n1 + n2;
  /*
    1. Realizar la operación
    2. Retornar el resultado
  */
}

console.log("Suma 1:", sumarConReturn(2, 2));
console.log("Suma 2:", sumarConReturn(5, 2));
console.log("Suma 3:", sumarConReturn(5, 8));

/*
  Tipos de Declaración de Función
    => Funciones declaradas
      -> Función que crea su propio espacio de almacenamiento
      -> Cuando le doy nombre a la función, el navegador usa ese nombre para crear la "variable" que almacena el Bloque de Código
    => Funciones expresadas (funciones anónimas)
      -> NO crea su propio espacio de almacenamiento
      -> NO se escribe nombre al declararla
      -> Se puede guardar en cualquier espacio de almacenamiento válido
    => Arrow Function
      -> Es una Función Expresada con "Super Poderes"
      -> Si sólo escribo una línea de código, puedo no escribir las llaves
      -> Si solo escribo una línea de código, puedo no escribir el return
      -> Si solo escribo un parámetro, puedo no escribir los paréntesis
      -> Se utilizan mucho como Funciones Callback porque simplifican la escritura
*/

// Función declarada
function miFnDeclarada() {
  console.log("Soy una Función Declarada");
}

miFnDeclarada();

// Función expresada

const miFnExpresada = function () {
  console.log(
    "Soy una Función Expresada almacenada en la variable miFnExpresada",
  );
};

miFnExpresada();

const unObj = {
  miFnExpresada: function () {
    console.log(
      "Soy una Función Expresada almacenada en la propiedad miFnExpresada del objeto unObj",
    );
  },
};

unObj.miFnExpresada();

// Arrow Function

const miArrowFunction = () =>
  console.log(
    "Soy una Función Arrow Function almacenada en la variable miArrowFunction",
  );

miArrowFunction();

// const sumarArrow = (n1, n2) => {
//   return n1 + n2;
// }
const sumarArrow = (n1, n2) => n1 + n2;

console.log(sumarArrow(2, 2));

// const saludarArrow = nombre => console.log(`Hola ${nombre}`);

/*
  Tipos de Función
    => Funciones Callback
      -> Función que pasa como Argumento de otra para que la función receptora la ejecute
      -> Una Función Declarada puede ser una Función Callback. Recordad no ejecutar
      -> Una Función Expresada puede ser una Función Callback
*/

function fnReceptora(fnCallback) {
  // setTimeout - Permite retrasar la ejecución de una función x milisegundos
  // setTimeout(() => {
  fnCallback();
  // }, 500);
}

fnReceptora(() => console.log("Hola desde fnCallback - Arrow Function"));

function miFnDeclaradaCallback() {
  console.log("Hola desde miFnDeclaradaCallback");
}

fnReceptora(miFnDeclaradaCallback);

fnReceptora(function () {
  console.log("Hola desde fnCallback - Función Expresada");
});

const miNuevaArrow = () =>
  console.log("Hola desde Arrow Function almacenada en miNuevaArrow");

fnReceptora(miNuevaArrow);

/*
  Eventos
    => Un Evento es un MENSAJE que el navegador envía cuando algo sucede
    => Trabajar con Eventos es "escuchar" ese mensaje y responder con una acción (función)
      -> 1. Qué elemento escuchar
      -> 2. Qué Evento (qué mensaje) voy a escuchar
      -> 3. Qué acción (Función Callback) se ejecuta como respuesta

  Código sincrónico
    -> Se ejecuta línea a línea, uno detrás del otro en orden de lectura    

  Código asincrónico
    -> Es código que el navegador NO ejecuta al momento que lo lee
    -> El navegador guarda el código y lo ejecuta MÁS TARDE, cuando se cumple una condición
      -> En los Eventos: cuando el usuario realiza la acción que estamos escuchando    
        -> Lo asincrónico es la función que responde al evento (Función Callback)
          -> addEventListener NO ejecuta la función, la guarda para ejecutarla después
*/

const colores = ["Rojo", "Amarillo", "Verde"];
const btn = document.querySelector(".btn");
const ul = document.querySelector(".colores");

const mostrarColores = () => {
  console.log("Callback de evento - Código asincrónico");
  for (let i = 0; i < colores.length; i++) {
    const color = colores[i];
    ul.innerHTML += `
      <li>
        <span>${color}</span>
      </li>
    `;
  }
};

btn.addEventListener("click", mostrarColores);

console.log("Soy código sincrónico");
