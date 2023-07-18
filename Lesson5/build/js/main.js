"use strict";
// convert to more or less specific
let a = "hello";
let b = a; //less specific
let c = a; //more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(1, 2, "concat");
// TS sees no problem - but a string is returned
let nextVal = addOrConcat(1, 2, "concat");
// The DOM
const img = document.getElementById("#img");
const myImg = document.querySelector("img");
const nextImg = document.querySelector("img"); //will not work for tsx file in react
img.src;
myImg.src;
