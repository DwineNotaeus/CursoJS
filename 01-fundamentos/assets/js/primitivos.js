let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = 'Tía May';
nombre = `Tía May`;

console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre); //* Mutación del tipo de dato

let esMarvel = false;
console.log(typeof esMarvel);

let edad = 33;
console.log(typeof edad);

edad = 33.001;
console.log(typeof edad);   //* No diferencia entre integer, float, etc 
                            //* SIEMPRE retorna Number


let superPoder;
console.log(typeof superPoder);   

let soyNull = null;
console.log(typeof soyNull); //* Retorna un object pero ES un tipo de dato primitivo


let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1, symbol2);

console.log(symbol1 === symbol2);