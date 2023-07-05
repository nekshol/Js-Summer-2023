
//Build Object for Employees: An employee can be represented as an object with attributes such as name, age, salary, and job title.
//It can also have functions like work, take a break, and attend a meeting.
 
const employees = {
    name: 'Mariya',
    age: 36,
    salary: 15000,
    jobTitle: 'Accountant',
     work: function(){
     console.log();
     },
     takeBreak: function(){
        console.log();
     },
     attendMeeting: function(){
      console.log();
     }
}
 console.log(employees);
   //Build Object for  Bank accounts: A bank account can be represented as an object with attributes such as account number, balance, and account type. 
    //It can also have functions like deposit, withdraw, and transfer.


   const bankAccounts = {
        accountNumber: 156789,
        balance: 15000,
        accountType: 'saving',
        deposit: function(){
            console.log();
        },
        withdraw: function(){
            console.log();
        },
        transfer: function(){
            console.log();
        }
    };
    console.log(bankAccounts);
    //Build Object for  Dogs: A dog can be represented as an object with attributes such as breed, age, and color. 
    //It can also have functions like bark, wag tail, and fetch.
const dog = {
    breed: 'Buldog',
    age: 6,
    color: 'white',
    bark: function(){
        console.log();
    },
    wagTail: function(){
        console.log();
    },
    fetch: function(){
        console.log();
    }

 };
 console.log(dog);
 //Suppose you are building an e-commerce application and you want to create a new Product object with property name, price, manufacturer, category.
 const newProduct = {
    name: 'Couch',
    price: 150,
    manufacturer: 'Costco',
    category: 'Furniture',
    
};
console.log(newProduct);
//Now add a description property to the Product object you created.
newProduct.description = 'Good couch , well made, comftortable, and stylish';
console.log(newProduct);
//Suppose the price of the Product object you created earlier changes. Now the price increased by $10.
let newPrice = (newProduct.price += 10);
console.log(newProduct);
//Remove the description property from the Product object you created earlier.
console.log(delete newProduct.description);
console.log(newProduct);

//Suppose you are building a blog application and you want to display a list of all the blog posts. 
//You have an array of blog post objects, where each object has properties such as title, author, date, and content. 
//Find out if date field is empty on any object.

let blogPost = [
    {
    title: 'A day at school',
    author: 'Sabina',
    date: 12-15-2021,
    content: ' school activities'
},

 {
    title: 'My day after school',
    author: 'Martina',
    date: '',
    content: 'having fun with family'

},


 {
    title: 'Getting ready for bed',
    author: 'Anna',
    date: 9-16-2021,
    content: 'brushing teeth, saying good night'

},
]; 
console.log(blogPost);
let isKey_date = 'date' in blogPost;
console.log(`is 'date' present as of the keys = ${isKey_date}`);
