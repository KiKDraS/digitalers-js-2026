/*
    Object destructuring (destructuración de objeto)
        -> ECMAScript 2015
        -> Permite simplificar el trabajo con datos almacenados en objetos/arrays

    ¿Qué problema resuelve?
      -> Antes, para usar los datos de un objeto había que accederlos uno por uno
          -> const nombre = persona.nombre;
          -> const apellido = persona.apellido;
      -> Con destructuring, se extraen los valores y se crean las variables en una sola línea    

    Objetos planos -> {key: value}    
        > Se extrae por el nombre de la key
        -> Se puede renombrar la variable -> key: nuevoNombre
        -> Se puede acceder a objetos anidados -> { familiares: { tio } }

    Objeto array -> [value]    
        -> Se extrae por posición, no por nombre
            -> El orden importa
        -> Para saltar una posición se usan comas vacías -> const [, , verde] = colores
        -> Si la posición no existe, la variable queda con undefined
        -> El nombre de la variable es libre (no tiene que coincidir con nada)
*/

// Objeto plano
const persona = {
  nombre: "Pepe",
  apellido: "García",
  edad: 28,
  address: {
    country: "Argentina",
    address: "Avenida siempre viva 743",
  },
  familiares: {
    tio: "Pepin",
    hermana: "Pepa",
  },
};

console.log(persona.nombre);
console.log(persona.address.address);

// const html = `Mi nombre es ${persona.nombre} ${persona.apellido}. Tengo ${persona.edad}. Vivo en ${persona.address.address}`;
// console.log(html);

// const nombre = persona.nombre;
// const pepe = persona.pepe;
// console.log(pepe);

// const { nombre, pepe } = persona;
// console.log(nombre, pepe);

const {
  nombre,
  apellido,
  edad,
  //   address: { address },
  address,
  familiares: { tio },
} = persona;
// const direccion = address.address;
const { address: simpleAddress } = address; // usando el valor almacenado en la clave address, creo la variable simpleAddress
const html = `Mi nombre es ${nombre} ${apellido}. Tengo ${edad}. Vivo en ${simpleAddress}. Mi tío es ${tio}`;
console.log(html);

// Objeto array
const colores = ["rojo", "amarillo", "verde"];

// const rojo = colores[0];
const [rojo, , verde] = colores;

console.log(rojo, verde);

// Tupla -> Array de 2 posiciones

const fnSet = (num) => (tupla[0] = num);

const tupla = [0, fnSet];
const [num, setNum] = tupla;
console.log(num, tupla[0]);

setNum(1);
console.log(tupla[0]);
