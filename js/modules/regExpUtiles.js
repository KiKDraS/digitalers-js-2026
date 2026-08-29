/***
 *
 *
 * Expresiones Regulares útiles
 *
 * Importante: NO usar la bandera g cuando se usa test()
 * => La bandera g hace que la RegExp "recuerde" en dónde terminó la última búsqueda
 * => test() puede dar resultados alternados si se usa varias veces con la misma RegExp
 * => La bandera g sirve para match(), para encontrar TODAS las coincidencias
 *
 ***/

/*
  Validar un mail
  => Recordar que la única forma REAL de validar un mail es enviando un mail de confirmación
  => Estructura: texto@dominio.terminacion
      ^                  -> comienza al inicio del texto
      [a-zA-Z0-9._%+-]+  -> una o más letras, números y símbolos válidos (la parte antes del @)
      @                  -> la arroba
      [a-zA-Z0-9.-]+     -> una o más letras, números, puntos y guiones (el dominio)
      \.                 -> un punto literal
      [a-zA-Z]{2,}       -> dos o más letras (la terminación: com, ar, org...)
      $                  -> termina al final del texto
*/
const regMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log("Validación Mail:", regMail.test("mail@example.com"));

/*
  Validar palabras con acentos y caracteres especiales
      ^                  -> comienza al inicio del texto
      [a-zA-Z]           -> letras de la a a la z (mayúsculas y minúsculas)
      \u00C0-\u017F      -> código unicode para letras acentuadas y caracteres especiales (á, é, ñ...)
      \s                 -> espacios
      +                  -> uno o más caracteres de los anteriores
      $                  -> termina al final del texto
*/
const regPalabras = /^[a-zA-Z\u00C0-\u017F\s]+$/;
console.log(
  "Validación Caracteres Especiales: ",
  regPalabras.test("Champigñones"),
);
console.log("Validación Nombre con Acentos: ", regPalabras.test("Juan Pérez"));

/*
  Validar contraseña segura
      ^                   -> comienza al inicio del texto
      (?=.+[A-Za-z])      -> "mira hacia adelante": se asegura de que haya AL MENOS una letra
      (?=.+\d)            -> se asegura de que haya AL MENOS un número
      (?=.+[$@!¡_*?&])    -> se asegura de que haya AL MENOS uno de estos símbolos
      [A-Za-z\d$@!¡_*?&]  -> solo se permiten letras, números y esos símbolos
      {8,16}              -> entre 8 y 16 caracteres en total
      $                   -> termina al final del texto
  => (?=...) es un lookahead: verifica que adelante exista lo indicado SIN "consumir" texto
*/
const regPass =
  /^(?=.+[A-Za-z])(?=.+\d)(?=.+[$@!¡_*?&])[A-Za-z\d$@!¡_*?&]{8,16}$/;
console.log("Validación Contraseña Segura: ", regPass.test("_UnaPass_123"));

/*
  Validar la hora en formato 24hs (Alternancia |)
      ([01]\d|2[0-3])  -> las horas: 00-19 ó 20-23
          -> [01]\d    -> 00, 01, 02... 19
          -> 2[0-3]    -> 20, 21, 22, 23
      :                -> los dos puntos
      [0-5]\d          -> los minutos: 00 a 59
  => La | es alternancia: "esto O esto"
  => La bandera g está para que match() encuentre TODAS las horas del string
*/
const regHora = /([01]\d|2[0-3]):[0-5]\d/g;
console.log("Validación Hora: ", "00:00 10:10 23:59 25:99 1:2".match(regHora));

/*
  Validar números (enteros, decimales, positivos y negativos)
      ^          -> comienza al inicio del texto
      -?         -> el signo menos es opcional
      \d+        -> uno o más números
      (\.\d+)?   -> la parte decimal es opcional: un punto literal + uno o más números
      $          -> termina al final del texto
*/
const regNum = /^-?\d+(\.\d+)?$/;
console.log("Validación Números: ", regNum.test("-1.5"));
