// "use strict" - Al inicio del archivo, aplica para todo
"use strict";

function executionContext() {
  /*
        Programación Orientada a Objetos (POO) en JS
            -> Las Funciones son Objetos
            => Clases (plantillas)
                -> propiedades ("variables")
                -> métodos (funciones)
            => Objetos (copia de plantilla - instancia de Clase -)
                -> Objecto Function
                    -> this (propiedad)

        Contexto de Ejecución de las Funciones
            -> ¿En qué objeto se está ejecutando la función?   
            -> this - Herramienta que JS utiliza para identificar Contexto de Ejecución. Responder dónde se está ejecutando la función     
                -> Podemos pensarlo como una "variable" que almacena la información del objeto que está ejecutando la función
                -> Para entender qué guarda usamos las "Reglas del this"
                    -> Default this
                        -> Si la función no está almacenada dentro de un objeto
                            -> El Objeto window (Sin "use strict")
                            -> undefined (Con "use strict")
                    -> Objeto contenedor   
                        -> Si una función está guardada en un objeto, this almacena el objeto que la contiene

        Strict mode
            -> "use strict" es una herramienta para activar Modo Estricto en JS
            -> En Modo Estricto JS ayuda con algunos errores                
    */

  function miFnSinStrict() {
    console.log(this); // Objeto window || undefined en Modo Estricto
    // miVar = "x";
  }

  miFnSinStrict();

  //   function miFnConStrict() {
  //     "use strict"; // Solo aplica en esta función
  //     miVar = "x";
  //   }

  //   miFnConStrict();

  const miObj = {
    nombre: "Pepe",
    decirNombre() {
      console.log(this); // miObj
      console.log(`Hola, mi nombre es ${this.nombre}`);
    },
    // decirNombre: function(){}
  };

  miObj.decirNombre();
}
