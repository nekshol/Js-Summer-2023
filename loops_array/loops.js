//Create an array of products with at least 5 products. Each product should have the following properties:

//Name

//Price

//Quantity
 
let products = [
    {
      Name: 'Product A',
      price: 10,
      quantity: 5,
    },

    {
      Name: 'Product B',
      price: 20,
      quantity: 3,
    },

    {
        Name: 'Product C',
        price: 15,
        quantity: 7,
    },

    {
        Name: 'Product D',
        price: 25,
        quantity: 2,
    },

    {
       Name: 'Product E',
       price: 30,
       quantity: 4,
    },
  ];
  //Loop through the array using a for loop and print out the name and price of each product.


  for (let i= 0; i<=products.length-1; i++)
{
console.log(`Products Name : ${products[i].Name} Products Price : ${products[i].price}` );


}
  // Use a while loop to find the product with the lowest price. Print out the name and price of the product.

let lowestPrice = products[0];
let i = 1;
while( i < products.length) {
    let surrentProducts =  products[i];
   if(surrentProducts.price < lowestPrice.price) {
    lowestPrice = surrentProducts;
   }
   i++;
};
console.log(`product with the lowest price; ${lowestPrice.Name}, Price; ${lowestPrice.price}`);

// Use a for of loop to calculate the total value of all products in the array.

let valueOfAllProducts = products[0];

 



//Create a program that prints the numbers from 1 to 100, but replaces multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".
for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0  && i % 5 === 0 ) {
        console.log('Fizz');
    } else if(i % 3 === 0 ) {
        console.log('Buzz');
    } else if( i % 5 === 0  ){
        console.log('FizzBuzz');
    } else {
        console.log(i);
    }

};