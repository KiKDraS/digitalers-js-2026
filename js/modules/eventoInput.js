function eventoInput() {
  /*
      Evento
        -> Mensaje que el navegador entrega cuando el usuario realiza una acción determinada
          -> Un Evento "se dispara" cuando el usuario realiza esa acción
        -> Para responder al mensaje necesitamos declarar una acción (una función)
          -> Función Callback - Se pasa como Argumento de otra para que esta la ejecute
            -> Está limitada por la función que la ejecuta 
        -> La Callback de un Evento solo puede recibir un Parámetro para almacenar el Objeto Evento
    
      Funciones
        => Parámetro - "variable" que se agrega cuando declaramos la función
        => Argumento - Valor que se almacena en el Parámetro. Se agrega durante la ejecución      
    */

  // Declaración - Agrego Parámetro
  function fnCallback(nombre) {
    console.log(`Hola ${nombre}`);
  }

  // Ejecución - Agrego Argumento
  // fnCallback("Pepe");

  // Declaración - Agrego Parámetro para recibir una Función
  function fnReceptora(cb) {
    // Ejecuta la función recibida
    cb();
  }

  // Ejecución - Agrego Argumento fnCallback
  fnReceptora(fnCallback);

  // Declaración - Imitar función addEventListener
  function agregarEscuchaEvento(nombreEvento, cb) {
    const evento = {
      target: "¿Quién disparó el Evento?",
      tipo: "",
    };

    switch (nombreEvento) {
      case "click":
        evento.tipo = "click";
        cb(evento);
        break;
      case "input":
        evento.tipo = "input";
        cb(evento);
        break;
      case "submit":
        evento.tipo = "submit";
        cb(evento);
        break;
    }
  }

  /*
      Evento Input
    */
  const input = document.getElementById("nombre");
  const p = document.getElementById("nombre-ingresado");

  const fnCallbackInput = (event, otro) => {
    // console.log("Objeto evento:", event);
    // console.log("otro:", otro);
    const target = event.target;
    // console.log("Elemento que disparó el evento:", target);
    // console.dir(target);
    // console.log("Texto en el input:", target.value);
    const textoIngresado = target.value;
    // p.innerHTML = `<span>${textoIngresado}</span>`;
    // <img src="falsa.jpg" onerror="alert('¡XSS detectado mediante imagen!')">
    // p.textContent = textoIngresado;

    // https://github.com/cure53/DOMPurify
    const clean = DOMPurify.sanitize(textoIngresado);
    p.innerHTML = `<span>${clean}</span>`;
  };

  // addEventListener(Evento, ¿Qué hacer?)
  input.addEventListener("input", fnCallbackInput);
  console.log("Texto en el input:", input.value); // Código sincrónico - JS lo lee y lo ejecuta

  // const btn = document.getElementById("btn");
  // btn.addEventListener("click", fnCallbackInput);
}
