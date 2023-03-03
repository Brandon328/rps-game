const preloader = document.querySelector('.preloader-container');
const btnPlayAgain = document.querySelector('#btnPlayAgain');
const matchSection = document.querySelector('.match-section');
const mainContainer = document.querySelector('.main-container');
const pentagonContainer = document.querySelector('.pentagon-icon-container');
const rockItem = pentagonContainer.querySelector('.rock-icon-container');
const scissorItem = pentagonContainer.querySelector('.scissor-icon-container');
const spockItem = pentagonContainer.querySelector('.spock-icon-container');
const lizardItem = pentagonContainer.querySelector('.lizard-icon-container');
const paperItem = pentagonContainer.querySelector('.paper-icon-container');
const btnRules = document.querySelector('#btnRules');
const rulesOverlay = document.querySelector('.rules-section');
const rulesContainer = rulesOverlay.querySelector('.rules-section__container');
const btnCloseRules = rulesContainer.querySelector('#btnCloseRules');
const userPick = matchSection.querySelector('.match-section__user-pick-container picture');
const pcPick = matchSection.querySelector('.match-section__pc-pick-container picture');
const userPickIcon = matchSection.querySelector('.match-section__user-pick-container picture img');
const pcPickIcon = matchSection.querySelector('.match-section__pc-pick-container picture img');
const resultsContainer = matchSection.querySelector('.match-section__results-container');
const score = document.getElementById('score');

export {
  btnPlayAgain, matchSection, mainContainer,
  pentagonContainer, rockItem, scissorItem,
  spockItem, lizardItem, paperItem, btnRules,
  rulesOverlay, rulesContainer, btnCloseRules,
  userPick, pcPick, userPickIcon, pcPickIcon,
  resultsContainer, preloader, score
}