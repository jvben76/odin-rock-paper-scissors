//////Breakdown///////

// A rock paper, scissors game played between a person and the computer
// Game logic: Each game consists of five rounds between computer and player
// Player needs to choose an option between rock, paper, scissors and computer will choose one of these at random
// game rules: rock beats scissors, scissors beats paper and paper beats rock
// At the end of each round a winner is determined and their score is recorded
// At the end of the five rounds, the scores are compared and a gameWinner is determined


//////Solution//////

// creat an array ['rock', 'paper', 'scissors'] named computerMoves;
// *create a function called getComputerChoice() which runs a Math.random() function on computerMoves
// on the computerMoves array and choose one of the items;
// *create two variables: playerScore and computerScore and set them both to 0;

// create a function playRound() which takes two parameters: playerSelection and computerSelection and
// plays a round of the game;
// *write game logic to compare player and computer choices into playRound();
// *store scores into playerScore and computerScore variables and return the winner for round;

// create a function which will run the game called game();
// *create a variable inside the game() function called player and set it to a prompt asking for the player to choose an option;
// *create another variable inside the game() function called computer and set it to getComputerChoice();
// *create for loop inside game() which will run for four iterations;
// *call playRound() inside for loop;
// *at end of game() return winner score;

function runGame() {
    const computerMoves = ['rock', 'paper', 'scissors'];//array for move options

    const choiceBtns = document.querySelectorAll('.choiceBtns');
    const roundNum = document.getElementById('round-num');
    const roundMoves = document.getElementById('round-moves');
    const roundSUmmary = document.getElementById('round-summary');
    const roundScore = document.getElementById('round-score')



    let playerScore = 0;
    let computerScore = 0;
    let round = 0;



    function getComputerChoice() {  //create function to choose move option for computer

        let computerChoice = computerMoves[Math.floor(Math.random() * computerMoves.length)];
        return computerChoice;
    }

    function gameEnd(round) {
        if (round == 5) {
            if (playerScore > computerScore) {

                console.log('********GAME OVER!********');

                console.log(`________YOU WIN________\n\nYOUR SCORE: ${playerScore}  COMPUTER SCORE: ${computerScore}`);

            } else if (computerScore > playerScore) {
                console.log('********GAME OVER!********');

                console.log(`________COMPUTER WINS________\n\nCOMPUTER SCORE: ${computerScore}  YOUR SCORE: ${playerScore}`);

            } else {
                console.log('********GAME OVER!********');

                console.log(`________GAME IS A TIE________\n\nYOUR SCORE: ${computerScore}  COMPUTER SCORE: ${playerScore}`);
            }
            return
        }
    }

    function ifPlayerWins(playerSelection, computerSelection) {
        playerScore += 1;

        roundMoves.textContent = `YOU PLAYED: ${playerSelection} COMPUTER PLAYED: ${computerSelection}`
        roundSUmmary.textContent = `You win this round: ${playerSelection} beats ${computerSelection}`;
        roundScore.textContent = `SCORE | YOU: ${playerScore} COMPUTER: ${computerScore}`;
        
        gameEnd(round);


    }

    function ifComputerWins(playerSelection, computerSelection) {
        computerScore += 1;

        roundMoves.textContent = `YOU PLAYED: ${playerSelection} COMPUTER PLAYED: ${computerSelection}`
        roundSUmmary.textContent = `You lose this round: ${computerSelection} beats ${playerSelection}`;
        roundScore.textContent = `SCORE | YOU: ${playerScore} COMPUTER: ${computerScore}`;

        gameEnd(round);

    }

    function playRound(playerSelection, computerSelection) {   //create function to run a round
       
        roundMoves.textContent = `YOU PLAYED: ${playerSelection} COMPUTER PLAYED: ${computerSelection}`;
        if (playerSelection === computerSelection) {

            roundSUmmary.textContent = 'Invalid round: Nobody wins this one!';
            roundScore.textContent = `SCORE | YOU: ${playerScore} COMPUTER: ${computerScore}`;
            gameEnd(round)

        }

        if (playerSelection === 'rock' && computerSelection === 'paper') {

            ifComputerWins(playerSelection, computerSelection);

            return computerScore;

        } else if (playerSelection === 'paper' && computerSelection === 'rock') {

            ifPlayerWins(playerSelection, computerSelection)
            return playerScore;

        } else if (computerSelection === 'scissors' && playerSelection === 'paper') {

            ifComputerWins(playerSelection, computerSelection)
            return computerScore;

        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {

            ifPlayerWins(playerSelection, computerSelection)
            return playerScore;

        } else if (computerSelection === 'rock' && playerSelection === 'scissors') {

            ifComputerWins(playerSelection, computerSelection)
            return computerScore;

        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {

            ifPlayerWins(playerSelection, computerSelection)

            return playerScore;

        }

    }


    function game() {   //create function to start game

            choiceBtns.forEach(btn => btn.addEventListener('click', (e) => {
            round++;
            roundNum.textContent = `ROUND: ${round}`;
            playRound(e.target.id, getComputerChoice());

        }));
    }

    game();
}

document.onload = runGame();







