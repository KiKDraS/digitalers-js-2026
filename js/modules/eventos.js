function eventos() {
  /*
        Evento
            -> Mensaje
            -> Responder al mensaje === Agregar una Función Callback usando addEventListener

    */

  /*
    Listeners individuales
  */
  const div = document.querySelector(".evento div");
  //console.log(div); // Toma el PRIMER elemento que coincida con el selector
  const divs = document.querySelectorAll(".evento div");
  //console.log(divs); // Toma TODOS los elementos que coincidan con el selector. Crea un NodeList (array-like)

  divs.forEach((objHTML) => {
    const bubbling = false; // Bubbling - Los listeners se ejecutan en subida (por defecto)
    const capturing = true; // Capturing - Los listeners se ejecutan en bajada
    objHTML.addEventListener("click", cbEvento, capturing);
  });

  function cbEvento(e) {
    e.stopPropagation();
    const target = e.target; // Elemento que disparó el Evento (Nodo del DOM)
    const dataset = target.dataset; // objeto que almacena claves que se generan agregando data-* al elemento HTML
    const objetoHTMLQueEjecutaLaCB = this.dataset;

    console.log(
      `Hola te saluda ${objetoHTMLQueEjecutaLaCB.id}, el evento click se originó (disparo) en ${dataset.id} (Event Target)`,
    );
  }

  /*
    Delegación de Evento
  */
  const divDelegacion = document.querySelector(".delegacion");

  const mostrarNombre = (id) => {
    console.log(`Hola te saluda el elemento con data-id ${id}`);
  };

  divDelegacion.addEventListener("click", (e) => {
    const target = e.target;
    const dataset = target.dataset;
    // console.log(target);
    // const id = dataset.id || target.closest("button"); // || -> Operador OR es sensible a los falsies. Si la primera es falsie, se aplica la segunda
    const id = dataset.id ?? target.closest("button"); // ?? -> Nullish Coalescing. Si la primera es null o undefined, se aplica la segunda
    console.log(id);

    if (!id) {
      return; // early return - Evita que el código debajo del if se ejecute si se cumple la condición

      // Si NO tengo id, no ejecuto el código debajo del if
    }

    // En este punto, sabemos que se hizo click sobre el elemento que no interesa
    mostrarNombre(id);
  });
}
