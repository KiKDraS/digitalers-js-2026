function formularios() {
  /*
        Eventos de Formularios
            => Recolección de Datos
                -> Evento Input
                    -> Se dispara CADA VEZ que el usuario cambia el texto del input
                    -> Permite validar "en caliente"
                -> Evento Change
                    -> Se dispara cuando cambia el valor almacenado en value del input
                    -> Permite valida "en frío"
            => Envío de Datos
                -> Evento Submit
                    -> Se dispara cuando el usuario ENVÍA el formulario
    */
}

const form = document.getElementById("miForm");
const inputs = {
  nombre: "",
  email: "",
};

/*
    Recolección de Datos
*/
form.addEventListener("change", (e) => {
  const input = e.target;
  const inputName = input.name;

  switch (inputName) {
    case "nombre":
      validateName(input);
      break;

    case "email":
      validateEmail(input);
      break;
  }
});

function validateName(input) {
  const value = input.value;

  // Si el input no tiene texto. No mostrar error ni ok. "Limpiar estado"
  if (!value) {
    input.classList.remove("error", "ok");
    return; // early return -> Sin texto, no necesito validar RegExp
  }

  /*
    Validar nombre
        => RegExp
            ^                    -> comienza al inicio del texto
            [a-zA-Z\u00C0-\u017F] -> letras (incluye acentos y la ñ)
            \s                   -> permite espacios
            +                    -> uno o más caracteres
            $                    -> termina al final del texto
        => SIN la bandera g: test() busca siempre desde el principio
  */
  const regExp = /^[a-zA-Z\u00C0-\u017F\s]+$/;
  const esNombreValido = regExp.test(value);

  // UI de validación
  input.classList.toggle("ok", esNombreValido);
  input.classList.toggle("error", !esNombreValido);

  // ¿Qué hacer con el dato?
  if (esNombreValido) {
    inputs.nombre = value;
  }
}

function validateEmail(input) {
  const value = input.value;

  // Si el input no tiene texto. No mostrar error ni ok. "Limpiar estado"
  if (!value) {
    input.classList.remove("error", "ok");
    return; // early return -> Sin texto, no necesito validar RegExp
  }

  /*
    Validar email
        => RegExp
            ^                  -> comienza al inicio del texto
            [a-zA-Z0-9._%+-]+  -> una o más letras, números y algunos símbolos (la parte antes del @)
            @                  -> la arroba
            [a-zA-Z0-9.-]+     -> una o más letras, números, puntos y guiones (el dominio)
            \.                 -> un punto literal
            [a-zA-Z]{2,}       -> dos o más letras (la terminación: com, ar, org...)
            $                  -> termina al final del texto
  */
  const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const esEmailValido = regExp.test(value);

  // UI de validación
  input.classList.toggle("ok", esEmailValido);
  input.classList.toggle("error", !esEmailValido);

  // ¿Qué hacer con el dato?
  if (esEmailValido) {
    inputs.email = value;
  }
}

/*
    Envío de Datos
*/
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e);
  //   console.log(inputs);

  // Validar completitud de los datos requeridos
  if (!inputs.nombre || !inputs.email) {
    // Generar UI para avisar al usuario
    console.log("No se puede enviar por falta de datos");
    return; // early return -> No continuar porque faltan datos
  }

  // Lógica de envío de formulario
  console.log("Datos listos para enviar", inputs);
});
