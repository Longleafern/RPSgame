const compEl = document.getElementById("computer-choice")
const scoreEl = document.getElementById("score-box")
const cScoreEl = document.getElementById("computer-score")
let outcomeEl = document.getElementById("outcome")
let rockEl = document.getElementById('one')
let paperEl = document.getElementById('two')
let scissorsEl = document.getElementById('three')
let pScore = 0
let cScore = 0




rockEl.onclick = function play() {
    game("Rock", computerSelection())
}
paperEl.onclick = function play() {
    game("Paper", computerSelection())

}
scissorsEl.onclick = function play() {
    game("Scissors", computerSelection())

}

function playerSelection(choice) {  // allows user to pick using prompt
   x = choice
    return x
  };
  

function computerSelection() {
    let selector = (Math.floor(Math.random() *3) + 1)
    if (selector === 1) return "Rock", compEl.textContent = "Rock"
    if (selector === 2) return "Paper", compEl.textContent = "Paper"
    if (selector === 3) return "Scissors", compEl.textContent = "Scissors"
    
}

function scoreCheck () {
    if (pScore === 5) {
        outcomeEl.textContent = "You have defeated the computer! Restart Browser to Play Again."
        rockEl.onclick = ``
        paperEl.onclick = ``
        scissorsEl.onclick = ``

    } else if (cScore === 5) {
        outcomeEl.textContent = "You have failed to defeat the computer! Restart Browser to Play Again."
        rockEl.onclick = ``
        paperEl.onclick = ``
        scissorsEl.onclick = ``
    } else {
    }
}




function game (player, computer) {
        //console.log(player)
       // console.log(computer)
//console.log(`The Computer chose ${computer}`)



if (player === "Rock" && computer === "Scissors") {
    outcomeEl.textContent = "You win! Rock beats Scissors" 
    pScore++
 } else if (player === "Scissors" &&  computer == "Paper") {
      outcomeEl.textContent = "You win! Scissors beats Rock!"
      pScore++

 } else if (player === "Paper" && computer === "Rock") {
    outcomeEl.textContent = "You win! Paper beats Rock!" 
    pScore++

} else if (player === computer) {
       outcomeEl.textContent = "You tied! Try Again"  
       
} else {
       outcomeEl.textContent = `You Lose! ${computer} beats ${player}` 
       cScore++ 
    } 
    cScoreEl.textContent = `${cScore}`
    scoreEl.textContent = `${pScore}`
    scoreCheck()
};


//function game (player, computer) {
    //console.log(player)
   // console.log(computer)
//console.log(`The Computer chose ${computer}`)
//if (player === "Rock" && computer === "Scissors") {
//console.log( "You win! Rock beats Scissors" )
//} else if (player === "Scissors" &&  computer == "Paper") {
//  console.log( "You win! Scissors beats Rock!")
//} else if (player === "Paper" && computer === "Rock") {
// console.log( "You win! Paper beats Rock!" )
//  } else if (player === computer) {
//    console.log( "You tied! Try Again" )   
//} else {
//   console.log( `You Lose! ${computer} beats ${player}` )
//} 
// };









