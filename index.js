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

let computer = 0;
let playerSelection = 'rock';
let computerSelection = 'rock'; 

function playRound(playerSelection, computerSelection){
    if(playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock'){
        ++computer;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }else if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper'){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }else{
        return "Draw!";
    }
}


function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Type in your selection!").toLowerCase();
        computerSelection = 'rock';
        console.log(playRound(playerSelection, computerSelection));
    }
    if(computer >= 3){
        console.log("Computer Wins");
    }else{
        console.log("Player Wins");
    }
}




