const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
if ([0, 6].includes(dia)) {
  console.log('Fin de semana');
  horaApertura = 9;
} else {
  console.log('Dia de semana');
  horaApertura = 11;
}

horaApertura = [0, 6].includes(dia) ? 9 : 11;

console.log({ horaApertura });

if (horaActual >= horaApertura) {
  mensaje = 'Está abierto';
} else {
  mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}
//* Operador ternario
mensaje =
  horaActual >= horaApertura
    ? `Está abierto`
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;
