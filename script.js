const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => playRound(button.value)));

let compSelection;
function getComputerChoice() {
    let compChoice;
    const randomNum = Math.random()*3;
    if (randomNum < 1) {
        compChoice = 'rock'
    } else if (randomNum < 2) {
        compChoice = 'paper'
    } else {
        compChoice = 'scissors'
    }
    compSelection = compChoice;
    // console.log(`Computer chose ${compSelection}.`);
}

let comp = 0;
let player = 0;
function playRound(playerSelection) {
    // getPlayerChoice();
    getComputerChoice();

    if (playerSelection ==='rock' && compSelection ==='paper' || 
    playerSelection === 'paper' && compSelection.match(/^scissors$/i) || 
    playerSelection === 'scissors' && compSelection.match(/^rock$/i)) {
        //comp win player lose
        console.log(`You Lose! ${playerSelection} beats ${compSelection} ${++comp} ${player}`)

    } else if (playerSelection === compSelection) {
        console.log(`It\'s a tie! Try again. ${comp} ${player}`)

    } else {
        //player win comp lose
        console.log(`You Win! ${playerSelection} beats ${compSelection} ${comp} ${++player}`)
    } 
}


/*
function game() {
    while (comp < 5 && player < 5) {
        playRound();
    }
    if (comp === 5) {
        console.log(`computer won the game. go suck a sausage!`)
    } else // if (player === 5)
    {
        console.log(`You Won The Game. way to go`)
    } 
}
game();*/