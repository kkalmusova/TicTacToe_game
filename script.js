const area = document.querySelector('.play-area');

let order = 0;

area.addEventListener('click', function(event) {
  if (order % 2 === 0) {
    event.target.innerHTML = "X"
  } else {
    event.target.innerHTML = "O"
  }
  order++;
  checkWin()
  if (order === 9) {
    location.reload()
  }
})



function checkWin() {
  let box = document.getElementsByClassName('play-area__box');
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ] 

  for (let i = 0; i < winCombinations.length; i++) {
    if (box[winCombinations[i][0]].innerHTML === 'X' && box[winCombinations[i][1]].innerHTML === 'X' && box[winCombinations[i][2]].innerHTML === 'X') {
      alert('Победили крестики!');
      location.reload()
    } else if (box[winCombinations[i][0]].innerHTML === 'O' && box[winCombinations[i][1]].innerHTML === 'O' && box[winCombinations[i][2]].innerHTML === 'O') {
      alert('Победили нолики!');
      location.reload()
    }
  }
}
