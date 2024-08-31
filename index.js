"use strict";
//return annotation
const fun = (a, b) => {
    return a + b;
};
console.log(fun(5, 6));
//void used for which does not return any values
const cat = (name) => {
    console.log(name);
};
cat("kitty");
//Array
const marks = [1, 2, 3, 4, 5];
//or
const names = ["rahul"];
//multidimentionial Array
const mark = [[1, 2], [3, 4, 5]];
//objet
const person = { name: "rahul", age: 25 };
const person1 = { name: "rahul", age: 25 };
const person2 = { name: "rahul", age: 25 };
const person3 = { name: "rahul", age: 25 };
const employe = { name: "vishnu", age: 20, id: 1, title: "developer" };
// Unions
// unions are used to declare a typ e that can have one of several possible types. Unions are useful when 
// we want to allow a  varible or parameter to accept multiple types.
//defining a union type uses the pipe symbol |
const chakka = 25; //here chakka can be a number or a string
const items = ["a", "b"]; //here it can be array of number or string
//Literal types
//literal type is use to create a fixed value for a varible it cannot support any other value
//tuple
let mytuple = ["rahul", 25];
//Enums
//Enums is a way to define a set of named constants.enums allow you to define a colletion 
//of realted value that can be used interchangeably in you code
var Weatherconditons;
(function (Weatherconditons) {
    Weatherconditons["sunny"] = "sunny";
    Weatherconditons["cloudy"] = "cloudy";
    Weatherconditons["rainy"] = "rainy";
})(Weatherconditons || (Weatherconditons = {}));
const currentWeather = Weatherconditons.sunny;
// class Properties Annotations
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person6 = new Person("amar", 20);
class Car {
    start() {
        console.log("car is Started");
    }
    stop() {
        console.log("car is stoped");
    }
}
const sum = (a, b) => {
    return a + b;
};
//eg
const myCar = {
    brand: "bmq",
    model: "m3",
    start() {
        console.log("car is Started");
    },
    stop() {
        console.log("car is stoped");
    }
};
//...............................................................
//Generics
//in Typescript , generics allow you to create reusable componets that cna work with a variety of types. Generics make it 
//possible for you to define function, classes, and interfaces that can work with different data types without having to duplicate code.
//example of generic function
function uniqueDatatypes(item, value) {
    return [item, value];
}
const res = uniqueDatatypes(10, 20);
function exampleFun(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
