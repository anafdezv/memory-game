function barajaTarjetas(theCards) {
  let result;
  let totalCards = theCards.concat(theCards);
  result = totalCards.sort(function () {
    return 0.5 - Math.random();
  });
  return result;
}

function distributeCards(theCards) {
  let table = document.querySelector('#table');
  let shuffledCards = barajaTarjetas(theCards);
  table.innerHTML = '';

  shuffledCards.forEach(function (element) {
    let card = document.createElement('div');

    card.innerHTML =
      "<div class='card' data-valor= " + element + '>' + "<div class='card__content'>" + element + '</div>' + '</div>';

    table.appendChild(card);
  });
}
