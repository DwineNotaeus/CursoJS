import { heroes } from '../data/heroes';

/**
 *
 * @param {*} element
 */
export const asyncComponent = (element) => {
  const id1 = '5d86371f97c29d020f1e1f6d';
  console.log('Inicio de componente');

  findHero(id1)
    .then((name) => (element.innerHTML = name))
    // .then(console.log)
    .catch((error) => (element.innerHTML = error));

  console.log('Fin del componente');
};

/**
 * Obtiene el object hero filtrado por identificador
 * @param {string} id
 * @returns {Promise<string>}
 */
const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) {
    throw Error(`Hero with id ${id} not found`);
  }
  return hero.name;
};
