'use strict';
console.log('hey world, hey!');

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Let's play a guessing game, please answer yes/no OR y/n`);

let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('You are correct!');
} else if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('Sorry, but I do have a daughter');
}