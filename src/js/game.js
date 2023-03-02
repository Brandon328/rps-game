const btnPlayAgain = document.querySelector('#btnPlayAgain');
const matchSection = document.querySelector('.match-section');
const mainContainer = document.querySelector('.main-container');

btnPlayAgain.addEventListener('click', () => {
  setTimeout(() => {
    matchSection.classList.add('inactive');
    mainContainer.classList.remove('inactive');
  }, 200);
});