/*
    Variable - Una caja que permite almacenar datos (tipo de dato + valor)
        => Declaración - Crear la caja
        => Asignación - Guardar un valor en la caja
        => Tipo da Dato - Permite identificar qué puedo hacer con el valor
            => En JS, la variables reciben Tipo de Dato cuando le asignamos un valor
            => En JS, las variables pueden cambiar Tipo de Dato   
        => Valor - Cualquier cosa que se pueda almacenar en la cja (número, texto, false, etc)  
        
    Las variables se crean para poder operar con sus datos === Usar los valores que almacenamos    

    Operadores de Variables    
        => Matemáticos - Permiten realizar operaciones matemáticas
            => +
                => Suma de variables/datos de tipo number
                => Concatenación de variables/datos de tipo string
            => -, *, /, %
                => Realizar la operación matemática correspondiente con datos de tipo number
        => Asignación - Permiten guardar datos en una variable
            -> =
            -> Combinar con Operadores Matemáticos
                -> +=, -=, *=, /=, %=
                    -> Se utilizan para reemplazar el valor actual de la variable por el resultado de la operación matemática correspondiente
        => Incremento(++)/Decremento(--) - Sumar(++)/Restar(--) 1 al valor almacenado en la variable y reemplazar el valor con el resultado
            -> pre ++variable/--variable
            -> post variable++/variable--
        => NO SE PUEDE OPERAR SOBRE DATOS DE DISTINTO TIPO
            -> Casteo implícito - JS convierte un tipo de dato en otro para poder operar
                => +
                    -> string + number -> string + string = string
                => -, *, /, %
                    -> string (-, *, /, %) number -> number (-, *, /, %) number = number
                    -> NaN (Not a Number) - Es valor (tipo number) que indica que JS no pudo convertir el string en un number porque el texto NO es número
*/

/*
    Matemáticos
*/

var n1 = 1;
var n2 = 1;

console.log(n1 + n2);
console.log(n1 + 1);

var texto = "El resultado de la suma es: " + n1 + n2;
console.log(typeof texto);

var resultado = n1 + n2;
console.log("El resultado de la suma es: " + resultado);

console.log("El resultado de la suma es: " + (n1 + n2));

// string + number - number -> (string + number = string) - number -> string - number -> number
var datoNumber = "El resultado de la resta es: " + 5 - 2;
console.log("Valor: " + datoNumber + " - Tipo de Dato: " + typeof datoNumber);

// string - number -> number - number -> number
console.log("5" - 2);

/*
    Asignación
*/
var num1 = 1;
var num2 = 1;

console.log("Valor almacenado en num1: " + num1);

// var resultadoSuma = num1 + num2;
// num1 = num1 + num2;
num1 += num2;
console.log("Valor almacenado en num1: " + num1);

// num1 = num1 + "5" -> number + string -> string
num1 += "5";
console.log("Valor almacenado en num1: " + num1);
/*
    console.log("Valor almacenado en num1: " + num1);

    Tarea 1 - Realizar la operación de suma (concatenar datos de tipo string)
    Tarea 2 - Mostrar en consola el resultado de la Tarea 1
*/

var unTexto = "Completo la ";
// unTexto = unTexto + "frase"
unTexto += "frase";
console.log(unTexto);

/*
    Incremento(++)/Decremento(--)
*/
var num = 1;

// pre - Primero realiza la suma, después muestra

// console.log(++num);
/*
    console.log(++num);

    Tarea 1 - Sumar 
    Tarea 2 - Reemplazar
    Tarea 3 - Mostrar (console.log)
*/

// post - Primero muestra, después suma
console.log(num++); // 1 === Valor antes de la suma || Valor actual: 2
console.log(num);

/*
    Funciones Básico de JS
        => Entrada de Datos
            -> prompt(mensajeParaElUsuario) - Permite que el usuario ingrese un dato de tipo string
        => Salida de Datos
            -> console.log(datoAMostrar); - Mostrar información en la consola del navegador
            -> document.write(datoAMostrar): - Muestra información en la ventana del navegador. Inserta el datoAMostrar en el lugar del HTML que tengo el script
        => Conversión de Datos (casteo explícito)
            -> parseInt(string) - Convierte el string a number. Elimina todos los decimales. Solo deja el entero
                -> parseInt("1.8") - 1
            -> parseFloat(string) - Convierte el string a number. Conserva todos los decimales
                -> parseInt("1.8") - 1.8
            -> Number(string)
                -> Number("1.8") - 1.8    
*/

document.write("<h2 class='red'>Hola, Mundo!</h2>");

var html = "<p>Soy un párrafo creado en JS</p>";
document.write(html);

/*
    Programa - Calculadora muy simple que sume 2 números
        -> Objetivo: Sumar dos números y mostrar el resultado

    ¿Qué necesito? (Paso a Paso del Programa)
        -> 1. 2 números que tiene que ingresar el usuario
        -> 2. Realizar la suma de esos 2 números
        -> 3. Mostrar el resultado    

    ¿Cómo obtengo lo que necesito?
        -> 1. 
            -> a. Crear 2 variables (n1, n2)    
            -> b. Asignar a cada variable el dato ingresado por el usuario (prompt). 
            -> c. Castear string a number
        -> 2. 
            -> Crear variable resultado
            -> Asignar a resultado la suma de n1 y n2
        -> 3. Usar document.write para mostrar el valor almacenado en resultado        


// 1.
var n1 = parseInt(prompt("Ingrese el primer número")); // 1.a, 1.b y 1.c
var n2 = prompt("Ingrese el segundo número"); //1.a y 1.b
n2 = parseInt(n2); //1.c

// 2.
var resultado = n1 + n2;

// 3.
document.write("El resultado de la suma es: " + resultado);
*/

/*
    Programa: Un bibliotecario desea un simple programa en el que ingrese el nombre y el apellido de alguien por separado y lo muestre normalizado.
    Normalizado significa que debería verse así: Apellido, Nombre
        -> Objetivo: Mostrar en pantalla nombre y apellido normalizado

    ¿Qué necesito? (Paso a Paso)
        -> 1. Nombre y Apellido a mostrar
        -> 2. Normalizar
        -> 3. Mostrar dato normalizado

    ¿Cómo obtengo lo que necesito?
        -> 1.
            -> a. Crear variable para nombre
                -> i. Asignar el valor ingresado por el usuario (prompt)
            -> b. Crear variable para apellido    
                -> i. Asignar el valor ingresado por el usuario (prompt)
        -> 2.
            -> a. Crear variable nombreNormalizado
            -> b. Asignar la concatenación normalizada
        -> 3. 
            -> Utilizar document.write para mostrar el valor almacenado en nombreNormalizado
        
        Alternativa: juntar 2 y 3
        -> 3. 
            -> Utilizar document.write y normalizar (2.) cuando paso el dato        
*/

// // //1.a
// // var nombre;
// // //1.a.i
// // nombre = prompt("Ingresa nombre a normalizar");

// // //1.b
// // var apellido;
// // //1.b.i
// // apellido = prompt("Ingresa apellido a normalizar");

// //1.a y 1.a.1
// var nombre = prompt("Ingresa nombre a normalizar");

// //1.b y 1.b.1
// var apellido = prompt("Ingresa apellido a normalizar");

// // //2.a
// // var nombreNormalizado;
// // //2.b
// // nombreNormalizado = apellido + ", " + nombre;

// // //3
// // document.write(nombreNormalizado);

// // Alternativa (2 y 3)
// document.write(apellido + ", " + nombre);

/*
    Programa: Un alumno debe calcular su promedio en una materia en la que tiene 3
    notas. Las notas van de 1 a 10.

    ¿Qué necesito? (Paso a Paso)
        -> 1. Obtener las notas
        -> 2. Sumar las notas
        -> 3. Dividir por la cantidad de notas (dividir por 3)
        -> 4. Mostrar el resultado

    ¿Cómo obtengo lo que necesito?
        -> 1.
            -> a. Crear tres variables (nota1, nota2 y nota3)
            -> b. Asignar el dato ingresado por el usuario utilizando prompt a cada nota
                -> i. Castear el dato tipo string a dato tipo number
        -> 2. y 3.
            -> a. Crear una variable (promedio)
            -> b. Asignar el resultado de la suma de las tres notas divido 3   
        -> 4. 
            -> Usar document.write para mostrar el promedio en pantalla             
*/

//1.a y 1.b
var nota1 = prompt("Ingrese nota 1");
/**
 * prompt("Ingrese nota 1") -> JS, pedile al usuario un nota -> cuando el usuario ingresa la nota -> JS mantiene el dato y espera nuevas instrucciones
 *
 * var nota1 = -> JS sabe qué hacer con el dato que el usuario ingresó -> Guardar en la variable nota1 el dato ingresado por el usuario
 */
//1.b.i
nota1 = parseInt(nota1);
/**
 * parseInt(nota1) -> JS castea el dato de tipo string a dato de tipo number y espera nuevas instrucciones
 *
 * nota1 = JS sabe qué hacer con el dato casteado -> Guardar en variable nota1
 */

var nota2 = parseInt(prompt("Ingrese nota 2"));
/**
 * prompt("Ingrese nota 1") -> JS, pedile al usuario un nota -> cuando el usuario ingresa la nota -> JS mantiene el dato y espera nuevas instrucciones
 *
 * parseInt(prompt("Ingrese nota 2")) -> JS le pasa el dato ingresado a parseInt -> JS castea el dato de tipo string a dato de tipo number y espera nuevas instrucciones
 *
 * var nota2 = JS sabe qué hacer con el dato que el usuario ingresó y que fue casteado a number -> Guardar en la variable nota2 ese dato
 */

var nota3 = parseInt(prompt("Ingrese nota 3"));

//2.3.a y 2.3.b
var totalDeNotasIngresado = 3;
var promedio = (nota1 + nota2 + nota3) / totalDeNotasIngresado;

//4.
document.write("El promedio de notas es: " + promedio);
