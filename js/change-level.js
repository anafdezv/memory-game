function upLevel() {
  currentLevel++;
}

function updateLevel() {
  let levelText = currentLevel + 1;
  if (levelText < 10) {
    levelText = '0' + levelText;
  }
  document.querySelector('#level').innerText = levelText;
}

function startNewLevel() {
  upLevel();
  updateLevel();
  init();
}
