
//Traversing an Array using a for loop:
var myArray=[2,4,6,8,10];
// for (var i=0; i<myArray.length; i++){
// 	console.log(myArray[i]); 

// }
// //Traversing using a ForEach
// myArray.forEach(function(x){
// 	console.log (x); 

// }); 

// //ForEach function written as a function expression

// var forEach= function(myArray){

// 	for (var i=0; i<myArray.length; i++ ){

// 		console.log(myArray[i]); 
// 	}

// }

// forEach(myArray); 

var forEach= function(array,action){

	for(var i=0; i<array.length; i++){
		action(array[i]); 
	}
}
var sum=0; 
forEach(myArray, function(x){
 	//var sum=0; 
  sum+= x; 
  return sum; 
 })

console.log(sum); 




//console.log('Hello'); 

//***Using forLoop to log all numbers divisible by 5

// var myArray= [2,10,11,13,15,18,20]
// var newArray=[]; 

// for (var i= 0; i<myArray.length; i++){
// 	if (myArray[i] % 5 !== 0){
// 		newArray.push(myArray[i]); 
// 	}
// }
//  console.log(newArray); 

 //***Using forEach function to log numbers divisible by 5

 // myArray.forEach(function(number){
 // 	if (number % 5 == 0){
 // 		console.log (number); 
 // 	}
 // })

//***Using forLoop to log all the names in an array
 // var myNames=["james", "Austin", "Junior", "SPearmint"]
 // var listNames=[]; 

 // for (var listNames=0; listNames<myNames.length; listNames++){
 // 	console.log (myNames[listNames]); 
 // }

//*** Using forEach for the above function
// myNames.forEach(function(names){
// 	console.log(names); 
// }); 

//*** Making forEach its Own Function

// var myName= ['Austin', 'Dami', 'CHildren', 'Mommy']

// var forEach= function(myNames){
// 	var listNames= []
// 	for (var lastNames=0; lastNames<myNames.length; lastNames++){
// 		console.log(myNames[lastNames]); 
// 	}
// }

// forEach(myName);
// function thisVideo() {
// 	var newReleases = [
// 		{
// 			"id": 70111470,
// 			"title": "Die Hard",
// 			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
// 			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
// 			"rating": [4.0],
// 			"bookmark": []
// 		},
// 		{
// 			"id": 654356453,
// 			"title": "Bad Boys",
// 			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
// 			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
// 			"rating": [5.0],
// 			"bookmark": [{ id:432534, time:65876586 }]
// 		},
// 		{
// 			"id": 65432445,
// 			"title": "The Chamber",
// 			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
// 			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
// 			"rating": [4.0],
// 			"bookmark": []
// 		},
// 		{
// 			"id": 675465,
// 			"title": "Fracture",
// 			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
// 			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
// 			"rating": [5.0],
// 			"bookmark": [{ id:432534, time:65876586 }]
// 		}
// 	],
// 	videoAndTitlePairs = [];
// 	//forEach high-order function
// 	// newReleases.forEach(function (videos){
// 	// 	videoAndTitlePairs.push({"mashup":videos.id, 'mishmash':videos.title}); 
// 	// })

// 	// return videoAndTitlePairs;
// 	//function findId(newReleases){
// 	for (var i=0; i<newReleases.length; i++){
// 		videoAndTitlePairs.push({id: newReleases[i].id, title:newReleases[i].title}); 
		 
// 		}; 
// 		return videoAndTitlePairs; 
	
// 	//}
// }

// console.log(thisVideo());


