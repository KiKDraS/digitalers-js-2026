/*
    Programación Orientada a Objetos (POO)
        -> Clases - Plantillas
        -> Objetos - Copias de las Plantillas
            -> Objeto HTML
            -> Objeto Date
            -> Objeto Array
            -> Objeto Object

    Tipos da Datos - https://lenguajejs.com/javascript/tipos/que-son/       
        => Primitivos - number, string, boolean, etc
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
            -> Funciones
*/

// Tipo de Dato primitivo
var miVar = 1;
console.log("Dato almacenado en miVar", miVar);
miVar += 1; // Dentro de la variable miVar hay almacenado un dato, quiero recuperarlo, realizar la operación del operador + y almacenar el resultado en la variable miVar

// Arrays - https://lenguajejs.com/javascript/arrays/que-es/
console.log(" ");
console.log("Arrays");

var miArr = [];
console.log("Dato almacenado en miArr", miArr);

// Longitud: 3
// Índices: 0, 1, 2
var arr = ["Dato 1", "Dato 2", "Dato 3"];
console.log(arr);
console.log(
  "Quiero ver qué hay almacenado en el cajón con el índice 0",
  arr[0],
);

// Posible. No recomendado. Esto evita predecir correctamente cómo va a funcionar nuestro programa
var arrHetegoneo = ["Dato string", 1, true, undefined, null, [], {}];

arr[1] = "Dato 2 - Modificado";
console.log(arr);

// Modificar la longitud del array
arr.push("Dato 4"); // Agrega un dato a la última posición del array
console.log(arr);

arr.pop(); // Elimina el dato que se encuentra en la última posición del array
console.log(arr);

// Objetos Literales - https://lenguajejs.com/javascript/objetos/que-son/
console.log(" ");
console.log("Objetos Literales");

var miObj = {};
console.log("Dato almacenado en miObj", miObj);

var obj = {
  nombre: "Pepe",
  apellido: "Peposo",
  edad: 35,
};

// Acceso al dato mediante notación de punto
console.log(obj.nombre);
console.log(obj);
obj.nombre = "Pepin";
console.log(obj);

// Acceso al dato mediante notación de corchete - La usamos cuando no sabemos qué cajón vamos a necesitar al momento de escribir el código
console.log(obj["nombre"]);

/*
    Programa - Pedir al usuario que ingrese el número 1 si quiere ver el nombre y el 2 si quiere ver la edad
*/

// var datoElegido = parseInt(
//   prompt("Ingrese 1 si quiere ver el nombre o 2 si quiere ver el apellido"),
// );

var datoElegido = 1;
var cajonElegido = datoElegido === 1 ? "nombre" : "apellido";

// console.log(obj.cajonElegido); -> undefined - No existe un cajón llamado cajonElegido
console.log("Dato elegido por el usuario:", obj[cajonElegido]);

/*      

    Todo código escrito entre llaves
    {
        // bloque de código
    } 


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
            -> for - Ideal para "recorrer" Arrays
            -> while
                -> Ejecuta el código si la condición es true y MIENTRAS que la condición sea true
                    -> Condición false? - Nunca ejecuta el código
            -> do-while - Ideal para solicitar datos
                -> Ejecuta el código, al menos una vez, y MIENTRAS que la condición sea true
                    -> Condición false? - El código se ejecuta una vez   
*/

console.log(" ");
console.log("Bucle for");

var colores = ["Rojo", "Amarillo", "Verde"];
var ul = document.querySelector(".colores");

// ul.innerHTML =
//   "<li>" +
//   colores[0] +
//   "</li>" +
//   "<li>" +
//   colores[1] +
//   "</li>" +
//   "<li>" +
//   colores[2] +
//   "</li>";

/*
    for (inicializador; condición; modificador) {    
        // Bloque de código
    }
*/

var longitud = colores.length;
var elementosLi = "";
// inicializador; condición; modificador
for (var i = 0; i < longitud; i++) {
  // Bloque de código
  elementosLi += "<li>" + colores[i] + "</li>";
}

ul.innerHTML = elementosLi;

// for (var i = 0; i < colores.length; i++) {
//   // Bloque de código
//   ul.innerHTML += "<li>" + colores[i] + "</li>";
// }

console.log(" ");
console.log("Bucle do-while");

while (false) {
  console.log("Esto nunca se ejecuta");
}

do {
  console.log("Esto se ejecuta una vez");
} while (false);

/*
    Programa - Permitir el "almacenaje" de usuarios y mostrar en pantalla la lista de todos los usuarios ingresados. No debe haber 2 usuarios con el mismo nombre. Ningún usuario puede tener la contraseña vacía. Se debe ingresar, al menos 1 usuario completo. No hay límite a la cantidad de usuarios a ingresar.
*/

var listaUsuarios = [];

do {
  var usuario = {
    nombre: "",
    pass: "",
  };

  var esRepetido = false; // Bandera para identificar si tengo que continuar con el do-while. Empiezo asumiendo que NO es repetido
  do {
    var msg = esRepetido
      ? "Nombre ya existe. Ingrese uno nuevo"
      : "Ingrese el nombre de usuario";
    usuario.nombre = prompt(msg);
    esRepetido = false; // Reseteamos a valor inicial para siguiente iteración.

    // Recorro la lista COMPLETA para ver si el nombre ya existe
    for (var i = 0; i < listaUsuarios.length; i++) {
      var usuarioEnLista = listaUsuarios[i];

      if (usuarioEnLista.nombre === usuario.nombre) {
        esRepetido = true;
        break; // Dejo de recorrer: ya encontré un nombre repetido
      }
    }

    // Si encuentro un nombre repetido, vuelvo a lanzar el do-while
  } while (esRepetido);

  usuario.pass = prompt("Ingrese la contraseña de usuario");
  while (!usuario.pass) {
    usuario.pass = prompt(
      "La contraseña de usuario de usuario no puede estar vacía",
    );
  }

  listaUsuarios.push(usuario);

  var continuar = confirm("¿Ingresar otro usuario?"); // Permite que el usuario introduzca un boolean
} while (continuar);

var tbody = document.querySelector("#usuarios");

for (var i = 0; i < listaUsuarios.length; i++) {
  var usuario = listaUsuarios[i];
  tbody.innerHTML +=
    "<tr>" +
    "<td>" +
    usuario.nombre +
    "</td>" +
    "<td>" +
    usuario.pass +
    "</td>" +
    "</tr>";
}
