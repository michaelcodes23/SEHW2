
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

console.log(calculateSide(3,4));

function isoR(num){
    let rightIs = "#";
    for(let i = 1; i <= num; i++){
        console.log(rightIs);
        rightIs += "#";
    }
    return num
}
console.log(isoR(7));

function isoL(num){
    console.log(num);
    let leftIs = "";
    for(let i = 1; i <= num; i++){
        leftIs += "#";
    }
    console.log(leftIs);
    for(let i = 0; i < (leftIs.length -1); i++){
       leftIs.slice(0,-1);
        console.log(leftIs);
    }
    return num;
}

console.log(isoL(6));
//"SECOND" NUMBERS - the code below runs but the splice method does not seem to remove
//each of the starts after I created 6 stars in one line
function secondNumbers (arr){
    let numArr = arr;
    console.log(numArr);
    let maxNum = Math.max(...numArr);
    console.log(maxNum);
    let minNum = Math.min(...arr);
    console.log(minNum);
    console.log(numArr);
    arr.splice(numArr.indexOf(maxNum),1);
    arr.splice(numArr.indexOf(minNum),1);
    console.log(numArr);
    
    console.log("the second highest number is " + Math.max(...numArr))
    console.log("the second lowest number is " + Math.min(...numArr))
}

secondNumbers([2,10,23,101,52,48])


//UNIQUE STRING
function uniqueString (str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(newStr.includes(str[i]) == false) newStr += str[i];
         
    }

  return newStr;
}

console.log(uniqueString("testing"));

function insertDash (num){
    let str = String(num)
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if((str[i] % 2 !== 0) && (str[i-1] % 2 !== 0)) newStr += ("-" + str[i])
        else newStr += str[i]
    }
    return newStr;
}

console.log(insertDash(123356));

//DATATYPES REFRESHER
//1. datatype: boolean
//data structure example: const ligthSwitch = false;
//2. datatype: string
//data structure example: const email = "email@outlook.com";
//3. datatype: array
//data structure example: const spaceship = ['hull', 'laser blasters',
//'tractor beam', 'warp drive']
//4. datatype: array
//data structure example:  const studentNames = [studentA, studentB, studentC];
//5. datatype: object
//data structure example: const students = {
//  studentA: locationA,
//  studentB: locationB,
//  studentC: locationC
//}
//6. datatype: object
//data structure example: const students = {
// studentA: {
//     location: 'A',
//     tvShow: 'showA'
//      },
//     studentB: {
//     location: 'B',
//     tvShow: 'showB'
//     }
//     studentC: {
//     location: 'C',
//     tvShow: 'showC'
//     }

//}

// TAKE IT EASY
const arr = ['red', 'orange', 'yellow','green','blue','indigo','violet'];
const blue = arr[4];
console.log(blue);
const michael = {
    favFood: 'seafood',
    hobby: 'learning to program',
    town: 'Astoria',
    favData: 'objects'
}
const hobby = michael.hobby
console.log(hobby);
//CRAZY OBJECT
const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }
 
//1
console.log(crazyObject.taco[1].salsa[5])
//2
console.log(crazyObject.larry.quotes[0])
//3
console.log(crazyObject.larry.characters[2].favourtieHobby)
//4
console.log(crazyObject.larry.nicknames[1])
//5
console.log(crazyObject.larry.characters);
//6
crazyObject.larry.quotes.push("I'm trying to elelvate small talk to medium talk");
console.log(crazyObject.larry.quotes)
//END OF HW2