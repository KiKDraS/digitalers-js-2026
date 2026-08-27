const objetoArray = () => {
  /*
        POO (Programación Orientada a Objetos)
            => Clases (Plantillas)
                -> Propiedades ("variables")
                -> Métodos (función)
            => Objetos (Copia de las Plantillas - Instancia de Clase -)
                -> Objeto Array
                    => Propiedades  
                        -> length
                    => Métodos
                        -> push()
                        -> forEach(cb)
                        -> map(cb)
                        -> filter(cb)
                        -> fin(cb)
                        -> includes(elementoABuscar)             
    */

  const colores = ["Rojo", "Amarillo", "Verde"]; // -> Instancia del Objeto Array
  // const colores = new Array("Rojo", "Amarillo", "Verde"); -> Instancia del Objeto Array
  //   console.log(colores);

  const miArray = replicarObjetoArray("Rojo", "Amarillo", "Verde");

  console.log(`
    .forEach
  `);
  /*
    forEach - Recibe una cb para que se ejecute con cada valor almacenado dentro del Array. La callback debe recibir, al menos un parámetro para almacenar el valor actual. Puede recibir un segundo parámetro para almacenar el valor del índice actual
  */
  forEachMethod();

  console.log(`
    .map
  `);
  /* 
    map - Recibe una cb para que se ejecute con cada valor almacenado dentro del Array. La callback debe recibir, al menos un parámetro para almacenar el valor actual. Puede recibir un segundo para parámetro para almacenar el valor del índice actual. Cuando se ejecuta map, esta retorna un nuevo array que usa los valores almacenados en el array original para crear nueva información
  */
  mapMethod();

  console.log(`
    .filter
  `);
  /*
    filter - Usar filter crea un nuevo array. La callback de filter debe retornar un boolean para saber si es necesario incluir el elemento actual en el nuevo array
  */
  filterMethod();

  console.log(`
    .find
  `);
  /*
    find - La callback de find debe retornar un boolean para saber si es necesario retornar el elemento
  */

  findMethod();

  console.log(`
    .includes
  `);
  /*
    includes - No recibe una callback. Recibe el dato que quiero buscar. Retorna boolean para indicar existencia (o no) del dato
  */

  includesMethod();

  /*
    Funciones del Programa
  */
  function forEachMethod() {
    // miArray.paraCada((elemento) => console.log(elemento));
    // miArray.paraCada((elemento, index) =>
    //   console.log(`Soy el ${elemento}. Estoy en el índice: ${index}`),
    // );

    colores.forEach((color) => console.log(color));
    colores.forEach((color, index) =>
      console.log(`Soy el ${color}. Estoy en el índice: ${index}`),
    );
  }

  function mapMethod() {
    // const nuevoArray = miArray.mapear((color, index) => {
    //   return `Soy el ${color}. Estoy en el índice: ${index}`;
    // });
    // console.log(nuevoArray);

    const certificados = [
      { nombre: "JavaScript", nota: 95, fecha: "26/08/2024" }, //i = 0
      { nombre: "HTML", nota: 80, fecha: "27/08/2024" }, //i = 1
      { nombre: "CSS", nota: 90, fecha: "28/08/2024" }, //i = 2
    ];

    /*
      join()
        -> Método del Objeto Array
        -> Une todos los elementos del array en un solo string
        -> Recibe como argumento el separador que se coloca entre cada elemento
        -> Ejemplo: ["a", "b", "c"].join("-") => "a-b-c"
        -> En este caso usamos "" (sin separador) porque queremos unir los <article> uno al lado del otro, sin caracteres extra entre ellos
    */
    const html = certificados.map(createArticle).join("");
    console.log(html);

    const mapSection = document.querySelector("#map");
    mapSection.innerHTML = html;
  }

  function createArticle(certificado) {
    return `<article class="certificate">
      <h4>${certificado.nombre}</h4>
      <p>${certificado.nota}</p>
      <p>Fecha de expedición: ${certificado.fecha}</p>
    </article>`;
  }

  function filterMethod() {
    // const miArrayUsuarios = replicarObjetoArray(
    //   { nombre: "Pepe", pass: 1234, id: 1 },
    //   { nombre: "Pepa", pass: 1234, id: 2 },
    //   { nombre: "Pepin", pass: 1234, id: 3 },
    // );

    // const eliminarUsuarioConId2 = miArrayUsuarios.filtrar(
    //   (usuario) => usuario.id !== 2,
    // );

    // console.log(eliminarUsuarioConId2);

    const usuarios = [
      { nombre: "Pepe", pass: 1234, id: 1 }, //i = 0
      { nombre: "Pepa", pass: 1234, id: 2 }, //i = 1
      { nombre: "Pepin", pass: 1234, id: 3 }, //i = 2
    ];

    const eliminarUsuarioConId2 = usuarios.filter(
      (usuario) => usuario.id !== 2,
    );
    console.log(eliminarUsuarioConId2);
  }

  function findMethod() {
    // const miArrayCart = replicarObjetoArray(
    //   { nombre: "Coca-Cola", precio: 1.5, cantidad: 5, id: 1 }, //i = 0
    //   { nombre: "Pepsi", precio: 1.5, cantidad: 3, id: 2 }, //i = 1
    //   { nombre: "Sprite", precio: 1.5, cantidad: 7, id: 3 }, //i = 2
    // );

    // const buscarProductoConId10 = miArrayCart.buscar(
    //   (producto) => producto.id === 10,
    // );
    // console.log(buscarProductoConId10);

    // const buscarProductoConId1 = miArrayCart.buscar(
    //   (producto) => producto.id === 1,
    // );
    // console.log(buscarProductoConId1);

    const cart = [
      { nombre: "Coca-Cola", precio: 1.5, cantidad: 5, id: 1 }, //i = 0
      { nombre: "Pepsi", precio: 1.5, cantidad: 3, id: 2 }, //i = 1
      { nombre: "Sprite", precio: 1.5, cantidad: 7, id: 3 }, //i = 2
    ];

    const buscarProductoConId1 = cart.find((product) => product.id === 1);
    console.log(buscarProductoConId1);
  }

  function includesMethod() {
    // const miArrayNumbers = replicarObjetoArray(1, 2, 3, 4, 5);

    // console.log("¿Existe el número 6?:", miArrayNumbers.incluye(6));
    // console.log("¿Existe el número 3?:", miArrayNumbers.incluye(3));

    const numbers = [1, 2, 3, 4, 5];

    console.log(
      "El valor 3 se en encuentra en el array numbers?",
      numbers.includes(3),
    );

    console.log(
      "El valor 6 se en encuentra en el array numbers?",
      numbers.includes(6),
    );

    const frase = "Hola, mundo!";
    console.log("Se encuentra hola en el string?:", frase.includes("hola")); // false - La evaluación es key sensitive
    console.log("Se encuentra Hola en el string?:", frase.includes("Hola")); // true - La evaluación es key sensitive
    console.log(
      "Se encuentra hola en el string?:",
      frase.toLowerCase().includes("hola"),
    ); //"Hola, mundo!" => "hola, mundo!" => ¿Existe 'hola'? => true
  }
};
