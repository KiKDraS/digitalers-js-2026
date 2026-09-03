/*
    Módulos ES6

    ¿Qué son?
        -> Archivos .js separados que contienen código (funciones, datos, etc)
        -> Cada archivo .js es un módulo

    ¿Qué problema solucionan?
        -> Antes de ES6, cada archivo .js se cargaba en el HTML con <script src="...">
            -> Se usaban los atributos async y defer para controlar cuándo se cargaba cada archivo
            -> La carga de archivos se manejaba de forma manual y en orden
        -> Las variables declaradas en un archivo quedaban en el scope global
            -> Cualquier archivo podía accederlas o pisarlas sin querer
            -> Para evitarlo, había que crear funciones que "escondieran" el código
        -> Con módulos, el código se divide en archivos pequeños y ordenados
            -> Cada archivo tiene su propio scope, sin pisar variables de otros

    ¿Cómo utilizarlos?
        -> export - Compartir código de un módulo con otros archivos
        -> import - Traer código de otro módulo
        -> En el HTML, cargar el archivo principal con type="module"

    export - Para permitir que otros archivos usen los datos/funciones que contienen el archivo en que se escribe el export
        -> export default 
            -> Exportar valor sin otorgar nombre a la variable. Al importar se puede cambiar el nombre
            -> Solo puede haber un export default por archivo
        -> export
            -> Exportar valor otorgando nombre a la variable. Al importar TENGO que respetar el nombre
            -> Puede haber multiples export en un mismo archivo
            -> Todos los valores exportados con export se guardan en un objeto plano

    import - Para traer los datos/funciones que fueron exportados
        -> export default
            -> import nombreNuevoDeVariable from [ruta-relativa-al-archivo-js]
        -> export
            -> import { nombreDeVariableDelExport } from [ruta-relativa-al-archivo-js]
*/

/*
    Las variables ahora se almacenan a nivel Módulo. Ya no afectan al Objeto Global
*/
var miVar = "La variable var agregar una key al objeto window";
console.log(window.miVar);

let miVarLet = "La variable let/const no agrega kay al objeto window";
console.log(window.miVarLet);

// console.log(window.dato);

// export (nombrado)
export const sumar = (num1, num2) => num1 + num2;
export const restar = (num1, num2) => num1 - num2;

function miExport() {
  return {
    sumar,
    restar,
  };
}

// const miObjetoExportado = miExport();
// miObjetoExportado.sumar()
// miObjetoExportado.restar()
// const { sumar: sumarExportado, restar: restarExportado } = miObjetoExportado;

const { sumar: sumarExportado, restar: restarExportado } = miExport();

/*
    export {
        sumar,
        restar
    }

    // Pensar export {...} como una función que retorna un objeto

    // Pensar al import como la ejecución de la función que retorna un objeto
*/

// export default

export default function saludar() {
  console.log("Hola");
}

function miModulo(nombreExportDefault) {
  // La notación de corchete en un objeto, permite que la key tome el valor que tiene almacenada la variable
  return {
    [nombreExportDefault]: () => console.log("hola"),
    export: {
      sumar,
      restar,
    },
  };
}

const misElementosExportados = miModulo("pepe");
console.log(misElementosExportados);
const misElementosExportados1 = miModulo("saludar");
console.log(misElementosExportados1);

/*
    Pensar export default como "crear una variable" sin nombre


*/
