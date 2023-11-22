const buttons = document.querySelectorAll(".button");
const gameResult = document.querySelector(".game");
let playerResult = document.querySelector(".player_result");
let computerResult = document.querySelector(".computer_result");

buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        playerSelection = e.target.textContent;
        game();
    });
})

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return "Rock"
    }else if(choice === 1){
        return "Paper"
    }else{
        return "Scissors"
    }
}


let playerSelection = 'rock';
let computerSelection = 'rock'; 

function playRound(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection);
    if(playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock'){ 
        gameResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        playerResult.textContent = `Player - ${playerSelection}`;
        computerResult.textContent = `Computer - ${computerSelection}`;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }else if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
        gameResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerResult.textContent = `Player - ${playerSelection}`;
        computerResult.textContent = `Computer - ${computerSelection}`;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }else{
        gameResult.textContent = "Draw!";
        playerResult.textContent = `Player - ${playerSelection}`;
        computerResult.textContent = `Computer - ${computerSelection}`;
        return "Draw!";
    }
}


function game(){
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
}




