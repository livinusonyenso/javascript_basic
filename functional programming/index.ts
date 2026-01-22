type Increase = (x: number) => number
const increasemnet : Increase = x => x + 1
console.log(increasemnet(2));


type Tostring = (x: number) => string;
const Tostring: Tostring = x => `"${x}"`
console.log(Tostring(2));


type IncreasementThenString = (x: number) => string;
const increaseThenString:IncreasementThenString = (x) =>Tostring(increasemnet(x)) 
console.log("increaseThenString",increaseThenString(10));
