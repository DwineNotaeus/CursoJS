const personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coordenadas: {
    latitud: 34.034,
    longitud: -118.7,
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibú, California',
  },
  ultima_pelicula: 'Infinity War',
  'ultima-pelicula': 'Infinity War',
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coordenadas latitud', personaje.coordenadas.latitud);
console.log('Nro. trajes', personaje.trajes.length);
console.log('último traje', personaje.trajes[personaje.trajes.length - 1]); // Hulkbuster

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última pelicula', personaje.ultima_pelicula);
console.log('Última pelicula', personaje['ultima-pelicula']);

// Más detalles

personaje.edad = null;
console.log(personaje);

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// personaje = true;
Object.freeze(personaje);
personaje.dinero = 10000000; // no se agrega al objeto
personaje.casado = false; // no se puede alterar valores del objeto

personaje.direccion.ubicacion = 'Colombia';

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades);
console.log(valores);
