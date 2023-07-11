

//Write a function that takes an array of objects representing books and returns an array containing the titles of those books.

let books = [
    {
    Title: 'The power of letting go',
    author: 'Catherine Miller'
    },
    {
     Title: 'Critical Thinkers',
     author: 'albert Rutherford'
    },
];

function bookTitle(books){
    let titleArray = [];
    for ( let book of books){
        titleArray.push(book.Title);
    }

    console.log(titleArray);
}

bookTitle(books);

//Write a function that takes an array of objects representing products and returns an array containing only the products that are currently in stock.


let products = [
    {
     product1: 'Kids shoes',
     stock: 15
    },
    {
        product2: 'Laptops',
        stock: 35
    },
    {
        product3: 'Iphone14',
        stock: 'Currently unavailable'
    },
];

function inStockProducts(products){
    let stockArray = [];
    for(let product of products){
        if(product.stock > 0){
                stockArray.push(product);
        }
        
    }
    console.log(stockArray);
}


inStockProducts(products);

//Write a function that takes an array of objects representing users and returns the first user whose email address matches a given email.

let users = [
    { 
        name: 'Salima',
        email: 'salima@gmail.com'
    },
    {
        name: 'Sitora',
        email: 'sitora23@gmail.com'
    },
    {
        name: 'Zahro',
        email: '0098zahro@gmail.com'
    },
];

function userEmail(users, email){
    let userEmail = '';
    for(let user of users){
        if(user.email === email){
            userEmail = user.name;
            break;
        }
        
        
    }
};
let email = '0098zahro@gmail.com';
let user = userEmail(users, email);
console.log(email);

userEmail(users,email);

//Write a function that takes an array of objects representing tasks and returns true if all the tasks are marked as complete, otherwise returns false.


function objectTasks(tasks) {
 
    let isComplete = true;
  
    for (const task of tasks) {
    
      if (task.completed) {
        isComplete = false;
      }
    }
   return isComplete;
  }
  const tasks = [
    { title: 'Task 1', completed: true },
    { title: 'Task 2', completed: true },
    { title: 'Task 3', completed: false },
  ];
  const isComplete = objectTasks(tasks);
  console.log(tasks); 
  //
  //Write a function that takes an array of objects representing purchases and returns the total amount spent on those purchases.

  function totalSpentOnPurchases(purchases) {
  
    let totalSpent = 0;
  
   
    for (const purchase of purchases) {
      
      totalSpent += purchase.amount;
    }
  
  
    return totalSpent;
  }
  const purchases = [
    {  amount: 400},
    {  amount: 60 },
    { amount: 18 },
  ];
  
  const totalSpent = (` the total amount spent on a purchase = ${totalSpentOnPurchases(purchases)}`);
  console.log(totalSpent); 
  

  //. Write a function that takes an array of numbers as input
 //and returns the sum of all the numbers in the array. 

 function arrayOfnumbers(array) {
  
    let sum = 0;
  
   
    for (const number of array) {
     
      sum += number;
    }
  
   
    return sum;
  }
  const array = [9, 20, 6, 4, 34, 78, 32];
  
  const sum = arrayOfnumbers(array);
  console.log(sum);

  // Write a function that takes an array of strings as input 
//and returns a new array with all the strings converted to uppercase.

function uppercaseStringOfArray(array1) {

 let uppercaseStringOfArray = [];

 for (const string of array1) {
 
   const uppercaseString = string.toUpperCase();

   uppercaseStringOfArray.push(uppercaseString);
 }

 return uppercaseStringOfArray;
}

let array1 = ['FunCTion', 'Technosoft', 'dataTyPe', 'objects'];


const uppercaseArray = uppercaseStringOfArray(array1);
console.log(uppercaseArray);


// Write a function that takes an array of numbers as input 
//and returns a new array with all the even numbers from the original array. 
function evenNumbersArray(array2) {
 
  const evenNumbersArray = [];

  for (const number of array2) {
   
    if (number % 2 === 0) {
     
      evenNumbersArray.push(number);
    }
  }

  return evenNumbersArray;
}
const array2 = [0, 2, 9, 20, 21, 34, 56, 71, 77, 100];

const evenNumbers = evenNumbersArray(array2);
console.log(evenNumbers); 

// Write a function that takes an array of strings as input and returns 
//a new array with all the strings that have a length of 4 or less.

function arrayOfLenghthOfStrings(array0) {
 
 const arrayOfLenghthOfStrings = [];

 
 for (const string of array0) {
  
   if (string.length <= 4) {
  
     arrayOfLenghthOfStrings.push(string);
   }
 }

 return arrayOfLenghthOfStrings;
}
const array0 = ['may', 'name', 'sister', 'Favorite', 'love'];

const shortStrings = arrayOfLenghthOfStrings(array0);
console.log(shortStrings); 




  
  