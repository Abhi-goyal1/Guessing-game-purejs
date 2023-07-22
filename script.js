const max = prompt("Enter the max number");

const random = Math.floor(Math.random()*max + 1);

let guess = prompt("Guess the number");

while(true){
  if (guess=="quite"){
    console.log("game quit");
    break;
  }
  else if(guess == random){
    console.log("Congrats! You guess right" , random);
    break;
  }
  else{
    guess = prompt("sorry try again :)");
  }

}