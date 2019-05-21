let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choice = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choice[randomNumber]
}

function convertToWord(letter){
    if (letter === 'r') return 'Rock';
    else if (letter === 's') return 'Scissors';
    return 'Paper'
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + ' beats ' + convertToWord(computerChoice);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + ' loses to ' + convertToWord(computerChoice);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + ' equal ' + convertToWord(computerChoice);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':{
            win(userChoice, computerChoice);
            break;
        }
        case 'rp':
        case 'sr':
        case 'ps':{
            lose(userChoice, computerChoice);
            break;
        }
        case 'rr':
        case 'ss':
        case 'pp':{
            draw(userChoice, computerChoice);
            break;
        }
    }
}
function main() {
    rock_div.addEventListener('click', function () {
        game('r')
    });
    paper_div.addEventListener('click', function () {
        game('p')
    });
    scissors_div.addEventListener('click', function () {
        game('s')
    });
}
main();