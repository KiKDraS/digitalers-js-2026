/*
    API Web Fetch
        -> Herramienta que combina la posibilidad de realizar peticiones al servidor (Objeto XMLHttpRequest) con la API Web Promise para simplificar la concatenación de peticiones y evitar la Pyramid of Doom
        -> fetch(url, config?)
            -> resolve - Tengo respuesta
            -> reject - No tengo respuesta. La única forma de no recibir respuesta es no tener internet

    API REST -> Herramienta para solicitar datos/tareas al servidor
      -> Verbos REST
          -> GET - ¿Tenes esta información?
          -> POST - ¿Podes guardar esta información?
          -> PUT/PATCH - ¿Podes modificar esta información?
          -> DELETE - ¿Podes borrar esta información?   
          
    Status de Respuesta de Servidor
      -> 100 - 199 - Respuestas informativas (ok = true)
      -> 200 - 299 - Repuesta exitosa (ok = true)
      -> 300 - 399 - Redirecciones (ok = true)
      -> 400 - 499 - Errores del clientes (ok = false)
      -> 500 - 599 - Errores del servidor (ok = false)    
      
    Status de Promise    
      -> pending - Estoy esperando la respuesta
      -> fulfilled - Tengo la respuesta (resolve)
      -> reject - No tengo la respuesta (reject)  
*/

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const obtenerPostsUsuarioFetch = () => {
  let usuarios = null;

  // Creo el contrato con el servidor y espero la respuesta (status: pending)
  fetch(`${BASE_URL}/users`)
    .then((respuestaDelServidor) => {
      console.log(respuestaDelServidor); // Tengo la respuesta (status fulfilled)

      // Validar si hubo un error y obtuve una respuesta que no me sirve
      if (respuestaDelServidor.ok === false) {
        // El servidor no pudo realizar la tarea que le pedí

        throw new Error("Error al obtener los usuarios");
        // throw - Fuerza que se rompa la Cadena de Promesas y se ejecute el .catch
      }

      // Si estamos acá, tenemos la respuesta que sirve
      const promiseDatosDelServidor = respuestaDelServidor.json(); // Crea una Promise para retornar un Objeto JS usando los datos que el servidor devolvió

      return promiseDatosDelServidor; // Permito el uso del siguiente .then
    })
    .then((datosDelServidor) => {
      console.log("Usuarios", datosDelServidor);
      usuarios = datosDelServidor;

      const user = datosDelServidor.find(
        (user) => user.username === "Samantha",
      );
      const userId = user.id;

      // Lanzar una nueva promesa para permitir el uso del siguiente .then
      return fetch(`${BASE_URL}/posts?userId=${userId}`);
    })
    .then((respuestaDelServidor) => {
      // Validar si hubo un error y obtuve una respuesta que no me sirve
      if (!respuestaDelServidor.ok) {
        throw new Error("Error al obtener los posts del usuario");
        // throw - Fuerza que se rompa la Cadena de Promesas y se ejecute el .catch
      }

      // Si estamos acá, tenemos la respuesta que sirve
      const promiseDatosDelServidor = respuestaDelServidor.json(); // Crea una Promise para retornar un Objeto JS usando los datos que el servidor devolvió

      return promiseDatosDelServidor; // Permito el uso del siguiente .then
    })
    .then((datosDelServidor) => {
      console.log("Posts del usuario", datosDelServidor);
    })
    .catch((e) => {
      console.error(e.message);
    });

  // Código sincrónico - Se ejecuta ANTES que toda la cadena de Promesas
  console.log(usuarios); // null
};
