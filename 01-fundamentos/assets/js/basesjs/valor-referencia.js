//* pasado por Valor(primitivos)

let a = 10;
let b = a;

a = 30;
console.log({ a, b });

//* pasado por Referencia(objetos)
let juan = { nombre: 'Juan' };
let ana = juan;
ana.nombre = 'Ana';
console.log({ juan, ana });

//* romper la Referencia
let juanito = { nombre: 'Juan' };
let anita = { ...juanito }; // Operador sprend -> ...
anita.nombre = 'Ana';
console.log({ juanito, anita });

const cambiaNombre = (persona) => {
  persona.nombre = 'Tony';
  return persona;
};

//Operador rest -> ...
const cambiaOtroNombre = (...persona) => {
  persona.nombre = 'Tony';
  return persona;
};

// Operador sprend -> ...
//Operador rest
const cambiaOtroNombreMas = ({ ...persona }) => {
  persona.nombre = 'Tony';
  return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log(peter, tony);

// Arreglos
const frutas = ['Manzana', 'Pera', 'Uva'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('sprend');
const otrasFrutas_ = [...frutas]; // Operador sprend -> ...
console.timeEnd('sprend');

otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });
