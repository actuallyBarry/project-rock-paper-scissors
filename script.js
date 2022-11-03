
let playerSelection;
function getPlayerChoice() {
    let playerChoice = prompt('choose Rock, Paper or Scissors!', 'rock');
    if (playerChoice.match(/^(rock|paper|scissors)$/i)) {
        // return playerChoice;
        playerSelection = playerChoice;
    } else {
        alert('invalid input');
        getPlayerChoice();
    }
    // console.log(`You chose ${playerSelection}.`) 
}

let compSelection;
function getComputerChoice() {
    let compChoice;
    const randomNum = Math.random()*3;
    if (randomNum < 1) {
        compChoice = 'Rock'
    } else if (randomNum < 2) {
        compChoice = 'Paper'
    } else {
        compChoice = 'Scissors'
    }
    compSelection = compChoice;
    // console.log(`Computer chose ${compSelection}.`);
}

let comp = 0;
let player = 0;
function playRound() {
    getPlayerChoice();
    getComputerChoice();

    if (playerSelection.toLowerCase() ==='rock' && compSelection.toLowerCase() ==='paper') {
        //comp win player lose
        console.log(`You Lose! Paper beats Rock ${++comp} ${player}`)
    } else if (playerSelection.match(/^paper$/i) && compSelection.match(/^scissors$/i)) {
        //comp win player lose
        console.log(`You Lose! Scissors beat Paper ${++comp} ${player}`)
    } else if (playerSelection.match(/^scissors$/i) && compSelection.match(/^rock$/i)) {
        //comp win player lose
        console.log(`You Lose! Rock beats Scissors ${++comp} ${player}`)
    } else if (playerSelection.toLowerCase() === compSelection.toLowerCase()) {
        console.log(`It\'s a tie! Try again. ${comp} ${player}`)
    } else {
        //player win comp lose
        console.log(`You Win! ${playerSelection} beats ${compSelection} ${comp} ${++player}`)
    } 
}


function game() {
    while (comp < 5 && player < 5) {
        playRound();
    }
    if (comp === 5) {
        console.log(`computer won the game. go suck a sausage!`)
    } else /*if (player === 5)*/ {
        console.log(`You Won The Game. way to go`)
    } 
}
// game();