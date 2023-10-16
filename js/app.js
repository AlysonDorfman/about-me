'use strict';
console.log('hey world, hey!');

let userName = prompt('What is your name?');

alert(`Hi there, ${userName}! Let's play a guessing game, please answer yes/no OR y/n. Let's go!`);

// Global variable: Counting correct answers to later notify the user. Credit: I got this idea and line of code from Aaron from the recorded lecture. 
let countCorrectAnswers = 0


// First Question of Five, YES->yes
let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('You are correct!');
  countCorrectAnswers += 1;
} 
else if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('Sorry, but I do have a daughter.');
}
else {
  alert('Please only answer with y/n or yes/no, otherwise, your answer is counted as incorrect.')
}


// Second Question of Five
let questionTwoGuess = prompt('Was I born in Seattle?').toLowerCase();

if(questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
  alert('You are correct!');
  countCorrectAnswers += 1;
} 
else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
  alert('Darn, you got that one wrong. I was born in Seattle.');
}
else {
  alert('Please only answer with y/n or yes/no, otherwise, your answer is counted as incorrect.')
}


// Third Question of Five
let questionThreeGuess = prompt('Do I have a dog?').toLowerCase();

if(questionThreeGuess === 'n' || questionThreeGuess === 'no'){
  alert('You are correct! But I WISH I did.');
  countCorrectAnswers += 1;
} 
else if(questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
  alert('Darn, you got that one wrong. I don\'t have a dog, but I sure wish I did!');
}
else {
  alert('Please only answer with y/n or yes/no, otherwise, your answer is counted as incorrect.')
}


// Fourth Question of Five
let questionFourGuess = prompt('Did I move to California for the weather?').toLowerCase();

if(questionFourGuess === 'y' || questionFourGuess === 'yes'){
  alert('You are correct! No regrets, it\'s beautiful here!');
  countCorrectAnswers += 1;
} 
else if(questionFourGuess === 'n' || questionFourGuess === 'no'){
  alert('Darn, you got that one wrong. Turns out the weather is a big motivator!');
}
else {
  alert('Please only answer with y/n or yes/no, otherwise, your answer is counted as incorrect.')
}


// Fifth Question of Five
let questionFiveGuess = prompt('Do I like to play video games?').toLowerCase();

if(questionFiveGuess === 'n' || questionFiveGuess === 'no'){
  alert('You are correct! I never did get into them.');
  countCorrectAnswers += 1;
} 
else if(questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
  alert('Nope, wrong there. Somehow, I never got into them.');
}
else {
  alert('Please only answer with y/n or yes/no, otherwise, your answer is counted as incorrect.')
}



// Question 6

let guessCount = 0;

for (let i=0; i<4; i++) {

  let questionSixGuess = prompt('How old am I?');
  questionSixGuess = parseInt(questionSixGuess);

  if (questionSixGuess === 35){
    alert('Yes! That is my age exactly!');
    countCorrectAnswers += 1;
    break;
  }
  else if (questionSixGuess > 35){
    alert('Whoa, whoa, whoa, a little high there.')
  }
  else if (questionSixGuess < 35){
    alert('I\'m flattered, but that guess is too low.')
  }
  guessCount++;
}
if (guessCount === 4) {
  alert("Sorry, you've had four guesses, but the correct answer is 35.");
}




// Final alert to spit back correct answer count back
alert(`Not bad, ${userName}, you got ${countCorrectAnswers} out of 7 correct!`);



