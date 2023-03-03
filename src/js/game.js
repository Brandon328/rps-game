import * as nodes from './nodes';

function updateScore() {
  let score;
  if (localStorage.getItem('score'))
    score = parseInt(localStorage.getItem('score'))
  else {
    localStorage.setItem('score', '0');
    score = 0;
  }
  score++;
  localStorage.setItem('score', score);
  nodes.score.innerText = score;
}

function getPcMoves() {
  const moves = [
    'paper',
    'scissor',
    'spock',
    'lizard',
    'rock'
  ]
  const randomIndex = Math.floor(Math.random() * 5);
  return moves[randomIndex];
}

function getWinner(pick1, pick2) {
  let winner = '';
  const rules = {
    scissor: {
      winsagainst: ['paper', 'lizard'],
      losesagainst: ['spock', 'rock']
    },
    paper: {
      winsagainst: ['spock', 'rock'],
      losesagainst: ['scissor', 'lizard']
    },
    rock: {
      winsagainst: ['scissor', 'lizard'],
      losesagainst: ['spock', 'paper']
    },
    spock: {
      winsagainst: ['scissor', 'rock'],
      losesagainst: ['paper', 'lizard']
    },
    lizard: {
      winsagainst: ['paper', 'spock'],
      losesagainst: ['rock', 'scissor']
    }
  };
  for (const [key, value] of Object.entries(rules[pick1])) {
    if (value.includes(pick2))
      winner = key == 'winsagainst' ? pick1 : pick2;
  }
  return winner;
}

function showMoves(userMove) {
  let pcMove = getPcMoves();
  while (pcMove === userMove) {
    pcMove = getPcMoves();
  }
  const winner = getWinner(userMove, pcMove);
  setTimeout(() => {
    // Mostramos los picks
    nodes.userPick.classList.add(`${userMove}-icon-container`);
    nodes.userPickIcon.src = `images/icon-${userMove}.svg`;
    nodes.pcPick.classList.add(`${pcMove}-icon-container`);
    nodes.pcPickIcon.src = `images/icon-${pcMove}.svg`;

    // Mostramos los resultados después de un segundo para la animación
    setTimeout(() => {
      nodes.resultsContainer.classList.remove('inactive');
      if (userMove === winner) {
        // Declarar ganador al user
        nodes.resultsContainer.querySelector('h2').innerText = 'you win';
        nodes.userPick.classList.add('icon-container--winner');
        updateScore();
      }
      else {
        // Declarar ganador al PC
        nodes.resultsContainer.querySelector('h2').innerText = 'you lose';
        nodes.pcPick.classList.add('icon-container--winner');
      }
    }, 1500);

  }, 100)
}

nodes.btnPlayAgain.addEventListener('click', () => {
  setTimeout(() => {
    nodes.matchSection.classList.add('inactive');
    nodes.mainContainer.classList.remove('inactive');
    nodes.resultsContainer.classList.add('inactive');
    nodes.userPick.className = '';
    nodes.userPickIcon.src = '';
    nodes.pcPick.className = '';
    nodes.pcPickIcon.src = '';
  }, 200);
});

export { showMoves };