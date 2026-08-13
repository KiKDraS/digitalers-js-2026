/*
    Programación Orientada a Objetos
        -> Clases - Plantillas
        -> Objetos - Copias de las Plantillas
            -> Objeto HTML - Guarda todo lo que podemos hacer con un elemento del HTML
                -> className
                -> textContent - Permite agregar texto plano
                -> innerText - Permite agregar texto plano. Calcula estilos CSS. Recomendado no usar
                -> innerHTML - Permite agregar texto enriquecido (HTML). Vulnerable a XSS
            -> Objeto Number - Guarda todo lo que podemos hacer con un dato de tipo number
            -> Objeto String - Guarda todo lo que podemos hacer con un dato de tipo string
            -> Objeto Date - Guarda todo lo que podemos hacer con fechas
                -> https://lenguajejs.com/javascript/fechas/date-fechas-nativas/ - Objeto Date
                -> https://lenguajejs.com/javascript/fechas/formatear-fechas-con-intl/ - Formatear Fecha
                -> https://lenguajejs.com/javascript/fechas/temporal-api/ - Temporal

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
                -> Evaluar un dato PREVIAMENTE PROCESADO del que se conocen los posibles resultados   
                -> Evaluar DATO PROCESADO === valor esperado
        => Bucles - Escribimos condiciones que indiquen hasta cuando debe repetirse el bucle. Buscamos que en algún momento la condición sea false. Si nunca se convierte en false, tenemos un error conocido como bucle infinito
            -> for
            -> while
                -> Ejecuta el código si la condición es true y MIENTRAS que la condición sea true
                    -> Condición false? - Nunca ejecuta el código
            -> do-while   
*/

/*
    Programa - Pedir al usuario que ingrese un número entre el 0 y el 6. Usar ese número para indicar un día la semana, asumiendo que 0 es Domingo y 6 es Sábado. Asegurarse que el valor ingresado no sea menor de 0 ni mayor de 6. El tipo de dato debe ser number.

    ¿Qué?
        -> 1. Obtener el dato crudo
        -> 2. Validar el dato crudo
            -> a. Evaluar que el dato sea un número
            -> b. Evaluar que el número no sea menor a 0 ni mayor a 6

    ¿Cómo?
        -> 1. 
            -> a. Crear variable datoCrudo
            -> b. Utilizar prompt para solicitar: "Ingresar un número entre 0 y 6"
            -> c. Almacenar el valor ingresado en la variable datoCrudo
        -> 2.
            -> a. Utilizar parseInt para convertir el dato almacenado en la variable datoCrudo a number
                -> i. Si el usuario no ingresa un número válido, parseInt retorna NaN -> paseInt(datoCrudo) !== NaN  
                    -> ¿El usuario ingreso un número?
                -> ii. datoCrudo < 0 || datoCrudo > 6
                    -> ¿El número ingresado por el usuario se encuentra en rango deseado?
*/

// var datoCrudo = parseInt(prompt("Ingresar un número entre 0 y 6"));

// ¿datoCrudo almacena un NaN?
// while (Number.isNaN(datoCrudo)) {
//   datoCrudo = parseInt(
//     prompt("No ingresaste un número. Ingresar un número entre 0 y 6"),
//   );
// }

// while (datoCrudo < 0 || datoCrudo > 6) {
//   datoCrudo = parseInt(
//     prompt("No ingresaste un número válido. Ingresar un número entre 0 y 6"),
//   );
// }

// var noEsNumero = Number.isNaN(datoCrudo);
// var numeroFueraDeRango = datoCrudo < 0 || datoCrudo > 6;

// while (noEsNumero || numeroFueraDeRango) {
//   datoCrudo = parseInt(
//     prompt("No ingresaste un número válido. Ingresar un número entre 0 y 6"),
//   );
// }

// En esta línea estamos seguros de que la variable datoCrudo ES un número entre 0 y 6. En esta línea tengo un DATO PROCESADO

/*
    key -> DATO PROCESADO
    value -> valor esperado
    break -> Forzar la finalización del switch
    default -> Equivalente al else del condicional if/else. Puede no estar

    switch (key) {
        case value:
            // Código que se ejecuta cuando se cumple la condición
            break;

        default:
            break;
    }
*/

// switch (datoCrudo) {
//   case 0:
//     console.log("Es Domingo");
//     break;

//   case 1:
//     console.log("Es Lunes");
//     break;

//   case 2:
//     console.log("Es Martes");
//     break;

//   case 3:
//     console.log("Es Miércoles");
//     break;

//   case 4:
//     console.log("Es Jueves");
//     break;

//   case 5:
//     console.log("Es Viernes");
//     break;

//   case 6:
//     console.log("Es Sábado");
//     break;

//   default:
//     console.error("El programa falló");
//     break;
// }

// switch (datoCrudo) {
//   case 6:
//   case 0:
//     console.log("Es Fin de Semana");
//     break;

//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("Es día de Semana");
//     break;
// }

// if (datoCrudo == 0 || datoCrudo == 6) {
//   console.log("Es Fin de Semana");
// } else {
//   console.log("Es día de Semana");
// }

// document.querySelector - Crear un Objeto HTML que almacenamos en la variable para utilizar todo lo que guarda
var elementoHTML = document.querySelector("main");

// new Date() - Crea un Objeto Date que almacenamos en la variable para utilizar todo lo que guarda
var date = new Date();
console.log(date);
console.log("Fecha", date.toLocaleDateString());
console.log("Fecha en Español", new Intl.DateTimeFormat("es").format(date));
console.log("Número del día en el mes", date.getDate());
console.log("Número del día en la semana", date.getDay()); //0 (Domingo) - 6 (Sábado)

var fechaEspecificaIngles = new Date("03/25/2026");
var fechaEspecificaEsp = new Intl.DateTimeFormat("es").format(
  fechaEspecificaIngles,
);
console.log("Fecha creada con el dato en ingles: ", fechaEspecificaIngles);
console.log("Fecha creada convertida al español: ", fechaEspecificaEsp);

var dia = date.getDay();
var p = document.getElementById("dia-semana");
console.dir(p);
// p.innerHTML = "<p>Hoy es:</p>";

p.className = "cartel";

switch (dia) {
  case 0:
    p.textContent = "Es Domingo";
    break;

  case 1:
    p.textContent = "Es Lunes";
    break;

  case 2:
    p.textContent = "Es Martes";
    break;

  case 3:
    // p.innerHTML += "<p>Miércoles</p>";
    p.textContent = "Es Miércoles";
    break;

  case 4:
    p.textContent = "Es Jueves";
    break;

  case 5:
    p.textContent = "Es Viernes";
    break;

  case 6:
    p.textContent = "Es Sábado";
    break;

  default:
    console.error("El programa falló");
    break;
}

/*
    EJEMPLO DE PROGRAMA DE VALIDACIÓN USANDO IF Y ESCALONANDO CORRECTAMENTE LAS CONDICIONES

    Programa - Mostrar por en el HTML utilizando el Objeto HTML si la edad corresponde a un niño, un adolescente o un adulto. Si hay un error, crear un vista para el error
        -> niño - menor de 13 años
            -> edad < 13
        -> adolescente - tiene entre 13 y 17 años
            -> ¿Es edad >= 13? ¿Es edad <= 17?
                -> edad >= 13 && edad <= 17
        -> adulto - mayor de 18 años
*/

var edad = parseInt(prompt("Ingrese su edad"));

// false || false ||  true - true | Validación de dato
var esDatoIncorrecto = edad < 0 || edad > 120 || Number.isNaN(edad);
var esNinio = edad < 13;
var esAdolescente = edad >= 13 && edad <= 17;

var section = document.querySelector("#ejercicio-edad");
section.className = "cartel";

if (esDatoIncorrecto) {
  section.className += " error";
  section.innerHTML = "<h2>Ejercicio edad</h2><p>No es una edad válida</p>";
} else if (esNinio) {
  section.innerHTML = "<h2>Ejercicio edad</h2><p>Niño</p>";
} else if (esAdolescente) {
  section.innerHTML = "<h2>Ejercicio edad</h2><p>Adolescente</p>";
} else {
  section.innerHTML = "<h2>Ejercicio edad</h2><p>Adulto</p>";
}
