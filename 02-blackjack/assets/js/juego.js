// 2C = Two of Clubs
// 2D = Two of Diaminds
// 2H = Two of Hearts
// 2S = Two of Spades

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const lblPuntos = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
// console.log(btnPedir);

btnPedir.disabled = true;
btnDetener.disabled = true;

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
  // console.log(carta);
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

// turno de la computadora
const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    lblPuntos[1].innerText = puntosComputadora;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('Nadie gana');
    } else if (puntosMinimos > 21) {
      alert('Computadora gana');
    } else if (puntosComputadora > 21) {
      alert('Jugador gana');
    } else {
      alert('Computadora gana');
    }
  }, 200);
};

const valor = valorCarta(pedirCarta());
// console.log( valor );

// Eventos
// Una función enviada como parámetro se le conoce como CALLBACK
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  lblPuntos[0].innerText = puntosJugador;

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.warn('Lo siento, perdiste');
    alert('Computadora gana');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    console.warn('21, genial!');
    alert('Jugador gana');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  }
});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', () => {
  deck = [];
  crearDeck();
  puntosJugador = 0;
  puntosComputadora = 0;
  lblPuntos[0].innerText = 0;
  lblPuntos[1].innerText = 0;

  divCartasJugador.innerHTML = '';
  divCartasComputadora.innerHTML = '';

  btnPedir.disabled = false;
  btnDetener.disabled = false;
});
