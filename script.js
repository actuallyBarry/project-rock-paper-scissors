
let playerSelection = getPlayerChoice();
function getPlayerChoice() {
    let playerChoice = prompt('choose Rock, Paper or Scissors!', 'rock');
    if (playerChoice.match(/^(rock|paper|scissors)$/i)) {
        return playerChoice;
    } else {
        alert('invalid input');
        getPlayerChoice();
    }
}
console.log(`You chose ${playerSelection}.`) 

let compSelection = getComputerChoice();
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
    return compChoice;
}
console.log(`Computer chose ${compSelection}.`)


function playRound() {
    if (playerSelection.toLowerCase() ==='rock' && compSelection.toLowerCase() ==='paper') {
        //comp win player lose
        console.log("You Lose! Paper beats Rock")
    } else if (playerSelection.match(/^rock$/i) && compSelection.match(/^scissors$/i)) {
        //player win comp lose
        console.log("You Win! Rock beats Scissors")
    } else if (playerSelection.match(/^paper$/i) && compSelection.match(/^rock$/i)) {
        //player win comp lose
        console.log("You Win! Paper beats Rock")
    } else if (playerSelection.match(/^paper$/i) && compSelection.match(/^scissors$/i)) {
        //comp win player lose
        console.log("You Lose! Scissors beat Paper")
    } else if (playerSelection.match(/^scissors$/i) && compSelection.match(/^rock$/i)) {
        //comp win player lose
        console.log("You Lose! Rock beats Scissors")
    } else if (playerSelection.match(/^scissors$/i) && compSelection.match(/^paper$/i)) {
        //player win comp lose
        console.log("You Win! Scissors beat Paper")
    } else {
        console.log('It\'s a tie! Try again.')
    }
}
playRound();