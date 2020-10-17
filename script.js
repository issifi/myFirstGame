
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
    // this line is for debugin
     console.log("= = = = = ="+playerSelection);
        // if player chos rock
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            alert ('you lost. rock > paper')
        } else if (computerSelection === 'SCISSORS') {
            alert ('you wins. rock > scissors')
        }else if (computerSelection == 'ROCK') {
            alert ('egal ')
        }
        // in case of player chos paper
    } else if (playerSelection === 'PAPER') {

        if (computerSelection === 'PAPER') {
            alert ('egal')
        } else if (computerSelection === 'SCISSORS') {
            alert ('you lost. paper < scissors')
        }else if (computerSelection == 'ROCK') {
            alert ('you wins. paper > rock ')
        }
        // in case of player chos scissors
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'PAPER') {
            alert ('you wins. scissors > paper ')
        } else if (computerSelection === 'SCISSORS') {
            alert ('egal')
        }else if (computerSelection == 'ROCK') {
            alert( 'you lost. scissors < rock')
        }
    }
}
// triger function
function playGame() {
    // loop 5 time
    for (let index = 0; index < 5; index++) {
        playerSelection = prompt('enter a chose')
        playRound(playerSelection,computerPlay() )
    }
}
// set the function on the button


//const computerSelection = computerPlay()
//console.log(computerPlay());

