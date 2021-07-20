function computerSelection() {
    const choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelect, computerSelect) {
    if(playerSelect === computerSelect) {
        return -1;
    }

    if(playerSelect === "Rock") {
        if(computerSelect === "Scissors") {
            return 1;
        }else {
            return 0;
        }
    }else if(playerSelect === "Scissors") {
        if(computerSelect === "Paper") {
            return 1;
        }else {
            return 0;
        }
    }else {
        if(computerSelect === "Rock") {
            return 1;
        }else {
            return 0;
        }
    }
}

function game(playerChoice) {
    let playerCount = 0;
    let computerCount = 0;
    while(playerCount < 5 && computerCount < 5) {
        let playerSelect = playerSelection();
    }
}
let playerCount = 0;
let computerCount = 0;

const buttons = document.querySelectorAll("button");

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click" ,() => {

        if(playerCount < 5 && computerCount < 5) {
            let playerSelect = button.id;
            let computerSelect = computerSelection();

            let temp = playRound(playerSelect,computerSelect);

            if(temp != -1) {
                playerCount += temp;
                computerCount += (1 - temp);
                document.querySelector(".player-counter").innerText = "Player Count : " + playerCount;
                document.querySelector(".computer-counter").innerText = "Computer Count: " + computerCount;
                document.querySelector(".player-image").firstElementChild.setAttribute("src","images/" + playerSelect + ".svg");
                document.querySelector(".computer-image").firstElementChild.setAttribute("src","images/" + computerSelect + ".svg");
            }else {
                document.querySelector(".player-image").firstElementChild.setAttribute("src","images/" + playerSelect + ".svg");
                document.querySelector(".computer-image").firstElementChild.setAttribute("src","images/" + computerSelect + ".svg");
            }
        }
        if(playerCount == 5) {
            alert("You Win!");
        }else if(computerCount == 5){
            alert("You Lose!");
        }
    });
});
