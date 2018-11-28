(() => {
  let player = "X";
  const cells = document.getElementsByClassName("cell");
  const restart = document.querySelector(".bottom__restart");
  const message = document.querySelector(".message");
  let stepCount = 0;
  const winArray = [
    [1, 2, 3],
    [1, 4, 7],
    [7, 8, 9],
    [3, 6, 9],
    [2, 5, 8],
    [1, 5, 9],
    [3, 5, 7]
  ];
  const dataX = [];
  const dataO = [];

  for (let cell of cells) {
    cell.addEventListener("click", currentStep);
  }

  function currentStep() {
    const num = +this.getAttribute("data-cell");
    if (!this.textContent) {
      this.innerText = player;
      changePlayer();
      stepCount++;
      stepCount === 9
        ? (message.innerText = "Tie")
        : (message.innerText = "Next player " + player);
    }
  }

  function changePlayer() {
    player === "X" ? (player = "O") : (player = "X");
  }

  restart.addEventListener("click", function() {
    for (let cell of cells) {
      cell.innerText = "";
    }
  });
  
})();
