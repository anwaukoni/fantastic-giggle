var Person=function(name){
  this.name=name, 
    this.greet=function(){
    console.log(this.name); 
  }
}

var Ted= new Person('ted'); 

Ted.greet();

var Dog=function(name){
  this.name=name, 
    this.woof=function(){
    console.log("woof"); 
  }
  
}

var Jet= new Dog("Jet"); 

Jet.woof(); 
Jet.greet=function(){
  console.log(this.name);
}

Jet.greet(); 
//Greet method on jet should say Ted's name. 
//Have the context of jet's greet function call out Jet

/*
var mySafe=function(secret, password){
  
  var store=password; 
  
  return function(passwordTwo){
    if (passwordTwo===store){
      return secret;
    }
  return false; 
  }
  //return false; 
}



var safe = mySafe('this is a secret', '1234');

console.log(safe('1234'));