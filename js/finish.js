function finish() {
  clearInterval(chronometer);
  if (currentLevel < levels.length - 1) {
    document.querySelector('#upLevel').classList.add('visible');
  } else {
    document.querySelector('#endGame').classList.add('visible');
  }
}
