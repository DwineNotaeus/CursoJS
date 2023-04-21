// 2C = Two of Clubs
// 2D = Two of Diaminds
// 2H = Two of Hearts
// 2S = Two of Spades

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let especial of especiales) {
      deck.push(especial + tipo);
    }
  }

  // console.log(deck);
  deck = _.shuffle(deck);
  // console.log('Mezclar cartas', deck);
};

crearDeck();

const pedirCarta = () => {
  //   const carta = deck[Math.floor(Math.random() * deck.length)];
  //   deck = deck.filter((x) => x !== carta);

  if (deck.length === 0) {
    throw 'No hay cartas para repartir';
  }

  const carta = deck.pop(); // Obtiene el último elemento y lo elimina
  

  // console.log('deck menos uno', deck);
  return carta;
};

// deck = []; lanza esta exepcion throw 'No hay cartas para repartir';
pedirCarta();

const valorCarta = (carta) => {
  console.log(carta);
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;

  // if (isNaN(valor)) {
  //   console.log('no es un número');
  //   puntos = valor === 'A' ? 11 : 10;
  // } else {
  //   console.log('es un número');
  //   puntos = valor * 1;
  // }
};

const valor = valorCarta(pedirCarta());
console.log( valor );
