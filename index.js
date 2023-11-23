const buttons = document.querySelectorAll(".button");
const gameResult = document.querySelector(".game");
let playerResult = document.querySelector(".player_result");
let computerResult = document.querySelector(".computer_result");
let playerChoice = document.querySelector(".player_choice");
let computerChoice = document.querySelector(".computer_choice");

buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        playerSelection = e.target.textContent;
        game();
    });
})

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return "✊🏻";
    }else if(choice === 1){
        return "🖐🏻";
    }else{
        return "✌🏻";
    }
}


let playerSelection = 'rock';
let computerSelection = 'rock';
let player = 0;
let computer = 0; 

function playRound(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection);
    if(playerSelection === '✊🏻' && computerSelection === '🖐🏻' || playerSelection === '🖐🏻' && computerSelection === '✌🏻' || playerSelection === '✌🏻' && computerSelection === '✊🏻'){ 
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        gameResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        ++computer;
        playerResult.textContent = `${player}`;
        computerResult.textContent = `${computer}`;
        
        
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }else if(playerSelection === '✊🏻' && computerSelection === '✌🏻' || playerSelection === '🖐🏻' && computerSelection === '✊🏻' || playerSelection === '✌🏻' && computerSelection === '🖐🏻'){
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        gameResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        ++player;
        playerResult.textContent = ` ${player}`;
        computerResult.textContent = `${computer}`;
        
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }else{
        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;
        gameResult.textContent = "Draw!";
        playerResult.textContent = `${player}`;
        computerResult.textContent = `${computer}`;
        return "Draw!";
    }
}



function game(){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    playRound(playerSelection, computerSelection);

    if(player === 5){
        gameResult.textContent = `You won ${player} games. So you are the winner.`;
        buttons.forEach((item) => {
            item.disabled = true;
        });

    }else if(computer === 5){
        gameResult.textContent = `Computer won ${computer} games. So Computer is the winner.`;
        buttons.forEach((item) => {
            item.disabled = true;
        });
        
    }
    
    
      
}




