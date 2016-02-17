/*
// declare a variable called "numArr" which is an array containing the numbers 1, 2, and 3.
// then print it to the console
var numArr= [1,2,3];
console.log(numArr); 


// define a function "multiplyBy2" the takes one number, multiplies it by 2, and returns
// that value
var multiplyBy2= function (x){
  return x*2; 
}


// define a function "difference10" that takes one number and returns its difference from
// 10. the output should always be positive (passing 8 or 12 should both return 2)

var difference10= function(x){
  if (x>10){
    return x-10; 
  }else if(x<10){
    return 10-x;
  }
}

console.log(difference10(8)); 
console.log(difference10(12)); 



// define a function "map" which takes two arguments, an array and a callback function.
// "map" will iterate/loop through the array and pass each array element to the callback 
// as an argument. Each output from the callback is pushed to a new array. "map" will return
// this new array.
var map= function(array, callback){
  var mapped=[]; 
  for (var i=0; i<array.length; i++){
    mapped.push(callback(array[i])); 
  }
  return mapped; 
}

console.log(map(numArr, difference10)); 

// use your "map" to find the differences from 10 of each number in numArr


// define a function called "every" which takes two arguments, an array and a callback
// function. this callback can be considered a "test", as it will return true or false.
// "every" will iterate/loop through the array and pass each array element to the callback
// as an argument. if every output from the callback/test is "true", every will return true.
// if any of the outputs is "false", every will return false. 
var every= function(array, callback){
  //var passedOrNot=[]; 
  for (var i=0; i<array.length; i++)
    if(callback(array[i])==false){
       return false;  
    }//else if(callback(array[i])==true){
      
   // }
  return true;
}


       
// use your "every" to determine if every number in numArr is greater than 0
console.log(every(numArr, function(x){
      return x>0; 
    }))      
*/

var myArray=[2,4,6,8];
  
var multiplyTwo= function(x){
  return x*2; 
}

var iterateAll= function(array,action){
  var results={}; 
  var numbers; 

  for (var i=0; i<array.length; i++){
    numbers=array[i];
    results[numbers]=action(array[i]); 
  }
  return results; 
}

console.log(iterateAll(myArray, multiplyTwo)); 

//How do we debug the following code???
function LongestWord(sen) { 

  // code goes here
  var longestLength=0; 
  var longestWord=""; 
  var senTransform= sen.replace(/[^a-zA-Z0-9\s]/g,"").split(" "); 
  
  for (var i=0; i<senTransform.length; i++){
   if (longestLength<senTransform[i].length){
     //longestLength=senTransform[i].length; 
    longestWord=senTransform[i]; 
   }
  }
  return longestWord; 
         
}
   
// keep this function call here 
LongestWord(readline());           
