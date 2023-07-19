"use strict";
// Index Signatures
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
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 100,
};
console.log(todaysTransactions["Pizza"]);
console.log(todaysTransactions.Pizza);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
// dynamically accessing the property - gives error if we use explicit defined properties
const todaysNet = (transactions) => {
    let sum = 0;
    for (let item in transactions) {
        sum += transactions[item]; //
    }
    return sum;
};
console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions["Aayush"]); // undefined
const student = {
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
    console.log(`${key}: ${student[key]} `); // keyof student creates a union type of all the keys in Student
}
// if we dont know the type of the object
Object.keys(student).map((key) => {
    console.log(`${key}: ${student[key]} `);
});
const logStudentKey = (student, key) => {
    console.log(`${key}: ${student[key]} `);
};
logStudentKey(student, "name");
const incomes = {
    salary: 100,
    bonus: 20,
    sidehustle: "10",
};
for (const revenue in incomes) {
    console.log(`${revenue}: ${incomes[revenue]}`); //gives error if we don't use keyof assertion
}
