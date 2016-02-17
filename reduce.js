var reduce= function(array,combine,start){
	var current=start;
	for (var i=0; i<array.length; i++){
		current = combine(current, array[i]); 
	}
	return current; 
}