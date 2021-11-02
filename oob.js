let firstName = new String(" This is my first Name ")

console.log(firstName.toLowerCase())

String.prototype.addShock= function(){ return  this +  "!!!!!"  }


console.log(firstName.addShock())