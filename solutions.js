
//WRITTEN QUESTIONS 
//1. In a funciton, parameters are the values defined when starting the function (e.g.
//function parameters (parameter1,parameter2)). Arguments are the values that go inside
//when calling a function (e.g. parameters(value1,value2))
//2. Console.log is a function itself that allows you to debugg your code, a return in a function
//allows you output the code in the function 

//PALINDROME
function checkPalindrome (str){
    let nor = str.toLowerCase()
    console.log(nor)
    palCheck = "";
    for(let i = (nor.length -1); i >= 0; i--){
    palCheck += nor.charAt(i);
    }
    if(nor == palCheck) console.log(true)
    else console.log(false)
}
checkPalindrome("HannaH");

function sumArray (arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
      sum += arr[i];
  }  
  return sum
}

console.log(sumArray([10,32,4,4]));

console.log(Math.sqrt(36));

function checkPrime (num){
    
    if(num <= 1){
        return false
    }
    else if(num === 2){
        return true;
    }
    else {
        for(let i = 2; i < num; i ++){
            if(num % i === 0){
            return false
            }
            else if (num == Math.pow(i,2)){
            return false
            }
        }
    return true
    }
}
console.log(checkPrime(37))
function printPrimes (num){
    const arrPrime = [];
    for (let i = 0; i <= num; i++){
        if (checkPrime(i)) arrPrime.push(i);
    }
    return arrPrime
}
console.log(printPrimes(97));

function randomMove(){
    let move = Math.random()
    if(move <= 0.32) move = "rock";
    else if (move >= 0.67) move = "paper";
    else move = "scissors";
    return console.log(move);
}

let computerMove = randomMove();
let userMove = randomMove();


function rockPaperScissors(move1, move2){
    if (move1 === move2){
        console.log('its a tie! The computer and player picked the same option!')
    }
    if (move1 === "rock"){
        if(move2 === "scissors"){
        console.log("Rock beats scissors, rock wins!")
        }
        else return console.log("Paper beats rock, paper wins!")
    }
    else if (move1 === "paper"){
        if(move2 === "rock"){
            console.log("Paper bears rock, paper wins!")
        }
        else return console.log("Scissors beats paper, scissors wins!")
    }
    else if (move1 === "scissor"){
        if(move2 === "paper"){
            console.log("Scissors beat paper, scissors win!");
        }
        else return console.log("Rock beats scissors, rock wins!")
    }
}

rockPaperScissors(computerMove,userMove);

//HUNGRY FOR MORE?
//Digit Sum
function sumDigits (num){
    let numStr = String(num);
    let sumDig = 0;
    for (let i = 0; i < numStr.length; i++){
        let newNum = Number(numStr.charAt(i))
        sumDig += newNum;
    }
    return sumDig
}
console.log(sumDigits(52));

//Pythagoras
function calculateSide(sideA,sideB){
    let numA = Math.pow(sideA,2);
    let numB = Math.pow(sideB,2);
    let sideC = Math.sqrt(numA + numB);
    return sideC;
}

console.log(calculateSide(3,4))