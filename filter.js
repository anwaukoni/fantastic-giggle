var myArray=[1,2,3,4,5]; 

var animals=[{
	name:'Cairo', species:'rabbit'
},
{	name:'Hamilton', species: 'dog'
},
{
	name: 'James', species: 'bird'
}
]; 

var filter= function(array, test){
var passed=[]; 
	for(var i=0; i<array.length; i++){
		if (test(array[i])){
			passed.push(array[i]); 
		}
	}
	return passed; 
}

// console.log(filter(animals, function(x){
// 	return (x.species=='dog'); 

// }).map(function(james){
// 	return james.name; 
// })); 

console.log(filter(myArray, function(x){
	return (x%2==0 && x>3); 

}));

