"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log();
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
//Required and Readonly
const recordAssignment = (assign) => {
    //send to database
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 100; // readOnly prevents this
// recordAssignment(assignGraded); //required all properties so this will error
// Record
const hexColorMap = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
};
const finalGrades = {
    Sara: "A",
    Kelly: "B",
};
console.log(finalGrades);
const gradeData = {
    Sara: { assign1: 100, assign2: 100 },
    Kelly: { assign1: 90, assign2: 95 },
};
console.log(gradeData);
const score = {
    studentId: "1",
    grade: 85,
};
const preview = {
    studentId: "1",
    title: "Final Project",
};
// ReturnType
// type newAssign = { title: string; points: number };
//
// const createNewAssign = (title: string, points: number): newAssign => {
//   return { title, points };
// };
// type newAssign = { title: string; points: number };
const createNewAssign = (title, points) => {
    return { title, points };
};
const assign2 = createNewAssign("Final Project", 100);
const assignArgs = ["Final Project", 100];
const assign3 = createNewAssign(...assignArgs);
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    return data;
});
fetchUser().then((user) => console.log(user));
