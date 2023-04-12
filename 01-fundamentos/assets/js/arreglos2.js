let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push('F-Zero'); //* agrega elemento al final del arreglo
console.log({ nuevaLongitud, juegos });

juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let posicion = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(posicion, 2);
console.log({ juegosBorrados, juegos }); //* ['Zelda', 'Mario'][('Fire Emblem', 'Metroid', 'Chrono')];

let metroidIndex = juegos.indexOf('Metroid'); // CaSeSeNsItIvE
console.log({ metroidIndex });

metroidIndex = juegos.indexOf('metroid'); // Retorna -1 No encontrado
console.log({ metroidIndex });
