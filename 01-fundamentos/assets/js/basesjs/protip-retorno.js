//*  function crearPersona(nombre, apellido) {
//*    return {
//*      nombre: nombre,
//*      apellido: apellido,
//*    };
//*  }

//* function crearPersona(nombre, apellido) {
//*   return {
//*     nombre,
//*     apellido,
//*   };
//* }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Curso', 'Udemy');
//* console.log(persona);

function imprimeArgumentos() {
  //*   console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Hola');

const imprimeArgumentos2 = (args) => {
  //*   console.log(args); // solo imprime el primer elemento
};
imprimeArgumentos2(10, true, false, 'Hola');

//* ...args es un parámetros rest y no pueden ir argumentos después de este
const imprimeArgumentos3 = (...args) => {
  //*   console.log(args); // solo imprime el primer elemento
  return args;
};

imprimeArgumentos3(10, true, false, 'Hola');

const argumentos = imprimeArgumentos3(10, true, false, 'Hola');
//* console.log(argumentos[0], argumentos[1], argumentos[2], argumentos[3]);

//* optimizado DESESTRUCTURACIÓN
const [casado, vivo, nombre, saludo] = imprimeArgumentos3(
  10,
  true,
  false,
  'Hola'
);

// console.log({ casado, vivo, nombre, saludo });

const tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

//!  const imprimePropiedades = ( personaje ) => {
//!      console.log(personaje.nombre);
//!      console.log(personaje.codeName);
//!      console.log(personaje.vivo);
//!      console.log(personaje.edad);
//!      console.log(personaje.trajes);
//!  }
//* Desestructuración de args
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log(nombre);
  console.log(codeName);
  console.log(vivo);
  console.log(edad);
  console.log(trajes);
};

imprimePropiedades(tony);
