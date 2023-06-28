//array
let stringArr:string[]=["one", 'hey','Aayush']

let guitars=["Strat", "Les Paul",5250]

let mixedData=['EVH',1984, true]

stringArr[0]="John"

guitars[0]=1986
guitars.unshift("Aayush")

mixedData.unshift(false)
mixedData.unshift("Guitar")
mixedData.unshift(2001)

let bands:string[]=[];
bands.push("Aayush")

//Tuple
let myTuple:[string,number,boolean]=["Dave",43,true]

let mixed=["John",1,false]
mixed=myTuple
// myTuple=mixed // problem: it's not assignable to type [string,number,boolean]

// myTuple[3]=43 //gives error as well

//Objects
let myObj:object={}
myObj=[] //array is also a type of object
console.log(typeof  myObj)

 const exampleObj={
    prop1:"Aayuss",
     prop2:true
 }

 exampleObj.prop1="Aayush"

//annotate type
type Guitarist={
    name:string;
    active?:boolean; //question mark for optional properties
    albums:(string|number)[]
}

let evh:Guitarist={
    name:"Eddie",
    active:false,
    albums:[1984,5250,"OU812"]
}

let JP:Guitarist={
    name:"Jimmy",
    // active:true,
    albums:['I','II',"IV"]
}

const greetGuitarist=(guitarist:Guitarist)=>{
    return `Hello ${guitarist.name}`
}

console.log(greetGuitarist(JP))

//interface
interface Guitarist1{
    name?:string,
    active:boolean,
    albums:(string|number)[]
}

const greetGuitarist1=(guitarist:Guitarist1)=>{
    //we can also write
    // if(guitarist.name){
    //     return `Hello ${guitarist.name.toUpperCase()}`
    // }
    return `Hello ${guitarist.name?.toUpperCase()}`
}

//enums
enum Grade{
    U=1, //by defaults starts from 0
    D,
    C,
    B,
    A,
}

console.log(Grade.U) //logs 1