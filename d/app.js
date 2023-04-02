const board = document.getElementById('game-board');
const resetButton = document.getElementById('reset-button');
const squares = [];

let currentPlayer = 'X';
let gameover = false;

// Create the game board
for (let i = 0; i < 9; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('click', () => {
    if (!gameover && square.innerHTML === '') {
      square.innerHTML = currentPlayer;
      square.classList.add(currentPlayer.toLowerCase());
      checkWin();
      switchPlayer();
    }
  });
  board.appendChild(square);
  squares.push(square);
}

// Reset the game board
resetButton.addEventListener('click', () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
    squares[i].classList.remove('x');
    squares[i].classList.remove('o');
  }
  currentPlayer = 'X';
  gameover = false;
});

// Check if a player has won the game
function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    if (squares[combo[0]].innerHTML !== '' &&
        squares[combo[0]].innerHTML === squares[combo[1]].innerHTML &&
        squares[combo[0]].innerHTML === squares[combo[2]].innerHTML) {
      gameover = true;
      alert(currentPlayer + ' wins!');
      break;
    }
  }
}

// Switch the current player
function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
