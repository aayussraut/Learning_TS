"use strict";
//array
let stringArr = ["one", 'hey', 'Aayush'];
let guitars = ["Strat", "Les Paul", 5250];
let mixedData = ['EVH', 1984, true];
stringArr[0] = "John";
guitars[0] = 1986;
guitars.unshift("Aayush");
mixedData.unshift(false);
mixedData.unshift("Guitar");
mixedData.unshift(2001);
let bands = [];
bands.push("Aayush");
//Tuple
let myTuple = ["Dave", 43, true];
let mixed = ["John", 1, false];
mixed = myTuple;
// myTuple=mixed // problem: it's not assignable to type [string,number,boolean]
// myTuple[3]=43 //gives error as well
//Objects
let myObj = {};
myObj = []; //array is also a type of object
console.log(typeof myObj);
const exampleObj = {
    prop1: "Aayuss",
    prop2: true
};
exampleObj.prop1 = "Aayush";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5250, "OU812"]
};
let JP = {
    name: "Jimmy",
    // active:true,
    albums: ['I', 'II', "IV"]
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(JP));
const greetGuitarist1 = (guitarist) => {
    var _a;
    //we can also write
    // if(guitarist.name){
    //     return `Hello ${guitarist.name.toUpperCase()}`
    // }
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
//enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); //logs 1
