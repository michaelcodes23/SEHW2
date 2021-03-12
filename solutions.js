
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

