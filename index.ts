//return annotation
const fun = (a: number, b: number): number => {
    return a + b
}
console.log(fun(5, 6));

//void used for which does not return any values
const cat = (name: string): void => {
    console.log(name);
}
cat("kitty")

//Array
const marks: number[] = [1, 2, 3, 4, 5]
//or
const names: Array<string> = ["rahul"]

//multidimentionial Array
const mark: number[][] = [[1, 2], [3, 4, 5]]

//objet
const person: { name: string, age: number } = { name: "rahul", age: 25 }

// type alias
type Person1 = {
    name: string,
    age: number
}
const person1: Person1 = { name: "rahul", age: 25 }

//optional properties
type Person2 = {
    name: string,
    age: number,
    email?: string   //this one this optional
}
const person2: Person2 = { name: "rahul", age: 25 }

//readonly
type Person3 = {
    name: string,
    readonly age: number // now this one this immutable
}
const person3: Person3 = { name: "rahul", age: 25 }
// person3.age=30    here it is not possible because age is read only

// intersection Types //
//it is way of combining two types into a single type that includes all properties and methods of each consituent type
//it is denoted by & symbol
type Person4 = {
    name: string,
    age: number
}
type Job={
    id:number,
    title:string
}
type Employe=Person4&Job
const employe={name:"vishnu",age:20,id:1,title:"developer"}

// Unions
// unions are used to declare a typ e that can have one of several possible types. Unions are useful when 
// we want to allow a  varible or parameter to accept multiple types.
//defining a union type uses the pipe symbol |
const chakka:number|string=25 //here chakka can be a number or a string
const items:(number|string)[]=["a","b"] //here it can be array of number or string

//Literal types
//literal type is use to create a fixed value for a varible it cannot support any other value


//tuple
let mytuple:[string,number]=["rahul",25]

//Enums
//Enums is a way to define a set of named constants.enums allow you to define a colletion 
//of realted value that can be used interchangeably in you code

enum Weatherconditons{
    sunny="sunny",
cloudy="cloudy",
rainy="rainy"
}
const currentWeather=Weatherconditons.sunny

// class Properties Annotations
class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
}
const person6=new Person("amar",20)

//interface
//interface is a way  to define a contract for the shape of an object. it specifes the properties and therir types 
// that an object must have . interfaces are a powerful tool for enforcing a certain structure in your code .

//interface of object ex
interface Person7  {
    name: string,
    age: number
}

//while intrefaces are commonly used to define the structure of objects, they are not limited to just objects. interfaces in typeScript
// can also be used to describe the shape of function and classes.
//class
interface Vehicle{
    start():void
    stop():void
}

class Car implements Vehicle{
    start(){
        console.log("car is Started");
    }
    stop(){
        console.log("car is stoped");
    }
}

//interface in function
interface MathOperation{
    (x:number,y:number):number
} 
const sum:MathOperation=(a,b)=>{
   return a+b
}
//...............................................................
//declaration merging (interface)
interface Car{
    brand:string
    start():void
}
//merging
interface Car{
    model:string
    stop():void
}
//eg
const myCar:Car={
    brand:"bmq",
    model:"m3",
    start(){
        console.log("car is Started");
    },
    stop(){
        console.log("car is stoped");
    }    
}
//...............................................................

//Generics
//in Typescript , generics allow you to create reusable componets that cna work with a variety of types. Generics make it 
//possible for you to define function, classes, and interfaces that can work with different data types without having to duplicate code.
//example of generic function
function uniqueDatatypes<T>(item:T,value:T):[T,T]{
    return [item,value]
}
const res=uniqueDatatypes<number  >(10,20)

// Type Narrowing
//Type narrowing is the process of refining a variable's type within a conditonal block of code. this allows you to write 
//more precise and type-safe code

//typeScrpt provide several mechanisma for narrowng types
//1. type Guards
//2.The instance of operator
//3.intersection types

//Type Guards
type MyType=string | number

function exampleFun(value:MyType):void{
    if(typeof value ==="string"){
        console.log(value.toUpperCase())
    }else{
        console.log(value.toFixed(2));
        
    }
}
