export default function asincronia() {
  /*
    Proceso sincrónico === Línea que se lee, acción que se ejecuta
    Proceso asincrónico === Esperar que pase algo antes de ejecutar una acción, sin dejar de realizar otras acciones


    Asincronía - Capacidad de esperar que una acción termine, sin bloquear el resto de las acciones
        -> setTimeout(cb, ms);
          -> Función propia de JS que permite retrasar la ejecución de una función en Xms
        -> JS es un lenguaje sincrónico single threaded === No puede realizar más de una acción al mismo tiempo
        -> https://www.jsv9000.app/

    https://lenguajejs.com/asincronia/callbacks/asincronia/    
  */

  // Manejo de asincronía mediante callbacks - Las funciones callbacks pasan al Task Queue y esperan a que se termine de ejecutar el resto del programa antes de ejecutarse

  console.log("Inicio");

  function dos() {
    const cbDos = () => {
      console.log("Dos");
    };

    setTimeout(cbDos, 1000);
  }

  function uno() {
    const cbUno = () => {
      console.log("Uno");
    };

    setTimeout(cbUno, 0);
    dos();
    console.log("Tres");
  }

  uno();
  console.log("Fin");

  // Callback Hell - Dificultad para leer correctamente el orden en que se van a ejecutar las funciones asincrónicas (las callbacks del Task Queue)
  // https://lenguajejs.com/asincronia/callbacks/asincronia/
  (() => {
    function doA(cb) {
      console.log("A");
      setTimeout(function async1() {
        cb();
      }, 0);
    }

    function doB() {
      console.log("B");
    }

    function doC(doD) {
      console.log("C");
      setTimeout(function async2() {
        doD();
      }, 0);
    }

    function doD() {
      console.log("D");
    }

    function doE() {
      console.log("E");
    }

    function doF() {
      console.log("F");
    }

    function callbackA() {
      doB();
      doC(doD);
      doE();
    }

    doA(callbackA);
    doF();
  })(); // IIFE - Immediately Invoke Function Expression - Se usa para encapsular variables dentro de un mismo archivo. Antigua forma de hacer módulos

  /*
    API Web Promise - ECMAScript 2015
      -> Herramienta creada para optimizar el Task Queue y evitar que se "pierdan" los valores
      -> Crear Promesas - Funciones que van a dar una respuesta (puede no ser válida)
        -> .then(cb) - Agregar una acción (cb) para interactuar con un resolución correcta del contrato
        -> .catch(cb) - Agregar una acción (cb) para interactuar con un problema en la resolución del contrato
        -> .finally(cb) - Agregar una acción (cb) para interactuar dentro de la cadena de promesas, independientemente del resultado

    https://lenguajejs.com/asincronia/promesas/que-son/    
  */

  function doA() {
    console.log("A");
    // new Promise - Crea la promesa - "Contrato: Va a haber una respuesta"
    return new Promise((resolve, reject) => {
      // resolve - Almacena la función para indicar que la Promise (el contrato) se resolvió correctamente. Ej: 1. Respuesta que resuelve duda | 2. Repuesta que no resuelve duda
      // reject - Almacena la función para indicar que la Promise (el contrato) no se resolvió. Ej: Nunca se responde la pregunta

      setTimeout(resolve, 0);

      // const error = new Error("Hubo un error en la cadena de ejecución - doA");
      // reject(error);
    });
  }

  function doB() {
    console.log("B");
  }

  function doC(romperContrato) {
    console.log("C");
    return new Promise((resolve, reject) => {
      romperContrato
        ? setTimeout(() => {
            const error = new Error(
              "Hubo un error en la cadena de ejecución - doC",
            );
            reject(error);
          }, 0)
        : setTimeout(resolve, 0);
    });
  }

  function doD() {
    console.log("D");
  }

  function doE() {
    console.log("E");
  }

  function doF() {
    console.log("F");
  }

  const promise = doA();

  // Promesa === Código Asincrónico
  promise
    .then(() => {
      doB();
      const romperContrato = false;
      return doC(romperContrato); // Encadenando Promesas
    })
    .then(() => {
      doD();
      doE();
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      console.log("Fin de la cadena de Promesas");
    });

  // Código Sincrónico
  doF();
}
