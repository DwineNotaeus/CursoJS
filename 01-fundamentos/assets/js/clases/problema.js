const curso1 = {
  nombre: 'udemy1',
  anio: 2000,
  imprimir() {
    console.log(`Nombre: ${this.nombre} Edad: ${this.anio}`);
  },
};
const curso2 = {
  nombre: 'udemy2',
  anio: 2001,
  imprimir() {
    console.log(`Nombre: ${this.nombre} Edad: ${this.anio}`);
  },
};
const curso3 = {
  nombre: 'udemy3',
  anio: 2002,
  imprimir() {
    console.log(`Nombre: ${this.nombre} Año: ${this.anio}`);
  },
};

//* y así para nuevos objetos .....

// Antes de incorporar las *clases* en JS
function Persona(nombre, anio) {
  this.nombre = nombre;
  this.anio = anio;

  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} Año: ${this.anio}`);
  };
}

const platzi = new Persona('Platzi', 2020);
const coursera = new Persona('Coursera', 2021);

platzi.imprimir();
coursera.imprimir();
