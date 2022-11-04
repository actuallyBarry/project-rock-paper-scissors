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
const result = document.querySelector('#result');

function playRound(playerSelection) {
    getComputerChoice();

    if (playerSelection ==='rock' && compSelection ==='paper' || 
    playerSelection === 'paper' && compSelection.match(/^scissors$/i) || 
    playerSelection === 'scissors' && compSelection.match(/^rock$/i)) {
        //comp win player lose
        result.innerHTML = "<br>You Lose! " + playerSelection + " beats " + compSelection + "<br>Computer's score: " + ++comp + "<br>Your score: " + player
        if (comp === 5) {
            comp = 0;
            player = 0;
            result.innerHTML += "<br>Computer won the game."
        }
    } else if (playerSelection === compSelection) {
        result.textContent = `You both chose ${compSelection}. It's a tie! Try again. Computer's score: ${comp} Your score: ${player}`

    } else {
        //player win comp lose
        result.textContent = `Computer chose ${compSelection}. ${playerSelection} beats ${compSelection}. You Win! Computer's score: ${comp} Your score: ${++player}`
        if (player === 5) {
            comp = 0;
            player = 0;
            result.textContent += ` You Won The Game.`
        }
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