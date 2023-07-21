// Utility Types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return {
    ...assign,
    ...propsToUpdate,
  };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log();
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);

//Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //send to database
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// assignVerified.grade = 100; // readOnly prevents this
// recordAssignment(assignGraded); //required all properties so this will error

// Record

const hexColorMap: Record<string, string> = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "F";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "A",
  Kelly: "B",
};

console.log(finalGrades);

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 100, assign2: 100 },
  Kelly: { assign1: 90, assign2: 95 },
};

console.log(gradeData);

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">; // Pick studentId and grade from Assignment

const score: AssignResult = {
  studentId: "1",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade">; // Omit grade from Assignment

const preview: AssignPreview = {
  studentId: "1",
  title: "Final Project",
};

// Exclude and Extract

type adjustedGrades = Exclude<LetterGrades, "A" | "B">; // Exclude A and B from LetterGrades

type highGrades = Extract<LetterGrades, "A" | "B">; // Extract A and B from LetterGrades

// NonNullable

type AllPossibleNames = "Sara" | "Kelly" | undefined | null;

type NamesOnly = NonNullable<AllPossibleNames>;

// ReturnType

// type newAssign = { title: string; points: number };
//
// const createNewAssign = (title: string, points: number): newAssign => {
//   return { title, points };
// };

// type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const assign2: NewAssign = createNewAssign("Final Project", 100);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Final Project", 100];

const assign3: NewAssign = createNewAssign(...assignArgs);

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUser = async (): Promise<User[]> => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
};

type FetchUser = Awaited<ReturnType<typeof fetchUser>>;

fetchUser().then((user) => console.log(user));
