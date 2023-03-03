// const btnRules = document.querySelector('#btnRules');
// const rulesOverlay = document.querySelector('.rules-section');
// const rulesContainer = rulesOverlay.querySelector('.rules-section__container');
// const btnCloseRules = rulesContainer.querySelector('#btnCloseRules');
import { btnRules, rulesOverlay, rulesContainer, btnCloseRules } from './nodes';

btnRules.addEventListener('click', () => {
  rulesOverlay.classList.add('active');
  rulesContainer.classList.add('active');
});

btnCloseRules.addEventListener('click', () => {
  rulesOverlay.classList.remove('active');
  rulesContainer.classList.remove('active');
});