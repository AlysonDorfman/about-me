'use strict';
console.log('hey world, hey!');

let userName = prompt('What is your name?');
alert(`Hi there, ${userName}! Let's play a guessing game, please answer yes/no OR y/n. Let's go!`);

// Global variable: Counting correct answers to later notify the user. Credit: I got this idea and line of code from Aaron from the recorded lecture. 
let countCorrectAnswers = 0;


// Question 1/7
function q1(){
  let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();
  if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
    alert('You are correct!');
    countCorrectAnswers += 1;
  } 
  else if(questionOneGuess === 'n' || questionOneGuess === 'no'){
    alert('Sorry, but I do have a daughter.');
  }
  else {
    alert('Please only answer with y/n or yes/no, otherwise, your answer is counted as incorrect.');
  }
}
q1();


// Question 2/7
function q2(){
  let questionTwoGuess = prompt('Was I born in Seattle?').toLowerCase();
  if(questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
    alert('You are correct!');
    countCorrectAnswers += 1;
  } 
  else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
    alert('Darn, you got that one wrong. I was born in Seattle.');
  }
  else {
    alert('Please only answer with y/n or yes/no, otherwise, your answer is counted as incorrect.');
  }
}
q2();


// Question 3/7
function q3(){
  let questionThreeGuess = prompt('Do I have a dog?').toLowerCase();
  if(questionThreeGuess === 'n' || questionThreeGuess === 'no'){
    alert('You are correct! But I WISH I did.');
    countCorrectAnswers += 1;
  } 
  else if(questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
    alert('Darn, you got that one wrong. I don\'t have a dog, but I sure wish I did!');
  }
  else {
    alert('Please only answer with y/n or yes/no, otherwise, your answer is counted as incorrect.');
  }
}
q3();


// Question 4/7
function q4(){
  let questionFourGuess = prompt('Did I move to California for the weather?').toLowerCase();
  if(questionFourGuess === 'y' || questionFourGuess === 'yes'){
    alert('You are correct! No regrets, it\'s beautiful here!');
    countCorrectAnswers += 1;
  } 
  else if(questionFourGuess === 'n' || questionFourGuess === 'no'){
    alert('Darn, you got that one wrong. Turns out the weather is a big motivator!');
  }
  else {
    alert('Please only answer with y/n or yes/no, otherwise, your answer is counted as incorrect.');
  }
}
q4();


// Question 5/7
function q5(){
  let questionFiveGuess = prompt('Do I like to play video games?').toLowerCase();
  if(questionFiveGuess === 'n' || questionFiveGuess === 'no'){
    alert('You are correct! I never did get into them.');
    countCorrectAnswers += 1;
  } 
  else if(questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
    alert('Nope, wrong there. Somehow, I never got into them.');
  }
  else {
    alert('Please only answer with y/n or yes/no, otherwise, your answer is counted as incorrect.');
  }
}
q5();


// Question 6/7
function q6(){
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
      alert('Whoa, whoa, whoa, a little high there.');
    }
    else if (questionSixGuess < 35){
      alert('I\'m flattered, but that guess is too low.');
    }
    guessCount++;
  }
  if (guessCount === 4) {
    alert("Sorry, you've had four guesses, but the correct answer is 35.");
  }
}
q6();


// Question 7/7
function q7(){
  let countries = ['argentina', 'italy', 'france', 'mexico', 'canada', 'spain'];
  for(let attempts = 6; attempts > 0; attempts--){
    let countriesGuess = prompt('Name a country I have visited outside of the US.').toLowerCase();
    for(let i=0; i<countries.length; i++) {
      if(countriesGuess === countries[i]) {
        alert('That\'s right, you got it!');
        attempts = 0;
        countCorrectAnswers += 1;
        break;
      }
    }
  }
}
q7();

alert(`Not bad, ${userName}, you got ${countCorrectAnswers} out of 7 correct!`);



