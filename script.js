console.log("Hello world");

let playerScore = 0;
let computerScore = 0;

function gameStart() {

    function computerChoice() {
        let computerNumber = Math.floor(Math.random() * 100);
        if (computerNumber <= 33 ) {
            return "rock";
        }  else if ((computerNumber > 33) && (computerNumber <= 66)) {
            return "paper";
        } else {return "scissors";}
    }
    
    let computerResult = computerChoice();

    let start = window.prompt("Rock, paper or scissors?");
    let start2 = start.toLowerCase();
    if ((start2 == "rock") && (computerResult == "rock") ) {
        alert("Computer chooses rock. It's a tie");
        gameStart();
    }  else if ((start2 == "rock") && (computerResult == "paper") ) {
        alert("Computer chooses paper. You lose.");
        console.log("Computer chooses rock. You lose");
        computerScore += 1;
        console.log("Player score is " + playerScore + ". Computer score is " + computerScore);
        if (computerScore == 5) {
            alert("Game over. You lost. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
        } else if (playerScore == 5) {
            alert("Game over. You won. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
        } else {
            gameStart();
        }
    } else if ((start2 == "rock") && (computerResult == "scissors")) {
        alert("Computer chose scissors. You win.");
        console.log("Computer chose scissors. You win.");
        playerScore += 1;
        console.log("Player score is " + playerScore + ". Computer score is " + computerScore);
        if (computerScore == 5) {
            alert("Game over. You lost. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
        } else if (playerScore == 5) {
            alert("Game over. You won. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
        } else {
            gameStart();
        }
    } else if ((start2 == "paper") && (computerResult == "rock")) {
        alert("Computer chooses rock. You win");
        console.log("Computer chooses rock. You win");
        playerScore += 1;
        console.log("Player score is " + playerScore + ". Computer score is " + computerScore);
        if (computerScore == 5) {
            alert("Game over. You lost. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
        } else if (playerScore == 5) {
            alert("Game over. You won. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
        } else {
            gameStart();
        }
    } else if ((start2 == "paper") && (computerResult == "paper")) {
        alert("Computer chooses paper. It's a tie");
        console.log("Computer chooses paper. It's a tie");
        gameStart();
    } else if ((start2 == "paper") && (computerResult == "scissors")) {
        alert("Computer chooses scissors. You lose.")
        console.log("Computer chooses scissors. You lose.")
        computerScore += 1;
        console.log("Player score is " + playerScore + ". Computer score is " + computerScore);
        if (computerScore == 5) {
            alert("Game over. You lost. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
        } else if (playerScore == 5) {
            alert("Game over. You won. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
        } else {
            gameStart();
        }
    } else if ((start2 == "scissors") && (computerResult == "rock")) {
        alert("Computer chooses rock. You lose.");
        console.log("Computer chooses rock. You lose.");
        computerScore += 1;
        console.log("Player score is " + playerScore + ". Computer score is " + computerScore); 
        if (computerScore == 5) {
            alert("Game over. You lost. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
        } else if (playerScore == 5) {
            alert("Game over. You won. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
        } else {
            gameStart();
        }
    } else if ((start2 == "scissors") && (computerResult == "paper")) {
        alert("Computer choose paper. You win.");
        console.log("Computer choose paper. You win.");
        playerScore += 1;
        console.log("Player score is " + playerScore + ". Computer score is " + computerScore);
        if (computerScore == 5) {
            alert("Game over. You lost. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
        } else if (playerScore == 5) {
            alert("Game over. You won. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
        } else {
            gameStart();
        }
    } else if ((start2 == "scissors") && (computerResult == "scissors")) {
        alert("Computer chooses scissors. It's a tie.")
        gameStart();
    } else if (start2 != "rock" && start2 != "paper" && start2 != "scissors") {
        alert("Choose either rock, paper, or scissors.");
        gameStart();
    }
}

gameStart();

if (computerScore == 5) {
    alert("Game over. You lost. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
} else if (playerScore == 5) {
    alert("Game over. You won. Final score is: Computer score: " + computerScore + ". Player score: " + playerScore + ".")
} else {
    gameStart();
}