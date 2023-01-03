function gameOver() {
  clearInterval(chronometer);
  document.querySelector('#gameOver').classList.add('visible');
}

function timeOver() {
  document.querySelector('#timeOver').classList.add('visible');
}
