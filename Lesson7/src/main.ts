// Index Signatures

// using index signature
interface TransactionObj {
  [index: string]: number; // index signature
  // [key:string]: number; // can also be written as
}

// using index signature with 3 required properties (Pizza, Books, Job) - Also more properties can be added
// interface TransactionObj {
//   [index: string]: number;
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

// explicitly defining the properties
// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 100,
};

console.log(todaysTransactions["Pizza"]);
console.log(todaysTransactions.Pizza);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

// dynamically accessing the property - gives error if we use explicit defined properties
const todaysNet = (transactions: TransactionObj): number => {
  let sum: number = 0;
  for (let item in transactions) {
    sum += transactions[item]; //
  }
  return sum;
};

console.log(todaysNet(todaysTransactions));

console.log(todaysTransactions["Aayush"]); // undefined

////////////////////////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined; // index signature
  name: string;
  gpa: number;
  classes?: number[];
}

const student: Student = {
  name: "Aayush",
  gpa: 3.5,
  classes: [1, 2, 3],
};

// console.log(student.test); // if we don't use index signature, it gives error as test is not defined but if we use index signature, it gives undefined

//works if we use index signature
// for (const key in student) {
//   console.log(`${key}: ${student[key]} `);
// }

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]} `); // keyof student creates a union type of all the keys in Student
}

// if we dont know the type of the object
Object.keys(student).map((key) => {
  console.log(`${key}: ${student[key as keyof typeof student]} `);
});

const logStudentKey = (student: Student, key: keyof Student) => {
  console.log(`${key}: ${student[key]} `);
};

logStudentKey(student, "name");

//////////////////////////////////////

// interface Incomes {
//   [key: string | number]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

/*
   - Benefits
    - key can be used as a string literal type
   - Drawbacks
    - key may or may not have single type . i.e. can be union type
 */
type Incomes = Record<Streams, number | string>;

const incomes: Incomes = {
  salary: 100,
  bonus: 20,
  sidehustle: "10",
};

for (const revenue in incomes) {
  console.log(`${revenue}: ${incomes[revenue as keyof Incomes]}`); //gives error if we don't use keyof assertion
}
