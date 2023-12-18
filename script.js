// console.log("Hello world!")

const choiceArray = ["rock", "paper", "scissors"]

function botChoice() {
    var botC = Math.floor(Math.random() * 3);
    return choiceArray[botC];
}

function playRound() {
    const userChoice = prompt("Enter rock-paper or scissors").toLowerCase();
    // console.log(userChoice);
    var bot = botChoice();
    console.log(bot, userChoice);
    if (bot === "rock") {
        if (userChoice === "rock") return 0;
        if (userChoice === "paper") return -1;
        if (userChoice === "scissors") return 1;
    }
    else if (bot === "paper") {
        if (userChoice === "paper") return 0;
        if (userChoice === "rock") return 1;
        if (userChoice === "scissors") return -1;
    }
    else {
        if (userChoice === "rock") return -1;
        if (userChoice === "paper") return 1;
        if (userChoice === "scissors") return 0;
    }
}

function playGame() {
    var counter = 0, ps = 0, bs = 0;
    var c;
    while (counter <= 4) {
        if (c = playRound()) {
            counter++;
            bs += c;
        }
    }
    (bs < 0) ? console.log("Player wins") : console.log("Computer wins");
}

playGame();