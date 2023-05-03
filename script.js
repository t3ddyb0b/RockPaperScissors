let rl = require('readline');


const choicesArray = ['Rock', 'Paper', 'Scissors']
function randomizer(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function getComputerChoice(){
	const choice = randomizer(0,2)
	console.log(choicesArray[choice])
};


function playRound(computerSelection, playerSelection){
	
};

function game(){
	console.log("Hi! \n lets play Rock Paper Scissors!")

};

const computerSelection = getComputerChoice();
const playerSelection = prompt("Choose your weapon: \n * rock \n *paper \n *scissors");