/*
  Spread Operator (...)
    -> Los tres puntos (...) se llaman "spread operator" (operador de propagación)
    -> Cuando se usan en los parámetros de una función, se llaman "rest parameters" (parámetros rest)
    -> Permiten recibir una cantidad indefinida de argumentos y los agrupan en un array
*/
const replicarObjetoArray = (...array) => {
  //   console.log(array);

  return {
    paraCada: (cb) => {
      // Replicar Método forEach

      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        cb(element, index);
      }
    },
    mapear: (cb) => {
      // Replicar el Método map

      const nuevoArray = [];

      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const datoRetornado = cb(element, index);
        nuevoArray.push(datoRetornado);
      }

      return nuevoArray;
    },
    filtrar: (cb) => {
      // Replicar el Método filter
      const nuevoArray = [];

      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const deboAgregar = cb(element);
        if (deboAgregar) nuevoArray.push(element);
      }

      return nuevoArray;
    },
    buscar: (cb) => {
      // Replicar Método find
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        // ¿Elemento encontrado? ¿Debo retornar?
        const deboRetornar = cb(element);
        if (deboRetornar) return element;
      }

      // Si no encontró el elemento, retorna undefined
      return undefined;
    },
    incluye: (dato) => {
      // Réplica del Método includes

      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const existe = element === dato;
        if (existe) return true;
      }

      // Si la cb nunca retornó true. El dato no existe. El método retorna false
      return false;
    },
  };
};
