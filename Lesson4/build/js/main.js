"use strict";
//literal types
let myName;
let userName;
userName = "Aayush";
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction{
//     (a:number,
//     b:number):number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameter
const addAll = (a, c, b) => {
    // optional parameter should come in last
    if (typeof b !== "undefined") {
        return a + b + c;
    }
    return a + c;
};
//default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(2, 3, 4));
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3)); // if want to use the default value of a then we have to pass a as undefined
//Rest Parameters
const total = (a, ...nums) => {
    //rest parameter should also come at last
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4)); // here 'a' will be 1 and 'nums' will be 2,3,4
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// infine loop is also a never type
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === "number";
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === "string") {
        return "string";
    }
    if (isNumber(value))
        return "number";
    return createError("This should never happen");
};
