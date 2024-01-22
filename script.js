// console.log("Hello world!")

const choiceArray = ["rock", "paper", "scissors"]

var userScore=0, botScore=0;

function botChoice() {
    var botC = Math.floor(Math.random() * 3);
    return choiceArray[botC];
}

function playRound(userChoice) {
    // const userChoice = prompt("Enter rock-paper or scissors").toLowerCase();
    // console.log(userChoice);
    
    const bot = botChoice();
    
    console.log(bot, userChoice);
    
    if (bot === "rock") {
        if (userChoice === "rock") {
            return 0;
        }
        else if (userChoice === "paper") {
            userScore+=1;
            console.log(userScore)
        }
        else if (userChoice === "scissors") {
            botScore+=1;
        }
    }

    else if (bot === "paper") {
        console.log("bot option");
        if (userChoice === "paper") return 0;
        if (userChoice === "rock") botScore+=1;
        if (userChoice === "scissors") userScore+=1;
    }
    
    else {
        console.log("bot option");
        if (userChoice === "rock") userScore+=1;
        if (userChoice === "paper") botScore+=1;
        if (userChoice === "scissors") return 0;
    }
}

// function playGame() {
//     var counter = 0, ps = 0, bs = 0;
//     var c;
//     while (counter <= 4) {
//         if (c = playRound()) {
//             counter++;
//             bs += c;
//         }
//     }
//     (bs < 0) ? console.log("Player wins") : console.log("Computer wins");
// }

// playGame();

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

rock.addEventListener("click",()=>{playRound("rock")});
paper.addEventListener("click",()=>{playRound("paper")});
scissor.addEventListener("click",()=>{playRound("scissors")});

