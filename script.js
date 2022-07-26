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


const computerMoves = ['rock', 'paper', 'scissors']; //array for move options

let playerScore = 0;
let computerScore = 0;
let player;
let computer;



function getComputerChoice(){  //create function to choose move option for computer

    let computerChoice = computerMoves[Math.floor(Math.random() * computerMoves.length)];
    return computerChoice;
}



function playRound (playerSelection, computerSelection){   //create function to run a round

//game logic//
    if (playerSelection === 'rock' && computerSelection === 'paper'){

        console.log(`PLAYER: ${playerSelection}  COMPUTER: ${computerSelection}`);
        console.log('Computer wins this round: paper beats rock!');
        computerScore += 1;
        console.log(`SCORE | PLAYER: ${playerScore} COMPUTER: ${computerScore}`)
        return computerScore;

    } else if (playerSelection === 'paper' && computerSelection === 'rock'){

        console.log(`PLAYER: ${playerSelection}  COMPUTER: ${computerSelection}`);
        console.log('Player wins this round: paper beats rock');
        playerScore += 1;
        console.log(`SCORE | PLAYER: ${playerScore} COMPUTER: ${computerScore}`);
        return playerScore;

    } else if (computerSelection === 'scissors' && playerSelection === 'paper'){

        console.log(`PLAYER: ${playerSelection}  COMPUTER: ${computerSelection}`);
        console.log('Computer wins this round: scissors beats paper!');
        computerScore += 1;
        console.log(`SCORE | PLAYER: ${playerScore} COMPUTER: ${computerScore}`);
        return computerScore;

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {

        console.log(`PLAYER: ${playerSelection}  COMPUTER: ${computerSelection}`);
        console.log('Player wins this round: scissors beats paper!');
        playerScore += 1;
        console.log(`SCORE | PLAYER: ${playerScore} COMPUTER: ${computerScore}`);
        return playerScore;

    } else if (computerSelection === 'rock' && playerSelection === 'scissors'){

        console.log(`PLAYER: ${playerSelection}  COMPUTER: ${computerSelection}`);
        console.log('Computer wins this round: rock beats scissors!');
        computerScore += 1;
        console.log(`SCORE | PLAYER: ${playerScore} COMPUTER: ${computerScore}`);
        return computerScore;
        

    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log(`PLAYER: ${playerSelection}  COMPUTER: ${computerSelection}`);
        console.log('Player wins this round: rock beats scissors!');
        playerScore += 1;
        console.log(`SCORE | PLAYER: ${playerScore} COMPUTER: ${computerScore}`);
        return playerScore;
        
    } else {
        console.log(`PLAYER: ${playerSelection}  COMPUTER: ${computerSelection}`);
        console.log('Invalid round: Nobody wins this one!');
        console.log(`SCORE | PLAYER: ${playerScore} COMPUTER: ${computerScore}`);
        
        
    }
}

function checkValidInput(){ 
//Run's if player gives unrecognised input until recognised input is provided
    
    player;
        
            if (player == 'rock' || player == 'paper' || player == 'scissors') {

                return player
                
                
            } else {
                while (player !== 'rock' || player !== 'paper' || player !== 'scissors') {
                    alert('Please enter a valid value');
                 player = prompt('Choose between rock, paper or scissors and type your choice below', '');
                  player = player.toLowerCase(); //make player input case insensitive;
                if (player == 'rock' || player == 'paper' || player == 'scissors') {
                    break;
                }
                }
            }
               
        
         
    
}

function game() {   //create function to start game
    
   for (i = 1; i < 6; i++){
     player = prompt('Choose between rock, paper or scissors and type your choice below', '');
     player = player.toLowerCase(); //make player input case insensitive;
     console.log(player);
     checkValidInput();
     
     computer = getComputerChoice();
     console.log(' ')
     console.log(`********ROUND_${i}********`);
     
    playRound(player, computer);
   }

   console.log(' ');

  if (playerScore > computerScore){
    
    console.log('********GAME OVER!********');
    console.log(`PLAYER WINS | SCORE: ${playerScore} - ${computerScore}`);
    
  } else if (computerScore > playerScore){
    console.log('********GAME OVER!********');
    console.log(`COMPUTER WINS | SCORE: ${computerScore} - ${playerScore}`);

  } else {
    console.log('********GAME OVER!********');
    console.log(`GAME IS A TIE | SCORE: ${computerScore} - ${playerScore}`);
  }
   
}

game();







