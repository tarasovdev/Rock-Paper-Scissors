let userScore  =0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function draw(){
    console.log("It's draw!");
}


function win(){
    userScore++;
    console.log("User Win!");
}


function lose(){
    computerScore++;
    console.log("Computer Win!");
}


function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function checkMove(userChoice){
    const computerChoice = getComputerChoice();

    switch (userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}


function main(){

    rock_div.addEventListener('click', function(){
        checkMove("r");
    })
    
    paper_div.addEventListener('click', function(){
        checkMove("p");
    })
    
    scissors_div.addEventListener('click', function(){
        checkMove("s");
    })
}

main();