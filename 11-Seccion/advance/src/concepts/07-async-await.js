/**
 *
 * @param {*} element
 */
export const asynAwait2Component = async (element) => {
  console.time();

  //* SIN optimizar promesas NO secuenciales -> 4526.705078125 ms
  // const value1 = await slowPromise();
  // const value2 = await mediumPromise();
  // const value3 = await fastPromise();

  // Optimización promesas NO secuenciales -> 2006.863037109375 ms
  const [value1, value2, value3] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
  ]);

  element.innerHTML = `
  value1: ${value1} <br/>
  value2: ${value2} <br/>
  value3: ${value3} <br/>
  `;
  console.timeEnd();
};

const slowPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('slow promise');
    }, 2000);
  });
const mediumPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('medium promise');
    }, 1500);
  });
const fastPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('fast promise');
    }, 1000);
  });
