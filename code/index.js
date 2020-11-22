let playerOneTime = 0;
let playerTwoTime = 0;

let playerOneInterval;
let playerTwoInterval;

// Handle player one's buttons

const startPlayerOneTurn = () => {

  const countPlayerOneTime = () => {
    if (playerTwoTime > 0) {
      playerTwoTime = playerTwoTime - 1;
      document.getElementById("playerTwoTime").innerHTML = playerTwoTime;
    } else {
      playerOneTime += 1,
      document.getElementById("playerOneTime").innerHTML = playerOneTime;
    }
  }
  
  playerOneInterval = setInterval(countPlayerOneTime, 1000);
}

const stopPlayerOneTurn = () => {
  clearInterval(playerOneInterval);
}

// Handle player two's buttons

const startPlayerTwoTurn = () => {

  const countPlayerTwoTime = () => {
    if (playerOneTime > 0) {
      playerOneTime = playerOneTime - 1;
      document.getElementById("playerOneTime").innerHTML = playerOneTime;
    } else {
      playerTwoTime += 1,
      document.getElementById("playerTwoTime").innerHTML = playerTwoTime;
    }
  }
  
  playerTwoInterval = setInterval(countPlayerTwoTime, 1000);
}

const stopPlayerTwoTurn = () => {
  clearInterval(playerTwoInterval);
}
