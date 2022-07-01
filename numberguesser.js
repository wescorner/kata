let prompt = require("prompt-sync")();

function numberGuesser(){
  let attempts = 1;
  let num = Math.floor(Math.random() * 100) + 1;
  let answer = 0;
  let lastAnswer = null;
  while(answer != num){
    answer = prompt("Guess a number:");
    if(isNaN(answer)){
      console.log("Not a number! Try again!");
    }else if(answer == lastAnswer){
      console.log("Already Guessed!");
    }else{
      if(answer > num){
        console.log("Too High!");
        attempts++;
      }else if(answer < num){
        console.log("Too Low!");
        attempts++;
      }
    }
    lastAnswer = answer;
  }
  console.log("You got it! You took " + attempts + " attempts!")
};
numberGuesser();