writeLevels();

document.querySelectorAll('.restart').forEach(function (element) {
  element.addEventListener('click', restart);
});

document.querySelector('#normal-game').addEventListener('click', startNormalGame);
document.querySelector('#relax-game').addEventListener('click', startRelaxGame);

document.querySelector('#control-level').addEventListener('click', showLevelMenu);
document.querySelector('#close-levels').addEventListener('click', hiddenLevelMenu);

document.querySelectorAll('.level').forEach(function (element) {
  element.addEventListener('click', changeLevel);
});

document.querySelector('#up-level').addEventListener('click', startNewLevel);

document.querySelector('body').addEventListener('click', clickOutsideMenu);

document.addEventListener('keydown', closeMenuKeyboard);

document.querySelector('#welcome').classList.add('visible');
