//////Breakdown///////

// A rock paper, scissors game played between a person and the computer
// Game logic: Each game consists of five rounds between computer and player
// Player needs to choose an option between rock, paper, scissors and computer will choose one of these at random
// game rules: rock beats scissors, scissors beats paper and paper beats rock
// At the end of each round a winner is determined and their score is recorded
// At the end of the five rounds, the scores are compared and a gameWinner is determined


//SOLUTION//
//1. UI for game
// capture all container elements for UI components and store in variables
// capture move buttons (rock, paper, scissors) and store in variable
// capture start and restart buttons and store in variables
// capture elements inside of round-details container and store in variables
// capture elements inside of end-game container and store in variables
//2. Game Logic
// create variable to store player's score and one to store computer's score
// create a variable to store the current round number (will be used to display current round and will be
// used to determine an end-game scenario)

// create a variable to hold the current round's winner

// add an eventListener('click', fn()) to start button which will:
//-display the move buttons
//-the restart button
//-a heading asking you to choose a move to make to start the first round
//-will hide itself

// Add eventListener('click', fn()) to restart button so that when clicked, it reloads the page

// Create a function playRound() which takes the player's move choice and computer's move choice as parameters
//- runs every time a round is played and compares the plays, add
// Create a function chooseWinner() which takes in the playerScore, computerScore and the roundWinner as variables
//- displays game information according to how the round was played 
//- gets called in each round end scenario inside playRound()
// Create function gameEnd() which is run on each round and will run endGame logic if the roundNumber is = x;
//- move buttons will be disabled and endGame text will display listing the winner and the endGame score
// Create another function game() which will contain an eventListener('click', fn()) attached to the move buttons
//- when they are clicked, information displaying the results of the current round will display
//- This function is run as soon as the script loads






    const computerMoves = ['rock', 'paper', 'scissors'];//array for move options
    const startGameBtn = document.getElementById('start-button');//contains start btn
    const gameIntro = document.querySelector('.intro');//contains intro text container
    const choiceBtns = document.querySelectorAll('.choiceBtns');//contains nodeList of move buttons
    const choiceBtnContainer = document.querySelector('.game-buttons');//containers move button container
    const restartGameBtnContainer = document.querySelector('.restart-button-container');//contains restart button container
    const restartGameBtn = document.getElementById('restart-button');//contains restart button
    
    const gameDetailsContainer = document.querySelector('.game-details');//contains container for round results text
    const roundNum = document.getElementById('round-num');//contains node for round number display
    const roundMoves = document.getElementById('round-moves');//contains node for information on moves made
    const roundSUmmary = document.getElementById('round-summary');//contains node for description of the round
    const roundScore = document.getElementById('round-score');//contains node for display running score

    const endGameTextContainer = document.querySelector('.end-game-text');//container for end game text display
    const endGameTitle = document.getElementById('end-game-title');// node for end game banner 'game over'
    const endGameScore = document.getElementById('end-game-score');// node for end game score

    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    let roundWinnerId;

//Add event listener to start button which, when clicked,
//displays move buttons, restart button and game intro text

    startGameBtn.addEventListener('click', (e) => { 
        choiceBtnContainer.classList.remove('hidden');
        startGameBtn.classList.add('hidden');
        restartGameBtnContainer.classList.remove('hidden');
        gameIntro.classList.remove('hidden')
        
       })

//Add event listener to restart button which when clicked reloads the page

       restartGameBtn.addEventListener('click', () => {
        document.location.reload();
       })

    //create function to choose move option for computer
    function getComputerChoice() {  

        let computerChoice = computerMoves[Math.floor(Math.random() * computerMoves.length)];
        return computerChoice;
    }

    //function which will run an endGame scenario if variable 'round'  = x (num)
    function gameEnd(round) {
       
        if (round == 5) {
            
            endGameTextContainer.classList.remove('.hidden');//display end game text
            endGameTextContainer.classList.add('.end-game-display');
            
            choiceBtns.forEach(btn => {
                btn.disabled = true;//disable move buttons
                btn.classList.add('hidden');
            });
            
            if (playerScore > computerScore) {
                endGameTitle.textContent = 'GAME OVER!'; // run if player wins
                endGameScore.setAttribute('style', 'white-space: pre;')
                endGameScore.textContent = 
                `YOU WIN\r\nYOUR SCORE: ${playerScore}  COMPUTER SCORE: ${computerScore}`;

            } else if (computerScore > playerScore) {
                endGameTitle.textContent = 'GAME OVER!'; // run if computer wins
                endGameScore.setAttribute('style', 'white-space: pre;');
                endGameScore.textContent = 
                `COMPUTER WINS\r\nCOMPUTER SCORE: ${computerScore}  YOUR SCORE: ${playerScore}`;

            } else {
                endGameTitle.textContent = 'GAME OVER!'; // run if tie
                endGameScore.setAttribute('style', 'white-space: pre;')
                endGameScore.textContent = 
                `GAME IS A TIE\r\nYOUR SCORE: ${computerScore}  COMPUTER SCORE: ${playerScore}`;
            }
            return
        }
    }

    //function which adds to the score of the round winner and displays round information accordingly
    function chooseWinner(playerSelection, computerSelection, roundWInnerId) {
        
        if (roundWInnerId === 'player'){
            playerScore += 1; // if roundWInnerId == 'player' player wins

        roundMoves.textContent = 
        `YOU PLAYED: ${playerSelection} COMPUTER PLAYED: ${computerSelection}`;

        roundSUmmary.textContent = 
        `You win this round: ${playerSelection} beats ${computerSelection}`;

        roundScore.textContent = 
        `SCORE | YOU: ${playerScore} COMPUTER: ${computerScore}`;

        gameEnd(round);

        }

        else if (roundWInnerId == 'computer'){
            computerScore += 1; // if roundWinnerId == 'computer' computer wins

        roundMoves.textContent = 
        `YOU PLAYED: ${playerSelection} COMPUTER PLAYED: ${computerSelection}`;

        roundSUmmary.textContent = 
        `You lose this round: ${computerSelection} beats ${playerSelection}`;

        roundScore.textContent = 
        `SCORE | YOU: ${playerScore} COMPUTER: ${computerScore}`;

        gameEnd(round);

        }
    }

    function playRound(playerSelection, computerSelection) {   //create function to run a round
       //if/ if else statements used to determine round outcome depending on computer and player inputs
        roundMoves.textContent = 
        `YOU PLAYED: ${playerSelection} COMPUTER PLAYED: ${computerSelection}`;

        if (playerSelection === computerSelection) {
            //will only run if player and computer chose the same option between rock, paper and scissors
            roundSUmmary.textContent = 
            'Invalid round: Nobody wins this one!';

            roundScore.textContent = 
            `SCORE | YOU: ${playerScore} COMPUTER: ${computerScore}`;

            gameEnd(round);
        }

        if (playerSelection === 'rock' && computerSelection === 'paper') {
             roundWinnerId = 'computer';
            chooseWinner(playerSelection, computerSelection, roundWinnerId);
            return computerScore;

        } else if (playerSelection === 'paper'
         && computerSelection === 'rock') {
            roundWinnerId = 'player'
            chooseWinner(playerSelection, computerSelection, roundWinnerId);
            return playerScore;

        } else if (computerSelection === 'scissors'
         && playerSelection === 'paper') {
            roundWinnerId = 'computer';
            chooseWinner(playerSelection, computerSelection, roundWinnerId);
            return computerScore;

        } else if (playerSelection === 'scissors'
         && computerSelection === 'paper') {
            roundWinnerId = 'player';
            chooseWinner(playerSelection, computerSelection, roundWinnerId);
            return playerScore;

        } else if (computerSelection === 'rock'
         && playerSelection === 'scissors') {
            roundWinnerId = 'computer';
            chooseWinner(playerSelection, computerSelection, roundWinnerId);
            return computerScore;

        } else if (playerSelection === 'rock'
         && computerSelection === 'scissors') {
            roundWinnerId = 'player';
            chooseWinner(playerSelection, computerSelection, roundWinnerId);
            return playerScore;
        }
    }

    function game() {   //create function to start game

            choiceBtns.forEach(btn => btn.addEventListener('click', (e) => {
                gameIntro.classList.add('hidden')
            round++;
            roundNum.textContent = `ROUND: ${round}`;
            gameDetailsContainer.classList.remove('hidden');
            playRound(e.target.id, getComputerChoice());
        }));
    }

    game();










