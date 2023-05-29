import { heroes } from '../data/heroes';

/**
 *
 * @param {*} element
 */
export const callbacksComponent = (element) => {
  console.log('callbacks component');
  const id = '5d86371f1efebc31def272e2';
  findHero(id, (error, NombreDeLaFuncion) => {
    if (error) {
      element.innerHTML = error;
      return;
    }

    element.innerHTML = NombreDeLaFuncion?.name;
  });
  //* findHero(id, ({name}) => {
  //*   element.innerHTML = name;
  //* });
};

/**
 *
 * @param {string} id
 * @param {(hero:Object) => void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    callback(`Hero with id ${id} not found.`);
    return;
  }

  callback(hero);
};
