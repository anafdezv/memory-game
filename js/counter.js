function updateCounter() {
  let movementsText;
  movements++;
  movementsText = movements;

  if (movements > levels[currentLevel].maxMovements && !relaxMode) {
    gameOver();
    return;
  }

  if (movements < 10) {
    movementsText = '0' + movements;
  }
  document.querySelector('#mov').innerText = movementsText;
}

function maxCounter() {
  let movementsMaxText = levels[currentLevel].maxMovements;
  if (movementsMaxText < 10) {
    movementsMaxText = '0' + movementsMaxText;
  }
  document.querySelector('#total-movements').innerText = movementsMaxText;
}
