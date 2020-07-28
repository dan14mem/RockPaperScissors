
      
      
        
//Variables used throughout the match. I chose to distinguish if it was the computer's output (compPaper) vs user's (paper) as it simplified other outputs.
const compPaper = "the computer chose paper.";
const compScissors = "the computer chose scissors.";
const compRock = "the computer chose rock.";
const paper = "You chose paper and ";
const scissors = "You chose scissors and ";
const rock = "You chose rock and ";
const win = " You win!";
const loss = " You lose!";
const draw = " It's a draw!";
const winner = document.querySelector('.winner')

let userScore = 0;
let compScore = 0;
let playerWin = computerWin = false;
//query selector to manipulate where the score is outputted on html
let compsScore = document.querySelector('.compsScore');
let playerScore = document.querySelector(`.userScore`);
//buttons
const buttons = document.querySelectorAll('img');
    const buttonRock = document.querySelector('#rock')
    const buttonScissors = document.querySelector('#scissors')
    const buttonPaper = document.querySelector('#paper')
    const buttonRockComp = document.querySelector('#compRock')
    const buttonPaperComp = document.querySelector('#compPaper')
    const buttonScissorsComp = document.querySelector('#compScissors')
    const resetButton = document.querySelector('.resetButton')
    
//variable declarations
let playOptions = ['You chose rock and ', 'You chose paper and ', 'You chose scissors and '];
let playerChoice = ""
let battleText = document.querySelector('.battleStatus');

    // This function generates the computer's selection.
    function computerSelection() {
        computerChoice = Math.floor(Math.random() * 3) +1;
            switch(computerChoice) {
                case 1: 
                    return compPaper;
                case 2: 
                    return compScissors;
                case 3: 
                    return compRock;
            }
        }
    // This section generates the user's selection. I used the promp function to create a dialogue box for the user to input it. I converted the user's input to lower case to reduce errors
function userSelection() {
    let userInput = document.querySelectorAll('button');
    playerChoice = userInput.forEach((button) => {
        button.addEventListener('click', () => {
            return button.id
        });
    });
}
    
function textOutput() {
    function yourScoreTextOutput(){
        playerScore.textContent = "Score: " + userScore.toString();  
    }
    function computerScore(){ 
        compsScore.textContent =  "Score: " + compScore.toString();
    };
    yourScoreTextOutput()
    computerScore()
}

    // This function plays each round. This will spit out the result of each round. 
function playRound(playerChoice, computerChoice) {
    //These if statements determine the winner (computer or user)
    if (playerChoice == playOptions[2] && computerChoice == compPaper || 
        playerChoice == playOptions[1] && computerChoice == compRock ||
        playerChoice == playOptions[0] && computerChoice == compScissors) {
            return matchWin()
    }
    if (playerChoice == playOptions[0] && computerChoice == compPaper ||
        playerChoice == playOptions[1] && computerChoice == compScissors ||
        playerChoice == playOptions[2] && computerChoice == compRock) {
            return matchLose()
        } else {
            return matchDraw()
        }
        
   
        // These function's create the output, determined by the if statements above
    function matchWin() {                
        userScore++;
            battleText.textContent =playerChoice + computerChoice + win;
    }              
    function matchLose()   {
        compScore++;
        battleText.textContent = playerChoice + computerChoice + loss;
    }      
    function matchDraw() {
        battleText.textContent = playerChoice + computerChoice + draw;
    }
}
// this function removes the buttons 
function removeButtons() {
    buttonRock.parentNode.removeChild(buttonRock);
    buttonScissors.parentNode.removeChild(buttonScissors);
    buttonPaper.parentNode.removeChild(buttonPaper);
    buttonRockComp.parentNode.removeChild(buttonRockComp)
    buttonPaperComp.parentNode.removeChild(buttonPaperComp);
    buttonScissorsComp.parentNode.removeChild(buttonScissorsComp);
}
//This function creates the loop which determines that the match is 5 rounds. It also outputs the score after each round
function playGame(userScore, compScore) {     
    if (userScore >=5) {
        const compWon = document.createElement('IMG')
        compWon.setAttribute("src", "person.jpeg")
        compWon.setAttribute("width", "350");
        compWon.setAttribute("height", "350");
        winner.appendChild(compWon);
        const buttonReset = document.createElement('button')
        buttonReset.setAttribute("type", "button");
        buttonReset.textContent = "Play Again?"
        resetButton.appendChild(buttonReset)
        removeButtons()    
    }
    if(compScore >=5) {
        const compWon = document.createElement('IMG')
        compWon.setAttribute("src", "computer.jpg")
        compWon.setAttribute("width", "350");
        compWon.setAttribute("height", "350");
        winner.appendChild(compWon);
        const buttonReset = document.createElement('button')
        buttonReset.setAttribute("type", "button");
        buttonReset.textContent = "Play Again?"
        resetButton.appendChild(buttonReset);
        removeButtons()
    }
}
 //playing the game
buttonRock.addEventListener('click', () => {
    playerChoice = playOptions[0]
    playRound(playerChoice, computerSelection());
    playGame(userScore, compScore)
});
buttonPaper.addEventListener('click', () => {
    playerChoice = playOptions[1]
    playRound(playerChoice, computerSelection());
    textOutput()
    playGame(userScore, compScore)
});
buttonScissors.addEventListener('click', () => {
    playerChoice = playOptions[2]
    playRound(playerChoice, computerSelection());
    textOutput()
    playGame(userScore, compScore)
});
resetButton.addEventListener('click', () => {
    location.reload();
});