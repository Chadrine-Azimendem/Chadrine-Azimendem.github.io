let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
  }

  console.log(generateTarget());

  const compareGuesses = (usersGuess, conputersGuess, secretNumb) => {
    let newUserGuess = Math.abs(secretNumb - usersGuess);
    let newConputersGuess = Math.abs(secretNumb - conputersGuess);
    if(newUserGuess <= newConputersGuess) {
      return true;
    } else {
      return false;
    }
  }

  console.log(compareGuesses(8, 4, 2));

  const updateScore = (winner) => {
    if(winner === 'human') {
      return humanScore += 1; 
    } else {
      return computerScore += 1; 
    }
  }
  
console.log(updateScore('human'));
console.log(updateScore('computer'));

const advanceRound = () => {
  return currentRoundNumber += 1;
  }

  console.log(advanceRound());
