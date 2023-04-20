let a = 5;
if (a > 10) {
  console.log('A es mayor a 10');
} else {
  console.log('A es menor a 10');
}

//* SIN USAR IF-ELSE o SWITCH => USANDO OBJETOS - ARREGLOS

const hoy = new Date();

const dia = hoy.getDay();
console.log({ dia });
const listaDias = {
  0: 'domingo',
  1: 'lunes',
  2: 'martes',
  3: 'miércoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sábado',
};
console.log(listaDias[dia]);

const listaDias2 = {
  0: () => 'domingo - ToDo-Function',
  1: () => 'lunes - ToDo-Function',
  2: () => 'martes - ToDo-Function',
  3: () => 'miércoles - ToDo-Function',
  4: () => 'jueves - ToDo-Function',
  5: () => 'viernes - ToDo-Function',
  6: () => 'sábado - ToDo-Function',
};

console.log(listaDias2[dia]());

const listaDias3 = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];
console.log(listaDias3[dia]);

console.log('Fin del programa');
