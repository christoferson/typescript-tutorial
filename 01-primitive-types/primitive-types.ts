
/*
Primitive Types
boolean - true or false values
number - whole numbers and floating point values
string - text values 
*/


let myStringExplicitType: string = "Bar";

console.log(myStringExplicitType);

myStringExplicitType = "Foo";

console.log(myStringExplicitType);

//myStringExplicitType = 7; // Type 'number' is not assignable to type 'string'.ts(2322)

let myStringImplicitType = "Bar";

console.log(myStringImplicitType);

myStringImplicitType = "Foo";

console.log(myStringImplicitType);

//myStringImplicitType = 7; // Type 'number' is not assignable to type 'string'.ts(2322)

// Demo JSON.parse

let json = JSON.parse("55");
console.log(typeof json, "-", json);

json = JSON.parse("{\"number\": 55}");
console.log(typeof json, "-", json);

json = JSON.parse("true");
console.log(typeof json, "-", json);

json = JSON.parse("55.28");
console.log(typeof json, "-", json);
