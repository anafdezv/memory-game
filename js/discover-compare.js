function descubrir() {
  let discovered;
  let pendingCards;
  let totalDiscovered = document.querySelectorAll('.discovered:not(.success)');

  if (totalDiscovered.length > 1) {
    return;
  }

  this.classList.add('discovered');

  discovered = document.querySelectorAll('.discovered:not(.success)');
  if (discovered.length < 2) {
    return;
  }

  compare(discovered);
  updateCounter();
  pendingCards = document.querySelectorAll('.card:not(.success)');
  if (pendingCards.length === 0) {
    setTimeout(finish, 1000);
  }
}

function compare(cardsToCompare) {
  if (cardsToCompare[0].dataset.valor === cardsToCompare[1].dataset.valor) {
    success(cardsToCompare);
  } else {
    failure(cardsToCompare);
  }
}
