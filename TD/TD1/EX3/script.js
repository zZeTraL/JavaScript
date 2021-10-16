let myArray = [157, 10, 81, 1000, 4, 1024, 16, 492, 9, 287, 0];

let impair = myArray.filter(value => 0 != value % 2);
let sin = myArray.map(value => Math.sin(value));
let log = myArray.map(value => Math.log10(value));

console.log(myArray);
console.log(impair);
console.log(sin);
console.log(log);