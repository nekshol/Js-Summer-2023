
let coder = 'I am a good programmer';
console.log(`typeof coder = ${typeof coder}`);

let coderLength = coder.length;
console.log(`length = ${coderLength}`);

let coderToUpperCase = coder.toUpperCase;
console.log(coder.toUpperCase());

let coderToLowerCase = coder.toLowerCase;
console.log(coder.toLowerCase());

let coderIncludes_good = coder.includes('good');
console.log(`does '${coder}' includes the word 'good' = ${coderIncludes_good}`);

console.log('\nfunction: indexOf()');
console.log(`coder -> ${coder}`);
let indexOf_p = coder.indexOf('p');
console.log(`Index of 'p' -> ${indexOf_p}`);

//let indexOf_p = 12;
 
console.log(`\function: substring()`);
let substring_12 = coder.substring(12);
console.log(`substring_12 -> ${substring_12}`);

let coderEndsWith_programmer = coder.endsWith('programmer');
console.log(`\ncoder -> ${coder}`);
console.log(`is '${coder}' ends with 'programmer' = ${coderEndsWith_programmer}`);


const coder_split_good = coder.split('good');
console.log(`\nsplit by 'good' -> ${coder_split_good}`);


