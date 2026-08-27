/*
  API Web - Application Programming Interface (Interfaz de Programación de Aplicaciones) => Caja de funcionalidades para la Web
  => API Window (Objeto Global window) - BOM (Browser Object Model)
    -> Almacena todas las herramientas que permiten interactuar con el navegador web
    -> API Fetch - Petición de datos al servidor
    -> API Storage - Almacena y recupera datos en el navegador web
    -> API Evento
      -> Eventos del navegador
        -> Cuándo se termina de cargar la página
        -> Cuándo cambia el tamaño de la página
        -> Cuándo se apreta una tecla del teclado
    => API Document - DOM (Document Object Model)  
      -> Representación virtual del documento HTML  
      -> document.getElementById
      -> document.querySelector
      -> document.querySelectorAll
      -> API Evento - Eventos del documento
        -> Cuando un usuario hace click sobre un elemento
        -> Cuando un usuario pasa el mouse por encima de un elemento


  API Evento
    -> addEventListener("nombre-del-evento", accRealizar)  
    -> Siempre va a EXIGIR identificar qué Objeto contiene el evento
      -> "Tipo de Evento"
        -> Eventos de Formulario
          -> Evento Submit
          -> Evento change
          -> Evento input
            -> Se dispara cuando el usuario escribe sobre un input
        -> Eventos de Mouse | Evento de Pointer
        -> Eventos de Teclado
*/

/*
  Evento DOMContentLoaded - Se dispara cuando se cargaron todas las etiquetas  HTML (no espera recursos externos)
*/
// document.addEventListener("DOMContentLoaded", startProgram);

const addList = () => {
  const content = [
    {
      name: "defer",
      text: "Versión moderna de Evento DOMContent load. Se agrega como atributo de la etiqueta script",
    },
    {
      name: "async",
      text: "Carga el código JS en paralelo al HTML. No se puede usar si quiero manipular el DOM. Se agrega como atributo de la etiqueta script",
    },
    {
      name: "DOMContentLoaded",
      text: "Evento que permite ejecutar código cuando ya se cargó el HTML",
    },
  ];

  /*
    Creación de Elemento HTML desde JS
  */

  // 1. Crear elemento ul
  const ul = document.createElement("ul");

  // 2. Agregar contenido al elemento ul
  for (const element of content) {
    //2.a - Crear elemento li
    const li = document.createElement("li");

    //2.b - Agregar contenido al elemento li
    li.innerHTML = `<b>${element.name}</b> - ${element.text}`;

    //2.c - Insertar el elemento li en el ul
    ul.append(li); // Agrega el li como último hijo del elemento ul
  }

  // 3. Insertar el elemento ul dentro del elemento de referencia
  const section = document.querySelector("#js-loading");
  section.append(ul); // Agrega el ul como último hijo del elemento con id="js-loading"
};

function startProgram() {
  eventoInput();
  addList();

  /*
    Métodos del Objeto Array
  */
  objetoArray();
}

startProgram();

/*
  Envolviendo el código en funciones, todas las variables creadas dentro tienen Scope Local. Esto permite trabajar sin preocuparnos de "pisar" nombres de variables
*/
