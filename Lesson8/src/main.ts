const stringEcho = (arg: string): string => arg;

const result = stringEcho("hello world");

const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj({}));
console.log(isObj([]));
console.log(isObj(null));
console.log(isObj(undefined));
console.log(isObj(1));
console.log(isObj(""));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return {
      arg,
      is: false,
    };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
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

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return {
      value: arg,
      is: false,
    };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
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

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  return user;
};

console.log(processUser({ id: 1, name: "Aayush" }));
// console.log(processUser({ name: "Aayush", age: 21 }));

const getUserProperty = <T extends HasID, K extends keyof T>( // K extends keyof T means K can only be one of the keys of T
  user: T[],
  key: K
): T[K][] => {
  return user.map((u) => u[key]);
};

console.log(getUserProperty([{ id: 1, name: "Aayush" }], "name"));

class StateObject<T> {
  constructor(private value: T) {}

  get state(): T {
    return this.value;
  }

  set state(value: T) {
    // setter doesn't return anything
    this.value = value;
  }
}

const store = new StateObject<string>("Hello");
console.log(store.state);
store.state = "World";
console.log(store.state);
// store.state = 12;
// console.log(store.state);

const myState = new StateObject<(string | number | boolean)[]>([
  "Hello",
  1,
  true,
]);
console.log(myState.state);
