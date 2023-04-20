const heroes = ['batman', 'superman', 'Aquaman'];

console.warn('For tradicional');
for (let index = 0; index < heroes.length; index++) {
  const element = heroes[index];
  console.log('for tradicional ', element);
}

console.warn('For in');

//* for (const key in object) {
//*     if (Object.hasOwnProperty.call(object, key)) {
//*         const element = object[key];
//*     }
//* }

for (let key in heroes) {
  console.log(heroes[key]);
}

console.warn('For of');
//* for (const iterator of object) {
//* }

for (const heroe of heroes) {
  console.log(heroe);
}
