'use strict';

let DiverseUI = require('./index');
let person = new DiverseUI;

// List All DiverseUI Items
person.getAll().then((data)=>{
  console.log(data);
});
//List All DiverseUI Male Items
person.getAll("male").then((data)=>{
  console.log(data);
});
// List All DiverseUI Female Items
person.getAll("female").then((data)=>{
  console.log(data);
});
// List a Random DiverseUI Item
person.getRandom().then((data)=>{
  console.log(data);
});
// List a Random DiverseUI Male
person.getRandom("male").then((data)=>{
  console.log(data);
});
// List a Random DiverseUI Female
person.getRandom("female").then((data)=>{
  console.log(data);
});
//List a Specific DiverseUI Person
person.getSpecific("female-121").then((data)=>{
  console.log(data);
});
