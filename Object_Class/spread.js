
//Write a function that takes in two arrays of numbers and returns a new array containing all the elements of both arrays.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray = [...array1, ...array2];
console.log(newArray);


//Write a function that takes in an array of strings and a string to add to the beginning of the array, and returns a new array with the string added to the beginning.

let originalArray = [ 'banana', 'apple', 'cherry'];
let addArray = ['grapes'];
let newArray1 = [...addArray, ...originalArray];
console.log(newArray1);


//Write a function that takes in an object and a key-value pair to add to the object, and returns a new object with the key-value pair added.
 const orijinalObject = {name:'John', age:30}
  

 //Write a function that takes in an array of numbers and returns the largest number in the array.
   function findLargestNumber(array4){
let largestNumber = array4[0]
    for(let i= 1; i<= array4.length; i++ ){
        if(largestNumber < array4[i]){
            largestNumber = array4[i];
        }
    }
    return largestNumber;
   }
    let array4 =[ 23, 15, 60, 46, 12];
    let largestNumber =  findLargestNumber(array4);
    console.log(largestNumber);

    //Write a function that takes in an array of strings and returns a new array containing all the strings in alphabetical order.
    function stringInAlphabeticalOrder(string){
        return string.sort()
    }

let originalArray1 = ['cherry', 'banana ', 'grapes', 'peach', 'apple'];

console.log(stringInAlphabeticalOrder(originalArray1));


    
