function writeLevels() {
  let menulevels = document.querySelector('.select-level ul');
  levels.forEach(function (element, index) {
    let levelControl = document.createElement('li');
    levelControl.innerHTML = "<button class='level' data-level=" + index + '>level ' + (index + 1) + '</button>';
    menulevels.appendChild(levelControl);
  });
}

function changeLevel() {
  let level = parseInt(this.dataset.level);
  currentLevel = level;
  updateLevel();
  init();
}

function showLevelMenu(evento) {
  evento.stopPropagation();
  document.querySelector('.select-level').classList.toggle('visible');
}

function hiddenLevelMenu() {
  document.querySelector('.select-level').classList.remove('visible');
}

function clickOutsideMenu(evento) {
  if (evento.target.closest('.select-level')) {
    return;
  }
  document.querySelector('.select-level').classList.remove('visible');
}

function closeMenuKeyboard(evento) {
  if (evento.key === 'Escape') {
    hiddenLevelMenu();
  }
}
