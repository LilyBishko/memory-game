const cards = document.querySelectorAll('.memory-card');

 let hasFlippedCard = false;
 let boardLocked = false;
 let firstCard, secondCard;
 let moves = 0; 



const flipCard = e => {
    if (boardLocked) return;
   const target = e.target.parentElement;

   if(target === firstCard) return;

   target.classList.add("flip");
  
   function updateMovesDisplay() {
    const movesDisplay = document.getElementById("moves");
    movesDisplay.textContent = `Moves: ${moves}`;
  }; 
  
   if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = target;
    startTimer(); //fvnfknv
   } else {
    hasFlippedCard = false;
    secondCard = target;
    checkForMatch();
    moves++; 
    updateMovesDisplay(); 
    checkForWin();
   };
};


function updateMovesDisplay() {
    const movesDisplay = document.getElementById("moves");
    movesDisplay.textContent = `Moves: ${moves}`;
  };
  
 






const checkForMatch = () => {
   const isEqual = firstCard.dataset.picture === secondCard.dataset.picture;
    isEqual ? disableCards() : unflipCards(); 
};

const disableCards = () => {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
};

const unflipCards = () => {
    boardLocked = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 500 )
};
const resetBoard = () => {
hasFlippedCard = boardLocked = false;
firstCard = secondCard = false;
};



cards.forEach(card => {
    card.addEventListener('click', flipCard)

    const randomIndex = Math.floor(Math.random() * cards.length);
    card.style.order = randomIndex;
});


  
