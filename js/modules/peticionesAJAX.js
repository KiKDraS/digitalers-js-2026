/*
    Peticiones AJAX (Asynchronous JavaScript And XML | JavaScript Asincrónico y XML) 

    ¿Qué es?
        -> Forma de comunicar el cliente (browser) con el servidor
        -> Las peticiones al servidor DEMORAN, por eso son asincrónicas
            -> El código sigue ejecutándose mientras esperamos la respuesta

    ¿En qué formato viajan los datos?
        -> XML fue el primer formato usado (lenguaje de marcado, tipo HTML)
            -> <nombre>Pepe</nombre>
        -> XML fue reemplazado por JSON (JavaScript Object Notation)
            -> Dato de tipo string que tiene la estructura de un objeto plano de JS

    Evento === Mensaje
        -> Eventos del DOM -> click, change, submit, etc
        -> Eventos del Browser -> resize, reload, cambio de url, etc
        -> Eventos de comunicación con el servidor

    Objeto XMLHttpRequest (API Web)
        -> Permite la comunicación cliente(browser)/servidor
        -> Eventos del Objeto XMLHttpRequest
            -> load - Mensaje: "El servidor envío la respuesta"
                -> Obtener respuesta del servidor !== obtener los datos
            -> error - Mensaje: "Hubo un error en la comunicación. El servidor NO PUDO enviar la respuesta"
                -> Este evento se ejecuta en caso de que no haya internet

    Respuestas del servidor === status de la comunicación - https://http.cat/
        -> 100 - 199 - Respuestas informativas
        -> 200 - 299 - Respuestas exitosas. El servidor pudo realizar la acción solicitada
            -> 200 - Correcto (GET)
            -> 201 - El recurso se creo (POST)
            -> 204 - El recurso se eliminó (DELETE)
        -> 300 - 399 - Re-direcciones
        -> 400 - 499 - Errores de cliente. El cliente envío una petición incorrecta
            -> 404 - Revisar la URL o Revisar los datos enviados
            -> 403/401 - Relacionados a autorización
        -> 500 - 599 - Errores del servidor. El servidor no pudo procesar la petición correctamente
            -> 503 - El servidor no está disponible

    API REST
        -> Servicio Web que permite que un cliente realize peticiones al servidor
        -> Métodos (Verbos AJAX)
            -> GET - Quiero obtener datos
            -> POST - Quiero crear datos
            -> PUT/PATCH - Quiero modificar datos
            -> DELETE - Quiero borrar datos
*/

export function peticionesAJAX() {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const endpoint = "/users";

  showLoader(true); // Inicia la petición. Muestro el loader

  // 1.- Instanciar objeto XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // 2.- Configurar la petición
  const ajaxMethod = "GET";
  const url = baseUrl + endpoint;
  //   console.log(url);

  xhr.open(ajaxMethod, url); // Le hago una petición al servidor

  // 3.- Agregar eventos de respuesta

  // load - El servidor envío una respuesta
  xhr.addEventListener("load", handleResponse);

  // error - No se pudo comunicar con el servidor (ej. sin internet)
  xhr.addEventListener("error", () => {
    console.error("Falló la conexión a internet");
  });

  // 4.- Enviar la petición
  xhr.send();
}

const showLoader = (show) => {
  // Ocultar el loader porque ya tengo una respuesta
  const loader = document.querySelector(".loader");
  const displayValue = show ? "block" : "none";
  loader.style.setProperty("display", displayValue);
};

const handleResponse = (e) => {
  //   console.log("Petición realizada");
  console.log(e);

  showLoader(false); // Cuando obtengo la respuesta. Oculto el loader

  const status = e.target.status;

  // Validar que la petición haya obtenido los datos con un early return si hubo un problema
  const huboUnProblema = status >= 400;
  if (huboUnProblema) {
    // Un error 400+ indica que el servidor no pudo realizar la tarea, pero la comunicación funcionó.
    // El Evento error del Objeto XMLHttpRequest NO se ejecuta en este caso
    //   -> error solo se ejecuta cuando la comunicación falla (ej: sin internet)
    // Por eso, ante un status 400+, tengo que manejar el error manualmente
    handleError();
    return;
  }

  // Tengo la respuesta del servidor
  // -> responseText - La respuesta como string
  // -> JSON.parse - Convierte el string JSON en un objeto plano de JS
  const responseText = e.target.responseText; // Objeto JSON
  const objJS = JSON.parse(responseText);
  mostrarUsuarios(objJS);
};

const handleError = () => {
  // Elemento del DOM donde voy a mostrar el mensaje de error
  const responseContainer = document.getElementById("response");

  // Mostrar un mensaje de error
  responseContainer.innerHTML = "<p>No se pudieron obtener los usuarios</p>";
};

const mostrarUsuarios = (usuarios) => {
  //   console.log(usuarios);
  const responseContainer = document.getElementById("response");

  //.map -> retorna un NUEVO array que usa los datos el array original para crear sus datos modificados
  //.join("") -> Convierte un array en un dato de tipo string
  responseContainer.innerHTML = `
    <table>
      <thead>
          <tr>
          <th>Nombre</th>
          <th>Email</th>
      </tr>
      </thead>
      <tbody>
          ${usuarios
            .map(
              (usuario) => `
              <tr>
                  <td>${usuario.name}</td>
                  <td>${usuario.email}</td>
              </tr>`,
            )
            .join("")}
      </tbody>
    </table>
   `;
};
