//type Aliases
type stringOrNumber =string | number

type stringOrNumberArray=(string| number)[]

type Guitarist={
    name:string;
    active?:boolean; //question mark for optional properties
    albums:stringOrNumberArray
}

type UserId=stringOrNumber

//literal types
let  myName:"Aayush"

let userName: 'Dave' | "Aayush" |"Amy"
userName="Aayush"

