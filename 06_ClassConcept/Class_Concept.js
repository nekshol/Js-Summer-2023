

//Create a class called Animal that has a name property and a speak method. 
//The speak method should log a message to the console saying "Hello, my name is {name}." 
//Create an instance of the Animal class and call the speak method.

class Animal{
constructor(name){
    this.name = name;
    
}
sayHello(){
    console.log(`Hello, my name is ${this.name}.`);
}

}
let Animal1 = new Animal('Leopard');
Animal1.sayHello();

//Create a class called Person that has name and age properties, and a greet method that logs a message to the console saying 
//"Hello, my name is {name} and I am {age} years old." Create an instance of the Person class and call the greet method.


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getInfo(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let Person1 = new Person('Saba', 24);
Person1.getInfo();


//Create a class called Car that has make, model, and year properties, and a start method that logs a message to the console saying 
//"The {make} {model} is starting." Create an instance of the Car class and call the start method.

class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo(){
        console.log(`The ${this.make} ${this.model} is starting.`);
    }
}

let Car1 = new Car('Toyota', 'Camry', 2022);
Car1.getInfo();


//Create a class called Rectangle that has width and height properties, and a getArea method that returns the area of the rectangle.
// Create an instance of the Rectangle class and call the getArea method.

class Rectangle{
    add(width, height){
 return width * height;
    }
   
    
}
let Rectangle1 = new Rectangle();
console.log(Rectangle1.add(10, 5));

//Create a class called Square that extends the Rectangle class and has a sideLength property. //
//Override the getArea method in the Square class to return the area of the square. //
//Create an instance of the Square class and call the getArea method.