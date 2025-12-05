/* eslint-disable @typescript-eslint/no-unused-vars */
let username: string = "Jack";
const logged: boolean = false;


username += "Harrington"

console.log(username);
console.log(logged)


// Array that has strings
const names: string[] = username.split(" ");

// Array with only Values that are numbers
const myValues: Array<number> = [1, 2, 3]

// Creating object with the properties and setting values
const myPerson: {
    first: string;
    last: string;
} = {
    first: "Jack",
    last: "Harrington"
}

// Use this for reusable objects with defined properties
interface Person {
    first: string;
    last: string
}

// Use records when you want to set a new property and value dinamically
const ids: Record<number, string> = {
    10: "a",
    20: "b"
};
ids[30] = "c"

// Let TS infer as much as possible!

// For the function, we need to specify the type of the parameters to avoid "any" (not needed for the type of the return)
function addNumbers(a:number, b:number): number {
    return a + b;
}

// Vars can have more than one type of value
const union: number | string = "1"

// Developing a new type which acts like a function
export type MutationFunction = (v: number) => number;

const myNewMutateFunc: MutationFunction = (v: number) => v * 100;
export default addNumbers(1, 2)