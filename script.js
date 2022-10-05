
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

    startGameBtn.addEventListener('click', (e) => { 
        choiceBtnContainer.classList.remove('hidden');
        startGameBtn.classList.add('hidden');
        restartGameBtnContainer.classList.remove('hidden');
        gameIntro.classList.remove('hidden')
       })

       restartGameBtn.addEventListener('click', () => {
        document.location.reload();
       })

    function getComputerChoice() {  
        let computerChoice = computerMoves[Math.floor(Math.random() * computerMoves.length)];
        return computerChoice;
    }

    function gameEnd(round) {
       
        if (round == 5) {
            //display end game text
            endGameTextContainer.classList.remove('.hidden');
            endGameTextContainer.classList.add('.end-game-display');
            
            choiceBtns.forEach(btn => {
                btn.disabled = true;//disable move buttons
                btn.classList.add('hidden');
            });
            
            if (playerScore > computerScore) {
                //run if player wins
                endGameStatus(); 
                endGameScore.textContent = 
                `YOU WIN\r\nYOUR SCORE: ${playerScore}  COMPUTER SCORE: ${computerScore}`; 

            } else if (computerScore > playerScore) {
                // run if computer wins
                endGameStatus() 
                endGameScore.textContent = 
                `COMPUTER WINS\r\nCOMPUTER SCORE: ${computerScore}  YOUR SCORE: ${playerScore}`;

            } else {
                //run if tie
                endGameStatus();
                endGameScore.textContent = 
                `GAME IS A TIE\r\nYOUR SCORE: ${computerScore}  COMPUTER SCORE: ${playerScore}`;
            }
            return
        }
    }

    function endGameStatus(){
        endGameTitle.textContent = 'GAME OVER!'; 
        endGameScore.setAttribute('style', 'white-space: pre;');
    }

    function chooseWinner(playerSelection, computerSelection, roundWInnerId) {
        //Adds to score of roundWinner
        if (roundWInnerId === 'player'){

            playerScore += 1; 
            roundMoves.textContent = 
            `YOU PLAYED: ${playerSelection} COMPUTER PLAYED: ${computerSelection}`;
            roundSUmmary.textContent = 
            `You win this round: ${playerSelection} beats ${computerSelection}`;
            roundScore.textContent = 
            `SCORE | YOU: ${playerScore} COMPUTER: ${computerScore}`;

            gameEnd(round);
            
        } else if (roundWInnerId == 'computer'){

            computerScore += 1;
            roundMoves.textContent = 
            `YOU PLAYED: ${playerSelection} COMPUTER PLAYED: ${computerSelection}`;
            roundSUmmary.textContent = 
            `You lose this round: ${computerSelection} beats ${playerSelection}`;
            roundScore.textContent = 
            `SCORE | YOU: ${playerScore} COMPUTER: ${computerScore}`;

            gameEnd(round);
        }
    }

    function playRound(playerSelection, computerSelection) {   
        roundMoves.textContent = 
        `YOU PLAYED: ${playerSelection} COMPUTER PLAYED: ${computerSelection}`;

        if (playerSelection === computerSelection) {
            //if playerSelection === computerSelection
            roundSUmmary.textContent = 
            'Round is a tie: Nobody wins this one!';
            roundScore.textContent = 
            `SCORE | YOU: ${playerScore} COMPUTER: ${computerScore}`;
            gameEnd(round);

        } 
        else { 
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
    }

    function game() {   
            choiceBtns.forEach(btn => btn.addEventListener('click', (e) => {
            gameIntro.classList.add('hidden');
            round++;
            roundNum.textContent = `ROUND: ${round}`;
            gameDetailsContainer.classList.remove('hidden');
            playRound(e.target.id, getComputerChoice());
        }));
    }

    game();










