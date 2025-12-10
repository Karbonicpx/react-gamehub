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


// This function uses keyof, and what it means is that for any dataType that server as the argument for items, the key property can only holds the properties of that datatype
function pluck<DataType, KeyType extends keyof DataType>(
    items: DataType[],
    key: KeyType
): DataType[KeyType][] {
    return items.map((item) => item[key])
}

const dogs = [
    { name: "Mimi", age: 12},
    { name: "Gg", age: 11}
]


// Here, you can only select "age" or "name", since these are the values for dogs array
console.log(pluck(dogs, "age"))
console.log(pluck(dogs, "name"))


interface MyUser{
    readonly name: string // Makes the name immutable
    age: number
    email: string
}

// This is basically making every property in myUser optional
type OptUser = Partial<MyUser>

// Making all properties required
type RequiredUser = Required<MyUser>

// Basically only "picks" the keys in MyUser that you use as arguments here (in this case, only name and email)
type NameEmailUser = Pick<MyUser, "name" | "email">

// Oposite of Pick, removes the key
type NameAgeUser = Omit<MyUser, "email">

// Makes the whole type immutable
type ReadonlyUser = Readonly<MyUser>

// Both the array and its contents are const
const reallyConst = [1, 2, 3] as const;


// Instead of making 3 separate related strings, we can set the states in an enum
enum loadingState {
    before = "before",
    loading = "loading",
    complete = "complete"
}

interface Database {
    get(id: string): string;
    set(id: string, value: string): void

}

// Interface we define the methods and attributes, and in the class we define them
class InMemoryDatabase implements Database{
    private db: Record<string, string> = {};
    get(id: string): string {
        return this.db[id]
     };
    set(id: string, value: string): void {
        this.db[id] = value
    }
}



