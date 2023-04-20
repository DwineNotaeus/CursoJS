const elMayor = (a, b) => (a > b ? a : b);
tieneMembresia = (miembro) => (miembro ? '$2' : '$10');

console.log(elMayor(20, 15));
console.log(tieneMembresia(true));

const amigo = false;

const amigo_arr = [
  'Peter',
  'Tony',
  'Dr. Strange',
  amigo ? 'Thor' : 'Loki',
  (() => 'Udemy')(),
];

//Funciona con object {} conjunto agrupado => clave, valor
//* const amigo_arr = {
//*   0: 'Peter',
//*   1: 'Tony',
//*   2: 'Dr. Strange',
//*   3: amigo ? 'Thor' : 'Loki',
//*   4: (() => 'Udemy')(),
//* };
console.log(amigo_arr);

const nota = 7
const grado = nota >=7 ? 'A' :
              nota >=5 && nota <=6 ? 'B' : 
              nota >=2 && nota <=4 ? 'C': 'NO APROBÓ'

console.log({ nota, grado });




