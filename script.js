const rl = require('readline');
const prompt = require('prompt-sync')({sigint:true});

const choicesArray = ['rock', 'paper', 'scissors'];

let roundCounter = 0;
let playerScore = 0;
let computerScore = 0;

function randomizer(min, max){
	//returns a random number between 0 and 2
 	return Math.floor(Math.random() * (max - min + 1) + min);
}
function getComputerChoice(){
	// pick random element from the choices array
 	const choice = randomizer(0,2)
 	return(choicesArray[choice]);
 };
function screenText(){
	// 
	console.log(`Round: ${roundCounter + 1}`);
	console.log(`Choose your weapon:\n`)
	console.log('>>> Rock\n>>> Paper\n>>> Scissors\n')
}
function startOver(){
	//ask if user wants to start over, if yes, then yes, if no, then no, but if something else ask them again
	console.log('Wanna play again?(Y/N)')
	let response = prompt()
	if(response.toLowerCase() == "y" || response.toLowerCase() == 'yes'){
		roundCounter = 0;
		playerScore = 0;
		computerScore = 0;
		game()
	}else if(response.toLowerCase() == "n" || response.toLowerCase() == 'no'){
		console.log('thanks for playing!')
		return;
	}else if(response.toLowerCase() !== "y" || response.toLowerCase() !== 'yes' || response.toLowerCase() !== "n" || response.toLowerCase() !== 'no'){
		console.clear();
		console.log('incorrect input, please try again');
		startOver();
	}
}
function displayScores(playerScore, computerScore){
 	console.log(`\nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`)
 }
function displayComputerChoice(computerSelection){
 	console.log(`\fComputer chose ${computerSelection}!`)
 }
function playRound(computerSelection, playerSelection){
	//game logic, first find out what the player chose, then compare it to the computers choice
 	if(playerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "r"){
 		if(computerSelection == "paper"){
 			console.clear();
 			console.log(`You chose ${choicesArray[0]}!`)
 			displayComputerChoice(computerSelection);
 			console.log('Computer wins the round!')
 			roundCounter++;
 			return(computerScore++);
 		}
 		else if(computerSelection == "scissors"){
 			console.clear();
 			console.log(`You chose ${choicesArray[0]}!`)
 			displayComputerChoice(computerSelection);
 			console.log('You Win the Round!');
 			roundCounter++;
 			return(playerScore++);
 		}
 		else if(computerSelection == "rock"){
 			console.clear();
 			console.log(`You chose ${choicesArray[0]}!`)
 			displayComputerChoice(computerSelection);
 			console.log('Tie!')
 			roundCounter++;
 			return;
 		}
 	}

 	else if(playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "p"){
 		if(computerSelection == "paper"){
 			console.clear();
 			console.log(`You chose ${choicesArray[1]}!`)
 			displayComputerChoice(computerSelection);
 			console.log('Tie!');
 			roundCounter++;
 			return;
 		}
 		else if(computerSelection == "scissors"){
 			console.clear();
 			console.log(`You chose ${choicesArray[1]}!`)
 			displayComputerChoice(computerSelection)
 			console.log('Computer wins the round!')
 			roundCounter++;
 			return(computerScore++)
 		}
 		else if(computerSelection == "rock"){
 			console.clear();
 			console.log(`You chose ${choicesArray[1]}!`)
 			displayComputerChoice(computerSelection)
 			console.log('You Win the Round!');
 			roundCounter++;
 			return(playerScore++);
 		}
 	}

 	else if(playerSelection.toLowerCase() == "scissors" || playerSelection.toLowerCase() == "s"){
 		if(computerSelection == "paper"){
 			console.clear();
 			console.log(`You chose ${choicesArray[2]}!`)
 			displayComputerChoice(computerSelection)
 			console.log('You Win the Round!')
 			roundCounter++;
 			return(playerScore++);
 		}
 		else if(computerSelection == "rock"){
 			console.clear();
 			console.log(`You chose ${choicesArray[2]}!`)
 			displayComputerChoice(computerSelection)
 			console.log('Computer wins the round!')
 			roundCounter++;
 			return(computerScore++)
 		}
 		else if(computerSelection == "scissors"){
 			console.clear();
 			console.log(`You chose ${choicesArray[2]}!`)
 			displayComputerChoice(computerSelection)
 			console.log('Tie!')
 			roundCounter++;
 			return;
 		}
 	}else{
 		console.clear();
 		console.log('incorrect input, please try again');
 		return;
 	}

 };

 function game(){
 	console.clear()
 	console.log("\fHi! lets play Rock Paper Scissors!");
 	while(roundCounter < 5){
 		//runs 5 times, then it asks you if you wanna start over
	 	console.log(`Round: ${roundCounter + 1}`);
	 	console.log(`Choose your weapon:\n`)
	 	console.log('>>> Rock\n>>> Paper\n>>> Scissors\n')
	 	let playerSelection = prompt();
	 	let computerSelection = getComputerChoice();
	 	playRound(computerSelection, playerSelection);
	 	displayScores(playerScore, computerScore);
	 	if(roundCounter == 5){
	 		if (playerScore > computerScore){
	 			console.log('you win!')
	 			startOver()
	 			game()
	 		}
	 		else if(computerScore > playerScore){
	 			console.log('computer wins!')
	 			startOver()
	 			game()
	 		}else{
	 			console.log('Draw!');
	 			startOver();
	 			game()
	 		}
	 		playRound(computerSelection, playerSelection);
	 	}
	}

};

game();


