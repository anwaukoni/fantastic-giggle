//Map accepts the projection function to be applied to each item in the source array
// and return the projected array. 

var myMap=[1,2,3,4];
// var mapped= [];
// var map= function(array,transform){
	
// 	for (var i=0; i<array.length; i++){
// 		mapped.push(transform(array[i])); 
// 	}
// return mapped; 
// }

// map(myMap,function(x){
// return x * 2; 
// }); 
 
// console.log(mapped);// [2,4,6,8] 

//Using map function the way it is supposed to be used

console.log(myMap.map(function(x){

	return x*2; 
})); 