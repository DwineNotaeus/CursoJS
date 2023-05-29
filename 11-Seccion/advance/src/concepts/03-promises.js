import { heroes } from '../data/heroes';

/**
 *
 * @param {*} element
 */
export const promiseComponent = (element) => {
  console.log('promise component');

  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `
    <h3>${hero1.name}</h3>
    <h3>${hero2.name}</h3>
    `;
  };

  const renderError = (error) => {
    element.innerHTML = `<h3>${error}</h3>`;
  };

  const id1 = '5d86371f1efebc31def272e2';
  const id2 = '5d86371fd55e2e2a30fe1ccb';
  // const id1 = '5d86371f1efebc31def272e2_sdfsdf'; //! id para pruebas del catch

  //* Promesas no dependientes y realiza ejecución de promesas simultáneas
  Promise.all([findHero(id1), findHero(id2)])
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError);

  let hero1;

  //* Promesas encadenadas
  // findHero(id1)
  //   .then((hero) => {
  //     hero1 = hero;
  //     return findHero(id2);
  //   })
  //   .then((hero2) => {
  //     renderTwoHeroes(hero1, hero2);
  //   })
  //   .catch(renderError);

  // findHero(id1)
  //    .then((superhero) => renderHero(superhero)); //* forma tradicional
  //   .then((hero1) => { //* se puede por referencia

  //     findHero(id2)
  //       .then((hero2) => {
  //         renderTwoHeroes(hero1, hero2);
  //       })
  //       .catch(renderError);
  //   })
  //   .catch(renderError);//* se puede por referencia
  //   .catch((error) => renderError(error)); // forma tradicional
};

/**
 *
 * @param {string} id
 * @returns {Promise}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);
    if (hero) {
      resolve(hero);
      return;
    }
    reject(`Hero with id ${id} not found.`);
  });
};
