export default function asincronia() {
  /*
    Proceso sincrónico === Línea que se lee, acción que se ejecuta
    Proceso asincrónico === Esperar que pase algo antes de ejecutar una acción, sin dejar de realizar otras acciones


    Asincronía - Capacidad de esperar que una acción termine, sin bloquear el resto de las acciones
        -> setTimeout(cb, ms);
          -> Función propia de JS que permite retrasar la ejecución de una función en Xms
        -> JS es un lenguaje sincrónico single threaded === No puede realizar más de una acción al mismo tiempo
        -> https://www.jsv9000.app/
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
}
