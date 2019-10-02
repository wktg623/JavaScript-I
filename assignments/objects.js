// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:
const intern1 = {
  id: 1,
  email:  "mmelloy0@PushSubscription.edu",
  firstName: "Mitzi",
  gender: "F"
};

const intern2 = {
  id: 2,
  email:  "kdiben1@tinypic.com",
  firstName: "Kennan",
  gender: 'M'
};

const intern3 = {
  id: 3,
  email:  "kmummery2@wikimedia.org",
  firstName: "Keven",
  gender: 'M'
};

const intern4 = {
  id: 4,
  email:  "gmartinson3@illinois.edu",
  firstName: "Gannie",
  gender: 'M'
};

const intern5 = {
  id: 1,
  email:  "adaine5@samsung.com",
  firstName: "Antonietta",
  gender: 'F'
}



// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name

// Kennan's ID

// Keven's email

// Gannie's name

// Antonietta's Gender

console.log(intern1.firstName);  //returns Mitzi
console.log(intern2.id);  //returns 2
console.log(intern3.email); //returns kmummery2@wikimedia.org
console.log(intern4.firstName); //returns Gannie
console.log(intern5.gender); //returns F

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

console.log("Hello, my name is " + intern2.firstName + "!")

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
let multiplyNums = (a,b) => {return a*b};

console.log(intern5.firstName + " can multiply two numbers together as evidenced that she knows 3 multiplied by 7 =  " + multiplyNums(3,7))

// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: "Susan",

  age: 70,

child: 
  {name: "George",

age: 50,

grandchild:
  {name: "Sam",

age: 30,

speaks: function(){
  return this.name + " speaks!"}


}

, 
speaks: function(){
  return this.name + " speaks!"}

}

,
speaks: function(){
  return this.name + " speaks!"}


}


// Log the parent object's name
console.log(parent.name);
// Log the child's age
console.log(parent.child.age);
// Log the name and age of the grandchild
console.log(parent.child.grandchild)

// Have the parent speak
console.log(parent.speaks());
// Have the child speak
console.log(parent.child.speaks());
// Have the grandchild speak
console.log(parent.child.grandchild.speaks());