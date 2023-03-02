const pentagonContainer = document.querySelector('.pentagon-icon-container');
const rockItem = pentagonContainer.querySelector('.rock-icon-container');
const scissorItem = pentagonContainer.querySelector('.scissor-icon-container');
const spockItem = pentagonContainer.querySelector('.spock-icon-container');
const lizardItem = pentagonContainer.querySelector('.lizard-icon-container');
const paperItem = pentagonContainer.querySelector('.paper-icon-container');
const matchSection = document.querySelector('.match-section');
const mainContainer = document.querySelector('.main-container');
let userMove = '';

rockItem.addEventListener('click', () => userPick('rock'));
paperItem.addEventListener('click', () => userPick('paper'));
scissorItem.addEventListener('click', () => userPick('scissor'));
lizardItem.addEventListener('click', () => userPick('lizard'));
spockItem.addEventListener('click', () => userPick('spock'));

function userPick(move) {
  userMove = move;
  setTimeout(() => {
    matchSection.classList.remove('inactive');
    mainContainer.classList.add('inactive');
  }, 280);
}