import * as nodes from './nodes.js';
import { showMoves } from './game.js';

nodes.rockItem.addEventListener('click', () => userPick('rock'));
nodes.paperItem.addEventListener('click', () => userPick('paper'));
nodes.scissorItem.addEventListener('click', () => userPick('scissor'));
nodes.lizardItem.addEventListener('click', () => userPick('lizard'));
nodes.spockItem.addEventListener('click', () => userPick('spock'));

function userPick(move) {
  setTimeout(() => {
    nodes.matchSection.classList.remove('inactive');
    nodes.mainContainer.classList.add('inactive');
    showMoves(move);
  }, 280);
}