//type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string;
  active?: boolean; //question mark for optional properties
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

//literal types
let myName: "Aayush";

let userName: "Dave" | "Aayush" | "Amy";
userName = "Aayush";

//functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

// interface mathFunction{
//     (a:number,
//     b:number):number
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

// optional parameter
const addAll = (a: number, c: number, b?: number): number => {
  // optional parameter should come in last
  if (typeof b !== "undefined") {
    return a + b + c;
  }
  return a + c;
};

//default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(sumAll(2, 3, 4));
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3)); // if want to use the default value of a then we have to pass a as undefined

//Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  //rest parameter should also come at last
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4)); // here 'a' will be 1 and 'nums' will be 2,3,4

// never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// infine loop is also a never type
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number";
};

//use of the never type
const numberOrString = (value: stringOrNumber): string => {
  if (typeof value === "string") {
    return "string";
  }

  if (isNumber(value)) return "number";

  return createError("This should never happen");
};
