class Rectangulo {
  #area = 0; // Cuando sea comunmente aceptado -> declaración de propiedades privadas '#'

  constructor(base = 0, altura = 0) {
    //* base;
    //* altura;
    this.base = base;
    this.altura = altura;

    this.#area = base * altura;
  }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 100;
console.log(rectangulo);
