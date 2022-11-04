function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)];
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => playRound(button.value)));
const result = document.querySelector('#result');

let comp = 0;
let player = 0;
function playRound(plyrChoice) {
    let compSelection = getCompChoice();

    if (plyrChoice ==='rock' && compSelection ==='paper' || 
    plyrChoice === 'paper' && compSelection.match(/^scissors$/i) || 
    plyrChoice === 'scissors' && compSelection.match(/^rock$/i)) {
        //comp win player lose
        result.innerHTML = "<br>You Lose! " + plyrChoice + " beats " + compSelection + "<br>Computer's score: " + ++comp + "<br>Your score: " + player
        if (comp === 5) {
            comp = 0;
            player = 0;
            result.innerHTML += "<br>Computer won the game."
        }
    } else if (plyrChoice === compSelection) {
        result.textContent = `You both chose ${compSelection}. It's a tie! Try again. Computer's score: ${comp} Your score: ${player}`

    } else {
        //player win comp lose
        result.textContent = `Computer chose ${compSelection}. ${plyrChoice} beats ${compSelection}. You Win! Computer's score: ${comp} Your score: ${++player}`
        if (player === 5) {
            comp = 0;
            player = 0;
            result.textContent += ` You Won The Game.`
        }
    } 
}
