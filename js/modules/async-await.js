/*
    async/await
        -> Palabras reservadas creadas para trabajar con Promesas "de forma sincrónica"

    async
        -> Se agrega a la declaración de una función
        -> Toda función que tiene async en su declaración debe ser ejecutada usando await
        
    await 
        -> Se agrega para avisar a JS que hay que esperar a que se termine de ejecutar el código asincrónico  
        -> await solo puede usarse dentro de una función async o un módulo de JS 
        
    https://lenguajejs.com/asincronia/async-await/que-es/    
*/

const BASE_URL = "https://jsonplaceholder.typicode.com";

const asyncFetch = async (url) => {
  try {
    // Se puede pensar al try como .then(cb)
    const respuestaDelServidor = await fetch(url);

    if (!respuestaDelServidor.ok) {
      throw new Error("Error al obtener los usuarios");
      // throw - Fuerza que se rompa la Cadena de Promesas y se ejecute el catch
    }

    // Retorna el objeto JS
    return respuestaDelServidor.json();
  } catch (error) {
    // Se puede pensar al catch como .catch(cb)
    console.error(error.message);
  } finally {
    // Se puede pensar al finally como .finally(cb)
  }
};

export const obtenerPostsUsuarioAsyncAwait = async () => {
  const usuarios = await asyncFetch(`${BASE_URL}/users`);
  console.log("Usuarios", usuarios);

  mostrarUsuarios(usuarios);

  const user = usuarios.find((user) => user.username === "Samantha");
  const userId = user.id;

  const postsDelUsuario = await asyncFetch(
    `${BASE_URL}/posts?userId=${userId}`,
  );
  console.log("Posts del Usuario", postsDelUsuario);

  // Este console.log se ejecuta DESPUÉS que se resuelvan los await
  console.log('"Código sincrónico - async/await"');
};

const mostrarUsuarios = (usuarios) => {
  const main = document.querySelector("main");
  const ul = document.createElement("ul");

  usuarios.forEach((usuario) => {
    const li = document.createElement("li");
    li.textContent = usuario.username;
    ul.append(li);
  });

  const title = document.createElement("h2");
  title.textContent = "Lista de usuarios";

  main.append(title, ul);

  //   const ul = `
  //         <ul>
  //             ${usuarios.map((usuario) => `<li>${usuario.name}</li>`).join("")}
  //         </ul>
  //     `;

  //   main.innerHTML = `
  //         <h2>Lista de usuarios</h2>
  //         ${ul}
  //     `;
};
