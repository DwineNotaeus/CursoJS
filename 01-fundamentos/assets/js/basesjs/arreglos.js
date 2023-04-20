const arr = new Array(10);
console.log(arr);

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videoJuegos });

console.log(videoJuegos[0]);

let arregloDeCosas = [
  true,
  123,
  'Udemy',
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ['X', 'Megaman', 'Zero', 'Dr. Light',[
    'Dr. Willy',
    'Woodman'
  ]],
];
console.log({ arregloDeCosas });

console.log(arregloDeCosas[7][3]); //* Dr. Light
console.log(arregloDeCosas[7][4][1]); //* Woodman
