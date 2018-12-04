(() => {
  let player = 'X';
  const cells = document.getElementsByClassName('cell');
  const restart = document.querySelector('.bottom__restart');
  const message = document.querySelector('.message');
  let stepCount = 0;
  const winArray = [
    [1, 2, 3],
    [1, 4, 7],
    [7, 8, 9],
    [3, 6, 9],
    [2, 5, 8],
    [1, 5, 9],
    [3, 5, 7],
  ];
  let dataX = [];
  let dataO = [];

  for (const cell of cells) {
    cell.addEventListener('click', currentStep);
  }

  function currentStep() {
    const num = +this.getAttribute('data-cell');
    if (!this.textContent) {
      this.innerText = player;
      player === 'X' ? dataO.push(num) : dataX.push(num);
      if (
        (dataX.length > 2 || dataO.length > 2)
        && (checkWin(dataO, num) || checkWin(dataX, num))
      ) {
        for (const cell of cells) {
          cell.removeEventListener('click', currentStep);
        }
        message.classList.add('win-message');
        return (message.innerText = `😄 Win player ${player} 😄`);
      }

      changePlayer();
      stepCount++;
      stepCount === 9
        ? (message.innerText = 'Tie')
        : (message.innerText = `Next player ${player}`);
    }
  }

  function changePlayer() {
    player === 'X' ? (player = 'O') : (player = 'X');
  }

  restart.addEventListener('click', () => {
    for (const cell of cells) {
      cell.innerText = '';
    }
    dataO = [];
    dataX = [];
    player = 'X';
    stepCount = 0;
    message.classList.remove('win-message');
    message.innerText = `Next player ${player}`;
    for (const cell of cells) {
      cell.addEventListener('click', currentStep);
    }
  });

  function checkWin(arr, num) {
    for (const win of winArray) {
      let count = 0;
      if (win.indexOf(num) !== -1) {
        for (const someWin of win) {
          if (arr.indexOf(someWin) !== -1) {
            count++;
            if (count === 3) {
              return true;
            }
          }
        }
        count = 0;
      }
    }
  }
})();
