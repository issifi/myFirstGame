
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
            // alert ('you lost. rock > paper')
        } else if (computerSelection === 'SCISSORS') {
            document.getElementById("userScore").innerHTML = " 1 ";
            document.getElementById("computerScore").innerHTML = " 0 ";
            document.getElementById("result").innerHTML = "You Win! Rock beats Scissors";
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
            // alert ('you lost. paper < scissors')
        }else if (computerSelection == 'ROCK') {
            document.getElementById("userScore").innerHTML = " 1 ";
            document.getElementById("computerScore").innerHTML = " 0 ";
            document.getElementById("result").innerHTML = "You Wine! Paper beat Rock"
            // alert ('you wins. paper > rock ')
        }
        // in case of player chos scissors
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'PAPER') {
            document.getElementById("userScore").innerHTML = " 1 ";
            document.getElementById("computerScore").innerHTML = " 0 ";
            document.getElementById("result").innerHTML = "You Wine! Scissors beat Paper";
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
            //alert( 'you lost. scissors < rock')
        }
    }
}
// get player selection
function playerSelection(ps){
    playRound(ps,computerPlay())
}
// triger function
// function playGame() {
    // loop 5 time
    // for (let index = 0; index < 5; index++) {
        // playerSelection = prompt('enter a chose')
        // playRound(playerSelection,computerPlay() )
    // }
// }
// set the function on the button


//const computerSelection = computerPlay()
//console.log(computerPlay());

