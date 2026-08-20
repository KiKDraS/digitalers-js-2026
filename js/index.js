/*
  Tipos da Datos - https://lenguajejs.com/javascript/tipos/que-son/       
    => Primitivos - number, string, boolean, etc
      -> undefined - Variable que no tiene valor, ni tipo de dato
      -> null - Variable que TIENE tipo de dato pero no tiene valor
    => Compuestos
        -> Objetos
            => Arrays 
                -> Etiquetan sus "cajones" con un índice
                    -> índice, número otorgado por JS
                        -> El "primer cajón" siempre tiene el número 0
                        -> El resto de los "cajones" se etiquetan de forma secuencial
                        -> El valor del índice es conocido como posición
                -> índice !== longitud
                -> Longitud - Cantidad de elementos almacenados en el Array        
            => Objetos Literales
                -> El programador es responsable de identificar el "cajón"
                -> Para clave: valor
                    -> clave - etiqueta del "cajón"
                    -> valor - elemento almacenado en el "cajón"
        -> Funciones (acción) - https://lenguajejs.com/fundamentos/funciones/que-es-una-funcion/
          => Espacio de memoria que almacena un Bloque de Código que permite en qué momento, y cuántas veces, nuestro programa va a ejecutar ese Bloque de Código almacenado
          => Declaración (preparo la acción) - Creo la caja y guardo el Bloque de Código
            -> Las funciones deberían ser nombradas con verbos
          => Ejecución (realizo la acción) - Uso el Bloque de Código guardado
            -> () === Ejecutar la función
              -> nombreFuncion() - Realizar las acciones correspondientes a la función cuyo nombre es nombreFuncion
              -> nombreFuncion - Acceder al espacio de memoria que almacena la función


  Bloque de Código === Sentencias agrupadas dentro de llaves
  {
    var miVar = "un dato";
  }       
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

console.log(miVarLocal);

function otraFn() {
  console.log(miVarLocal);
}
