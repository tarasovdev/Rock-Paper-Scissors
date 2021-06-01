let userScore  =0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function draw(userChoice, computerChoice){
    console.log("It's draw!");
    result_p.innerHTML = userChoice + " don't beat " + computerChoice + ". It's draw!";
}


function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    console.log("User Win!");
    result_p.innerHTML = userChoice + " beat " + computerChoice + ". You win!";
}


function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    console.log("Computer Win!");
    result_p.innerHTML = userChoice + " beat " + computerChoice + ". You lose!";
}


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function checkMove(userChoice){
    const computerChoice = getComputerChoice();

    switch (userChoice+computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}


function main(){

    rock_div.addEventListener('click', function(){
        checkMove("rock");
    })
    
    paper_div.addEventListener('click', function(){
        checkMove("paper");
    })
    
    scissors_div.addEventListener('click', function(){
        checkMove("scissors");
    })
}

main();