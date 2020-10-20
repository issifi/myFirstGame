// score save
let computerScor = 0;
let playerScor = 0;
let round = 0;
// computerPlay function that return randomly 'rock', 'paper', or 'scissors'
function computerPlay() {
    let c = Math.floor(Math.random()*12)+1
    if (c <= 4) {
        return 'ROCK';
    } else if (c <= 8 && c > 4) {
        return 'PAPER';
    } else if (c > 8 && c <= 12) {
        return 'SCISSORS';
    } 

}

// playRoud function that play one round eatsh time it call with two parameters playerSelection and computerSelection
// return the result of playRound
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
        // if player chos rock
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            document.getElementById("userScore").innerHTML = " 0 ";
            document.getElementById("computerScore").innerHTML = " 1 ";
            document.getElementById("result").innerHTML = "You Lose! Paper beats Rock";
            computerScor += 1;
            // alert ('you lost. rock > paper')
        } else if (computerSelection === 'SCISSORS') {
            document.getElementById("userScore").innerHTML = " 1 ";
            document.getElementById("computerScore").innerHTML = " 0 ";
            document.getElementById("result").innerHTML = "You Win! Rock beats Scissors";
            playerScor += 1;
            // alert ('you wins. rock > scissors')
        }else if (computerSelection == 'ROCK') {
            document.getElementById("userScore").innerHTML = " 0 ";
            document.getElementById("computerScore").innerHTML = " 0 ";
            document.getElementById("result").innerHTML = " STRICK ";
            // alert ('egal ')
        }
        // in case of player chos paper
    } else if (playerSelection === 'PAPER') {

        if (computerSelection === 'PAPER') {
            document.getElementById("userScore").innerHTML = " 0 ";
            document.getElementById("computerScore").innerHTML = " 0 ";
            document.getElementById("result").innerHTML = " STRICK "
            // alert ('egal')
        } else if (computerSelection === 'SCISSORS') {
            document.getElementById("userScore").innerHTML = " 0 ";
            document.getElementById("computerScore").innerHTML = " 1 ";
            document.getElementById("result").innerHTML = "You Lose! Scissors beat Paper"
            computerScor += 1;
            // alert ('you lost. paper < scissors')
        }else if (computerSelection == 'ROCK') {
            document.getElementById("userScore").innerHTML = " 1 ";
            document.getElementById("computerScore").innerHTML = " 0 ";
            document.getElementById("result").innerHTML = "You Wine! Paper beat Rock"
            playerScor += 1;
            // alert ('you wins. paper > rock ')
        }
        // in case of player chos scissors
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'PAPER') {
            document.getElementById("userScore").innerHTML = " 1 ";
            document.getElementById("computerScore").innerHTML = " 0 ";
            document.getElementById("result").innerHTML = "You Wine! Scissors beat Paper";
            playerScor += 1;
            // alert ('you wins. scissors > paper ')
        } else if (computerSelection === 'SCISSORS') {
            document.getElementById("userScore").innerHTML = " 0 ";
            document.getElementById("computerScore").innerHTML = " 0 ";
            document.getElementById("result").innerHTML = " STRICK "; 
            // alert ('egal')
        }else if (computerSelection == 'ROCK') {
            document.getElementById("userScore").innerHTML = " 0 ";
            document.getElementById("computerScore").innerHTML = " 1 ";
            document.getElementById("result").innerHTML = "You Lose! Rock beat Scissors";
            computerScor += 1;
            //alert( 'you lost. scissors < rock')
        }
    }
    round += 1;
}
// get player selection

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let ps = button.id;
        playRound(ps, computerPlay());
        finalResult();
    } )
});

document.querySelector("#newGame").addEventListener('click',() => {
    resetScor();
    document.querySelector("#finalResult").textContent = '';
    newGame.style.cssText = "display : none;"
})

let newGame = document.getElementById("newGame");
function chowBtn() {
    newGame.style.cssText = "display : inline-block"
}

function resetScor() {
    round = 0;
    playerScor = 0;
    computerScor = 0;
    document.getElementById("userScore").innerHTML = "  ";
    document.getElementById("computerScore").innerHTML = "  ";
    document.getElementById("result").innerHTML = "Make a choice";
};
// who is the winer
function finalResult() {
    
    if(round === 5){
        if(playerScor > computerScor){
            document.querySelector("#finalResult").textContent = playerScor + " You win";
        }else{
            document.querySelector("#finalResult").textContent = computerScor +" You lose";
        }
        console.log("5 round")
        chowBtn();
    }

}