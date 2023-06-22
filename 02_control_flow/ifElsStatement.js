//Write a program that is based on a number and displays whether the number is odd or even using an if-else statement.
//let number = 10;
let number = 10;
if(number % 2 === 0) {
    console.log(number + ' is even');
} else {
    console.log(`${number} is odd`);
}

//Write a program based on age and displays a message based on their age using an if-else if statement:
//let age = 24;
//If the age is less than 18, display "You are a minor".
//If the age is between 18 and 65 (inclusive), display "You are an adult".
//If the age is greater than 65, display "You are a senior citizen".
let age = 24;
if( age < 18 ) {
    console.log(`${age}   You are minor`);
} else if(age >= 18 && age <= 65) {
    console.log(`${age}  You are an adult`);
} else if (age > 65 ) {
    console.log(`${age}  You are a senior citizen`);
}

//Write a program based on a letter and displays whether the letter is a vowel or a consonant using an if-else statement.
//let letter = 'e';
let letter = 'e';


if(letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e'|| letter.toLowerCase() === 'i' || letter.toLowerCase()  === 'o' || letter.toLowerCase() === 'u') {
    console.log(`the letter is a vowel`);
} else{
    console.log('the letter is a consonent');
}

//Write a program based on three numbers and displays the largest number using an if-else statement.
//let numberOne = 30;
//let numberTwo = 15;
//let numberThree = 45;
let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;
if(numberOne > numberTwo && numberOne > numberThree){
    console.log(`${numberOne} is the largest number`);
} else if( numberTwo > numberOne && numberTwo > numberThree){
    console.log(`${numberTwo} is the largest number`);
} else if( numberThree > numberOne && numberThree > numberTwo){
    console.log(`${numberThree} is the largest number`);
}

//Write a program based on given password and displays a message based on the password using an if-else statement:
//let password = 'Test1233';

//If the password is less than 8 characters, display "Password too short".
//If the password contains both letters and numbers, display "Password accepted".???
//If the password does not meet either of the above conditions, display "Password rejected".

let password = 'Test1233';
