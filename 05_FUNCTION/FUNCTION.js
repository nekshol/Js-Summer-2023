//Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.

function addNumbers(a, b){
    return a + b;
}
let result = addNumbers(2,5);
console.log(result);

 let arrayNumber =[5 + 8];
 function addNumber(data){
    return data.sort();
 }
 console.log(addNumber(arrayNumber));

 //Write a function that takes in a string and returns the string reversed.
 let str = 'Hello World';

 function reverseStr(){
 
     let string_return =' ';
 
     let arrayStr = str.split(' , ');
 
     for(let i =0; i< arrayStr.length; i++){
 
         let rev_str = arrayStr.reverse();
 
         let string_return =rev_str.join(' ');
 
     }
 
  return string_return;
 
 }
 
 let rev=reverseStr(str);
 
 console.log(rev);
 reverseStr(str);
 //Write a function that takes in an array of objects representing people, where each object has properties for name, age, and gender, and returns an array of objects representing only the people who are over the age of 18.
 
 let people =[

    {

        name:'Dono',

        age:10,

        gender: 'Fimale'

    },

    {

        name: 'Touheda',

        age: 40,

        gender: 'Fimale'


    },

    {

        name: 'Sumaya',

    age: 25,

    gender: 'Fimale'

    },

];

function overEighteen(people){

    let over_eighteen =[];

    for(const property of people){

    if(property.age > 18)

    over_eighteen.push(property.age);


}

console.log(over_eighteen);

}

overEighteen(people);
   
//Write a function that takes in an array of numbers and returns a new array containing only the even numbers from the original array.

let arrayNum = [3, 4, 6, 7, 9, 10, 14, 16];
function evenNum(){
    let evenNum = [];
for(let i = 0; i < arrayNum.length; i++){
    if(arrayNum[i] %2 === 0)
    evenNum.push(arrayNum[i]);
}
console.log(evenNum);
}
evenNum(arrayNum);

//Write a function that takes in an array of strings and returns a new array containing only the strings that start with the letter "A".

let country = ['America', 'Canada', 'Armenia', 'Bolivia', 'India'];
function startsWithA(country){
    let startsWithA = [];
    for(let y = 0; y < country.length; y++){
        if(country[y].toUpperCase().startsWith('A')){
            startsWithA.push(country[y]);
        }
    }
    console.log(startsWithA);
}
startsWithA(country);

//Write a function that takes in an array of objects representing books, where each object has properties for title, author, and published, 
//and returns an array of strings representing the titles of all the books published in the year 2000 or later.

let book = [
    {
        title:'The Book of Lost Names',
        author: 'Kristin Harmel',
        published: 1983,
    },
    {
        title:'Rich Dad Poor Dad',
        author: 'Robert T.Kyosaki',
        published: 2019,
    },

    {   title: 'The Girl Who Survived',
        author: 'Ellie Midwood',
        published: 2015,

    }
];    
    function lastBooks(){
        let publishedAfterTwoThousant = [];
        for(let publisher of book){
            if(publisher.published > 2000)
            publishedAfterTwoThousant.push(publisher.title);
        }
        console.log(`The books after 2000 are  = ${publishedAfterTwoThousant}`);
    };
    lastBooks();




   //Write a function that takes in two numbers and returns the larger of the two.
    let numOne = [13, 19]
    

    function largestNumber(){
        let theLargestNumber = numOne[0];
        for(let i = 0; i< numOne.length; i++){
            if(numOne[i] > theLargestNumber){
                theLargestNumber = numOne[i]
            }
        };
        return theLargestNumber
    }
    console.log(`  the largest number of two numbers is = ${largestNumber(numOne)}`);

    //Write a function that takes in an array of numbers and returns the smallest number in the array.

    let arrNum = [ 3, 15, 18, 9, 1, 6];
    function smollestNumber(){
        let theSmollestNum = arrNum[0];
        for( let z = 0; z < arrNum.length; z++){
            if(arrNum[z] < theSmollestNum){
                theSmollestNum = arrNum[z]
            }
        };
        return theSmollestNum
    };
    console.log(` the smolest number in the array 'arrNum' is = ${smollestNumber(arrNum)}`);

    //Write a function that takes in an array of strings and returns the longest string in the array.

    let cars = ['Ford', 'Chevrolet', 'Jeep', 'Mercedes-Benz', 'Lamborghine'];

    function longestString(){
        let theLongestString = [];
        for(let length of cars){
            if(length > theLongestString)
                theLongestString = length; 
            
        }
        return theLongestString
    };
    console.log(`the longest string of array 'cars' is = ${longestString(cars)}`);

    //Write a function that takes in an array of objects representing students, where each object has properties for name and grade,
    //and returns an array of objects representing only the students who have a grade of "A".