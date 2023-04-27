//* Recomendado UpperCamelCase
class Persona {
  // se recomienda definir los static a inicio
  static _conteo = 0; // static ya no aparecerá en el constructor
  static get conteo() {
    return Persona._conteo + ' instacias';
  }

  static mensaje() {
    console.log(this.nombre); //! undefined
  }

  nombre = '';
  codigo = '';
  frase = '';
  comida = ''; // es opcional en el constructor
  _comida = '';

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  // maneras de declarar
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  // maneras de declarar
  set comidaFavorita(comida) {
    this._comida = comida.toUpperCase();
  }

  get comidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  obtenerQuienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  obtenerMiFrase() {
    //* this.obtenerQuienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona(
  'Peter Parker',
  'Spiderman',
  'Un gran poder conlleva una gran responsabilidad'
);
// const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Iron...Man!');
spiderman.setComidaFavorita = 'El pie de cereza da la tía May';

console.log(spiderman);
// console.log(ironman);

spiderman.obtenerQuienSoy();
// ironman.obtenerQuienSoy();
spiderman.obtenerMiFrase();
// ironman.obtenerMiFrase();

console.log(spiderman.comidaFavorita);

console.log(`conteo estático ${Persona._conteo}`);
console.log(Persona.conteo);
