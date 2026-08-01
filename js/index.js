// console.log(elemento-a-mostrar); console.log == Herramienta para mostrar cosas en la consola de las DevTools del navegador

// document.getElementById("id-del-elemento-en-el-html"); document.getElementById === Herramienta para trabajar con elementos escritos en el documento HTML

// Quiero ver en la consola del Navegador el elemento con el id="titulo"
// console.log(document.getElementById("titulo"));

/*
    variable - Espacio de memoria que almacena datos que pueden cambiar a lo largo de la Ejecución del Programa
        => Reglas de Nomenclatura (reglas para nombrar las variables)
            -> Los nombres DEBEN comenzar con letras, $ o _
            -> No pueden empezar con números
            -> No pueden tener espacios
            -> Solo pueden tener letras, números, $ y _
            -> Son key sensitive
                -> otracosa es distinto de otraCosa
            -> Los nombre DEBEN ser descriptivos    
        => Formatos de escritura de variable
            -> camelCase - Por convención, en JS usamos camelCase
            -> PascalCase
            -> snake_case
            -> UPPER_SNAKE_CASE
            -> kebab-case (solo CSS)    

    Palabra Reservada -> Son palabras que NO PODEMOS usar libremente porque en Lenguaje de Programación tienen un significado
        -> var - En JS significa "declarar variable"
        -> let - En JS significa "declarar variable de bloque"
        -> const - En JS significa "declarar variable de bloque que no puede ser re-asignada"       
        -> typeof - En JS significa que quiero conocer el Tipo de Dato de la variable
*/

// Declarar variable (crear caja)
var unaVariable;

// Asignar variable (guardar algo en la caja)
unaVariable = "Hola, mundo!";

// Declarar y asignar en una sola sentencia (oración)
var otraVariable = "otra cosa";

/*
    Dato - Elemento representativo que tiene un significado de uso

    Tipos de Dato (cada Lenguaje tiene sus Tipos de Dato)
        -> number - Representa números para propósitos matemáticos (1, 1.5, -50, etc)
        -> string - Representa texto ("hola", "a", "un párrafo", "1")
            -> ""/'' - Indico que voy a generar un dato de tipo string
        -> boolean - Representa un verdadero/falso
        -> undefined - Variable declarada que no tiene valor asignado
        -> null - Variable declarada que TIENE Tipo de Dato pero no tiene valor
            -> En JS, null suele venir acompañado de un error

    Las variables son pensadas en relación al Tipo de Dato que almacenan  
        -> Tengo una variable de tipo number si guarda un dato de tipo number  
        -> En JS, el Tipo de Dato de una variable se obtiene al momento en que se le asigna un valor*
        -> Todas las variables tienen Tipo de Dato


    * Asignar Valor === Guardar elemento en una caja    
*/

// Int miNum; -> En Java (fuertemente tipado), voy a crear una variable de tipo Int (número entero)

var miNum; // La variable no tiene valor asignado
console.log("Valor: " + miNum + " - Tipo de Dato: " + typeof miNum);

miNum = 1; // Asigno un valor de tipo number
console.log("Valor: " + miNum + " - Tipo de Dato: " + typeof miNum);

var miString = "1";
console.log("Valor: " + miString + " - Tipo de Dato: " + typeof miString);

var otroString = "Hola, 'Mundo'!";
console.log("Valor: " + otroString + " - Tipo de Dato: " + typeof otroString);
otroString = 'Hola, "Mundo"!';
console.log("Valor: " + otroString + " - Tipo de Dato: " + typeof otroString);

var unBoolean = true;
console.log("Valor: " + unBoolean + " - Tipo de Dato: " + typeof unBoolean);
unBoolean = false;
console.log("Valor: " + unBoolean + " - Tipo de Dato: " + typeof unBoolean);

/*
    1.- Declaro la variable
*/
var unTitulo;

/*
    2.- Asigno la variable - Le pido al navegador que vaya al HTML, busque el elemento con el id="unTitulo" y lo guarde en la variable unTitulo 
*/
unTitulo = document.getElementById("unTitulo");

/*
    3.- Le pido a JS que me muestre en consola qué valor tiene asignado la variable unTitulo y cuál es el tipo de dato 
*/
console.log(unTitulo);
