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

  constructor(nombre = 'Sin nombre', codigo = '', frase) {
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

class Heroe extends Persona {
  clan = 'sin clan';

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
    this.clan = 'Los Avengers';
  }

  obtenerQuienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.obtenerQuienSoy();
  }
}

const spiderman = new Heroe(
  'Peter Parker',
  'Spiderman',
  'Un gran poder conlleva una gran responsabilidad'
);
console.log(spiderman);
spiderman.obtenerQuienSoy();
