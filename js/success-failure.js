function success(theCards) {
  theCards.forEach(function (element) {
    element.classList.add('success');
  });
  document.querySelector('#sound-success').play();
}

function failure(theCards) {
  theCards.forEach(function (element) {
    element.classList.add('failure');
  });

  document.querySelector('#sound-failure').play();

  setTimeout(function () {
    theCards.forEach(function (element) {
      element.classList.remove('discovered');
      element.classList.remove('failure');
    });
  }, 1000);
}
