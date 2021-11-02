// function Contact (firstName, lastName, phoneNumber){
//     this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
  
// };


// let testContact = new Contact("Ada", "Lovelace", "503-555-1111");


// Contact.prototype.fullName = function (){ return this.firstName + " " + this.lastName;} 


// console.log(testContact.fullName())


// Contact.prototype.lastNameConverted= new Contact("Ada", "Lovelace", "")



let tomatoes = { name: "Tomatoes", price: 2.99 };
let cucumbers = { name: "Cucumbers", price: 0.99 };
let onions = { name: "Onions", price: 0.79 };

let groceryStore = { name: "Michael's corner market", products: [tomatoes, cucumbers, onions] };

let iPhone = { name: "iPhone", price: 699 };
let android = { name: "Android", price: 499 };
let windowsPhone = { name: "Windows Phone", price: 399 };

let phoneStore = { name: "RadioShack", products: [iPhone, android, windowsPhone] };

let stores = [groceryStore, phoneStore];


stores.forEach(function(store){

  console.log('Store ' + store.name + ' Sells' );

  store.products.forEach( function(product){
     console.log(product.name );



  }




  )




}

)