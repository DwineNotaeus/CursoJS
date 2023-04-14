// Función tradicional
function saludar() {
  console.log('Hola mundo');
}
// Función con argumentos
function saludar1(nombre) {
  console.log('Hola ' + nombre);
}
// Función anónima
const saludar2 = function () {
  console.log('Hola mundo');
};
const saludar3 = function (nombre) {
  console.log('Hola mundo ' + nombre);
};

// Más usada
const saludarFlecha = () => {
  console.log('Hola flecha');
};
const saludarFlecha2 = (nombre) => {
  console.log('Hola flecha ' + nombre);
};

saludar();
saludar();
saludar();
saludar();
saludar1('Udemy');
saludar3('UdemyJS');

saludarFlecha();
saludarFlecha2('MundoJS');

//* más líneas de código
function sumar(a, b) {
  return a + b;
}
//* solo realiza el retorno
const sumar2 = (a, b) => a + b;

console.log(sumar(5, 2));
console.log(sumar2(10, 2));

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());
