import { StringValidator } from "./library-api";
import { ZipCodeValidator } from "./library";

const myValidator : StringValidator = new ZipCodeValidator();

let input : string = "0920293";
let result : boolean = myValidator.isAcceptable(input);

console.log(`StringValidator with ${input} is ${result}.`);

input = "98201";
result = myValidator.isAcceptable(input);
console.log(`StringValidator with ${input} is ${result}.`);