const regresaTrue = () => {
  console.log('Regresa true...');
  return true;
};
const regresaFalse = () => {
  console.log('Regresa false...');
  return false;
};

console.warn('Not o la negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true
console.log(!regresaFalse()); //true;

console.warn('AND'); // retorna true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // true

console.log('===== && ======');
regresaFalse() && regresaTrue(); //Regresa false...
console.log('===== && ======');
regresaTrue() && regresaFalse(); //Regresa true...  Regresa false...
//* console.log('1', regresaFalse() && regresaTrue()); // Regresa false => FALSE
//* console.log('2', regresaTrue() && regresaFalse()); //Regresa true, Regresa false => FALSE

console.warn('OR'); // retorna true si al menos uno es verdadero
console.log(true || false || false || false);

console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo';
console.log({ a1 });
