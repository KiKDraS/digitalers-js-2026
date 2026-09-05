import { obtenerPostsUsuarioFetch } from "./modules/apiWebFetch.js";
import { obtenerPostsUsuarioAsyncAwait } from "./modules/async-await.js";

const AntiguoModulo = (function () {
  const nombre = "Pepe";

  return {
    saludar: () => console.log(`Hola ${nombre}`),
  };

  // Closure - ocurre cuando una función "recuerda" y mantiene acceso a las variables del lugar donde fue creada, incluso después de que la función que la contenía ya terminó de ejecutarse.

  // saludar sigue recordando y accediendo a nombre aunque la función padre ya haya finalizado
})();

// console.log(AntiguoModulo);
// AntiguoModulo.saludar();

obtenerPostsUsuarioFetch();

obtenerPostsUsuarioAsyncAwait();
