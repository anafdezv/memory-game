function init() {
  movements = 0;
  distributeCards(levels[currentLevel].cards);
  document.querySelector('#mov').innerText = '00';
  maxCounter();
  document.querySelector('.select-level').classList.remove('visible');
  document.querySelector('#endGame').classList.remove('visible');
  document.querySelector('#timeOver').classList.remove('visible');
  document.querySelector('#gameOver').classList.remove('visible');
  document.querySelector('#upLevel').classList.remove('visible');

  document.querySelectorAll('.card').forEach(function (element) {
    element.addEventListener('click', descubrir);
  });

  if (!relaxMode) {
    startChronometer();
  } else {
    document.querySelector('#chronometer').classList.add('hidden-chronometer');
  }
}

function restart() {
  currentLevel = 0;
  updateLevel();
  init();
}

function startNormalGame() {
  relaxMode = false;
  document.querySelector('#welcome').classList.remove('visible');
  init();
  document.querySelector('.control-level').classList.add('hidden-control');
}

function startRelaxGame() {
  relaxMode = true;
  document.querySelector('#welcome').classList.remove('visible');
  init();
}
