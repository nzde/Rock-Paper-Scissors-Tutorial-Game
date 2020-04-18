/*
   * Title: Rock Paper Scissors JS Tutorial 
   * Author: Nzde 
   * Description: Learnt to create this from a JS tutorial by https://github.com/developedbyed 
   * Created: 18th April 2020 
    *Updated:  18th April 2020

*/
const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //play mattach
  const playmatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //? Computer Options
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //? Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        //? this is where we call compare hands
        setTimeout(() => {
          compareHands(this.textContent, computerChoice);

          //* Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //update images
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };
  const updateScore = () => {
    const PlayerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    PlayerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    //?checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "it is a tie";
      return;
    }

    //* Checks for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    // * Checks for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }

    // * Checks for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };
  // this calls the inner
  startGame();
  playmatch();
};
//startGame
game();
