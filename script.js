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

function print1to5(){
  for (let i =0; i<=5;i++){
    console.log(i)
  }

}
print1to5();

function rollDice(){
  let rand = Math.floor(Math.random()*6)+1;
  console.log(rand);
}

rollDice();


function printMyName(name, age){
  console.log(`${name} age is ${34}`);

}

printMyName("abhi","23");

function outerFunction(){
  let a = 2;
  let b = 3;
  console.log(a,b);
  function innerFunction(){
    console.log(a,b);
  }
  innerFunction();
}
outerFunction();

const car = function (a, b){
   return a+ b;
  
}
car(2,9);

function multi(func, count){
  for(let i = 1; i<=count;i++){
    func();
  }
}

let greet = function(){
  console.log("Good-after Noon");
} 

multi(greet, 10);