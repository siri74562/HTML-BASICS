//datatypes in javascript
//Data types in JavaScript innclude:
//1.Primitive Types:
// -Number: Represents both integer and floating-point numbers.
// -String: Represents a sequence of characters enclosed in single or double quotes.
// -Boolean: Represents a logical entity and can have two values: true or false.
// -Undefined:  A variable that has been declared but not assigned a value.
// -Null: Represents the intentional absence of any object value.
// -Symbol: A unique and immutable primitive value, often used as object property keys.
// -BigInt: Represents integers with arbitrary precision,useful for large integers.
//2. Non-Primitive Types:
// -Object: A collection of properties,where each property is a key- value pair.
// - Array: A special type of object used to store ordered collections of values.
// -Function: A callable object that can be invoked to perform a specific task.
let number=23;
let string="Siri";
let boolean=true;
let undefined;
let nullvar=null;
let symbol=Symbol("***");
let bigint=BigInt(1213333333333333324344444444444444232342);
let obj={ key: "value"};
let  arr=[12,32,42,454,45];
let funVar=function()
            {
                return "It is JavaScript File"     
            };
let obj2={
     name:"ArthamSiri",
     rollno:'23N316708',
     class:"datascience",
     age:18
}
console.log("number: ",number);
console.log("string: ",string);
console.log("boolean: ",boolean);
console.log("undefined: ",undefined);
console.log("nullvar: ",nullvar);
console.log("symbol: ",symbol);
console.log("bigint: ",bigint);
console.log("obj: ",obj);
console.log("arr: ",arr);
console.log("funVar: ",funVar);
console.log("obj2: ",obj2);