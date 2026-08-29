function regExp() {
  /*
        Regular Expression (Expresión Regular)
            -> Herramienta para identificar estructuras de texto
            -> https://regexr.com/   
            -> Objeto RegExp
                -> test() - Evalúa un string contra la RegExp y retorna un boolean 
    */

  const regExp = /^[A-z ]{2,5}$/;
  console.log(regExp.test("sdflñk sdflkop sdflksdf ")); // false
  console.log(regExp.test("sd")); // true
  console.log(regExp.test("123")); // false
  console.log(regExp.test("a s")); // true
}
