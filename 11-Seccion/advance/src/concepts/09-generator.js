/**
 *
 * @param {*} element
 */
export const generatorFunctionsComponent = (element) => {
  console.log('generatorFunctionsComponent');
  const myGenerator = myFirstGeneratorFunction();

  // console.log(myGenerator.next());

  const button = document.createElement('button');
  button.innerText = 'Click me!';
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerText = `Click ${value}`;
  };

  button.addEventListener('click', renderButton);

  const genId = idGenerator();
};

function* idGenerator() {
  let currentId = 0;
  while (true) {
    // yield currentId++; primer valor será cero 0
    yield ++currentId; // primer valor será uno 1
  }
}

function* myFirstGeneratorFunction() {
  yield 'Primer valor'; // es como pausar la función
  yield 'Segundo valor';
  yield 'Tercer valor';

  return 'no hay valores';
}
