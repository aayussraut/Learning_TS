"use strict";
const stringEcho = (arg) => arg;
const result = stringEcho("hello world");
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj({}));
console.log(isObj([]));
console.log(isObj(null));
console.log(isObj(undefined));
console.log(isObj(1));
console.log(isObj(""));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            arg,
            is: false,
        };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return {
            arg,
            is: false,
        };
    }
    return {
        arg,
        is: Boolean(arg), // can also use !!arg
    };
};
console.log(isTrue(true));
console.log(isTrue({}));
console.log(isTrue([]));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue(1));
console.log(isTrue(""));
console.log(isTrue("hello"));
console.log(isTrue([1, 2, 3]));
console.log(isTrue({ a: 1, b: 2, c: 3 }));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            value: arg,
            is: false,
        };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return {
            value: arg,
            is: false,
        };
    }
    return {
        value: arg,
        is: Boolean(arg), // can also use !!arg
    };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: "Aayush" }));
// console.log(processUser({ name: "Aayush", age: 21 }));
const getUserProperty = (// K extends keyof T means K can only be one of the keys of T
user, key) => {
    return user.map((u) => u[key]);
};
console.log(getUserProperty([{ id: 1, name: "Aayush" }], "name"));
class StateObject {
    constructor(value) {
        this.value = value;
    }
    get state() {
        return this.value;
    }
    set state(value) {
        // setter doesn't return anything
        this.value = value;
    }
}
const store = new StateObject("Hello");
console.log(store.state);
store.state = "World";
console.log(store.state);
// store.state = 12;
// console.log(store.state);
const myState = new StateObject([
    "Hello",
    1,
    true,
]);
console.log(myState.state);
