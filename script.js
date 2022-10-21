
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
console.log(playerSelection) 


let compSelection = getComputerChoice()
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
console.log(compSelection)


function playRound() {
    if (playerSelection.match(/^rock$/i) && compSelection.match(/^scissors$/i)) {
        //player win comp lose
    } else if (playerSelection.match(/^rock$/i) && compSelection.match(/^paper$/i)) {
        //comp win player lose
    } 
}