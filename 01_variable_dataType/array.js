//Create an array of student names
let students = ['Sita','Roma','Charlie','Dana','Nika','Ali'];
//Find the length of an array
let totalStudents = students.length;
console.log(`\nthe total of students in array = ${totalStudents}`);
//Demonstrate the usage of array manipulation on students array by showing example of pop, push, shift, unshift, splice functions;

console.log('\nfunction - pop()');
let studentsPop = students.pop();
console.log(`Removed value = ${studentsPop}`);
console.log(`students = ${students}`);

console.log('\nfunction - push()');
let studentsNewLength = students.push('Mouna');
console.log(`New length of students array = ${studentsNewLength}`);
console.log(`students = ${students}`);

console.log('\nfunction - shift()');
let studentsShift = students.shift();
console.log(`removed value = ${studentsShift}`);
console.log(`students = ${students}`);

console.log('\nfunction - unshift()');
let studentsNewLength1 = students.unshift('Safia');
console.log(`Students new length after function unshift = ${studentsNewLength1}`);
console.log(`students = ${students}`);

console.log(`\nfunction - splice`);
students.splice(2, 3, 'Soro', 'Shakha');
console.log(`\nstudents = ${students}`);

//Find out if array includes the value ‘John’;
console.log('\nfunction - includes()');
let isJohnPresent = students.includes('John');
console.log(`is 'John' present at students - array = ${isJohnPresent}`);
console.log(`students = ${students}`);

//Find index of student ‘Kate’;
console.log('function - indexOf');
let indexOf_Kate = students.indexOf('Kate');
console.log(` what is the index of 'Kate' on students - array = ${indexOf_Kate}`);
console.log(`students = ${students}`); 

//Reverse your array and print last Index value;
console.log('\nfunction - reverse()');
console.log(`students before reverse() = ${students}`);
students.reverse();
console.log(`students after reverse () = ${students}`);

console.log('\nprint the last Index value of students - array');
let studentsLength = students.length;
let studentsLastIndex = students.length - 1;
let valueAt_studentsLastIndex = students[studentsLastIndex];
console.log(`the value at the last index of students - array = ${valueAt_studentsLastIndex}`);

//Find out if the first index value equals to last index value (Hint: use comparison operator. NOT LOOP );

let firstIndexValueAt0 = students[0];
console.log(`the value at index-0 in students - array = ${firstIndexValueAt0}`);

let isValueAt0EqualsToValueAt_studentsLastIndex = firstIndexValueAt0 === valueAt_studentsLastIndex;
console.log(`is the first index value equal to the last index value at students - array = ${isValueAt0EqualsToValueAt_studentsLastIndex}`);



