const buttons = document.querySelectorAll(".button");

buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        playerSelection = e.target.innerText;
        console.log(playerSelection);
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
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }else if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }else{
        return "Draw!";
    }
}


function game(){
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
}




